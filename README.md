# css-animation-timing 1.0.6

Css module of single purpose classes for animation timing

#### Stats

369 | 32 | 64
---|---|---
bytes | selectors | declarations

## Installation

#### With [npm](https://npmjs.com)

```
npm install --save-dev css-animation-timing
```

Learn more about using css installed with npm:
* https://webpack.github.io/docs/stylesheets.html
* https://github.com/defunctzombie/npm-css

#### With Git

http:
```
git clone https://github.com/tachyons-css/css-animation-timing
```

ssh:
```
git clone git@github.com:tachyons-css/css-animation-timing.git
```

## Usage

#### Using with [Postcss](https://github.com/postcss/postcss)

Import the css module

```css
@import "css-animation-timing";
```

Then process the css using the [`tachyons-cli`](https://github.com/tachyons-css/tachyons-cli)

```sh
$ npm i -g tachyons-cli
$ tachyons path/to/css-file.css > dist/t.css
```

#### Using the css

##### CDN
The easiest and most simple way to use the css is to use the cdn hosted version. Include it in the head of your html with:

```
<link rel="stylesheet" href="http://unpkg.com/css-animation-timing@1.0.6/css/css-animation-timing.min.css" />
```

##### Locally
The built css is located in the `css` directory. It contains an unminified and minified version.
You can either cut and paste that css or link to it directly in your html.

```html
<link rel="stylesheet" href="path/to/module/css/css-animation-timing">
```

#### Development

The source css files can be found in the `src` directory.
Running `$ npm start` will process the source css and place the built css in the `css` directory.

## The css

```css
/*
   ANIMATION TIMING
*/
.a-ease { -webkit-animation-timing-function: ease; animation-timing-function: ease; }
.a-easein { -webkit-animation-timing-function: ease-in; animation-timing-function: ease-in; }
.a-easeout { -webkit-animation-timing-function: ease-out; animation-timing-function: ease-out; }
.a-easeinout { -webkit-animation-timing-function: ease-in-out; animation-timing-function: ease-in-out; }
.a-linear { -webkit-animation-timing-function: linear; animation-timing-function: linear; }
.a-bezier { -webkit-animation-timing-function: cubic-bezier( .1, .1, .1, .1 ); animation-timing-function: cubic-bezier( .1, .1, .1, .1 ); }
.a-start { -webkit-animation-timing-function: step-start; animation-timing-function: step-start; }
.a-stop { -webkit-animation-timing-function: step-stop; animation-timing-function: step-stop; }
@media screen and (min-width: 48em) {
 .a-ease-ns { -webkit-animation-timing-function: ease; animation-timing-function: ease; }
 .a-easein-ns { -webkit-animation-timing-function: ease-in; animation-timing-function: ease-in; }
 .a-easeout-ns { -webkit-animation-timing-function: ease-out; animation-timing-function: ease-out; }
 .a-easeinout-ns { -webkit-animation-timing-function: ease-in-out; animation-timing-function: ease-in-out; }
 .a-linear-ns { -webkit-animation-timing-function: linear; animation-timing-function: linear; }
 .a-bezier-ns { -webkit-animation-timing-function: cubic-bezier( .1, .1, .1, .1 ); animation-timing-function: cubic-bezier( .1, .1, .1, .1 ); }
 .a-start-ns { -webkit-animation-timing-function: step-start; animation-timing-function: step-start; }
 .a-stop-ns { -webkit-animation-timing-function: step-stop; animation-timing-function: step-stop; }
}
@media screen and (min-width:48em) and (max-width: 64em) {
 .a-ease-m { -webkit-animation-timing-function: ease; animation-timing-function: ease; }
 .a-easein-m { -webkit-animation-timing-function: ease-in; animation-timing-function: ease-in; }
 .a-easeout-m { -webkit-animation-timing-function: ease-out; animation-timing-function: ease-out; }
 .a-easeinout-m { -webkit-animation-timing-function: ease-in-out; animation-timing-function: ease-in-out; }
 .a-linear-m { -webkit-animation-timing-function: linear; animation-timing-function: linear; }
 .a-bezier-m { -webkit-animation-timing-function: cubic-bezier( .1, .1, .1, .1 ); animation-timing-function: cubic-bezier( .1, .1, .1, .1 ); }
 .a-start-m { -webkit-animation-timing-function: step-start; animation-timing-function: step-start; }
 .a-stop-m { -webkit-animation-timing-function: step-stop; animation-timing-function: step-stop; }
}
@media screen and (min-width: 64em) {
 .a-ease-l { -webkit-animation-timing-function: ease; animation-timing-function: ease; }
 .a-easein-l { -webkit-animation-timing-function: ease-in; animation-timing-function: ease-in; }
 .a-easeout-l { -webkit-animation-timing-function: ease-out; animation-timing-function: ease-out; }
 .a-easeinout-l { -webkit-animation-timing-function: ease-in-out; animation-timing-function: ease-in-out; }
 .a-linear-l { -webkit-animation-timing-function: linear; animation-timing-function: linear; }
 .a-bezier-l { -webkit-animation-timing-function: cubic-bezier( .1, .1, .1, .1 ); animation-timing-function: cubic-bezier( .1, .1, .1, .1 ); }
 .a-start-l { -webkit-animation-timing-function: step-start; animation-timing-function: step-start; }
 .a-stop-l { -webkit-animation-timing-function: step-stop; animation-timing-function: step-stop; }
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

