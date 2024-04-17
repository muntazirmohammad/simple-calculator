#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter your first number", type: "number", name: "firstNumber" },
  { message: "Enter your second number", type: "number", name: "secondNumber" },
  {
    message: "Select one of the operators to perfom the calculation",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

// Conditional Statement

if (answer.operator === "Addition") {
  console.log("Your answer is", answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Subtraction") {
  console.log("Your answer is", answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
  console.log("Your answer is", answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
  console.log("Your answer is", answer.firstNumber / answer.secondNumber);
}
else {
  console.log("Please select valid operator!");
}

console.log("THE END!")