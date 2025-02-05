import { useScrollContext } from "./contexts";
import { Marker } from "./debug";
import type { TransitionStatus } from "react-transition-group";
import { Transition } from "react-transition-group";
import type { CSSProperties, ElementType, ReactNode } from "react";
import React, { useEffect, useRef, useState } from "react";
import { ScrollInfo, useScrollTrigger } from "./useScrollTrigger";

const randomColor = () => "#" + Math.floor(Math.random() * 0xFFFFFF).toString(16);

interface ScrollTriggerProps {
    children: ((scrollInfo: ScrollInfo & { triggered: boolean }) => ReactNode);
    delay?: number;
    once?: boolean;
    forceIn?: boolean;
    scrollStartOffset?: number | string;
    scrollEndOffset?: number | string;
    className?: string;
    style?: CSSProperties;
    tag?: ElementType;
}

export const ScrollTrigger = (props: ScrollTriggerProps) => {
    const [me, setMe] = useState<HTMLDivElement | null>(null);
    const context = useScrollContext();
    const trigger = useScrollTrigger({
        target: me ?? undefined,
        scrollStartOffset: props.scrollStartOffset,
        scrollEndOffset: props.scrollEndOffset,
    });
    const [mount, setMount] = useState(false);
    const color = useRef(randomColor());
    const Tag = props.tag ?? "div"

    const info = {
        ...trigger,
        triggered: mount
    }

    useEffect(() => {
        if (!trigger.isOverlap && props.once) {
            return;
        }
        setMount(trigger.isOverlap);
    }, [trigger]);

    useEffect(() => {
        if (props.forceIn) {
            setMount(true);
        }
    }, [props.forceIn]);

    return (
        <Tag
            style={context.debug ?
                ({
                    border: `3px solid ${color.current}`,
                    ...props.style
                }) :
                ({
                    ...props.style
                })}
            className={props.className}
            ref={(raw: any) => {
                if (raw) {
                    setMe(raw);
                }
            }}
        >
            {props.children(info)}
            {
                context.debug && <Marker
                    color={color.current}
                    scrollEndOffset={props.scrollEndOffset}
                    scrollStartOffset={props.scrollStartOffset}
                    target={me ?? undefined}
                    container={context.rawElement}
                />
            }
        </Tag>
    );
};
