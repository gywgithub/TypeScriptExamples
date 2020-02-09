let str = new String('string')
console.log(str) // [String: 'string']

let str2 = 'string'
console.log(str2) // string

let str3 = new String('This is string')
console.log('str3.constructor is: ', str3.constructor) // str3.constructor is:  [Function: String]

let uname = new String('hello world')
console.log('uname length:  ', uname.length)

function employee(id: number, name: string) {
  this.id = id
  this.name = name
}
var emp = new employee(123, 'qingyi_w')
employee.prototype.email = 'qingyi_w@outlook.com'
console.log('id: ', emp.id)
console.log('name: ', emp.name)
console.log('email: ', emp.email)

let str4 = new String('qingyi_w')
console.log('str4.charAt(0) ', str4.charAt(0)) // q
console.log('str4.charAt(1) ', str4.charAt(1)) // i
console.log('str4.charAt(2) ', str4.charAt(2)) // n
console.log('str4.charAt(3) ', str4.charAt(3)) // g
console.log('str4.charAt(4) ', str4.charAt(4))
console.log('str4.charAt(5) ', str4.charAt(5))
console.log('str4.charAt(6) ', str4.charAt(6))
console.log('str4.charAt(7) ', str4.charAt(7))

let str5 = new String('qingyi_w')
console.log(str5.charCodeAt(0)) // 113
console.log(str5.charCodeAt(1)) // 105
console.log(str5.charCodeAt(2)) // 110
console.log(str5.charCodeAt(3)) // 103

let str6 = 'hello'
let str7 = ' word'
let str8 = str6.concat(str7)
console.log(str8)

let str9 = 'hello'
console.log(str9.indexOf('e'))

let str10 = new String('This is string one and again string')
console.log(str10)
console.log(str10.lastIndexOf('string'))
console.log(str10.lastIndexOf('is'))

let str11 = new String('This is a beautiful string')
let index = str11.localeCompare('This is a beautiful string')
console.log('index: ', index) // 0
let index2 = str11.localeCompare('abc This is a beautiful string')
console.log('index2: ', index2) // 1

let str12 = new String('The rain in PATH stays mainly in the plain')
console.log(str12.match(/ain/g)) // [ 'ain', 'ain', 'ain' ]

let re = /(\w+)\s(\w+)/
let str13 = 'zara ali'
let newStr = str13.replace(re, '$2, $1')
console.log(newStr)

let re2 = /apples/gi
let str14 = 'Apples are round, and apples are juicy.'
if (str14.search(re2) == -1) {
  console.log('Does not contains Apples')
} else {
  console.log('Contains Apples')
}

let str15 = 'Apples are round, and apples are juicy.'
let arr = str15.split(' ') //  ['Apples', 'are', 'round,', 'and', 'apples', 'are', 'juicy.']
console.log(arr)
let arr2 = str15.split(' ', 3) // [ 'Apples', 'are', 'round,' ]
console.log(arr2)

let str16 = 'Apples are round, and apples are juicy.'
console.log(str16.substring(1, 2)) // p
console.log(str16.substring(0, 10)) // Apples are
console.log(str16.substring(5)) // s are round, and apples are juicy.

let str17 = 'Hello Google'
console.log(str17.toLocaleLowerCase()) // hello google

let str18 = 'Hello 360'
console.log(str18.toLocaleUpperCase()) // HELLO 360

let str19 = 'Hello Google'
console.log(str19.toLowerCase()) // hello google

let str20 = 'Hello Google'
console.log(str20.toUpperCase()) // HELLO GOOGLE

let str21 = new String('Hello')
console.log(str21) // [String: 'Hello']
console.log(str21.valueOf()) // Hello
console.log(str21.toString()) // Hello

