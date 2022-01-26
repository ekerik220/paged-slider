# paged-scroller

A horizontal psuedo-scrolling (no scroll bar) box component. Scroll arrows can be optionally displayed, and clicking on them scrolls over one page (making sure that no items are skipped). It also optionally supports drag gestures that play nice with items that have onClick handlers.

## Installation

```
npm install paged-scroller
```

or

```
yarn add paged-scroller
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

- `width (string)`: Width of the container as a string. Defaults to 100% (however, the max width is the width of all the items in the scroller).
- `itemGap (number)`: Gap between items (px).
- `showsArrows (boolean)`: Shows the paged scrolling arrow buttons. Defaults to true on non-touch devices.

- `enabledDrag (boolean)`: Enables scrolling with drag gestures. Defaults to true on touch devices.

- `dragElastic (boolean)`: Enables scrolling past the edges elastically.
- `scrollLeftButton (ReactElement)`: Provide a custom button for scrolling left.
- `scrollRightButton (ReactElement)`: Provide a custom button for scrolling right.
- `returnToStartButton (ReactElement)`: Provide a custom button for scrolling back to the start.

## License

The MIT License (MIT)
