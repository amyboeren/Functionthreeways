//function declaration:
function multiplyNumber(Num1, Num2) {
    const multiplyOne = Num1 * Num1;
    const multiplyTwo = Num2 * Num2;
    const Total = multiplyOne + multiplyTwo;
    return Total * Total;
}
console.log(multiplyNumber(4, 5)); // antwoord = 1681

//function expression:
const multiplyNum = function (Number1, Number2) {
    const multiplyNum1 = Number1 * Number1;
    const multiplyNum2 = Number2 * Number2;
    const Totally = multiplyNum1 + multiplyNum2;
    return Totally * Totally;
}
console.log(multiplyNum(4, 5)); // antwoord = 1681

//arrow function:
const multiplyN = (Numb1, Numb2) => {
    const multiplyN1 = Numb1 * Numb1;
    const multiplyN2 = Numb2 * Numb2;
    const Totall = multiplyN1 + multiplyN2;
    return Totall * Totall;
}
console.log(multiplyN(4, 5)); // antwoord = 1681