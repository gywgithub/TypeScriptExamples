let num1:number = 10
let num2:number = 2
let res:number = 0

res = num1 + num2
console.log(res) // 12

res = num1 - num2
console.log(res) // 8

res = num1 * num2
console.log(res) // 20

res = num1 / num2
console.log(res) // 5

res = num1%num2
console.log(res) // 0

num1++
console.log(num1) // 11

num2--
console.log(num2) // 1

console.log('--------------------------------------')

let num3:number = 5
let num4:number = 9

let res2 = num3 > num4
console.log('> ', res2) // >  false

res2 = num3 < num4
console.log('< ', res2) // <  true

res2 = num3 == num4
console.log('== ', res2) // ==  false

res2 = num3 === num4
console.log('=== ', res2) // ===  false

res2 = num3 >= num4
console.log('>= ', res2) // >=  false

res2 = num3 <= num4
console.log('<= ', res2) // <=  true

res2 = num3 != num4
console.log('!= ', res2) // !=  true

console.log('------------------------------------------')

let avg:number = 20
let percentage:number = 90

console.log('avg: ' + avg + ' percentage: ' + percentage)

let res3:boolean = ((avg > 50) && (percentage > 80))
console.log(res3) // false

res3 = ((avg > 50) || (percentage > 80))
console.log(res3) // true

res3 = !((avg > 50) && (percentage > 80))
console.log(res3) // true

console.log('-------------------------------------------')

let a:number = 2
let b:number = 3
let res4 = (a & b) 
console.log(res4) // 2

res4 = (a | b)
console.log(res4) // 3

res4 = (a ^ b)
console.log(res4) // 1

res4 = (~b)
console.log(res4) // -4

res4 = (a << b)
console.log(res4) // 16

res4 = (a >> b)
console.log(res4) // 0

res4 = (a >>> 1)
console.log(res4) // 1

console.log('------------------------------------------------')

let x:number = 10
let y:number = 5

x = y
console.log(x) // 5 

x += y
console.log(x) // 10

x -= y
console.log(x) // 5

x *= y
console.log(x) // 25

x /= y
console.log(x) // 5

console.log('------------------------------------------------')

let num5: number = -2
let res5 = num5 > 0 ? '>0' : '<0'
console.log(res5) // <0

console.log('------------------------------------------------')

let num6 = 12
console.log(typeof num6) // number

let num7 = 12
let num8 = -num7
console.log(num8) // -12

let msg:string = 'abc' + '123'
console.log(msg) // abc123

