/// <reference types="react" />
export declare const usePagedScroller: (enableDrag: boolean) => {
    itemsContainerRef: import("react").RefObject<HTMLDivElement>;
    itemsContainerWidth: number;
    visibleContainerRef: import("react").RefObject<HTMLDivElement>;
    visibleContainerWidth: number;
    atStart: boolean;
    atEnd: boolean;
    dragging: boolean;
    updatePositionList: (index: number, width: number, height: number, x: number, y: number) => void;
    onLeftButtonClick: () => void;
    onRightButtonClick: () => void;
    onReturnToStartButtonClick: () => void;
};
