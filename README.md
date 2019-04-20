# React Animated Show More

[![Codeship Status for tinacious/react-animated-show-more](https://app.codeship.com/projects/857054d0-454f-0137-b8a3-5ed1374cc032/status?branch=master)](https://app.codeship.com/projects/337134)

This is a simple, fully-customizable component that expands an area of text to show the rest of it.

Try out the [demo](https://tinacious.github.io/react-animated-show-more) for yourself.

![](react-animated-show-more-demo.gif)



## Features

- Supports custom toggle component, otherwise shows "Show more" or "Show less"
    - `toggle` (React component) – should implement prop `isOpen`
- Configurable properties
    - `height` (in pixels, default: `200`)
    - `speed` (in milliseconds, default: `300`)
    - `shadowColor` (any colour format, default: `#fff`)


## Peer dependencies

- React v16.8+ (uses hooks)


## Usage

The component wraps around your lengthy text section.

```jsx
<AnimatedShowMore
  height={100}
  toggle={({ isOpen }) => isOpen ? 'Close!' : 'Open!' }
  speed={2000}
  shadowColor="#000">

  {/* Lots of stuff goes here */}
  <DemoText />

</AnimatedShowMore>
```
