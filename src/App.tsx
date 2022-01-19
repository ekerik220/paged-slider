import Item from "./components/item/item";
import { PagedScroller } from "./components/pagedScroller/pagedScroller";
import "./App.css";

function App() {
  return (
    <div className="App">
      <PagedScroller>
        <Item index={1} />
        <Item index={2} />
        <Item index={3} />
        <Item index={4} />
        <Item index={5} />
        <Item index={6} />
        <Item index={7} />
        <Item index={8} />
        <Item index={9} />
        <Item index={10} />
        <Item index={11} />

        <Item index={12} />
        <Item index={13} />
        <Item index={14} />
        <Item index={15} />
        <Item index={16} />
        <Item index={17} />
      </PagedScroller>
    </div>
  );
}

export default App;
