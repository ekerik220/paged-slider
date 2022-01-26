import React, { FC } from "react";
declare type Props = {
    /** Width of the container as a string. Defaults to 100% (however, the max width is the width of all the items in the scroller). */
    width?: string;
    /** Gap between items in px */
    itemGap?: number;
    /** Shows the paged scrolling arrow buttons. Defaults to true on non-touch devices. */
    showArrows?: boolean;
    /** Enables scrolling with drag gestures. Defaults to true on touch devices. */
    enableDrag?: boolean;
    /** Enables scrolling past the edges elastically.  */
    dragElastic?: boolean;
    /** Provide a custom button for scrolling left  */
    scrollLeftButton?: React.ReactElement;
    /** Provide a custom button for scrolling right  */
    scrollRightButton?: React.ReactElement;
    /** Provide a custom button for scrolling back to the start  */
    returnToStartButton?: React.ReactElement;
};
export declare const PagedScroller: FC<Props>;
export {};
