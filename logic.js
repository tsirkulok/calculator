const readline = require('node:readline/promises');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function sum(num1,num2) {
    return num1 + num2;

}
function sub(num1,num2) {
    return num1 - num2;
}
function mul(num1,num2) {
    return num1 * num2;
}
function div(num1,num2) {
    if (num2 === 0) {
        return "Division by zero error";
    }
    return num1 / num2;
}
async function calc() {
    const number1 = await rl.question("write the first number: ");
    
    const number2 = await rl.question("write the second number: ");
    
    const oper = await rl.question("write the operator: ");
    const n1 = parseFloat(number1);
    const n2 = parseFloat(number2);
    if (isNaN(n1) || isNaN(n2)) {
        console.log("you must write the number!")
        rl.close()
        return
    } 
    
    
    switch (oper) {
        
        case "+":
            console.log(`result is:${sum(n1,n2)}`);
            break;
        case "-":
            console.log(`result is:${sub(n1,n2)}`);
            break;
        case "*":
            console.log(`result is:${mul(n1,n2)}`);
            break;       
        case "/":
            console.log(`result is:${div(n1,n2)}`)     
    
        }
rl.close()}
calc();