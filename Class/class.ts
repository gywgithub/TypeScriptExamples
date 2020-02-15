class Person {}

class Car {
  engine:string
  constructor(engine:string) {
    this.engine = engine
  }
  disp():void {
    console.log('发动机为: ', this.engine)
  }
}

var myCar = new Car('XXSY1')

console.log('读取发动机型号: ', myCar.engine)

myCar.disp()

console.log('---')

class Shape {
  Area: number
  constructor(a:number) {
    this.Area = a
  }
}

class Circle extends Shape {
  disp():void {
    console.log('circle area: ', this.Area)
  }
}

var circle = new Circle(20)
circle.disp()

console.log('---')

class Root {
  str: string
}

class Child extends Root{}
class Leaf extends Child{}

var leaf = new Leaf()
leaf.str = 'hello'
console.log('str: ', leaf.str)

class PrinterClass {
  doPrint():void {
    console.log('parent class doPrint().')
  }
}

class StringPrinter extends PrinterClass {
  doPrint():void {
    super.doPrint()
    console.log('child class doPrint().')
  }
}

var obj = new StringPrinter()
obj.doPrint()

class StaticMem {
  static num: number
  static disp(): void {
    console.log('num value is ' + StaticMem.num)
  }
}
StaticMem.num = 12
StaticMem.disp()

class Person2 {}
var obj2 = new Person()
var isPerson = obj2 instanceof Person
console.log(isPerson)



class Encapsulate{
  static num:number
  str1:string = 'abc'
  private str2:string = 'def'
}

var obj3 = new Encapsulate()
console.log(obj3.str1)
// console.log(obj3.str2) // class.ts:90:18 - error TS2341: Property 'str2' is private and only accessible within class 'Encapsulate'.

console.log('---')

interface ILoan {
  interest:number
}

class AgriIloan implements ILoan {
  interest:number
  rebate:number

  constructor(interest:number, rebate:number) {
    this.interest = interest
    this.rebate = rebate
  }
}

var obj4 = new AgriIloan(10, 1)
console.log('interest: ' + obj4.interest + ' rebate: ' + obj4.rebate)