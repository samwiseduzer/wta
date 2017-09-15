function isValidPhone(number){
    if(!isAllNumbers(number)){
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
    return str.length >= 10;
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
    return['3','5','6','7'].includes(str[2]);
}

describe('isValidPhone', function() {
	it('should be 10 digits', function() {
		expect(isValidPhone('087000000')).toBe(false);
		expect(isValidPhone('0870000000')).toBe(true);
		expect(isValidPhone('08700000000')).toBe(false);
	});
	it('should begin with "08"', function() {
		expect(isValidPhone('0870000000')).toBe(true);
		expect(isValidPhone('0770000000')).toBe(false);
		expect(isValidPhone('6670000000')).toBe(false);
	});
	it('should have a valid third digit', function() {
		expect(isValidPhone('0830000000')).toBe(true);
		expect(isValidPhone('0850000000')).toBe(true);
		expect(isValidPhone('0860000000')).toBe(true);
		expect(isValidPhone('0870000000')).toBe(true);
		expect(isValidPhone('0840000000')).toBe(false);
		expect(isValidPhone('0820000000')).toBe(false);
	});
});

