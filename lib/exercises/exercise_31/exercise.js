const chalk = require("chalk");

module.exports = function() {
  console.log(
    chalk.yellow(
      `EXERCISE 31:

        Write a function called "isValidEuro" that takes a parameter called "serial" and returns whether it is a valid euro banknote serial number.

        Valid serial numbers are comprised of 12 characters: one capital letter followed by 11 numerical digits, just like in exercise 30

        Additionally, to further validate a serial number, you'll have to follow an algorithm:
            1) Convert the letter to a number (A=1,B=2,... Z=26)
            2) Add that number to each digit in the serial
            3) Convert the resulting sum into a string
            4) Convert each digit of the resulting string to a separate number and add them together
            5) While the resulting sum is 10 or higher, repeat steps 3 and 4
            6) Once the resulting sum is less than 10, if it is 8, then it is valid. Any other number is invalid.

        For example:

        'X04135981862' -> X = 24
        24+0+4+1+3+5+9+8+1+8+6+2 = 71
        71 -> '71'
        7 + 1 = 8
        8 is valid!
        isValidEuro("X04135981862") should return true

        'Z95784996599' -> Z = 26
        26+9+5+7+8+4+9+9+6+5+9+9 = 106
        106 -> '106'
        1 + 0 + 6 = 7
        7 is invalid!
        isValidEuro("Z95784996599") should return false

        'Y84673885488' -> Y = 25
        25+8+4+6+7+3+8+8+5+4+8+8 = 94
        94 -> '94'
        9 + 4 = 13
        13 >= 10, so repeat steps 3 & 4
        13 -> '13'
        1 + 3 = 4
        4 is invalid!
        isValidEuro("Y84673885488") should return false

        'W94684895598' -> W = 23
        23+9+4+6+8+4+8+9+5+5+9+8 = 98
        98 -> '98'
        9 + 8 = 17
        17 >= 10, so repeat steps 3 & 4
        17 -> '17'
        1 + 7 = 8
        8 is valid!
        isValidEuro("W94684895598") should return true
         `
    )
  );
  process.exit();
};
