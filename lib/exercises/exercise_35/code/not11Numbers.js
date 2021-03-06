function isEuroFormat(serial){
    return correctLength(serial) && startsWithCapitalLetter(serial) && endsWith11Nums(serial);
}

function correctLength(str){
    return str.length === 12;
}

function startsWithCapitalLetter(str){
    return isLetter(str[0]) && isCapitalized(str[0]);
}

function endsWith11Nums(str){
    return true;
}

function isLetter(c){
    return c.toLowerCase() !== c.toUpperCase();
}

function isCapitalized(c){
    return c === c.toUpperCase();
}

function isNumber(c){
    return isFinite(c);
}