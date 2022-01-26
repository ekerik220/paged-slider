import {
  HiChevronDoubleLeft,
  HiChevronLeft,
  HiChevronRight,
} from "react-icons/hi";
import React, { cloneElement, FC, ReactElement, useMemo } from "react";
import { css, styled } from "@stitches/react";

type Props = {
  type: "left" | "right" | "returnToStart";
  override?: React.ReactElement;
  onClick: () => void;
};

type ButtonMetaData = {
  overrideStyle: string;
  icon: ReactElement;
  ariaLabel: string;
};

export const Button: FC<Props> = ({ type, override, onClick }) => {
  const { overrideStyle, icon, ariaLabel } = useMemo<ButtonMetaData>(() => {
    switch (type) {
      case "left":
        return {
          overrideStyle: overrideButtonStyle({ side: "left" }),
          icon: <HiChevronLeft />,
          ariaLabel: "scroll left",
        };
      case "right":
        return {
          overrideStyle: overrideButtonStyle({ side: "right" }),
          icon: <HiChevronRight />,
          ariaLabel: "scroll right",
        };
      case "returnToStart":
        return {
          overrideStyle: overrideButtonStyle({ side: "right" }),
          icon: <HiChevronDoubleLeft />,
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
    <ScrollButton type={type} aria-label={ariaLabel} onClick={onClick}>
      {cloneElement(icon, { color: "white" })}
    </ScrollButton>
  );
};

const positioned = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
};
const leftPositioned = {
  ...positioned,
  left: 10,
};
const rightPositioned = {
  ...positioned,
  right: 10,
};

const overrideButtonStyle = css({
  variants: {
    side: {
      left: leftPositioned,
      right: rightPositioned,
    },
  },
});

const ScrollButton = styled("button", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "100%",
  border: "1px solid hsla(0, 0%, 100%, 0.7)",
  width: 40,
  height: 40,
  fontSize: 30,
  backgroundColor: "rgba(0, 0, 0, 0.2)",
  cursor: "pointer",
  transition: "opacity 0.2s",

  "&:hover": {
    opacity: 0.6,
  },

  variants: {
    type: {
      left: leftPositioned,
      right: rightPositioned,
      returnToStart: rightPositioned,
    },
  },
});
