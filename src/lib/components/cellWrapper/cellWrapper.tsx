import React from "react";
import { FC, useEffect, useRef } from "react";
import { useSize } from "../../hooks/useSize";

type Props = {
  preventTaps: boolean;
  updatePositionList: (
    width: number,
    height: number,
    x: number,
    y: number
  ) => void;
};

export const CellWrapper: FC<Props> = ({
  preventTaps,
  updatePositionList,
  children,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, height] = useSize(containerRef);

  useEffect(() => {
    const x = containerRef.current?.offsetLeft ?? 0;
    const y = containerRef.current?.offsetTop ?? 0;
    updatePositionList(width, height, x, y);
  }, [updatePositionList, width, height]);

  return (
    <div
      ref={containerRef}
      style={{
        pointerEvents: preventTaps ? "none" : undefined,
        userSelect: "none",
      }}
    >
      {children}
    </div>
  );
};
