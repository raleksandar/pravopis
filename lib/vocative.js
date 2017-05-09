var helpers = require('./helpers'),
    test = require('./test'),
    tables = require('./tables'),
    transliterate = require('./transliterate');

var dictionary = {
    'žarko': 'žarko',           'aleksa': 'aleksa',         'aleksandar': 'aleksandre',
    'aleksandra': 'aleksandra', 'ana': 'ana',               'biljana': 'biljana',
    'boban': 'bobane',          'bogoljub': 'bogoljube',    'bojan': 'bojane',
    'boris': 'borise',          'borislav': 'borislave',    'borivoje': 'borivoje',
    'branko': 'branko',         'darko': 'darko',           'dimitrije': 'dimitrije',
    'đorđe': 'đorđe',           'dragan': 'dragane',        'dragana': 'dragana',
    'dragica': 'dragice',       'drago': 'drago',           'dragoljub': 'dragoljube',
    'dragomir': 'dragomire',    'dragoslav': 'dragoslave',  'dušan': 'dušane',
    'dušica': 'dušice',         'fahrudin': 'fahrudine',    'faruk': 'faruče',
    'filip': 'filipe',          'gojko': 'gojko',           'goran': 'gorane',
    'gordana': 'gordana',       'ivan': 'ivane',            'ivica': 'ivice',
    'jasmina': 'jasmina',       'jelena': 'jelena',         'jovan': 'jovane',
    'jovica': 'jovice',         'jugoslav': 'jugoslave',    'katarina': 'katarina',
    'ljiljana': 'ljiljana',     'ljubiša': 'ljubiša',       'ljubica': 'ljubice',
    'maja': 'majo',             'marica': 'marice',         'marijana': 'marijana',
    'marina': 'marina',         'marko': 'marko',           'mihailo': 'mihailo',
    'mihajlo': 'mihajlo',       'miladin': 'miladine',      'milan': 'milane',
    'mile': 'mile',             'milena': 'milena',         'milica': 'milice',
    'miloš': 'miloše',          'milojko': 'milojko',       'milomir': 'milomire',
    'miodrag': 'miodraže',      'mirko': 'mirko',           'miroljub': 'miroljube',
    'momčilo': 'momčilo',       'momir': 'momire',          'muhamed': 'muhamede',
    'nebojša': 'nebojša',       'nemanja': 'nemanja',       'nenad': 'nenade',
    'osman': 'osmane',          'ostoja': 'ostoja',         'pavle': 'pavle',
    'petar': 'petre',           'predrag': 'predraže',      'radojica': 'radojice',
    'radomir': 'radomire',      'radoslav': 'radoslave',    'rastko': 'rastko',
    'sanja': 'sanja',           'senad': 'senade',          'slađan': 'slađan',
    'slađana': 'slađana',       'slavica': 'slavice',       'slobodan': 'slobodane',
    'snežana': 'snežana',       'sonja': 'sonja',           'srboljub': 'srboljube',
    'srđan': 'srđane',          'stojan': 'stojane',        'stojanka': 'stojanka',
    'svetlana': 'svetlana',     'tanja': 'tanja',           'tatjana': 'tatjana',
    'tomislav': 'tomislave',    'vera': 'vera',             'vesna': 'vesna',
    'vladimir': 'vladimire',    'vladislav': 'vladislave',  'vojin': 'vojine',
    'vojislav': 'vojislave',    'vojkan': 'vojkane',        'vuk': 'vuče',
    'zoran': 'zorane',          'zorana': 'zorana',         'milutin': 'milutine',
    'dobrica': 'dobrice',       'slavko': 'slavko',         'milojica': 'milojice',
    'radoje': 'radoje',         'božidar': 'božidare',      'boško': 'boško',
    'vidoje': 'vidoje',         'stanko': 'stanko',         'stanoje': 'stanoje',
    'mića': 'mićo',             'zoki': 'zoki',             'pera': 'pero',
    'bora': 'boro',             'bogdan': 'bogdane',        'mitar': 'mitre',
    'paja': 'pajo',             'srba': 'srbo',             'desimir': 'desimire',
    'nata': 'nato',             'nataša': 'nataša',         'natalija': 'natalija',
    'damjan': 'damjane',        'branislav': 'branislave',  'tijana': 'tijana',
    'aca': 'aco',               'ratar': 'ratare',          'peca': 'peco',
    'jela': 'jelo',             'ceca': 'ceco',             'mica': 'mico',
    'avram': 'avrame',          'luka': 'luka',             'staša': 'staša',
    'anka': 'anka',             'anda': 'anda',             'branislava': 'branislava',
    'bratislava': 'bratislava', 'blaža': 'blažo',           'božidar': 'božidare',
    'varvara': 'varvara',       'vojislava': 'vojislava',   'vojislav': 'vojislave',
    'vera': 'vera',             'veroslava': 'veroslava',   'višeslava': 'višeslava',
    'gavra': 'gavro',           'gaga': 'gago',             'dositej': 'dositeju',
    'dragoslava': 'dragoslava', 'đura': 'đuro',             'eleonora': 'eleonora',
    'živoslava': 'živoslava',   'zaga': 'zago',             'zorislava': 'zorislava',
    'zlata': 'zlato',           'isidora': 'isidora',       'ivka': 'ivka',
    'jagoda': 'jagoda',         'jana': 'jano',             'jevta': 'jevto',
    'jela': 'jelo',             'krsta': 'krsto',           'kruna': 'kruno',
    'krunoslava': 'krunoslava', 'laza': 'lazo',             'luka': 'luka',
    'leposava': 'leposava',     'leonida': 'leonida',       'leonora': 'leonora',
    'ljeposava': 'ljeposava',   'mateja': 'mateja',         'matej': 'matej',
    'mata': 'mato',             'mileva': 'mileva',         'milesa': 'milesa',
    'melisa': 'melisa',         'moša': 'mošo',             'mira': 'miro',
    'miroslava': 'miroslava',   'mirosava': 'mirosava',     'ninoslava': 'ninoslava',
    'negosava': 'negosava',     'ostoja': 'ostoja',         'olja': 'olja',
    'petra': 'petra',           'prvoslava': 'prvoslava',   'roksanda': 'roksanda',
    'ruža': 'ružo',             'srbislava': 'srbislava',   'stavra': 'stavro',
    'svetislava': 'svetislava', 'sima': 'simo',             'stana': 'stano',
    'stanislava': 'stanislava', 'simonida': 'simonida',     'spira': 'spiro',
    'špira': 'špiro',           'špiro': 'špiro',           'spiridon': 'spiridone',
    'toma': 'tomo',             'tomica': 'tomice',         'tomislav': 'tomislave',
    'tamara': 'tamara',         'toša': 'tošo',             'teodora': 'teodora',
    'todora': 'todora',         'cana': 'cano',             'ćira': 'ćiro',
    'hranislava': 'hranislava', 'cveta': 'cveto',           'šana': 'šano',
};

var hasOwnProp = Object.prototype.hasOwnProperty;

function toVocative(string) {

    var nominative = helpers.toString(string);

    function allButLast(n) {
        return nominative.substr(0, nominative.length - n);
    }

    function transformLast(n, to) {
        return helpers.transform(nominative.substr(-n), to);
    }

    var normalized = transliterate.toLatin(string).toLowerCase();

    if (hasOwnProp.call(dictionary, normalized)) {
        var vocative = dictionary[normalized];
        if (normalized === vocative) {
            return nominative;
        }
        return helpers.transform(nominative, vocative);
    }

    // aleksandar, petar, ...
    if (/[td]ar$/.test(normalized)) {
        return allButLast(2) + transformLast(2, 're');
    }
    if (normalized.length > 4) {
        // milica, ljubica, ... ali ne i mica, cica, ...
        if (normalized.substr(-3) === 'ica') {
            return allButLast(1) + transformLast(1, 'e');
        }
        // darinka, milka ...  ali ne i raka, mika, ...
        if (normalized.substr(-2) === 'ka') {
            if (normalized.substr(-3, 1) === 'č') {
                return allButLast(1) + transformLast(1, 'o');
            }
            return nominative;
        }
    }
    // maca, ceca, persa, bosa, kavga, sava, dada, sloba, raka ...
    if (/[scgvdbk]a$/.test(normalized) ||
        // maja ali ne i marija, sanja, pedja, ...
        /.(?![din])ja$/.test(normalized) ||
        // pera, bora, dara, ...
        /[eao]ra$/.test(normalized)
    ) {
        return allButLast(1) + transformLast(1, 'o');
    }
    // kolac
    if (normalized.substr(-4) === 'olac') {
        return allButLast(3) + transformLast(3, 'če');
    }
    // znalac
    if (normalized.substr(-4) === 'alac') {
        return allButLast(2) + transformLast(2, 'če');
    }
    // kobac
    if (normalized.substr(-3) === 'bac') {
        return allButLast(3) + transformLast(3, 'pče');
    }
    // mislilac, zetelac
    if (/[ei]lac$/.test(normalized)) {
        return allButLast(3) + transformLast(3, 'oče');
    }
    // pisac
    if (normalized.substr(-3) === 'sac') {
        return allButLast(3) + transformLast(3, 'šče');
    }
    // gnjurac
    if (normalized.substr(-4) === 'urac') {
        return allButLast(2) + transformLast(2, 'če');
    }
    // mudrac, cutuk, ...
    if (normalized.substr(-3) === 'rac' || normalized.substr(-1) === 'k') {
        return allButLast(1) + transformLast(1, 'če');
    }
    // valjevac
    if (normalized.substr(-3) === 'vac') {
        return allButLast(2) + transformLast(2, 'če');
    }
    // suzanj
    if (/[zž]anj$/.test(normalized)) {
        return nominative.replace(/[aа]([Nn][Jj]|[Њњ])$/, transformLast(2, 'nju'));
    }
    // predrag, miodrag, ...
    if (normalized.substr(-1) === 'g') {
        return allButLast(1) + transformLast(1, 'že');
    }
    // ć, đ, č, dž, š, ž, lj, nj, j
    if (/([ćđčšž]|[ln]?j|d[zž])$/.test(normalized)) {
        return nominative + transformLast(1, 'u');
    }
    // vanja, marko, mile, miki, ...
    if (/[aoei]$/.test(normalized)) {
        return nominative;
    }

    return nominative + transformLast(1, 'e');
}

module.exports = {
    toVocative: toVocative,
};
