import type { CSSProperties, ReactNode } from "react";
import React from "react";
import Image from 'next-export-optimize-images/picture';
import { StaticImageData } from 'next/image';
import { ScrollTrigger } from "../ScrollTrigger/ScrollTrigger";


export const lerp = (x: number, y: number, t: number) => {
    return (1 - t) * x + t * y;
};

interface TransitionImageProps {
    src: StaticImageData;
    alt: string;
    parallaxSlideLength?: number;
    scale?: {
        from?: number;
        to?: number;
    }
    style?: CSSProperties;
    className?: string;
    forceIn?: boolean;
    imgClassName?: string;
}

export const TransitionImage2 = (props: TransitionImageProps) => {
    const { scale } = props;
    const range = Math.abs(props.parallaxSlideLength ?? 50);
    const half = range * 0.5;
    const getPosition = (t: number) => lerp(-half, half, t);
    const getScale = (t: number) => lerp(
        scale?.from ?? 0.97,
        scale?.to ?? 1,
        t
    );

    return (
        <ScrollTrigger
            once
            forceIn={props.forceIn}
            scrollEndOffset={"100% + 40vh"}
            scrollStartOffset="-20vh"
            style={props.style}
            className={props.className}
        >
            {
                ( info) => <>
                    <div style={{
                        transition: "all 3s cubic-bezier(0.51, 0.15, 0.25, 0.97)",
                        opacity:info.triggered? 1 : 0,
                        position: "relative",
                        width: "100%",
                        height: "100%",
                        transform: info.triggered ? "translateY(0)" : "translateY(30px)",
                    }}>
                        <div style={{
                            height: `calc(100% + ${range}px)`,
                            width: "100%",
                            transition: "all 1.5s cubic-bezier(0.13, 0.59, 0.01, 0.98)",
                            transform: info.triggered ? `translateY(${getPosition(info.scrollProgress)}px) scale(${getScale(info.scrollProgress)})` : "",
                        }}>
                            <Image
                                src={props.src}
                                alt={props.alt}
                                className={props.imgClassName}
                                style={{
                                    height: "100%",
                                    width: "100%",
                                    objectFit: "cover",
                                    transition: "all 2.4s cubic-bezier(0.51, 0.15, 0.25, 0.97)",
                                    transform:info.triggered ? "scale(1.3)" : "scale(1.5)",
                                }}
                            />
                        </div>
                    </div>
                </>
            }
        </ScrollTrigger>
    );
};

export interface TransitionStaticImageProps {
    children: (style: CSSProperties) => ReactNode;
    parallaxSlideLength?: number;
    className?: string;
    style?: CSSProperties;
}

export const TransitionStaticImage = (props: TransitionStaticImageProps) => {
    const range = Math.abs(props.parallaxSlideLength ?? 50);
    const half = range * 0.5;
    const getPosition = (t: number) => lerp(-half, half, t);
    const getScale = (t: number) => lerp(0.97, 1, t);

    return (
        <ScrollTrigger
            once
            scrollEndOffset={"100% + 40vh"}
            scrollStartOffset="-20vh"
            style={{ ...props.style, height: "100%" }}
            className={props.className}
        >
            {
                (info) => <>
                    <div style={{
                        transition: "all 3s cubic-bezier(0.51, 0.15, 0.25, 0.97)",
                        opacity: info.triggered ? 1 : 0,
                        position: "relative",
                        overflow: "hidden",
                        width: "100%",
                        height: "100%",
                        transform: info.triggered ? "translateY(0)" : "translateY(30px)",
                    }}>
                        <div style={{
                            height: `calc(100% + ${range}px)`,
                            width: "100%",
                            transition: "all 1.5s cubic-bezier(0.13, 0.59, 0.01, 0.98)",
                            transform: info.triggered ? `translateY(${getPosition(info.scrollProgress)}px) scale(${getScale(info.scrollProgress)})` : "",
                        }}>
                            {props.children({
                                height: "100%",
                                width: "100%",
                                objectFit: "cover",
                                transition: "all 2.4s cubic-bezier(0.51, 0.15, 0.25, 0.97)",
                                transform: info.triggered  ? "scale(1.3)" : "scale(1.5)",
                            })}
                        </div>
                    </div>
                </>
            }
        </ScrollTrigger>
    );
};
