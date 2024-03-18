import inquirer from "inquirer";
import chalk from "chalk";

//Guessing the number game
let minnumber = 1;
let maxnumber = 10;
let generatenumber = Math.floor(Math.random() * 10);
let usernumber = await inquirer.prompt([
  {
    type: "number",
    name: "new",
    message: chalk.yellow("Guess the number 1 to 10"),
  },
]);
console.log(chalk.red(usernumber.new));
if (generatenumber === usernumber.new) {
  console.log(chalk.magenta("You guessed the right number"));
} else {
  console.log(chalk.blue("You guessed the wrong number"));
}
