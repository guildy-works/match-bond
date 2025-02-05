
import clsx from "clsx";
import React, { ElementType, ReactNode, useEffect, useRef, useState } from "react";
import { Transition, TransitionStatus } from "react-transition-group";
import { TransitionProps } from "./FadeAndSlideAnimation";

interface SkewAnimationProp extends TransitionProps {
    bgcolor?: string;
    speed?: number;
    skewPanelClass?: string;
    tag?: ElementType;
}

export const SkewAnimation = (props: SkewAnimationProp) => {
    const [el, setEl] = useState<HTMLElement | null>(null);
    const [time, setTime] = useState(0);

    const Tag = props.tag ?? "div";
    const nodeRef = useRef(null);
    useEffect(() => {
        const width = el?.getBoundingClientRect().width;
        if (width) {
            // width / 100px
            const w = width / 100;
            const t = Math.floor(300 * w * (props.speed ?? 1));
            if (t !== time) {
                setTime(t);
            }
        }
    }, [el, time, props.speed]);

    const timeout = props.delay ?? 0;

    return <Transition in={props.in} timeout={timeout} nodeRef={nodeRef}>
        {
            state => <Tag
                style={{
                    ...props.style,
                    position: "relative",
                    width: "fit-content",
                }}
                className={props.className}
                ref={(el: any) => {
                    if (el) {
                        setEl(el as any);
                    }
                }}
            >
                <span
                    className={clsx("bg-white absolute inset-0", props.skewPanelClass)}
                    style={{
                        transition: `transform ${time}ms cubic-bezier(0.4, 0.41, 0.1, 0.65)`,
                        position: "absolute",
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        transformOrigin: "right",
                        background: props.bgcolor,
                        transform: state === "entered" ? "scaleX(0) skewX(-10deg)" : "scaleX(1.25) translateX(12%) skewX(-30deg)",
                    }}
                />
                {props.children as any}
            </Tag>
        }
    </Transition >;
};
