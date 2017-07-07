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
        return length === 15;
    }
    else if(type === 'discover' || type === 'mastercard'){
        return length === 16;
    }
    else if(type === 'diners_club'){
        return length !== 14;
    }
}

function isNumber(str){
    return isFinite(str);
}


/*
EXERCISE 36:

        Write a test suite and specs to test a function called "isValidCardFormat"
        "isValidCardFormat" takes a parameter called "number" and returns whether it is a correctly-formatted credit card number

        Valid credit card numbers have a prefix (the first numbers) that matches a particular type of card.
        Valid credit card numbers will also have a length that matches the type of card.
                         __________________________________
                         |       Prefix        |  Length  |
                         ----------------------------------
                    Visa |          4          | 13 or 16 |
        American Express |       34 or 37      |    15    |
              MasterCard |        51-55        |    16    |
                Discover |        6011         |    16    |
            Diner's Club | 300-305 or 36 or 38 |    14    |
                         ----------------------------------

        For example:

        isValidCardFormat("4175937769982") should return true //visa with length of 13
        isValidCardFormat("4175937769982456") should return true //visa with length of 16
        isValidCardFormat("3035937769982456") should return false //Diner's Club with a length of 16
        isValidCardFormat("5635937769982456") should return false //Invalid prefix with a length of 16     
*/

describe('isValidCardFormat', function(){
    it('begins with a valid prefix', function(){
        expect(isValidCardFormat('4175937769982')).toBe(true);
        expect(isValidCardFormat('4175937769982982')).toBe(true);
        expect(isValidCardFormat('347593776998298')).toBe(true);
        expect(isValidCardFormat('377593776998298')).toBe(true);
        expect(isValidCardFormat('5175937769982298')).toBe(true);
        expect(isValidCardFormat('5275937769982298')).toBe(true);
        expect(isValidCardFormat('5375937769982298')).toBe(true);
        expect(isValidCardFormat('5475937769982298')).toBe(true);
        expect(isValidCardFormat('5575937769982298')).toBe(true);
        expect(isValidCardFormat('6011937769982298')).toBe(true);
        expect(isValidCardFormat('30059377699823')).toBe(true);
        expect(isValidCardFormat('30159377699823')).toBe(true);
        expect(isValidCardFormat('30259377699823')).toBe(true);
        expect(isValidCardFormat('30359377699823')).toBe(true);
        expect(isValidCardFormat('30459377699823')).toBe(true);
        expect(isValidCardFormat('30559377699823')).toBe(true);
        expect(isValidCardFormat('36759377699823')).toBe(true);
        expect(isValidCardFormat('38759377699823')).toBe(true);
        expect(isValidCardFormat('33759377699823')).toBe(false);
        expect(isValidCardFormat('35759377699823')).toBe(false);
        expect(isValidCardFormat('337593776998298')).toBe(false);
        expect(isValidCardFormat('357593776998298')).toBe(false);
        expect(isValidCardFormat('7575937769982986')).toBe(false);
    });

    it('is only comprised of numbers', function(){
        expect(isValidCardFormat('4175937769982')).toBe(true);
        expect(isValidCardFormat('347593776998298')).toBe(true);
        expect(isValidCardFormat('5475937769982298')).toBe(true);
        expect(isValidCardFormat('6011937769982298')).toBe(true);
        expect(isValidCardFormat('30259377699823')).toBe(true);
        expect(isValidCardFormat('38759377699823')).toBe(true);
        expect(isValidCardFormat('41k5937769982')).toBe(false);
        expect(isValidCardFormat('34759&)776998298')).toBe(false);
        expect(isValidCardFormat('547593_769982298')).toBe(false);
        expect(isValidCardFormat('6011937 69982298')).toBe(false);
    });

    describe('visa', function(){
        it('should have a length of 13 or 16', function(){
            expect(isValidCardFormat('4175937769982')).toBe(true);
            expect(isValidCardFormat('4175937769982982')).toBe(true);
            expect(isValidCardFormat('417593776998298')).toBe(false);
        });
    });

    describe('american express', function(){
        it('should have a length of 15', function(){
            expect(isValidCardFormat('347593776998298')).toBe(true);
            expect(isValidCardFormat('377593776998298')).toBe(true);
            expect(isValidCardFormat('34759377699829')).toBe(false);
            expect(isValidCardFormat('3775937769982987')).toBe(false);
        });
    });

    describe('master card', function(){
        it('should have a length of 16', function(){
            expect(isValidCardFormat('5175937769982298')).toBe(true);
            expect(isValidCardFormat('5275937769982298')).toBe(true);
            expect(isValidCardFormat('5375937769982298')).toBe(true);
            expect(isValidCardFormat('5475937769982298')).toBe(true);
            expect(isValidCardFormat('5575937769982298')).toBe(true);
            expect(isValidCardFormat('547593776998229')).toBe(false);
            expect(isValidCardFormat('55759377699822985')).toBe(false);
        });
    });

    describe('discover', function(){
        it('should have a length of 16', function(){
            expect(isValidCardFormat('6011937769982298')).toBe(true);
            expect(isValidCardFormat('601193776998229')).toBe(false);
            expect(isValidCardFormat('60119377699822989')).toBe(false);
        });
    });

    describe('diners club', function(){
        it('should have a length of 14', function(){
            expect(isValidCardFormat('30059377699823')).toBe(true);
            expect(isValidCardFormat('30159377699823')).toBe(true);
            expect(isValidCardFormat('30259377699823')).toBe(true);
            expect(isValidCardFormat('30359377699823')).toBe(true);
            expect(isValidCardFormat('30459377699823')).toBe(true);
            expect(isValidCardFormat('30559377699823')).toBe(true);
            expect(isValidCardFormat('36759377699823')).toBe(true);
            expect(isValidCardFormat('38759377699823')).toBe(true);
            expect(isValidCardFormat('3005937769982')).toBe(false);
            expect(isValidCardFormat('3015937769982')).toBe(false);
            expect(isValidCardFormat('3025937769982')).toBe(false);
            expect(isValidCardFormat('3035937769982')).toBe(false);
            expect(isValidCardFormat('304593776998255')).toBe(false);
            expect(isValidCardFormat('305593776998255')).toBe(false);
            expect(isValidCardFormat('367593776998255')).toBe(false);
            expect(isValidCardFormat('387593776998255')).toBe(false);
        });
    });
});
