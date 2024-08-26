// Start coding here
let calculator = {};

let add = (a,b) => a + b;
console.log(add(10,5));

let subtract = (a,b) => a - b;
console.log(subtract(10,5));

let multiply = (a,b) => a * b;
console.log(multiply(10,5));

let divide = (a,b) => a / b;
console.log(divide(10,5));

calculator.add = add(10,5);
calculator.subtract = subtract(10,5);
calculator.multiply = multiply(10,5);
calculator.divide = divide(10,5);

console.log(calculator);

calculator.add = add(10,20);
let addResult = calculator.add;
console.log(addResult);

calculator.divide = divide(3000,10);
let divideResult = calculator.divide;
console.log(divideResult);

console.log(calculator);

