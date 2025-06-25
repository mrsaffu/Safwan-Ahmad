/* 
Problem-2s: Create a small calculator which performs operations such as Addition, Subtraction, Multiplication and Division using class.
  Calculator inputs :> ‘a’, ‘b’ and ‘type of operation’
  Datatype :> ‘a’ = double, ‘b’ = double, ‘type of operation’ = string
  */

class Calculator {
    constructor(a, b, operation) {
        this.a = a;
        this.b = b;
        this.operation = operation.toLowerCase();
    }

    calculate() {
        switch (this.operation) {
            case 'add':
                return this.a + this.b;
            case 'subtract':
                return this.a - this.b;
            case 'multiply':
                return this.a * this.b;
            case 'divide':
                return this.b !== 0 ? this.a / this.b : 'Cannot divide by zero';
            default:
                return 'Invalid operation';
        }
    }
}

// Example usage:
const add = new Calculator(10, 20, 'add')
const sub = new Calculator(100, 80, 'subtract')
const mult = new Calculator(10, 8, 'multiply')
const div = new Calculator(10, 5, 'divide');

console.log(`Add : ${add.a} + ${add.b} = ${add.calculate()}`);
console.log(`Sub : ${sub.a} - ${sub.b} = ${sub.calculate()}`);
console.log(`Mult : ${mult.a} * ${mult.b} = ${mult.calculate()}`);
console.log(`Divide : ${div.a} / ${div.b} = ${div.calculate()}`);