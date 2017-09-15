const chalk = require('chalk');

module.exports = function() {
	console.log(
		chalk.yellow(
			`EXERCISE 42:

        Adapting the constructor you created in 41, add a "sound" property to the constructor. 
        Additionally, add a method to Animal's prototype called "makeSound" that, when called, returns the sound
            of that animal in the format "<sound>, <sound>!"
        
        For example:

        const fox = new Animal('Red Fox','vulpes vulpes','vulpes','canidae',10,'red','bark') 
            should return a new instance of Animal {
                informalSpecies: 'Red Fox', 
                species: 'vulpes vulpes', 
                genus: 'vulpes', 
                family: 'canidae', 
                weight: 10, 
                color: 'red',
                sound: 'bark'
                extinct: false
            }
        fox.makeSound() should return "bark, bark!"
        `
		)
	);
	process.exit();
};
