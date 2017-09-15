const chalk = require('chalk');

module.exports = function() {
	console.log(
		chalk.yellow(
			`EXERCISE 48:

		Using the ES2015 class syntax, create a class called Stack
			Stack's constructor will take no parameters, but will have a size property initialized to 0 and a content property initialized to an empty array
			Add a method onto Stack called push that takes a parameter called elem and adds it to the end of content and adds 1 to size
			Add a method onto Stack called pop that (if the size is > 1) decreases size by 1 and removes the last element of content and returns it, otherwise it returns null
		Create a class called List similar to that in exercise 44, but using class syntax instead of prototype
			Add a method onto List called reverse that reverses the order of List's elements using your Stack class

        For example:
        
        const myStack = new Stack();
		//myStack should be {content: [], size: 0}

		myStack.push(5);
		//myStack should be {content:[5], size: 1}

		myStack.push('sam');
		//myStack should be {content:[5,'sam'], size: 2}

		myStack.push(56);
		//myStack should be {content:[5,'sam',56], size: 3}

		myStack.pop();
		//should return 56
		//myStack should be {content:[5,'sam'], size: 2}

		var myList = new List();
		//myList should be {size: 0}
		
        myList.add(5);
		//my list should be {0: 5, size: 1}
		
        myList.add('steve');
		//myList should be {0: 5, 1: 'steve', size: 2}

		myList.reverse();
		//myList should be {0: 'steve', 1: 5, size: 2}

		myList.reverse();
		//myList should be {0: 5, 1: 'steve', size: 2}
		
        myList.remove(0);
		//myList should be {0: 'steve', size: 1}
		
        myList.remove(1);
		//myList should be {0: 'steve', size: 1}
        `
		)
	);
	process.exit();
};
