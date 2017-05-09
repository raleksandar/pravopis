var cyr2lat = {
    'а': 'a',  'б': 'b',  'в': 'v',  'г': 'g',  'д': 'd',  'ђ': 'đ',
    'А': 'A',  'Б': 'B',  'В': 'V',  'Г': 'G',  'Д': 'D',  'Ђ': 'Đ',
    'е': 'e',  'ж': 'ž',  'з': 'z',  'и': 'i',  'ј': 'j',  'к': 'k',
    'Е': 'E',  'Ж': 'Ž',  'З': 'Z',  'И': 'I',  'Ј': 'J',  'К': 'K',
    'л': 'l',  'љ': 'lj', 'м': 'm',  'н': 'n',  'њ': 'nj', 'о': 'o',
    'Л': 'L',  'Љ': 'Lj', 'М': 'M',  'Н': 'N',  'Њ': 'Nj', 'О': 'O',
    'п': 'p',  'р': 'r',  'с': 's',  'т': 't',  'у': 'u',  'ф': 'f',
    'П': 'P',  'Р': 'R',  'С': 'S',  'Т': 'T',  'У': 'U',  'Ф': 'F',
    'х': 'h',  'ц': 'c',  'ч': 'č',  'ћ': 'ć',  'џ': 'dž', 'ш': 'š',
    'Х': 'H',  'Ц': 'C',  'Ч': 'Č',  'Ћ': 'Ć',  'Џ': 'Dž', 'Ш': 'Š',
};

var lat2cyr = {};

Object.keys(cyr2lat).forEach(function(c) {
    lat2cyr[cyr2lat[c]] = c;
});

lat2cyr['NJ'] = 'Њ';
lat2cyr['LJ'] = 'Љ';
lat2cyr['DŽ'] = 'Џ';

var reCyrillicLetter = new RegExp('[' + Object.keys(cyr2lat).join('') + ']', 'g');
var reLatinLetter = new RegExp(Object.keys(lat2cyr).join('|'), 'g');

function createLetterReplacer(table) {
    var hasOwnProp = Object.prototype.hasOwnProperty;
    return function replacer(letter) {
        return hasOwnProp.call(table, letter) ? table[letter] : letter;
    };
}

var cyr2latLetterReplacer = createLetterReplacer(cyr2lat);
var lat2cyrLetterReplacer = createLetterReplacer(lat2cyr);

module.exports = {
    cyr2lat: cyr2lat,
    cyr2latLetterReplacer: cyr2latLetterReplacer,
    lat2cyr: lat2cyr,
    lat2cyrLetterReplacer: lat2cyrLetterReplacer,
    reCyrillicLetter: reCyrillicLetter,
    reLatinLetter: reLatinLetter,
};
