# css-animation-timing

Functional CSS for animation-timing

## Filesize

| File | Size |
|------|------|
| `dist/animation-timing.css` | 2105 bytes |
| `dist/animation-timing.min.css` | 1647 bytes (265 Gzipped) |

## Install

```sh
npm install css-animation-timing
```

## Usage

### Import

```css
@import "css-animation-timing";
```

### CDN

```html
<link rel="stylesheet" href="https://unpkg.com/css-animation-timing/dist/animation-timing.min.css">
```

### Direct

```html
<link rel="stylesheet" href="path/to/css-animation-timing/dist/animation-timing.min.css">
```

## Classes

| Class   | Value                    |
|---------|--------------------------|
| `.a-ease` | `animation-timing-function: ease;` |
| `.a-easein` | `animation-timing-function: ease-in;` |
| `.a-easeout` | `animation-timing-function: ease-out;` |
| `.a-easeinout` | `animation-timing-function: ease-in-out;` |
| `.a-linear` | `animation-timing-function: linear;` |
| `.a-bezier` | `animation-timing-function: cubic-bezier(.1, .1, .1, .1);` |
| `.a-start` | `animation-timing-function: step-start;` |
| `.a-stop` | `animation-timing-function: step-stop;` |
| `.a-ease-s` | `animation-timing-function: ease;` |
| `.a-easein-s` | `animation-timing-function: ease-in;` |
| `.a-easeout-s` | `animation-timing-function: ease-out;` |
| `.a-easeinout-s` | `animation-timing-function: ease-in-out;` |
| `.a-linear-s` | `animation-timing-function: linear;` |
| `.a-bezier-s` | `animation-timing-function: cubic-bezier(.1, .1, .1, .1);` |
| `.a-start-s` | `animation-timing-function: step-start;` |
| `.a-stop-s` | `animation-timing-function: step-stop;` |
| `.a-ease-m` | `animation-timing-function: ease;` |
| `.a-easein-m` | `animation-timing-function: ease-in;` |
| `.a-easeout-m` | `animation-timing-function: ease-out;` |
| `.a-easeinout-m` | `animation-timing-function: ease-in-out;` |
| `.a-linear-m` | `animation-timing-function: linear;` |
| `.a-bezier-m` | `animation-timing-function: cubic-bezier(.1, .1, .1, .1);` |
| `.a-start-m` | `animation-timing-function: step-start;` |
| `.a-stop-m` | `animation-timing-function: step-stop;` |
| `.a-ease-l` | `animation-timing-function: ease;` |
| `.a-easein-l` | `animation-timing-function: ease-in;` |
| `.a-easeout-l` | `animation-timing-function: ease-out;` |
| `.a-easeinout-l` | `animation-timing-function: ease-in-out;` |
| `.a-linear-l` | `animation-timing-function: linear;` |
| `.a-bezier-l` | `animation-timing-function: cubic-bezier(.1, .1, .1, .1);` |
| `.a-start-l` | `animation-timing-function: step-start;` |
| `.a-stop-l` | `animation-timing-function: step-stop;` |

### Responsive

Responsive variants are available for each class with the following suffixes:

| Suffix | Media Query              |
|--------|--------------------------|
| `-s`   | `min-width: 32em`        |
| `-m`   | `min-width: 48em`        |
| `-l`   | `min-width: 96em`        |

Example: `.a-ease-m` applies the property at the medium breakpoint and above.

## Building

```sh
npm run build
```

Processes `src/animation-timing.css` with [Lightning CSS](https://lightningcss.dev) and outputs to `dist/`.

- `dist/animation-timing.css` — formatted
- `dist/animation-timing.min.css` — minified

## License

MIT
