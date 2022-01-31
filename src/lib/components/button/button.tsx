import React, { cloneElement, FC, ReactElement, useMemo } from "react";
import { ReactComponent as LeftArrow } from "../../icons/leftArrow.svg";
import { ReactComponent as RightArrow } from "../../icons/rightArrow.svg";
import { ReactComponent as DoubleLeftArrow } from "../../icons/doubleLeftArrow.svg";

import styles from "./button.module.scss";

type Props = {
  type: "left" | "right" | "returnToStart";
  override?: React.ReactElement;
  onClick: () => void;
};

type ButtonMetaData = {
  style: string;
  overrideStyle: string;
  icon: ReactElement;
  ariaLabel: string;
};

export const Button: FC<Props> = ({ type, override, onClick }) => {
  const { style, overrideStyle, icon, ariaLabel } =
    useMemo<ButtonMetaData>(() => {
      switch (type) {
        case "left":
          return {
            style: `${styles.leftPositioned} ${styles.button}`,
            overrideStyle: styles.leftPositioned,
            icon: <LeftArrow />,
            ariaLabel: "scroll left",
          };
        case "right":
          return {
            style: `${styles.rightPositioned} ${styles.button}`,
            overrideStyle: styles.rightPositioned,
            icon: <RightArrow />,
            ariaLabel: "scroll right",
          };
        case "returnToStart":
          return {
            style: `${styles.rightPositioned} ${styles.button}`,
            overrideStyle: styles.rightPositioned,
            icon: <DoubleLeftArrow />,
            ariaLabel: "scroll to start",
          };
      }
    }, [type]);

  if (override)
    return React.cloneElement(override, {
      className: overrideStyle,
      ariaLabel,
      onClick,
    });

  return (
    <button className={style} aria-label={ariaLabel} onClick={onClick}>
      {cloneElement(icon, { color: "white" })}
    </button>
  );
};
