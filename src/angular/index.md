---
title: Skeleton Elements for Angular - UI for improved perceived performance
description: Angular UI library for perceived performance
---

# Skeleton Elements for Angular

- [Installation](#installation)
- [Styles](#styles)
  - [SCSS](#scss)
  - [CSS Custom Properties (Variables)](#css-custom-properties-variables)
- [Import module](#import-module)
- [Components](#components)
  - [SkeletonBlock](#skeletonblock)
  - [SkeletonText](#skeletontext)
  - [SkeletonAvatar](#skeletonavatar)
  - [SkeletonImage](#skeletonimage)
- [Loading Effects](#loading-effects)

<iframe src="https://stackblitz.com/edit/skeletonelements-angular?ctl=1&embed=1&file=src/app/app.component.html" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" title="SkeletonElements Angular"></iframe>

## Installation

You can install Skeleton Elements for Angular via npm:

```
npm i skeleton-elements --save
```

## Styles

### SCSS

List of SCSS files in the bundle:

- `skeleton-elements/skeleton-elements.scss` - All styles
- `skeleton-elements/skeleton-avatar.scss` - Avatar component
- `skeleton-elements/skeleton-block.scss` - Block component
- `skeleton-elements/skeleton-image.scss` - Image component
- `skeleton-elements/skeleton-text.scss` - Text component
- `skeleton-elements/skeleton-effect.scss` - Effects

Include css in to your `styles.scss` or in `.angular-cli.json` (Angular v5 and below) / `angular.json` (Angular v6 onwards).

```scss
@import '~skeleton-elements/skeleton-elements';
```

Or you can import only components that you need:

```scss
@import '~skeleton-elements/skeleton-avatar';
@import '~skeleton-elements/skeleton-block';
@import '~skeleton-elements/skeleton-image';
@import '~skeleton-elements/skeleton-text';
@import '~skeleton-elements/skeleton-effects';
```

### CSS Custom Properties (Variables)

There are following CSS Variables available:

- `--skeleton-color` (default `#ccc`) - used as text color for skeleton text, and background color of skeleton block, avatar and image
- `--skeleton-icon-color` (default `rgba(0, 0, 0, 0.25)`) - used as icon color in skeleton avatar and image

## Import module

```typescript
import { SkeletonElementsModule } from 'skeleton-elements/angular';

@NgModule({
  declarations: [AppComponent],
  imports: [SkeletonElementsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

## Components

There are following components available:

- `SkeletonBlock` - block placeholder
- `SkeletonText` - skeleton text (uses custom Skeleton font)
- `SkeletonAvatar` - responsive avatar placeholder
- `SkeletonImage` - responsive image placeholder

### SkeletonBlock

```html
<!-- use it as component -->
<skeleton-block width="30%" height="0.75em" effect="pulse"></skeleton-block>
<!-- or as directive -->
<section skeleton-block width="30%" height="0.75em" effect="pulse"></section>
```

Skeleton block is just a usual block element with gray background color, that can be in any required size.

<iframe src="https://stackblitz.com/edit/skeletonelements-block-angular?ctl=1&embed=1&file=src/app/app.component.html" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" title="SkeletonElements Angular"></iframe>

#### SkeletonBlockComponent Props

| Name           | Type     | Default | Description                                        |
| -------------- | -------- | ------- | -------------------------------------------------- |
| `width`        | `string` |         | Block CSS width                                    |
| `height`       | `string` |         | Block CSS height                                   |
| `borderRadius` | `string` |         | Block CSS border radius                            |
| `effect`       | `string` |         | Loading effect, can be `fade` or `pulse` or `wave` |

### SkeletonText

```html
<!-- use it as directive -->
<p skeleton-text effect="pulse">Placeholder text</p>
<h1 skeleton-text effect="wave">Placeholder text</h1>
```

Skeleton text uses custom Skeleton font for making responsive text placeholders.

Special Skeleton font renders every character as small gray rectangle. When we wrap text with `SkeletonText` component, it converts text to gray blocks/lines. Advantage over `SkeletonBlockComponent` is that such "skeleton text" can be fully responsive and its size will reflect actual text size.

Skeleton text font supports following characters set (including "space"):

```
0 1 2 3 4 5 6 7 8 9 a b c d e f g h i j k l m n o p q r s t u v w x y z A B C D E F G H I J K L M N O P Q R S T U V W X Y Z _ -   . , : ; / ! / * & ' " | ( ) { } [ ]
```

<iframe src="https://stackblitz.com/edit/skeletonelements-text-angula?ctl=1&embed=1&file=src/app/app.component.html" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" title="SkeletonElements Angular"></iframe>

#### SkeletonText Props

| Name     | Type     | Default | Description                                        |
| -------- | -------- | ------- | -------------------------------------------------- |
| `effect` | `string` |         | Loading effect, can be `fade` or `pulse` or `wave` |

### SkeletonAvatar

```html
<!-- use it as component -->
<skeleton-avatar size="100"></skeleton-avatar>
<!-- or as directive -->
<article skeleton-avatar size="100"></article>
```

Skeleton Avatar is designed to be used as a placeholder for avatars. It dynamically renders SVG image with "person" icon inside:

<iframe src="https://stackblitz.com/edit/skeletonelements-avatar-angular?ctl=1&embed=1&file=src/app/app.component.html" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" title="SkeletonElements Angular"></iframe>

#### SkeletonAvatar Props

| Name           | Type      | Default | Description                                   |
| -------------- | --------- | ------- | --------------------------------------------- |
| `size`         | `number`  | `48`    | Generated SVG size in px.                     |
| `color`        | `string`  |         | CSS color, e.g. `#f00`, `rgba(255, 255, 0)`   |
| `showIcon`     | `boolean` | `true`  | Defines whether to show icon or not           |
| `iconColor`    | `string`  |         | Icon CSS color                                |
| `borderRadius` | `string`  | `50%`   | Avatar CSS border radius                      |
| `effect`       | `string`  |         | Loading effect, can be`fade`or`pulse`or`wave` |

### SkeletonImage

```html
<!-- use it as component -->
<skeleton-image effect="wave" width="400" height="200"></skeleton-image>
<!-- or as directive -->
<div skeleton-image effect="wave" width="400" height="200"></div>
```

Skeleton Image is designed to be used as a placeholder for images. It dynamically renders rectangle SVG image with "image" icon inside:

<iframe src="https://stackblitz.com/edit/skeletonelements-image-angular?ctl=1&embed=1&file=src/app/app.component.html" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" title="SkeletonElements Angular"></iframe>

#### SkeletonImage Props

| Name           | Type      | Default | Description                                        |
| -------------- | --------- | ------- | -------------------------------------------------- |
| `width`        | `number`  | `1200`  | SVG image width in px                              |
| `height`       | `number`  | `600`   | SVG image height in px                             |
| `color`        | `string`  |         | CSS color, e.g. `#f00`, `rgba(255, 255, 0)`        |
| `showIcon`     | `boolean` | `true`  | Defines whether to show icon or not                |
| `iconColor`    | `string`  |         | Icon CSS color                                     |
| `borderRadius` | `string`  |         | CSS border radius                                  |
| `effect`       | `string`  |         | Loading effect, can be `fade` or `pulse` or `wave` |

## Loading Effects

There are following loading effects available:

- `pulse`
- `fade`
- `wave`

To add loading effect in Skeleton components, pass effect name in `effect` prop.
For anything else, just add `skeleton-effect-${effectName}` class to elements.

```html
<!-- skeleton block with "pulse" loading effect -->
<skeleton-block effect="pulse" />

<!-- skeleton text with "fade" loading effect -->
<p skeleton-text effect="fade">...</p>

<!-- custom block with "wave" loading effect -->
<div class="skeleton-effect-wave">
  <h1 skeleton-text tag="h1">...</h1>
  <h2 skeleton-text tag="h2">...</h2>
  <p skeleton-text tag="p">...</p>
  <p skeleton-text>...</p>
  <skeleton-block>...</skeleton-block>
</div>
```
