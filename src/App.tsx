import { PagedScroller } from "./lib/components/pagedScroller/pagedScroller";
import "./App.css";
import TestItem from "./example/testItem";

function App() {
  return (
    <div className="App">
      <PagedScroller width="500px">
        {[...Array(20).keys()].map((i) => (
          <TestItem key={i} index={i} />
        ))}
      </PagedScroller>
    </div>
  );
}

export default App;
