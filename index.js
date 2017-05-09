var test = require('./lib/test'),
    transliterate = require('./lib/transliterate'),
    vocative = require('./lib/vocative');

module.exports = {
    equals: test.equals,
    equalsIgnoreCase: test.equalsIgnoreCase,
    hasCyrillic: test.hasCyrillic,
    hasLatin: test.hasLatin,
    toCyrillic: transliterate.toCyrillic,
    toLatin: transliterate.toLatin,
    toVocative: vocative.toVocative,
};
