// node v12.14.1
// npm v6.13.4
// tsc v3.7.5

// Boolean 
let isDone: boolean = false
console.log(isDone) // false

// Number
let decimal: number = 6 // 十进制
let hex: number = 0xf00d // 十六进制
let binary: number = 0b1010 // 二进制
let octal: number = 0o744 // 八进制
console.log(decimal, hex, binary, octal) // 6 61453 10 484

// String
let color: string = 'blue'
console.log(color) // blue
color = 'red'
console.log(color) // red

let fullName: string = `Bob Bobbington`
let age: number = 37
let sentence: string = `Hello, my name is ${fullName}. I'll be ${ age + 1 } years old next month.`
console.log(sentence) // Hello, my name is Bob Bobbington. I'll be 38 years old next month.
let sentenceSecond: string = 'Hello, my name is ' + fullName + ' I will be ' + (age + 1) + ' years old next month.'
console.log(sentenceSecond) // Hello, my name is Bob Bobbington I will be 38 years old next month.

// Array
let list: number[] = [1, 2, 3]
console.log(list) // [ 1, 2, 3 ]
let listSecond: Array<number> = [1, 2, 3]
console.log(listSecond) // [ 1, 2, 3 ]

// Tuple
let x: [string, number]
x = ['hello', 1]
console.log(x) // [ 'hello', 1 ]
// x = [1, 'hello'] // basic.ts:35:6 - error TS2322: Type 'number' is not assignable to type 'string'.
// console.log(x)
// x = ['hello', 1, 2] // basic.ts:37:1 - error TS2322: Type '[string, number, number]' is not assignable to type '[string, number]'.
// console.log(x)
console.log(x[0].substring(1)) // ello
// console.log(x[1].substring(1)) // basic.ts:40:18 - error TS2339: Property 'substring' does not exist on type 'number'.
// x[3] = 'world' // basic.ts:41:3 - error TS2493: Tuple type '[string, number]' of length '2' has no element at index '3'.
// console.log(x[5].toString()) // basic.ts:42:15 - error TS2493: Tuple type '[string, number]' of length '2' has no element at index '5'.

// Enum
console.log('------- Enum ------------')
enum Color {Red, Green, Blue}
console.log(Color) // { '0': 'Red', '1': 'Green', '2': 'Blue', Red: 0, Green: 1, Blue: 2 }
let c: Color = Color.Green
console.log(c) // 1

enum Color2 {Red = 1, Green = 2, Blue = 3}
let c2: Color2 = Color2.Green
console.log(c2) // 2

enum Color3 {Red = 1, Green, Blue}
console.log(Color3) // { '1': 'Red', '2': 'Green', '3': 'Blue', Red: 1, Green: 2, Blue: 3 }
let colorName: string = Color3[2]
console.log(colorName) // Green

// Any
console.log('-------- Any -------------')
let notSure: any = 4
console.log(notSure, typeof notSure) // 4 number
notSure = 'maybe a string instead'
console.log(notSure, typeof notSure) // maybe a string instead string
notSure = false
console.log(notSure, typeof notSure) // false boolean

let notSure2: any = 4
console.log(notSure2, typeof notSure2) // 4 number
// notSure2.ifItExists() // (node basic.js) TypeError: notSure2.ifItExists is not a function
notSure2.toFixed()

let prettySure: Object = 4
// prettySure.toFixed() // basic.ts:75:12 - error TS2339: Property 'toFixed' does not exist on type 'Object'.
console.log(prettySure) // 4

let list2: any[] = [1, true, 'free']
console.log(list2) // [ 1, true, 'free' ]
list2[1] = 100
console.log(list2) // [ 1, 100, 'free' ]

// Void
function warnUser(): void {
  console.log('This is my warning message')
}

let unusable: void = undefined
console.log(unusable) // undefined
unusable = null
console.log(unusable) // null

// Null and Undefined
let u:undefined = undefined
console.log(u) // undefined
let n:null = null
console.log(n) // null

// Never
let xn: never
let yn: never

// xn = 123 // basic.ts:107:1 - error TS2322: Type '123' is not assignable to type 'never'.
// xn = (() => { throw new Error('exception') })() // (node basic.js) Error: exception

// yn = (() => { throw new Error('exception') })() // (node basic.js) Error: exception

function error(message: string): never {
  throw new Error('exception')
}

function loop():never {
  while (true) {}
}