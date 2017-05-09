var helpers = require('./helpers'),
    tables = require('./tables'),
    transliterate = require('./transliterate');

function hasLatin(string) {
    return !tables.reCyrillicLetter.test(helpers.toString(string));
}

function hasCyrillic(string) {
    return tables.reCyrillicLetter.test(helpers.toString(string));
}

function equals(a, b) {
    return transliterate.toCyrillic(a) === transliterate.toCyrillic(b);
}

function equalsIgnoreCase(a, b) {
    return transliterate.toCyrillic(a).toLowerCase() === transliterate.toCyrillic(b).toLowerCase();
}

module.exports = {
    equals: equals,
    equalsIgnoreCase: equalsIgnoreCase,
    hasCyrillic: hasCyrillic,
    hasLatin: hasLatin,
};
