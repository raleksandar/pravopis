# pravopis

`pravopis` is a Node.js module which implements a few string manipulation functions which are useful
when working with text in Serbian language as they handle Serbian language orthography rules correctly.

Goal of this project is to implement functions covering all Serbian language orthography rules. For now just the most basic ones are implemented.

## Installation

You can get latest version of `pravopis` by cloning this repository or by installing the module via [Yarn](https://yarnpkg.com):
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

console.log(pravopis.toCyrillic('Pozdrav!')); // => Поздрав!
```

### Usage in browser:

Use a module bundler like [Webpack](http://webpack.js.org/) or [Browserify](http://browserify.org/) which can bundle Node modules easily.

## API

### `pravopis.toCyrillic(s)`
Transliterates string `s` from Serbian Latin to Serbian Cyrillic alphabet honoring orthography rules for transliterating `nj`/`lj`/`dž` to `њ`/`љ`/`џ`.

Examples:
```js
pravopis.toCyrillic('pravopis'); // правопис
pravopis.toCyrillic('injekcija, njiva'); // инјекција, њива
pravopis.toCyrillic('patlidžan, nadživeti'); // патлиџан, надживети
```

### `pravopis.toLatin(s)`
Transliterates string `s` from Serbian Cyrillic to Serbian Latin alphabet.

Examples:
```js
pravopis.toLatin('правопис'); // pravopis
pravopis.toLatin('инјекција, њива'); // injekcija, njiva
pravopis.toLatin('патлиџан, надживети'); // patlidžan, nadživeti
```

### `pravopis.toVocative(name)`
Returns vocative form of string `name` (which is nominative form of a person's given name). Preserves casing and alphabet of a given string.

Examples:
```js
pravopis.toVocative('Ђура'); // Ђуро
pravopis.toVocative('ПЕТАР'); // ПЕТРЕ
pravopis.toVocative('milojica'); // milojice
pravopis.toVocative('Stanoje'); // Stanoje
```

### `pravopis.equals(a, b)`
Compares strings `a` and `b` and returns `true` if they are equal, ignoring difference in used alphabet.

Examples:
```js
pravopis.equals('latinica', 'латиница'); // true
pravopis.equals('ćirilica', 'ћирилица'); // true
pravopis.equals('ćirilica', 'Ћирилица'); // false
```

### `pravopis.equalsIgnoreCase(a, b)`
Compares strings `a` and `b` and returns `true` if they are equal, ignoring difference in case and used alphabet.

Examples:
```js
pravopis.equalsIgnoreCase('latinica', 'латиница'); // true
pravopis.equalsIgnoreCase('ćirilica', 'ћирилица'); // true
pravopis.equalsIgnoreCase('ćirilica', 'Ћирилица'); // true
```

### `pravopis.hasCyrillic(s)`
Returns `true` if string `s` has at least one Serbian Cyrillic letter.

Examples:
```js
pravopis.hasCyrillic('ћирилица'); // true
pravopis.hasCyrillic('ćirilica'); // false
```

### `pravopis.hasLatin(s)`
Returns `true` if string `s` has at least one Serbian Latin letter.

Examples:
```js
pravopis.hasLatin('ћирилица'); // false
pravopis.hasLatin('ćirilica'); // true
```


## Is it any good?

Yes.

## Credits

 * transliteration rules borrowed from [this vokabular.org discussion](http://www.vokabular.org/forum/index.php?topic=3817.0)
 * vocative dictionary and rules adapted from [Vokativ project by Nemanja Avramović](https://github.com/avramovic/vokativ).

## Licence

MIT
