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
console.groupCollapsed("Exercise 3")

const l = 3
const w = 5
const a = (l * w)
console.log(a + ' is the area of a rectangle');
console.groupEnd();
// Exercise 4
console.groupCollapsed("Exercise 4")

const num = 5
if(num % 2 == 0) {
    console.log("true");
} else {
    console.log("false");
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