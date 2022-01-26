import { styled } from "@stitches/react";

interface Props {
  index: number;
}

function TestItem(props: Props) {
  return <Container onClick={() => console.log("hi")}>{props.index}</Container>;
}

export default TestItem;

const Container = styled("div", {
  display: "flex",
  justifyContent: "center",
  padding: 10,
  backgroundColor: "grey",
  color: "white",
  borderRadius: 10,
  fontSize: 20,
  height: "100px",
  width: "70px",
});
