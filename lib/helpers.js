var tables = require('./tables');

function toString(value) {
    return value == null ? '' : String(value);
}

function isUpper(ch) {
    return ch === ch.toUpperCase();
}

// transform string 'to' based on alphabet and casing of 'from'
// e.g. transform('Ћира', 'ćiro') === 'Ћиро'
function transform(from, to) {

    from = toString(from);
    to = toString(to);

    var result = '';
    var fromOffset = 0;

    for (var i = 0, toLen = to.length, maxFromIndex = from.length - 1, src, dest; i < toLen; i++) {

        src = from.substr(Math.min(fromOffset + i, maxFromIndex), 1);
        dest = isUpper(src) ? to[i].toUpperCase() : to[i];

        if (tables.reCyrillicLetter.test(src)) {
            if (!tables.reCyrillicLetter.test(dest)) {
                if (i < toLen - 1 && (to[i] === 'n' || to[i] === 'l') && to[i + 1] === 'j') {
                    dest = tables.lat2cyrLetterReplacer(dest + 'j');
                    fromOffset--;
                    i++;
                } else if (i < toLen - 1 && to[i] === 'd' && to[i + 1] === 'ž') {
                    dest = isUpper(dest) ? 'Џ' : 'џ';
                    fromOffset--;
                    i++;
                } else {
                    dest = tables.lat2cyrLetterReplacer(dest);
                }
            }
        } else if (tables.reCyrillicLetter.test(dest)) {
            dest = tables.cyr2latLetterReplacer(dest);
        }

        result += dest;
    }

    return result;
}

module.exports = {
    toString: toString,
    transform: transform,
};
