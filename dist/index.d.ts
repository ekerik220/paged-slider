import React, { FC } from 'react';

declare type Props = {
    width?: string;
    itemGap?: string;
    showArrows?: boolean;
    enableDrag?: boolean;
    scrollLeftButton?: React.ReactElement;
    scrollRightButton?: React.ReactElement;
    returnToStartButton?: React.ReactElement;
};
declare const PagedScroller: FC<Props>;

export { PagedScroller };
