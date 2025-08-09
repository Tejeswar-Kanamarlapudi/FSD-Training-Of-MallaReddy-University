let num1 = Number(prompt("Enter a Number a:"));
let num2 = Number(prompt("Enter a Number b:"));
let num3 = Number(prompt("Enter a Number c:"));

// alert(typeof num1)

if (num1>=num2 && num1>=num3) {
    alert(`The Biggest number is ${num1}`); 
} else if (num2>=num1 && num2>=num3) {
    alert(`The biggest number is ${num2}`);
} else {
    alert(`The biggest number is ${num3}`);
}