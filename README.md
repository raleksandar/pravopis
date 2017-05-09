# pravopis

`pravopis` is a Node.js module which implements a few string manipulation functions which are useful
when working with text in Serbian language as they handle Serbian language orthography rules correctly.

## Installation

You can get latest version of `pravopis` by installing the module via [Yarn](https://yarnpkg.com):
```
  yarn add pravopis
```
Or, if you are still stuck with NPM, via:
```
  npm install --save pravopis
```

## Usage

```js
const pravopis = require('pravopis');

console.log(pravopis.toCyrillic('Pozdrav!'));
```

### Usage in browser:

Use a module bundler like [Webpack](http://webpack.js.org/) or [Browserify](http://browserify.org/) which can bundle Node modules easily.

## API

_TODO: write me..._

## Is it any good?

Yes.

## Licence

MIT
