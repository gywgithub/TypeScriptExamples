let num:number = 5
let i:number
let factorial = 1
for (i = num; i >= 1; i--) {
  console.log('i: ', i)
  factorial *= i
}
console.log(factorial)

let j: any
let n: any = 'abc'
for (j in n) {
  console.log(n[j])
}

console.log('-----')
let someArray = [1, 'string', false]
for (let item of someArray) {
  console.log(item)
}

console.log('-----')
let list = [4, 5, 6]
list.forEach((val, i, array) => {
  console.log(val)
  console.log(i)
  console.log(array)
})

console.log('-----')


let list2 = [1, 2, 3]
list2.every((v, i, arr) => {
  console.log(v)
  console.log(i)
  console.log(arr)
  if (v === 2) {
    return false
  }
  return true
})

console.log('-----')
let num2:number = 5
let factorial2 = 1
while(num2 >= 1) {
  factorial2 *= num2
  num2--
}
console.log(factorial2)

console.log('-----')
let num3:number = 10
do {
  console.log(num3)
  num3--
} while(num3 > 5)

console.log(num3)

console.log('-----')

let num4:number = 1
while(num4 <= 10) {
  if (num % 5 == 0) {
    console.log(num)
    break
  }
  num4++
}
console.log('------')

let num5:number = 0
let count:number = 0
for (num5 = 0; num5 < 20; num5++) {
  if (num5 % 2 == 0) {
    continue
  }
  console.log(num5)
  count++
}
console.log('count: ', count)