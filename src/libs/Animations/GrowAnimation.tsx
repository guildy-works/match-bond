
import React, { ReactNode, useRef } from "react";
import { Transition, TransitionStatus } from "react-transition-group";
import { TransitionProps } from "./FadeAndSlideAnimation";

interface GrowAnimationProps extends TransitionProps {
    transform?: {
        translate?: {
            x?: string;
            y?: string;
        }
        rotate?: string;
        scale?: number;
        // eslint-disable-next-line @typescript-eslint/ban-types
        transformOrigin?: "bottom" | "center" | "left" | "right" | "top" | (string & {});
    }
}

export const TransformAnimation = (props: GrowAnimationProps) => {
    const { transform } = props;
    const timeout = props.delay ?? 0;
    const nodeRef = useRef(null);

    return <Transition
        in={props.in} timeout={timeout} nodeRef={nodeRef}
    >
        {state =>
            <div
                className={props.className}
                style={{
                    ...({
                        transformOrigin: transform?.transformOrigin,
                        transform: `translate(${transform?.translate?.x ?? "-10px"},${transform?.translate?.y ?? "20px"}) rotate(${transform?.rotate ?? "-3deg"}) scale(${transform?.scale ?? 0.94})`,
                        opacity: 0,
                        transition: `all ${parse(props.delay) ?? 1200}ms cubic-bezier(0.24, 0.26, 0, 0.64)`
                    }),
                    ...state === "entered" ? ({
                        transform: "translate(0px,0px) rotate(0) scale(1)",
                        opacity: 1,
                    }) : undefined,
                    ...props.style,
                }}
            >
                {props.children as ReactNode}
            </div>}
    </Transition>;
};

const parse = (delay?: number | {
    appear?: number | undefined;
    enter?: number | undefined;
    exit?: number | undefined
}) => {
    if (typeof delay === "object") {
        return delay?.appear;
    }

    return undefined;
};
