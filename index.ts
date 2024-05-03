#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { messsage: "Enter first number", type: "number", name: "firstNumber" },
  { messsage: "Enter second number", type: "number", name: "secondNumber" },
  {
    message: "select option",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtratction", "Multiplication", "Division"],
  },
]);

if (answer.operator === "Addition") {
  console.log(answer.firstNumber + answer.secondNumber);
} else if (answer.operator === "Subtratction") {
  console.log(answer.firstNumber - answer.secondNumber);
} else if (answer.operator === "Multiplication") {
  console.log(answer.firstNumber * answer.secondNumber);
} else if (answer.operator === "Division") {
  console.log(answer.firstNumber / answer.secondNumber);
} else {
  console.log("plz select valid opertor");
}
