import { Children, FC } from "react";
import { CellWrapper } from "../cellWrapper/cellWrapper";
import styles from "./pagedScroller.module.scss";
import { usePagedScroller } from "./usePagedScroller";
import { animated } from "@react-spring/web";

type Props = {};

export const PagedScroller: FC<Props> = ({ children }) => {
  const {
    // bind,
    itemsContainerOffset,
    visibleContainerRef,
    itemsContainerRef,
    updatePositionList,
    onLeftButtonClick,
    onRightButtonClick,
  } = usePagedScroller();

  return (
    <div ref={visibleContainerRef} className={styles.visibleArea}>
      <animated.div
        ref={itemsContainerRef}
        className={styles.itemsContainer}
        scrollLeft={itemsContainerOffset}
        // {...bind()}
        // style={
        //   {
        //     touchAction: "none",
        //   } as React.CSSProperties
        // }
      >
        {Children.map(children, (child, index) => (
          <CellWrapper
            updatePositionList={(width, height, x, y) =>
              updatePositionList(index, width, height, x, y)
            }
          >
            {child}
          </CellWrapper>
        ))}
      </animated.div>

      <div className={styles.leftScrollButton} onClick={onLeftButtonClick} />
      <div className={styles.rightScrollButton} onClick={onRightButtonClick} />
    </div>
  );
};
