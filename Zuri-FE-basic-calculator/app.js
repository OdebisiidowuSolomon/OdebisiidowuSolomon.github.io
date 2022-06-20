const number1 = +prompt("Enter First Number");
const operator = prompt("Enter any of the following Operator i.e +, -, *, /");
const number2 = +prompt("Enter Second Number");
console.log(typeof number1);

if (
  number1.trim == "" ||
  number2.trim == "" ||
  !["*", "-", "+", "/"].includes(operator)
) {
  alert("Invalid input!!");
} else {
  switch (operator) {
    case "+":
      alert(`${number1} + ${number2} = ${number1 + number2}`);
      break;
    case "-":
        alert(`${number1} - ${number2} = ${number1 - number2}`);
      break;
    case "*":
        alert(`${number1} * ${number2} = ${number1 * number2}`);
      break;
    case "/":
        alert(`${number1} / ${number2} = ${number1 / number2}`);
      break;
    default:
      alert("You will probably never reach this condition :)");
  }
}
