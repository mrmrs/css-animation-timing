# css-animation-timing 0.0.7

Css module of single purpose classes for animation timing

#### Stats

323 | 32 | 32
---|---|---
bytes | selectors | declarations

## Installation

#### With [npm](https://npmjs.com)

```
npm install --save-dev css-animation-timing
```

#### With Git

```
git clone https://github.com/tachyons-css/css-animation-timing
```

## Usage

#### Using with [PostCSS](https://github.com/postcss/postcss)

Import the css module

```css
@import "css-animation-timing";
```

Then process the CSS using the [`tachyons-cli`](https://github.com/tachyons-css/tachyons-cli)

```sh
$ npm i -g tachyons-cli
$ tachyons-cli path/to/css-file.css > dist/t.css
```

#### Using the CSS

The built CSS is located in the `css` directory. It contains an unminified and minified version.
You can either cut and paste that css or link to it directly in your html.

```html
<link rel="stylesheet" href="path/to/module/css/css-animation-timing">
```

#### Development

The source CSS files can be found in the `src` directory.
Running `$ npm start` will process the source CSS and place the built CSS in the `css` directory.

## The CSS

```css
/*
   ANIMATION TIMING
*/
.a-ease { animation-timing-function: ease; }
.a-easein { animation-timing-function: ease-in; }
.a-easeout { animation-timing-function: ease-out; }
.a-easeinout { animation-timing-function: ease-in-out; }
.a-linear { animation-timing-function: linear; }
.a-bezier { animation-timing-function: cubic-bezier( 0.1, 0.1, 0.1, 0.1 ); }
.a-start { animation-timing-function: step-start; }
.a-stop { animation-timing-function: step-stop; }
@media screen and (min-width: 48em) {
 .a-ease-ns { animation-timing-function: ease; }
 .a-easein-ns { animation-timing-function: ease-in; }
 .a-easeout-ns { animation-timing-function: ease-out; }
 .a-easeinout-ns { animation-timing-function: ease-in-out; }
 .a-linear-ns { animation-timing-function: linear; }
 .a-bezier-ns { animation-timing-function: cubic-bezier( 0.1, 0.1, 0.1, 0.1 ); }
 .a-start-ns { animation-timing-function: step-start; }
 .a-stop-ns { animation-timing-function: step-stop; }
}
@media screen and (min-width:48em) and (max-width: 64em) {
 .a-ease-m { animation-timing-function: ease; }
 .a-easein-m { animation-timing-function: ease-in; }
 .a-easeout-m { animation-timing-function: ease-out; }
 .a-easeinout-m { animation-timing-function: ease-in-out; }
 .a-linear-m { animation-timing-function: linear; }
 .a-bezier-m { animation-timing-function: cubic-bezier( 0.1, 0.1, 0.1, 0.1 ); }
 .a-start-m { animation-timing-function: step-start; }
 .a-stop-m { animation-timing-function: step-stop; }
}
@media screen and (min-width: 64em) {
 .a-ease-l { animation-timing-function: ease; }
 .a-easein-l { animation-timing-function: ease-in; }
 .a-easeout-l { animation-timing-function: ease-out; }
 .a-easeinout-l { animation-timing-function: ease-in-out; }
 .a-linear-l { animation-timing-function: linear; }
 .a-bezier-l { animation-timing-function: cubic-bezier( 0.1, 0.1, 0.1, 0.1 ); }
 .a-start-l { animation-timing-function: step-start; }
 .a-stop-l { animation-timing-function: step-stop; }
}
```

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## Authors

* [mrmrs](http://mrmrs.io)
* [johno](http://johnotander.com)

## License

ISC
