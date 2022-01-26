import useSize from "@react-hook/size";
import { useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

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
  const scrollLock = useRef(false);

  const [visibleContainerWidth] = useSize(visibleContainerRef);
  const [itemsContainerWidth] = useSize(itemsContainerRef);

  const springDuration = 500;
  const xSpring = useSpring(0, { duration: springDuration });
  const x = useMotionValue(0);

  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  useEffect(() => {
    const unsubscribeSpring = xSpring.onChange(() => x.set(xSpring.get()));
    const unsubscribeX = x.onChange(() => {
      xSpring.set(x.get(), false);
      setAtStart(x.get() >= 0);
      setAtEnd(
        Math.abs(x.get()) >= itemsContainerWidth - visibleContainerWidth
      );
    });
    return () => {
      unsubscribeSpring();
      unsubscribeX();
    };
  }, [xSpring, x, itemsContainerWidth, visibleContainerWidth]);

  const updatePositionList = (
    index: number,
    width: number,
    height: number,
    x: number,
    y: number
  ) => {
    positionList.current[index] = { width, height, x, y };
  };

  const setScrollLock = () => {
    scrollLock.current = true;
    // Let go of the lock 100ms before animation finishes so user doesn't
    // have to wait for the scroll to completely stop
    setTimeout(() => (scrollLock.current = false), springDuration - 100);
  };

  const onLeftButtonClick = () => {
    if (scrollLock.current) return;
    setScrollLock();

    // If there is an item partially visible on the left side, get it's index
    const straddledPositionIndex = positionList.current.findIndex(
      (item) =>
        Math.abs(xSpring.get()) > item.x &&
        Math.abs(xSpring.get()) < item.x + item.width
    );

    // If there was no staddled item, get the index of the item that comes before
    // the first visible item, else we'll just use the straddled position index.
    // This will be the index of the item that MUST still be visible after the scroll
    // since it's either the next item we haven't seen yet, or an item we've only
    // seen partially (straddled item).
    let visibleAfterScrollIndex = straddledPositionIndex;
    if (straddledPositionIndex === -1) {
      const firstVisibleItemIndex = positionList.current.findIndex(
        (item) => item.x >= Math.abs(xSpring.get())
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

      if (positionDiff <= visibleContainerWidth) {
        newPositionIndex = i;
      } else break;
    }
    x.stop();
    xSpring.set(-positionList.current[newPositionIndex].x);
  };

  const onRightButtonClick = () => {
    if (scrollLock.current) return;
    setScrollLock();

    // Start by getting a naive after-scroll position by just moving the offset
    // over by the width of the visible box.
    let proposedNewOffset = -xSpring.get() + visibleContainerWidth;

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
    proposedNewOffset = Math.min(
      itemsContainerWidth - visibleContainerWidth,
      proposedNewOffset
    );
    x.stop();
    xSpring.set(-proposedNewOffset);
  };

  const onReturnToStartButtonClick = () => {
    if (scrollLock.current) return;
    setScrollLock();
    xSpring.set(0);
  };

  return {
    x,
    itemsContainerRef,
    itemsContainerWidth,
    visibleContainerRef,
    visibleContainerWidth,
    atStart,
    atEnd,
    updatePositionList,
    onLeftButtonClick,
    onRightButtonClick,
    onReturnToStartButtonClick,
  };
};
