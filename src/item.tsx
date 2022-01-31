import React, { FC } from "react";

type Props = {
  index: number;
};

export const Item: FC<Props> = ({ index }) => {
  return (
    <div
      style={{ width: "70px", height: "100px", backgroundColor: "grey" }}
      onClick={() => console.log("click")}
    >
      {index}
    </div>
  );
};
