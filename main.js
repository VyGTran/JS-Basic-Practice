const num = prompt("Number: ");
// Exercise 1

console.groupCollapsed("Exercise 1")

console.log("Hello, World!");

console.groupEnd();
// Exercise 2
console.groupCollapsed("Exercise 2")

const name = 'Vy Tran';
console.log(name)

console.groupEnd();
// Exercise 3
function operation() {
const valNum1 = document.getElementById("num1");
const valNum2 = document.getElementById("num2");
console.groupCollapsed("Exercise 3")
const a = (valNum2 * valNum1)
console.log(a + ' is the area of a rectangle');
}
console.groupEnd();
// Exercise 4
console.groupCollapsed("Exercise 4")

if(num % 2 == 0) {
    console.log(num + " is Even");
} else {
    console.log(num + " is Odd");
}
console.groupEnd();
// Exercise 5
console.groupCollapsed("Exercise 5")

const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
console.groupEnd();
// Exercise 6 
console.groupCollapsed("Exercise 6")

const username = prompt("Enter your name: ");
console.log("Hi, welcome back " + username);

console.groupEnd();
// Exercise 7
console.groupCollapsed("Exercise 7")
function factorial(num) {
    if (num < 0)
    return -1;
else if (num == 0)
    return 1;
    else  {
        return (num * factorial(num - 1));
    };
};
console.log(factorial(num));
console.groupEnd();
// Exercise 8
console.groupCollapsed("Exercise 8")
function leapYear(year) {
    let leap = prompt ('What is the current year:');
if(leap % 4 == 0) {
console.log(leap + ' is a leap year');
} else {
    console.log(leap + ' is not a leap year');
}
}
leapYear();
console.groupEnd();
// Exercise 9
console.groupCollapsed("Exercise 9")
let sum = 0
function numSum(){
    while (sum < 100) {
    if(sum) {
        sum = 100 * (100 + 1)/2
        console.log(sum) 
    }
    sum++;
    }  
};
console.log(numSum());
console.groupEnd();
// Exercise 10
console.groupCollapsed("Exercise 10")

function operation() {

    const valNum1 = document.getElementById("num1").value;


    const valNum2 = document.getElementById("num2").value;

    const Add = parseInt(valNum1) + parseInt(valNum2);
    console.log(Add);

    const Sub = valNum1 - valNum2;
    console.log(Sub);

    const Mul = valNum1 * valNum2;
    console.log(Mul);

    const Div = valNum1 / valNum2;
    console.log(Div)
}
console.groupEnd();
// Exercise 11 
console.groupCollapsed("Exercise 11")

const string = "string";
console.log(string)
const number = 88;
console.log(number)
const boolean = true;
console.log(boolean)
const invalid = null;
console.log(invalid);
let undefine;
console.log(undefine)
const user = {
    name: 'Vy',
};
console.log(user)
const array = ['list1', 'list2', 'list3'];
console.log(array);
const valNum1 = document.getElementById("num1");
const valNum2 = document.getElementById("num2");
const notNumber = valNum1 * valNum2;
console.log(notNumber);
console.groupEnd();