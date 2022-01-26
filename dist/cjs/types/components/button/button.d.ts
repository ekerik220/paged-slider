import React, { FC } from "react";
declare type Props = {
    type: "left" | "right" | "returnToStart";
    override?: React.ReactElement;
    onClick: () => void;
};
export declare const Button: FC<Props>;
export {};
