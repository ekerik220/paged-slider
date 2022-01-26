import React, { Children, FC, useState } from "react";
import { usePagedScroller } from "./usePagedScroller";
import { m, LazyMotion } from "framer-motion";
import { CellWrapper } from "src/lib/components/cellWrapper/cellWrapper";
import { Button } from "src/lib/components/button/button";
import { isTouchDevice } from "src/lib/utils/isTouchDevice";
import { styled } from "@stitches/react";

type Props = {
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

export const PagedScroller: FC<Props> = ({
  width = "100%",
  itemGap = 0,
  showArrows = !isTouchDevice(),
  enableDrag = isTouchDevice(),
  dragElastic = true,
  scrollLeftButton,
  scrollRightButton,
  returnToStartButton,
  children,
}) => {
  const {
    x,
    visibleContainerRef,
    visibleContainerWidth,
    itemsContainerRef,
    itemsContainerWidth,
    atStart,
    atEnd,
    updatePositionList,
    onLeftButtonClick,
    onRightButtonClick,
    onReturnToStartButtonClick,
  } = usePagedScroller();

  const [dragging, setDragging] = useState(false);

  const loadLazyMotionFeatures = () =>
    import("src/lib/utils/lazyMotion").then((res) => res.default);

  return (
    <VisibleContainer
      ref={visibleContainerRef}
      css={{ width, maxWidth: itemsContainerWidth }}
    >
      <>
        <LazyMotion features={loadLazyMotionFeatures}>
          <ItemsContainer
            ref={itemsContainerRef}
            css={{ columnGap: itemGap }}
            drag={enableDrag ? "x" : false}
            dragConstraints={{
              left: -itemsContainerWidth + visibleContainerWidth,
              right: 0,
            }}
            _dragX={x}
            style={{ x }}
            dragElastic={!dragElastic ? false : undefined}
            onDragStart={() => setDragging(true)}
            onDragEnd={() => setDragging(false)}
          >
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
          </ItemsContainer>
        </LazyMotion>
      </>
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
    </VisibleContainer>
  );
};

const VisibleContainer = styled("div", {
  position: "relative",
  overflow: "hidden",
});

const ItemsContainer = styled(m.div, {
  display: "inline-flex",
});
