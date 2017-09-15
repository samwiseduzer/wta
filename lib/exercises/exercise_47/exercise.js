const chalk = require('chalk');

module.exports = function() {
	console.log(
		chalk.yellow(
			`EXERCISE 47:

		Using the ES2015 class syntax, create a class called Person with a constructor setting the properties 
			"name", "weight", and "age", and a default property called "isAlive" set to true
		Additionally, add a method to Person called greet() that takes a parameter "name" and returns a string in the format 
			"Hi, <name>, my name is <person's name>!" without using concatenation
		Create a class called Employee that inherits Person and whose constructor sets the properties 
			"salary" and "startYear" in addition to adding a default "employed" property set to true
			and making use of the Person constructor for the normal Person properties, but with the age of 25, b/c 
			the employer using this software practices age discrimination and only hires 25-year-olds
		Add a method on Employee called "fire" that changes the value of "employed" to false

        For example:
        
        const myPerson = new Person('Steve',160,35);
		//myPerson should be {name: 'Steve', weight: 160, age: 35, isAlive: true}
		
		myPerson.greet('Bob');
		//should return "Hi, Bob, my name is Steve!"

		const myEmployee = new Employee('Sylvester',175,50000,1992);
		//myEmployee should be {name: 'Sylvester', weight: 175, isAlive: true, salary: 50000, startYear: 1992, employed: true}

		myEmployee.greet('Ed');
		should return "Hi, Ed, my name is Sylvester!"

		myEmployee.fire();
		//myEmployee should be {name: 'Sylvester', weight: 175, isAlive: true, salary: 50000, startYear: 1992, employed: false}
		
        `
		)
	);
	process.exit();
};
