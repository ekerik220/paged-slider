import React, { FC, useRef } from "react";
import { Item } from "./item";
import { PagedScroller } from "./lib/components/pagedScroller/pagedScroller";
import styles from "./App.module.scss";

type Props = {};

const App: FC<Props> = () => {
  const ref = useRef<HTMLDivElement>(null);

  const onClick = () => {
    ref.current?.scrollTo({ left: 400, behavior: "smooth" });
  };

  return (
    <div className="App">
      <button onClick={onClick}>click</button>
      <PagedScroller
        className={styles.testClass}
        width="100%"
        itemGap="8px"
        enableDrag={true}
        scrollContainerRef={ref}
      >
        {[...Array(5)].map((_, i) => (
          <Item key={i} index={i} />
        ))}
      </PagedScroller>
    </div>
  );
};

export default App;
