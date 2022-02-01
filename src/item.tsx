import React, { FC } from "react";

type Props = {
  index: number;
};

export const Item: FC<Props> = ({ index }) => {
  return (
    <div
      style={{
        width: "700px",
        height: "100px",
        backgroundColor: "grey",
        overflow: "hidden",
      }}
      onClick={() => console.log("click")}
    >
      {index}
      <img
        alt="test"
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
      />
    </div>
  );
};
