import { styled } from "@stitches/react";

interface Props {
  index: number;
}

function TestItem(props: Props) {
  return <Container onClick={() => console.log("hi")}>{props.index}</Container>;
}

export default TestItem;

const Container = styled("div", {
  backgroundColor: "grey",
  height: "100px",
  width: "70px",
});
