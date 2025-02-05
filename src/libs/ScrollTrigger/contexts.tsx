import React, { useContext } from "react";

export interface ScrollContainerContext {
    scrollStartPosition?: number;
    scrollEndPosition?: number;
    rawElement?: HTMLDivElement;
    debug: boolean;
    getScrollHeight: () => number,
    scrollTo: (y: number) => void;
    scrollToBottom: () => void;
}

export const ScrollContext = React.createContext<ScrollContainerContext>({
    getScrollHeight: () => 0,
    scrollTo: y => { },
    scrollToBottom: () => { },
    debug: false,
});

export const useScrollContext = () => useContext(ScrollContext);


export interface ScrollState {
    scrollTop: number;  
    scrollHeight: number;
    scrollDirection: "down" | "up";
}

export const ScrollStateContext = React.createContext<ScrollState>({
    scrollTop: 0,
    scrollHeight: 0,
    scrollDirection: "down",
});

export const useScrollState = () => useContext(ScrollStateContext);