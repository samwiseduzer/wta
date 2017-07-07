const chalk = require('chalk');

module.exports = function() {
	console.log(
		chalk.yellow(
			`EXERCISE 7:

        Write a small function called "getDanceStyle" that takes a parameter called "time" and a parameter called "tempo" and returns the dance style that corresponds to both. If no style matches perfectly, then return the string "no match found".

        Dance Style Table:

                     +------------------------------------------+
                     |               TIME SIGNAURE              |
                     +-----------+-----------+------------------+            
                     |    4/4    |    2/4    |        3/4       |
                     +-----------+-----------+------------------+
             84-93   |           |           | 'Waltz'          |
                     +-----------+-----------+------------------+
             150-180 |           |           | 'Viennese Waltz' |
                     +-----------+-----------+------------------|
     TEMPO   112-128 | 'Cha-Cha' |           |                  |
                     +-----------+-----------+------------------+
             152-176 | 'Jive'    |           |                  |
                     +-----------+-----------+------------------+
             120-132 |           | 'Tango'   |                  |
                     +-----------+-----------+------------------+
        

        For example:

        getDanceStyle('4/4',120) should return 'Cha-Cha'
        getDanceStyle('2/4',120) should return 'Tango'
        getDanceStyle('3/4',94) should return 'no match found'
         `
		)
	);
	process.exit();
};
