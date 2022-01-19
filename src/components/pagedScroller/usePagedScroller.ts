import { useRef } from "react";
import { useSpring } from "@react-spring/web";

type Position = {
  width: number;
  height: number;
  x: number;
  y: number;
};

export const usePagedScroller = () => {
  const visibleContainerRef = useRef<HTMLDivElement>(null);
  const itemsContainerRef = useRef<HTMLDivElement>(null);
  const positionList = useRef<Position[]>([]);

  const [{ itemsContainerOffset }, spring] = useSpring(() => ({
    itemsContainerOffset: 0,
  }));

  const updatePositionList = (
    index: number,
    width: number,
    height: number,
    x: number,
    y: number
  ) => {
    positionList.current[index] = { width, height, x, y };
  };

  const onLeftButtonClick = () => {
    // If there is an item partially visible on the left side, get it's index
    const straddledPositionIndex = positionList.current.findIndex(
      (item) =>
        -itemsContainerOffset > item.x &&
        -itemsContainerOffset < item.x + item.width
    );

    // If there was no staddled item, get the index of the item that comes before
    // the first visible item, else we'll just use the straddled position index.
    // This will be the index of the item that MUST still be visible after the scroll
    // since it's either the next item we haven't seen yet, or an item we've only
    // seen partially (straddled item).
    let visibleAfterScrollIndex = straddledPositionIndex;
    if (straddledPositionIndex === -1) {
      const firstVisibleItemIndex = positionList.current.findIndex(
        (item) => item.x >= Math.abs(itemsContainerOffset.get())
      );
      visibleAfterScrollIndex = Math.max(0, firstVisibleItemIndex - 1);
    }

    // Find the index of the item that we should align our itemsContainerOffset with
    // after the scroll by moving backwards from the visibleAfterScrollIndex, accumulating
    // the sizes of the items until we overflow the visible box size.
    let newPositionIndex = visibleAfterScrollIndex;
    for (let i = visibleAfterScrollIndex; i >= 0; i--) {
      if (i === 0) {
        newPositionIndex = 0;
        break;
      }
      const straddledPosition = positionList.current[visibleAfterScrollIndex];
      const positionDiff = Math.abs(
        straddledPosition.x +
          straddledPosition.width -
          positionList.current[i].x
      );

      const visibleContainerWidth =
        visibleContainerRef.current?.clientWidth ?? 0;

      if (positionDiff <= visibleContainerWidth) {
        newPositionIndex = i;
      } else break;
    }

    console.log(positionList.current[newPositionIndex].x);

    spring.start({
      itemsContainerOffset: positionList.current[newPositionIndex].x,
    });
  };

  const onRightButtonClick = () => {
    // Start by getting a naive after-scroll position by just moving the offset
    // over by the width of the visible box.
    const visibleContainerWidth = visibleContainerRef.current?.clientWidth ?? 0;
    let proposedNewOffset = itemsContainerOffset.get() + visibleContainerWidth;
    console.log(proposedNewOffset);

    // If the naive after-scroll position caused us to be straddling an item on the left side
    // of the visible box, it means we've not fully seen this item yet and need to adjust backwards
    // a bit to line our offset up with the straddled item's left edge
    const straddledPosition = positionList.current.find(
      (item) =>
        proposedNewOffset >= item.x && proposedNewOffset < item.x + item.width
    );
    if (straddledPosition) {
      proposedNewOffset = straddledPosition.x;
    }

    // Prevent scrolling past the last item
    const itemsContainerWidth = itemsContainerRef.current?.scrollWidth ?? 0;
    proposedNewOffset = Math.min(
      itemsContainerWidth - visibleContainerWidth,
      proposedNewOffset
    );
    spring.start({
      itemsContainerOffset: proposedNewOffset,
    });
  };

  return {
    // bind,
    itemsContainerOffset,
    itemsContainerRef,
    visibleContainerRef,
    updatePositionList,
    onLeftButtonClick,
    onRightButtonClick,
  };
};
