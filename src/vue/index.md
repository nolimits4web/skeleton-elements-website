---
title: Skeleton Elements for Vue - UI for improved perceived performance
description: Vue UI library for perceived performance
---

# Skeleton Elements for Vue

<p class="important-note">Skeleton Elements Vue.js components are compatible only with new Vue.js version 3</p>

- [Installation](#installation)
- [Styles](#styles)
  - [CSS](#css)
  - [SCSS](#scss)
  - [CSS Custom Properties (Variables)](#css-custom-properties-variables)
- [Components](#components)
  - [SkeletonBlock](#skeletonblock)
  - [SkeletonText](#skeletontext)
  - [SkeletonAvatar](#skeletonavatar)
  - [SkeletonImage](#skeletonimage)
- [Loading Effects](#loading-effects)

<iframe src="https://codesandbox.io/embed/skeleton-elements-vue-nvd4e?autoresize=1&fontsize=14&hidenavigation=1&theme=dark" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" title="skeleton-elements-vue" allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking" sandbox="allow-autoplay allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe>

## Installation

You can install Skeleton Elements for Vue via npm:

```
npm i @skeleton-elements/vue --save
```

## Styles

### CSS

Skeleton Elements requires stylesheet to be included:

```html
<link rel="stylesheet" href="path/to/skeleton-elements.css" />
```

Wiht bunder (like webpack) you can import syles directly from JavaScript:

```js
import '@skeleton-elements/vue/skeleton-elements.css';
```

Or it can be included for each component separately:

- `@skeleton-elements/vue/skeleton-avatar.css` - Avatar component
- `@skeleton-elements/vue/skeleton-block.css` - Block component
- `@skeleton-elements/vue/skeleton-image.css` - Image component
- `@skeleton-elements/vue/skeleton-text.css` - Text component
- `@skeleton-elements/vue/skeleton-effects.css` - Effects

### SCSS

`SCSS` styles are also included:

- `@skeleton-elements/vue/skeleton-elements.scss` - All styles
- `@skeleton-elements/vue/skeleton-avatar.scss` - Avatar component
- `@skeleton-elements/vue/skeleton-block.scss` - Block component
- `@skeleton-elements/vue/skeleton-image.scss` - Image component
- `@skeleton-elements/vue/skeleton-text.scss` - Text component
- `@skeleton-elements/vue/skeleton-effects.scss` - Effects

### CSS Custom Properties (Variables)

There are following CSS Variables available:

- `--skeleton-color` (default `#ccc`) - used as text color for skeleton text, and background color of skeleton block, avatar and image
- `--skeleton-icon-color` (default `rgba(0, 0, 0, 0.25)`) - used as icon color in skeleton avatar and image

## Components

There are following components available:

- `SkeletonBlock` - block placeholder
- `SkeletonText` - skeleton text (uses custom Skeleton font)
- `SkeletonAvatar` - responsive avatar placeholder
- `SkeletonImage` - responsive image placeholder

### SkeletonBlock

Skeleton block is just a usual block element with gray background color, that can be in any required size.

<iframe src="https://codesandbox.io/embed/skeleton-block-vue-ggkon?autoresize=1&fontsize=14&hidenavigation=1&theme=dark" style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;" title="skeleton-block-vue" allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking" sandbox="allow-autoplay allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe>

#### SkeletonBlock Props

| Name     | Type     | Default | Description                                         |
| -------- | -------- | ------- | --------------------------------------------------- |
| `tag`    | `string` | `'div'` | HTML element tag                                    |
| `width`  | `number` |         | Block CSS width                                     |
| `height` | `number` |         | Block CSS height                                    |
| `effect` | `string` |         | Loading effect, can be `fade` or `pulse` or `blink` |

### SkeletonText

Skeleton text uses custom Skeleton font for making responsive text placeholders.

Special Skeleton font renders every character as small gray rectangle. When we wrap text with `SkeletonText` component, it converts text to gray blocks/lines. Advantage over `SkeletonBlock` is that such "skeleton text" can be fully responsive and its size will reflect actual text size.

Skeleton text font supports following characters set (including "space"):

```
0 1 2 3 4 5 6 7 8 9 a b c d e f g h i j k l m n o p q r s t u v w z x y z A B C D E F G H I J K L M N O P Q R S T U V W Z X Y Z _ -   . , : ; / ! / * & ' " | ( ) { } [ ]
```

<iframe src="https://codesandbox.io/embed/skeleton-text-vue-p2615?autoresize=1&fontsize=14&hidenavigation=1&theme=dark" style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;" title="skeleton-text-vue" allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking" sandbox="allow-autoplay allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe>

#### SkeletonText Props

| Name     | Type     | Default  | Description                                         |
| -------- | -------- | -------- | --------------------------------------------------- |
| `tag`    | `string` | `'span'` | HTML element tag                                    |
| `effect` | `string` |          | Loading effect, can be `fade` or `pulse` or `blink` |

### SkeletonAvatar

Skeleton Avatar is designed to be used as a placeholder for avatars. It dynamically renders SVG image with "person" icon inside:

<iframe src="https://codesandbox.io/embed/skeleton-avatar-vue-6emk3?autoresize=1&fontsize=14&hidenavigation=1&theme=dark" style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;" title="skeleton-avatar-vue" allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking" sandbox="allow-autoplay allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe>

#### SkeletonAvatar Props

| Name           | Type      | Default  | Description                                    |
| -------------- | --------- | -------- | ---------------------------------------------- |
| `tag`          | `string`  | `'span'` | HTML element tag                               |
| `size`         | `number`  | `48`     | Generated SVG size in px.                      |
| `color`        | `string`  |          | CSS color, e.g. `#f00`, `rgba(255, 255, 0)`    |
| `showIcon`     | `boolean` | `true`   | Defines wether to show icon or not             |
| `iconColor`    | `string`  |          | Icon CSS color                                 |
| `borderRadius` | `string`  | `50%`    | Avatar CSS border radius                       |
| `effect`       | `string`  |          | Loading effect, can be`fade`or`pulse`or`blink` |

### SkeletonImage

Skeleton Image is designed to be used as a placeholder for images. It dynamically renders rectangle SVG image with "image" icon inside:

<iframe src="https://codesandbox.io/embed/skeleton-image-vue-8e8ty?autoresize=1&fontsize=14&hidenavigation=1&theme=dark" style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;" title="skeleton-image-vue" allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking" sandbox="allow-autoplay allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe>

#### SkeletonImage Props

| Name        | Type      | Default  | Description                                         |
| ----------- | --------- | -------- | --------------------------------------------------- |
| `tag`       | `string`  | `'span'` | HTML element tag                                    |
| `width`     | `number`  | `1200`   | SVG image width in px                               |
| `height`    | `number`  | `600`    | SVG image height in px                              |
| `color`     | `string`  |          | CSS color, e.g. `#f00`, `rgba(255, 255, 0)`         |
| `showIcon`  | `boolean` | `true`   | Defines wether to show icon or not                  |
| `iconColor` | `string`  |          | Icon CSS color                                      |
| `effect`    | `string`  |          | Loading effect, can be `fade` or `pulse` or `blink` |

## Loading Effects

There are following loading effects available:

- `pulse`
- `fade`
- `blink`

To add loading effect in Skeleton components, pass effect name in `effect` prop.
For anything else, just add `skeleton-effect-${effectName}` class to elements.

```html
<!-- skeleton block with "pulse" loading effect -->
<skeleton-block effect="pulse" />

<!-- skeleton text with "fade" loading effect -->
<skeleton-text effect="fade">...</skeleton-text>

<!-- custom block with "blink" loading effect -->
<div class="skeleton-effect-blink">
  <skeleton-text tag="h1">...</skeleton-text>
  <skeleton-text tag="h2">...</skeleton-text>
  <skeleton-text tag="p">...</skeleton-text>
  <skeleton-text tag="p">...</skeleton-text>
  <skeleton-block>...</skeleton-block>
</div>
```
