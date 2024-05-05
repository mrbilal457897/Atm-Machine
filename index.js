#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 15000; //Dollar
let myPin = 1122;
let fastCash = [10000, 5000, 1000, 500];
let pinAns = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Please enter your pin",
    }
]);
if (pinAns.pin === myPin) {
    console.log("Correct pin code !");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            choices: ["withdraw", "balanceInquiry", "fastCash"],
            message: "Please select one option",
        }
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Please enter your amount",
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("You dont have enough money to make transaction !");
        }
        else
            myBalance -= amountAns.amount;
        {
            console.log("your remaining balance is =" + (myBalance));
        }
        ;
    }
    if (operationAns.operation === "balanceInquiry") {
        console.log("Your current balance is =" + (myBalance));
    }
    if (operationAns.operation === "fastCash") {
        let fastcashAns = await inquirer.prompt([
            {
                name: "cash",
                type: "list",
                choices: ["10000", "5000", "1000", "500"],
                message: "Please enter your fast cash"
            }
        ]);
        if (fastcashAns.cash > myBalance) {
            console.log("You dont have enough money to make transaction !");
        }
        else
            myBalance -= fastcashAns.cash;
        {
            console.log("Your balance is remaining =" + (myBalance));
        }
    }
}
else {
    console.log("Try again !Your pin incorrect");
}
