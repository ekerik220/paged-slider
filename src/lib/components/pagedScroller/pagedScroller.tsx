import React, { Children, CSSProperties, FC, useRef } from "react";
import { usePagedScroller } from "../../hooks/usePagedScroller";
import { CellWrapper } from "../cellWrapper/cellWrapper";
import { Button } from "../button/button";
import { isTouchDevice } from "../../utils/isTouchDevice";
import styles from "./pagedScroller.module.scss";

type Props = {
  /** Gets passed along to component's className */
  className?: string;
  /** Width of the container as a string. Defaults to 100% (however, the max width is the width of all the items in the scroller). */
  width?: string;
  /** Gap between items in px */
  itemGap?: string;
  /** Shows the paged scrolling arrow buttons. Defaults to true on non-touch devices. */
  showArrows?: boolean;
  /** Enables scrolling with drag gestures. Defaults to true on touch devices. */
  enableDrag?: boolean;
  /** Provide a custom button for scrolling left  */
  scrollLeftButton?: React.ReactElement;
  /** Provide a custom button for scrolling right  */
  scrollRightButton?: React.ReactElement;
  /** Provide a custom button for scrolling back to the start  */
  returnToStartButton?: React.ReactElement;
  /** Provide a ref to the scroll component (to control the scroll position, for example) */
  scrollContainerRef?: React.RefObject<HTMLDivElement>;
};

export const PagedScroller: FC<Props> = ({
  className,
  width = "100%",
  itemGap = 0,
  showArrows = !isTouchDevice(),
  enableDrag = isTouchDevice(),
  scrollLeftButton,
  scrollRightButton,
  returnToStartButton,
  scrollContainerRef,
  children,
}) => {
  const visibleContainerRef = useRef<HTMLDivElement>(null);
  const itemsContainerRef = useRef<HTMLDivElement>(null);

  const {
    visibleContainerWidth,
    itemsContainerWidth,
    atStart,
    atEnd,
    dragging,
    updatePositionList,
    onLeftButtonClick,
    onRightButtonClick,
    onReturnToStartButtonClick,
  } = usePagedScroller(
    scrollContainerRef ?? visibleContainerRef,
    itemsContainerRef,
    enableDrag
  );

  return (
    <div
      className={`${styles.wrapper} ${className}`}
      style={
        {
          "--width": width,
          "--itemsContainerWidth": `${itemsContainerWidth}px`,
          "--itemGap": itemGap,
          "--overflow": enableDrag ? "auto" : "hidden",
        } as CSSProperties
      }
    >
      <div
        ref={scrollContainerRef ?? visibleContainerRef}
        className={styles.visibleContainer}
      >
        <div ref={itemsContainerRef} className={styles.itemsContainer}>
          {Children.map(children, (child, index) => (
            <CellWrapper
              preventTaps={dragging}
              updatePositionList={(width, height, x, y) =>
                updatePositionList(index, width, height, x, y)
              }
            >
              {child}
            </CellWrapper>
          ))}
        </div>
      </div>
      {showArrows && visibleContainerWidth !== itemsContainerWidth && (
        <>
          {!atStart && (
            <Button
              type="left"
              override={scrollLeftButton}
              onClick={onLeftButtonClick}
            />
          )}
          {!atEnd ? (
            <Button
              type="right"
              override={scrollRightButton}
              onClick={onRightButtonClick}
            />
          ) : (
            <Button
              type="returnToStart"
              override={returnToStartButton}
              onClick={onReturnToStartButtonClick}
            />
          )}
        </>
      )}
    </div>
  );
};
