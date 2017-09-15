const test = require('../../test');

module.exports = function(argv) {
	let options = {
		fnName: 'isValidCard',
		esVersion: 5,
		allowHigherOrderFns: false
	};

	const tests = [];
	tests.push({
		input: 'isValidCard("4r75937769982456")',
		expected: false
	});
	tests.push({
		input: 'isValidCard("5675937769982456")',
		expected: false
	});
	tests.push({
		input: 'isValidCard("417593776998245")',
		expected: false
	});
	tests.push({
		input: 'isValidCard("3775937769982456")',
		expected: false
	});
	tests.push({
		input: 'isValidCard("52759377699824567")',
		expected: false
	});
	tests.push({
		input: 'isValidCard("537593776998245")',
		expected: false
	});
	tests.push({
		input: 'isValidCard("601193776998245")',
		expected: false
	});
	tests.push({
		input: 'isValidCard("3841937769982478")',
		expected: false
	});
	tests.push({
		// valid visa length 16
		input: 'isValidCard("4419096238876093")',
		expected: true
	});
	tests.push({
		//valid visa length 13
		input: 'isValidCard("4511583179587")',
		expected: true
	});
	tests.push({
		//invalid visa length 16
		input: 'isValidCard("4434244315339585")',
		expected: false
	});
	tests.push({
		//invalid visa length 13
		input: 'isValidCard("4299214964796")',
		expected: false
	});
	tests.push({
		//valid american_express start 34
		input: 'isValidCard("346058972592845")',
		expected: true
	});
	tests.push({
		//valid american_express start 37
		input: 'isValidCard("370087060417408")',
		expected: true
	});
	tests.push({
		//invalid american_express start 34
		input: 'isValidCard("343996973376451")',
		expected: false
	});
	tests.push({
		//invalid american_express start 37
		input: 'isValidCard("375015716647104")',
		expected: false
	});
	tests.push({
		//valid mastercard start 51
		input: 'isValidCard("5180031369791559")',
		expected: true
	});
	tests.push({
		//valid mastercard start 53
		input: 'isValidCard("5359439838994891")',
		expected: true
	});
	tests.push({
		//valid mastercard start 55
		input: 'isValidCard("5562960962483057")',
		expected: true
	});
	tests.push({
		//invalid mastercard start 51
		input: 'isValidCard("5170638286486792")',
		expected: false
	});
	tests.push({
		//invalid mastercard start 53
		input: 'isValidCard("5300906536428132")',
		expected: false
	});
	tests.push({
		//invalid mastercard start 55
		input: 'isValidCard("5552594463285438")',
		expected: false
	});
	tests.push({
		//valid discover start 6011
		input: 'isValidCard("6011997577111850")',
		expected: true
	});
	tests.push({
		//invalid discover start 6011
		input: 'isValidCard("6011569647628689")',
		expected: false
	});
	tests.push({
		//valid diners_club start 300
		input: 'isValidCard("30040738254671")',
		expected: true
	});
	tests.push({
		//valid diners_club start 303
		input: 'isValidCard("30397692084951")',
		expected: true
	});
	tests.push({
		//valid diners_club start 305
		input: 'isValidCard("30568720367010")',
		expected: true
	});
	tests.push({
		//valid diners_club start 36
		input: 'isValidCard("36489296829941")',
		expected: true
	});
	tests.push({
		//valid diners_club start 38
		input: 'isValidCard("38102880270038")',
		expected: true
	});
	tests.push({
		//invalid diners_club start 300
		input: 'isValidCard("30016820551706")',
		expected: false
	});
	tests.push({
		//invalid diners_club start 303
		input: 'isValidCard("30358439088254")',
		expected: false
	});
	tests.push({
		//invalid diners_club start 305
		input: 'isValidCard("30542091065502")',
		expected: false
	});
	tests.push({
		//invalid diners_club start 36
		input: 'isValidCard("36943356658614")',
		expected: false
	});
	tests.push({
		//invalid diners_club start 38
		input: 'isValidCard("38154529951823")',
		expected: false
	});
	test(argv, tests, options);
};
