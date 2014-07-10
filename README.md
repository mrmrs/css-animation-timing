# CSS ANIMATION TIMING

  Mobile-first classes for css-animation-timing.
  Set the desired css-animation-timing on any element for any breakpoint.
  Base class names are namespaced across three breakpoints:

*  -ns = not-small (covers everything larger than mobile)
*  -m  = medium
*  -l  = large

## Install
```
npm install --save-dev css-animation-timing
```
or download the css on github and include in your project.

## File Size


## The Code
```
  .a-ease {      animation-timing-function: ease; }
  .a-easein {    animation-timing-function: ease-in; }
  .a-easeout {   animation-timing-function: ease-out; }
  .a-easeinout { animation-timing-function: ease-in-out; }
  .a-linear {    animation-timing-function: linear; }
  .a-bezier {    animation-timing-function: cubic-bezier(0.1, 0.1, 0.1, 0.1); }
  .a-start {     animation-timing-function: step-start; }
  .a-stop {      animation-timing-function: step-stop; }


@include break(not-small) {
  .a-ease-ns {      animation-timing-function: ease; }
  .a-easein-ns {    animation-timing-function: ease-in; }
  .a-easeout-ns {   animation-timing-function: ease-out; }
  .a-easeinout-ns { animation-timing-function: ease-in-out; }
  .a-linear-ns {    animation-timing-function: linear; }
  .a-bezier-ns {    animation-timing-function: cubic-bezier(0.1, 0.1, 0.1, 0.1); }
  .a-start-ns {     animation-timing-function: step-start; }
  .a-stop-ns {      animation-timing-function: step-stop; }
}

@include break(medium) {
  .a-ease-m {      animation-timing-function: ease; }
  .a-easein-m {    animation-timing-function: ease-in; }
  .a-easeout-m {   animation-timing-function: ease-out; }
  .a-easeinout-m { animation-timing-function: ease-in-out; }
  .a-linear-m {    animation-timing-function: linear; }
  .a-bezier-m {    animation-timing-function: cubic-bezier(0.1, 0.1, 0.1, 0.1); }
  .a-start-m {     animation-timing-function: step-start; }
  .a-stop-m {      animation-timing-function: step-stop; }
}

@include break(large) {
  .a-ease-l {      animation-timing-function: ease; }
  .a-easein-l {    animation-timing-function: ease-in; }
  .a-easeout-l {   animation-timing-function: ease-out; }
  .a-easeinout-l { animation-timing-function: ease-in-out; }
  .a-linear-l {    animation-timing-function: linear; }
  .a-bezier-l {    animation-timing-function: cubic-bezier(0.1, 0.1, 0.1, 0.1); }
  .a-start-l {     animation-timing-function: step-start; }
  .a-stop-l {      animation-timing-function: step-stop; }
}

```

## Author

[http://mrmrs.cc - Entire internet gateway to all things mrmrs](http://mrmrs.cc)
[http://mrmrs.io - Open source projects](http://mrmrs.io)

## License

The MIT License (MIT)

Copyright (c) 2014 @mrmrs

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

