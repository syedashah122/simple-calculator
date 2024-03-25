#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter firstNumber", type: "number", name: "firstNumber" },
    { message: "Enter secondNumber", type: "number", name: "secondNumber" },
    {
        message: "select one of the operators to perform operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "subtraction", "multiplication", "divison"]
    },
]);
// conditional statement
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "divison") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("please select valid operator");
}
