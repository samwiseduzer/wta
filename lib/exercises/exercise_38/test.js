const test = require('../../test');

module.exports = function(argv) {
	let options = {
		fnName: 'genProfile',
		esVersion: 5,
		allowHigherOrderFns: false
	};

	const tests = [];
	tests.push({
		input: `genProfile({
            firstName: 'Cathy',
            lastName: 'Hepburn',
            birthYear: 1960,
            work: {
                company: 'Brigham Young University',
                startYear: 1986
            },
            address: {
                street: '450 Chestnut Dr.',
                city: 'Springville',
                state: 'Utah',
                zip: 84721
            }
        })`,
		expected:
			'Cathy Hepburn: born 1960, works at Brigham Young University since 1986, lives at 450 Chestnut Dr., Springville, Utah, 84721.'
	});
	tests.push({
		input: `genProfile({
            firstName: 'Weston',
            lastName: 'Smith',
            birthYear: 1980,
            work: {
                company: 'Kodak',
                startYear: 2001
            },
            address: {
                street: '230 S Film Ave.',
                city: 'Portland',
                state: 'Oregon',
                zip: 23567
            }
        })`,
		expected:
			'Weston Smith: born 1980, works at Kodak since 2001, lives at 230 S Film Ave., Portland, Oregon, 23567.'
	});
	tests.push({
		input: `genProfile({
            firstName: 'Daniel',
            lastName: 'McGuillecutty',
            birthYear: 1960,
            work: {
                company: 'Utah State University',
                startYear: 1976
            },
            address: {
                street: '2468 Atlantic City Ave NE',
                city: 'Albequerque',
                state: 'Utah',
                zip: 84608
            }
        })`,
		expected:
			'Daniel McGuillecutty: born 1960, works at Utah State University since 1976, lives at 2468 Atlantic City Ave NE, Albequerque, Utah, 84608.'
	});

	test(argv, tests, options);
};
