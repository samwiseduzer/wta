function isValidPhone(number){
    if(!isAllNumbers(number)){
        return false;
    }
    else if(!isCorrectLength(number)){
        return false;
    }
    else if(!isValidFormat(number)){
        return false;
    }
    else{
        return true;
    }
}

function isAllNumbers(str){
    for(let i = 0; i < str.length; i++){
        if(!isNumber(str[i])){
            return false;
        }
    }
    return true;
}

function isCorrectLength(str){
    return str.length === 10;
}

function isValidFormat(str){
    return hasCorrectPrefix(str) && hasValidNetwork(str);
}

function isNumber(str){
    return isFinite(str);
}

function hasCorrectPrefix(str){
    return str.slice(0,2) === '08';
}

function hasValidNetwork(str){
    return true;
}