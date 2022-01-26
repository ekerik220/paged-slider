/// <reference types="react" />
export declare const usePagedScroller: () => {
    x: import("framer-motion").MotionValue<number>;
    itemsContainerRef: import("react").RefObject<HTMLDivElement>;
    itemsContainerWidth: number;
    visibleContainerRef: import("react").RefObject<HTMLDivElement>;
    visibleContainerWidth: number;
    atStart: boolean;
    atEnd: boolean;
    updatePositionList: (index: number, width: number, height: number, x: number, y: number) => void;
    onLeftButtonClick: () => void;
    onRightButtonClick: () => void;
    onReturnToStartButtonClick: () => void;
};
