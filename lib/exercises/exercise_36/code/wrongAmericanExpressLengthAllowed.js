function isValidCardFormat(number){
    if(!isAllNumbers(number)){
        return false;
    }
    const cardType = getCardType(number);
    if(!cardType){
        return false;
    }
    return isValidLength(cardType,number.length);
}

function isAllNumbers(str){
    for(let i = 0; i < str.length; i++){
        if(!isNumber(str[i])){
            return false;
        }
    }
    return true;
}

function getCardType(str){
    const first = str[0];
    const firstTwo = first + str[1];
    const firstThree = firstTwo + str[2];
    const firstFour = firstThree + str[3];
    if(+first === 4){
        return 'visa';
    }
    else if(+firstTwo === 34 || +firstTwo === 37){
        return 'american_express';
    }
    else if(+firstTwo >= 51 && +firstTwo <= 55){
        return 'mastercard';
    }
    else if(+firstFour === 6011){
        return 'discover';
    }
    else if((+firstThree >= 300 && +firstThree <= 305) || +firstTwo === 36 || +firstTwo === 38){
        return 'diners_club';
    }
    else{
        return null;
    }
}

function isValidLength(type,length){
    if(type === 'visa'){
        return length === 13 || length === 16;
    }
    else if(type === 'american_express'){
        return true;
    }
    else if(type === 'discover' || type === 'mastercard'){
        return length === 16;
    }
    else if(type === 'diners_club'){
        return length === 14;
    }
}

function isNumber(str){
    return isFinite(str);
}
