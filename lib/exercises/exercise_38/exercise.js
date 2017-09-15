const chalk = require('chalk');

module.exports = function() {
	console.log(
		chalk.yellow(
			`EXERCISE 38:

        Write a function called "genProfile" that takes a parameter of type <object> called "person" and returns a string in the following format: "<first name> <last name>: born <birth year>, works at <work place> since <started work>, lives at <street address>, <city>, <state>, <zip>."

        Person objects will be of the folowing shape: {
            firstName: 'Sam',
            lastName: 'Duzett',
            birthYear: 1976,
            work: {
                company: 'ACME, Inc.',
                startYear: 1978
            },
            address: {
                street: '546 Baker St.',
                city: 'Philadelphia',
                state: 'South Dakota',
                zip: 84604
            }
        }
        
        For example:

        genProfile({
            firstName: 'Martha',
            lastName: 'Flowers',
            birthYear: 1991,
            work: {
                company: 'Pixar',
                startYear: 2016
            },
            address: {
                street: '1955 Disney Way',
                city: 'Anaheim',
                state: 'California',
                zip: 84602
            }
        }) should return "Martha Flowers: born 1991, works at Pixar since 2016, lives at 1955 Disney Way, Anaheim, California, 84602."

        genProfile({
            firstName: 'Amy',
            lastName: 'Hickock',
            birthYear: 1985,
            work: {
                company: 'University Hospital',
                startYear: 2002
            },
            address: {
                street: '727 Penelope St.',
                city: 'Phoenix',
                state: 'Arizona',
                zip: 97138
            }
        }) should return "Amy Hickock: born 1985, works at University Hospital since 2002, lives at 727 Penelope St., Phoenix, Arizona, 97138."

        genProfile({
            firstName: 'David',
            lastName: 'Dale',
            birthYear: 1972,
            work: {
                company: 'The Chocolate Milk Co.',
                startYear: 1989
            },
            address: {
                street: '652 Bulldog Dr.',
                city: 'Wilksberry',
                state: 'Pennsylvania',
                zip: 32510
            }
        }) should return "David Dale: born 1972, works at The Chocolate Milk Co. since 1989, lives at 652 Bulldog Dr., Wilksberry, Pennsylvania, 35210."
        `
		)
	);
	process.exit();
};
