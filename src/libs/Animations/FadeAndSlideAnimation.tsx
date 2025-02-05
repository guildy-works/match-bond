import { CSSProperties, ElementType, ReactNode, useRef, useState } from "react";
import { Transition, TransitionStatus } from "react-transition-group";
import clsx from "clsx";

export interface TransitionProps {
    children?: ReactNode | ((status: TransitionStatus) => ReactNode);
    delay?:  number | { appear?: number | undefined; enter?: number | undefined; exit?: number | undefined };
    duration?: number;
    in?: boolean;
    className?: string;
    style?: CSSProperties;
}

interface FadeAndSlideAnimationProps extends TransitionProps {
    transform?: {
        translate?: {
            x?: string;
            y?: string;
        }
        rotate?: string;
        scale?: number;
        // eslint-disable-next-line @typescript-eslint/ban-types
        transformOrigin?: "bottom" | "center" | "left" | "right" | "top" | (string & {});
        opacity?: number;
    },
    transformTo?: {
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
    tag?: ElementType;
}

export const FadeAndSlideAnimation = (props: FadeAndSlideAnimationProps) => {
    const { transform, transformTo } = props;
    const timeout = props.delay ?? 0;
    const nodeRef = useRef(null);
    const buildTransform = (transform: FadeAndSlideAnimationProps["transform"], scale: number) =>
        `translate(${transform?.translate?.x ?? "0"},${transform?.translate?.y ?? "0"}) rotate(${transform?.rotate ?? "0"}) scale(${transform?.scale ?? scale})`

    const Tag = props.tag ?? "div";

    return <Transition
        in={props.in} timeout={timeout} nodeRef={nodeRef}
    >
        {state => {

            return <Tag
                className={clsx(props.className)}
                style={{
                    ...{
                        transformOrigin: transform?.transformOrigin,
                        transform: buildTransform(transform, 0.8),
                        opacity: transform?.opacity ?? 0,
                        transition: `all ${parse(props.delay)} ${props.duration ?? 1000}ms cubic-bezier(0.18, 0.66, 0.08, 0.97)`
                    },
                    ...(state === "entered"
                        ? {
                            transform: buildTransform(transformTo, 1),
                            opacity: transformTo?.opacity ?? 1,
                        }
                        : {}),
                    ...props.style,
                }}
            >
                {props.children as ReactNode}
            </Tag>
        }}
    </Transition>;
};

const parse = (delay?: number | {
    appear?: number | undefined;
    enter?: number | undefined;
    exit?: number | undefined
}) => {
    let del = 0
    if (typeof delay === "object") {
        del = delay?.appear ?? 0;
    }

    if (!del) {
        return ""
    }

    return `${del}ms`
};