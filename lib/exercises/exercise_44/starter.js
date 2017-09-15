/*
EXERCISE 44:

        Create a constructor called "List" that takes no parameters, but has a default property "size" that's set to 0 
            and a prototype with the following methods:
                add: creates a new property on this instance of List with a key called whatever the current value of "size" is and a value of whatever is passed-into "add". Add 1 to "size"
                remove: if the input into "remove" is a number < "size" and >= 0, remove the property whose key is equal to that number. Then, for any property whose key is greater than the removed key, decrease its key by 1. Remove 1 from "size"
                * You'll notice that this is similar to creating a simplified array

        For example:
        
        const myList = new List();
        //myList should be {size: 0}
        myList.add(5);
        //my list should be {0: 5, size: 1}
        myList.add('steve');
        //myList should be {0: 5, 1: 'steve', size: 2}
        myList.remove(0);
        //myList should be {0: 'steve', size: 1}
        myList.remove(1);
        //myList should be {0: 'steve', size: 1}
*/

function List() {
	var val = 1;
	return val;
}
