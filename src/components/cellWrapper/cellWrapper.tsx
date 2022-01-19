import useSize from "@react-hook/size";
import { FC, useEffect, useRef } from "react";

type Props = {
  updatePositionList: (
    width: number,
    height: number,
    x: number,
    y: number
  ) => void;
};

export const CellWrapper: FC<Props> = ({ updatePositionList, children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, height] = useSize(containerRef);

  useEffect(() => {
    const x = containerRef.current?.offsetLeft ?? 0;
    const y = containerRef.current?.offsetTop ?? 0;
    updatePositionList(width, height, x, y);
  }, [updatePositionList, width, height]);

  return <div ref={containerRef}>{children}</div>;
};
