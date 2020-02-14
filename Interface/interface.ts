interface IPerson {
  firstName: string,
  lastName: string,
  sayHi: () => string
}

var customer: IPerson = {
  firstName: 'Tom',
  lastName: 'Hanks',
  sayHi: (): string => {
    return 'Hi Here'
  }
}

console.log('Customer 对象')
console.log(customer.firstName)
console.log(customer.lastName)
console.log(customer.sayHi())

var employee: IPerson = {
  firstName: 'Jim',
  lastName: 'Blacks',
  sayHi: (): string => {
    return 'Hello'
  }
}

console.log('Employee 对象')
console.log(employee.firstName)
console.log(employee.lastName)
console.log(employee.sayHi())

interface RunOptions {
  program: string,
  commandline: string[] | string | (() => string)
}

var options: RunOptions = {
  program: 'test1',
  commandline: 'hello'
}

console.log('options')
console.log(options.program)
console.log(options.commandline)

options = {
  program: 'test1',
  commandline: ['hello', 'world']
}

console.log('options-')
console.log(options.commandline[0])
console.log(options.commandline[1])

options = {
  program: 'test1',
  commandline: () => {
    return 'hello ***'
  }
}
console.log('options--')
console.log(options.program)
console.log(options.commandline) // [Function: commandline]


var fn:any = options.commandline
console.log('fn any')
console.log(fn())

interface nameList {
  [index:number]: string
}

// var list2:nameList = ['John', 1, 'Tom'] // interface.ts:75:31 - error TS2322: Type 'number' is not assignable to type 'string'.

interface ages {
  [index:string]: number
}

// var agelist:ages
// console.log(agelist)
// agelist['Tom'] = 15
// agelist[1] = 2  


interface Person {
  age: number
}

interface Musician extends Person {
  instrument: string
}

var drummer = <Musician>{}
drummer.age = 27
drummer.instrument = 'Drum'
console.log('age: ', drummer.age)
console.log('instrument: ', drummer.instrument)

interface IParent1 {
  v1: number
}

interface IParent2 {
  v2: number
}

interface Child extends IParent1, IParent2 {}

var Iobj:Child = {
  v1: 12,
  v2: 34
}

console.log(Iobj.v1)
console.log(Iobj.v2)
