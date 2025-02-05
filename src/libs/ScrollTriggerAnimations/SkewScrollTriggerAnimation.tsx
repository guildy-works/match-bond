import React, { CSSProperties, ElementType, ReactNode } from "react";
import { ScrollTrigger } from "../ScrollTrigger/ScrollTrigger";
import { SkewAnimation } from "../Animations/SkewAnimation";

interface FadeAndSlideScrollTriggerAnimationProps {
    children: ReactNode;
    delay?: number;
    forceIn?: boolean;
    bgcolor?: string;
    style?: CSSProperties;
    className?: string;
    innerClassName?: string;
    tag?: ElementType,
    skewPanelClass?: string;
}

export const SkewScrollTriggerAnimation = ({
    tag = "div",
    children, delay, forceIn, bgcolor, style, className, innerClassName ,skewPanelClass}: FadeAndSlideScrollTriggerAnimationProps) => {
    return <ScrollTrigger
        forceIn={forceIn}
        once
        delay={delay}
        style={style}
        className={className}
    >
        {
            state => <SkewAnimation
                bgcolor={bgcolor}
                in={state.triggered}
                style={style}
                className={innerClassName}
                skewPanelClass={skewPanelClass}
                tag={tag}
            >
                {children}
            </SkewAnimation>
        }
    </ScrollTrigger>;
};
