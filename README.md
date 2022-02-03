![example](https://user-images.githubusercontent.com/5779535/151152606-5f4f7e64-e9db-491d-af25-bb393df50d26.gif)

# react-paged-scroller

A horizontal scrolling box component with no scroll bar. Scroll arrows can be optionally displayed, and clicking on them scrolls over one page (making sure that no items are skipped). It also optionally supports drag gestures that play nice with items that have onClick handlers.

Zero dependencies and just 3kB gzipped.

## Installation

```
npm install react-paged-scroller
```

or

```
yarn add react-paged-scroller
```

## Usage

```tsx
<PagedScroller>
  {[...Array(20).keys()].map((i) => (
    <TestItem key={i} index={i} />
  ))}
</PagedScroller>
```

## Props

All props are optional.

- `width (string)`: Width of the container as a string. Defaults to 100% (however, the max width is the width of all the items in the scroller) (eg. "500px").
- `itemGap (string)`: Gap between items (eg: "8px").
- `showArrows (boolean)`: Shows the paged scrolling arrow buttons. Defaults to true on non-touch devices.

- `enabledDrag (boolean)`: Enables scrolling with drag gestures. Defaults to true on touch devices.

- `scrollLeftButton (ReactElement)`: Provide a custom button for scrolling left.
- `scrollRightButton (ReactElement)`: Provide a custom button for scrolling right.
- `returnToStartButton (ReactElement)`: Provide a custom button for scrolling back to the start.
- `scrollContainerRef (React.RefObject)`: Provide a ref to the scroll component (to control the scroll position, for example)

## License

The MIT License (MIT)
