---
title: Skeleton Elements - UI for improved perceived performance
description: UI library for perceived performance
shareImage: https://skeleton-elements.dev/i/share.png
---

# Skeleton Elements

- [Installation](#installation)
- [Styles](#styles)
  - [CSS](#css)
  - [SCSS](#scss)
  - [CSS Custom Properties (Variables)](#css-custom-properties-variables)
- [Skeleton Block](#skeleton-block)
- [Skeleton Text](#skeleton-text)
- [Loading Effects](#loading-effects)

<iframe src="https://codesandbox.io/embed/skeleton-elements-n1cbg?autoresize=1&fontsize=14&hidenavigation=1&theme=dark" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" title="skeleton-elements" allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking" sandbox="allow-autoplay allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe>

## Installation

You can install Skeleton Elements via npm:

```
npm i skeleton-elements --save
```

## Styles

### CSS

Skeleton Elements requires stylesheet to be included:

```html
<link rel="stylesheet" href="path/to/skeleton-elements.css" />
```

With bundler (like webpack) you can import styles directly from JavaScript:

```js
import 'skeleton-elements/skeleton-elements.css';
```

Or it can be included for each component separately:

- `skeleton-elements/skeleton-block.css` - Block component
- `skeleton-elements/skeleton-text.css` - Text component
- `skeleton-elements/skeleton-effects.css` - Effects

### SCSS

`SCSS` styles are also included:

- `skeleton-elements/skeleton-elements.scss` - All styles
- `skeleton-elements/skeleton-block.scss` - Block component
- `skeleton-elements/skeleton-text.scss` - Text component
- `skeleton-elements/skeleton-effects.scss` - Effects

### CSS Custom Properties (Variables)

There are following CSS Variables available:

- `--skeleton-color` (default `#ccc`) - used as text color for skeleton text, and background color of skeleton block, avatar and image
- `--skeleton-icon-color` (default `rgba(0, 0, 0, 0.25)`) - used as icon color in skeleton avatar and image

## Skeleton Block

Skeleton block is just a usual block element with gray background color, that can be in any required size.

To make Skeleton Block, we need to add `skeleton-block` class to element:

<iframe src="https://codesandbox.io/embed/skeleton-block-zlp8f?fontsize=14&hidenavigation=1&theme=dark" style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;" title="skeleton-block" allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking" sandbox="allow-autoplay allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe>

## Skeleton Text

Skeleton text uses custom Skeleton font for making responsive text placeholders.

Special Skeleton font renders every character as small gray rectangle. When we wrap text with `skeleton-text` class, it converts text to gray blocks/lines. Advantage over `Skeleton Block` is that such "skeleton text" can be fully responsive and its size will reflect actual text size.

Skeleton text font supports following characters set (including "space"):

```
0 1 2 3 4 5 6 7 8 9 a b c d e f g h i j k l m n o p q r s t u v w x y z A B C D E F G H I J K L M N O P Q R S T U V W X Y Z _ -   . , : ; / ! / * & ' " | ( ) { } [ ]
```

<iframe src="https://codesandbox.io/embed/skeleton-text-khc72?fontsize=14&hidenavigation=1&theme=dark" style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;" title="skeleton-text" allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking" sandbox="allow-autoplay allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe>

## Loading Effects

There are following loading effects available:

- `pulse`
- `fade`
- `wave`

To add loading effect to any element just add `skeleton-effect-${effectName}` class, e.g.

```html
<!-- skeleton block with "pulse" loading effect -->
<div class="skeleton-block skeleton-effect-pulse"></div>

<!-- skeleton text with "fade" loading effect -->
<p class="skeleton-text skeleton-effect-fade">...</p>

<!-- custom block with "wave" loading effect -->
<div class="skeleton-effect-wave">
  <h1 class="skeleton-text">...</h1>
  <h2 class="skeleton-text">...</h1>
  <p class="skeleton-text">...</p>
  <p class="skeleton-text">...</p>
  <div class="skeleton-block">...</div>
</div>
```
