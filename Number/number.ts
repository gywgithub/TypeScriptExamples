console.log('TypeScript Number')
console.log('MAX_VALUE ', Number.MAX_VALUE)
console.log('MIN_VALUE ', Number.MIN_VALUE)
console.log('NEGATIVE INFINITY ', Number.NEGATIVE_INFINITY)
console.log('POSITIVE INFINITY ', Number.POSITIVE_INFINITY)

let month = 1
if (month <= 0 || month > 12) {
  month = Number.NaN
  console.log('month: ', month)
} else {
  console.log('right')
}

function employee(id:number, name:string) {
  this.id = id
  this.name = name
}
let emp = new employee(10001, 'kyle')
console.log('id: ' + emp.id + ' name: ' + emp.name)

employee.prototype.email = 'qingyi_w@outlook.com'
console.log(emp.email)

let num1 = 1225.30
let val1 = num1.toExponential()
console.log(val1)

let num2 = 177.234
console.log(num2.toFixed())
console.log(num2.toFixed(2))
console.log(num2.toFixed(6))

let num3 = new Number(177.1234)
console.log(num3)
console.log(num3.toLocaleString())

let num4 = new Number(7.123456)
console.log(num4.toPrecision())
console.log(num4.toPrecision(1))
console.log(num4.toPrecision(2))

let num5 = new Number(10)
console.log(num5.toString())
console.log(num5.toString(2))
console.log(num5.toString(8))
console.log(num5.toString(10))

let num6 = new Number(10)
console.log(num6.valueOf())