import { PagedScroller } from "../lib/components/pagedScroller/pagedScroller";
import TestItem from "./testItem";

function App() {
  return (
    <PagedScroller width="500px" itemGap={4}>
      {[...Array(20).keys()].map((i) => (
        <TestItem key={i} index={i} />
      ))}
    </PagedScroller>
  );
}

export default App;
