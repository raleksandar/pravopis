var helpers = require('./helpers'),
    tables = require('./tables');

var reLatinWord = new RegExp('(?:' + Object.keys(tables.lat2cyr).join('|') + ')+', 'g');

var lat2cyrWordExceptions = [
    /^(i)(nj)ek/i,
    /^(ko)(nj)u(?!($|[avjrshšŠ]))/i,
    /^(ta)(nj)ug/i,
    /^(i)(nj)ukt/i,
    /^(pa)(nj)eliniz/i,
    /^(na)(d[žŽ])(i[rv]|et|nj|drel|up|)/i,
    /^(o)(d[žŽ])(den|el|(?:v)?al|iv)/i,
    /^(po)(d[žŽ])(ar|dr|elu|e|a?nje|i[gz]a|iln|upa)/i,
    /^(pre)(d[žŽ])(el|etv|iv)/i,
];

function lat2cyrExceptionReplacer(word, prefix, exception) {
    var ex = '';
    for (var i = 0, len = exception.length; i < len; i++) {
        ex += tables.lat2cyrLetterReplacer(exception[i]);
    }
    return prefix + ex + word.substr(prefix.length + exception.length);
}

function lat2cyrWordReplacer(word) {
    for (var i = 0, len = lat2cyrWordExceptions.length; i < len; i++) {
        if (lat2cyrWordExceptions[i].test(word)) {
            return lat2cyrExceptionReplacer(word, RegExp.$1, RegExp.$2);
        }
    }
    return word;
}

function toCyrillic(string) {
    return helpers.toString(string)
        .replace(reLatinWord, lat2cyrWordReplacer)
        .replace(tables.reLatinLetter, tables.lat2cyrLetterReplacer);
}

function toLatin(string) {
    return helpers.toString(string).replace(tables.reCyrillicLetter, tables.cyr2latLetterReplacer);
}

module.exports = {
    toCyrillic: toCyrillic,
    toLatin: toLatin,
};
