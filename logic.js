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
    while(true){
        const number1 = await rl.question("\u001b[34mwrite the first number: \u001b[0m");
    
        const number2 = await rl.question("\u001b[34mwrite the second number: \u001b[0m");
    
        const oper = await rl.question("\u001b[34mwrite the operator: \u001b[0m");
        const n1 = parseFloat(number1);
        const n2 = parseFloat(number2);
        if (isNaN(n1) || isNaN(n2)) {
            console.log("\u001b[31myou must write the number!\u001b[0m")
            continue
            ''
        } 
    
    
        switch (oper) {
        
            case "+":
                console.log(`\u001b[32mresult is:${sum(n1,n2)}\u001b[0m`);
                break;
            case "-":
                console.log(`\u001b[32mresult is:${sub(n1,n2)}\u001b[0m`);
                break;
            case "*":
                console.log(`\u001b[32mresult is:${mul(n1,n2)}\u001b[0m`);
                break;           
            case "/":
                console.log(`\u001b[32mresult is:${div(n1,n2)}\u001b[0m`)     
                break;
            default:
                console.log("\u001b[31mще не додано :)\u001b[0m")
                break;    
        }
        let dream = await rl.question("\u001b[33mбажаєте вийти(y or n)?\u001b[0m\n")   
        if(dream === "y") {
            rl.close()
            break;
    }
        }
    }
calc();