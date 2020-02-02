// node v12.14.1
// npm v6.13.4
// tsc v3.7.5
// Boolean 
var isDone = false;
console.log(isDone); // false
// Number
var decimal = 6; // 十进制
var hex = 0xf00d; // 十六进制
var binary = 10; // 二进制
var octal = 484; // 八进制
console.log(decimal, hex, binary, octal); // 6 61453 10 484
// String
var color = 'blue';
console.log(color); // blue
color = 'red';
console.log(color); // red
var fullName = "Bob Bobbington";
var age = 37;
var sentence = "Hello, my name is " + fullName + ". I'll be " + (age + 1) + " years old next month.";
console.log(sentence); // Hello, my name is Bob Bobbington. I'll be 38 years old next month.
var sentenceSecond = 'Hello, my name is ' + fullName + ' I will be ' + (age + 1) + ' years old next month.';
console.log(sentenceSecond); // Hello, my name is Bob Bobbington I will be 38 years old next month.
// Array
var list = [1, 2, 3];
console.log(list); // [ 1, 2, 3 ]
var listSecond = [1, 2, 3];
console.log(listSecond); // [ 1, 2, 3 ]
// Tuple
var x;
x = ['hello', 1];
console.log(x); // [ 'hello', 1 ]
// x = [1, 'hello'] // basic.ts:35:6 - error TS2322: Type 'number' is not assignable to type 'string'.
// console.log(x)
// x = ['hello', 1, 2] // basic.ts:37:1 - error TS2322: Type '[string, number, number]' is not assignable to type '[string, number]'.
// console.log(x)
console.log(x[0].substring(1)); // ello
// console.log(x[1].substring(1)) // basic.ts:40:18 - error TS2339: Property 'substring' does not exist on type 'number'.
// x[3] = 'world' // basic.ts:41:3 - error TS2493: Tuple type '[string, number]' of length '2' has no element at index '3'.
// console.log(x[5].toString()) // basic.ts:42:15 - error TS2493: Tuple type '[string, number]' of length '2' has no element at index '5'.
// Enum
console.log('------- Enum ------------');
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
console.log(Color); // { '0': 'Red', '1': 'Green', '2': 'Blue', Red: 0, Green: 1, Blue: 2 }
var c = Color.Green;
console.log(c); // 1
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 3] = "Blue";
})(Color2 || (Color2 = {}));
var c2 = Color2.Green;
console.log(c2); // 2
var Color3;
(function (Color3) {
    Color3[Color3["Red"] = 1] = "Red";
    Color3[Color3["Green"] = 2] = "Green";
    Color3[Color3["Blue"] = 3] = "Blue";
})(Color3 || (Color3 = {}));
console.log(Color3); // { '1': 'Red', '2': 'Green', '3': 'Blue', Red: 1, Green: 2, Blue: 3 }
var colorName = Color3[2];
console.log(colorName); // Green
// Any
console.log('-------- Any -------------');
var notSure = 4;
console.log(notSure, typeof notSure); // 4 number
notSure = 'maybe a string instead';
console.log(notSure, typeof notSure); // maybe a string instead string
notSure = false;
console.log(notSure, typeof notSure); // false boolean
var notSure2 = 4;
console.log(notSure2, typeof notSure2); // 4 number
// notSure2.ifItExists() // (node basic.js) TypeError: notSure2.ifItExists is not a function
notSure2.toFixed();
var prettySure = 4;
// prettySure.toFixed() // basic.ts:75:12 - error TS2339: Property 'toFixed' does not exist on type 'Object'.
console.log(prettySure); // 4
var list2 = [1, true, 'free'];
console.log(list2); // [ 1, true, 'free' ]
list2[1] = 100;
console.log(list2); // [ 1, 100, 'free' ]
// Void
function warnUser() {
    console.log('This is my warning message');
}
var unusable = undefined;
console.log(unusable); // undefined
unusable = null;
console.log(unusable); // null
// Null and Undefined
var u = undefined;
console.log(u); // undefined
var n = null;
console.log(n); // null
// Never
var xn;
var yn;
// xn = 123 // basic.ts:107:1 - error TS2322: Type '123' is not assignable to type 'never'.
// xn = (() => { throw new Error('exception') })() // (node basic.js) Error: exception
// yn = (() => { throw new Error('exception') })() // (node basic.js) Error: exception
function error(message) {
    throw new Error('exception');
}
