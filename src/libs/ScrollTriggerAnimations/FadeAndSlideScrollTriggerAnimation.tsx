import React, { CSSProperties, ElementType, ReactNode } from "react";
import { ScrollTrigger } from "../ScrollTrigger/ScrollTrigger";
import { FadeAndSlideAnimation } from "../Animations/FadeAndSlideAnimation";

type Transform = {
    translate?: {
        x?: string;
        y?: string;
    }
    rotate?: string;
    scale?: number;
    // eslint-disable-next-line @typescript-eslint/ban-types
    transformOrigin?: "bottom" | "center" | "left" | "right" | "top" | (string & {});
    opacity?: number;
}

interface FadeAndSlideScrollTriggerAnimationProps {
    children: ReactNode;
    delay?: number;
    forceIn?: boolean;
    transform?: Transform
    transformTo?: Transform
    style?: CSSProperties;
    className?: string;
    innerClassName?: string;
    innerStyle?: CSSProperties;
    tag?: ElementType;
}

export const FadeAndSlideScrollTriggerAnimation = ({ tag, children, delay, forceIn, transform, style, className, innerClassName, innerStyle, transformTo }: FadeAndSlideScrollTriggerAnimationProps) => {
    return (
        <ScrollTrigger
            forceIn={forceIn}
            delay={delay}
            once
            style={style}
            className={className}
        >
            {state =>
                <FadeAndSlideAnimation
                    tag={tag}
                    in={state.triggered}
                    delay={delay}
                    transform={transform}
                    transformTo={transformTo}
                    style={innerStyle}
                    className={innerClassName}
                >
                    {children}
                </FadeAndSlideAnimation>
            }
        </ScrollTrigger>
    );
};