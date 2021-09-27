let calculator = {
    read() {
        this.num1 = +prompt('Number 1?', 0);
        this.num2 = +prompt('Number 2?', 0);
    },
    sum() {
        return "Sum Total: " + (this.num1 + this.num2);
    },
    multiply() {
        return "Multiplication Total: " + (this.num1 * this.num2);
    }
};
alert("Welcome to JavaScript Calculator!");
calculator.read();
alert(calculator.sum());
alert(calculator.multiply());