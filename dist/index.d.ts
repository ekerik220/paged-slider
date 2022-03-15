import React, { FC } from 'react';

declare type Props = {
    className?: string;
    width?: string;
    itemGap?: string;
    showArrows?: boolean;
    enableDrag?: boolean;
    scrollLeftButton?: React.ReactElement;
    scrollRightButton?: React.ReactElement;
    returnToStartButton?: React.ReactElement;
    scrollContainerRef?: React.RefObject<HTMLDivElement>;
};
declare const PagedScroller: FC<Props>;

export { PagedScroller };
