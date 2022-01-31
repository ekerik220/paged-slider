import React, { Component } from "react";

import { Item } from "./item";
import { PagedScroller } from "./lib/components/pagedScroller/pagedScroller";
class App extends Component {
  render() {
    return (
      <div className="App">
        <PagedScroller width="100%">
          {[...Array(20)].map((_, i) => (
            <Item key={i} index={i} />
          ))}
        </PagedScroller>
      </div>
    );
  }
}

export default App;
