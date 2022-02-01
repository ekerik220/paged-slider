import React, { CSSProperties } from "react";
import { FC, useEffect, useRef } from "react";
import { useSize } from "../../hooks/useSize";
import styles from "./cellWrapper.module.scss";

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
      className={styles.cellWrapper}
      style={
        {
          "--pointerEvents": preventTaps ? "none" : undefined,
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
};
