let uname:string = 'kyle'
console.log(uname) // kyle

let uname2:string
console.log(uname2) // undefined

let score1:number = 50
let score2:number = 88
let sum = score1 + score2
console.log('name: ' + uname) // name: kyle
console.log('score1: ' + score1) // score1: 50
console.log('score2: ' + score2) // score2: 88
console.log('sum: ' + sum) // sum: 138

// let num:number = 'hello' // veriable.ts:15:5 - error TS2322: Type '"hello"' is not assignable to type 'number'.

let str = '1'
let str2:number = <number><any> str
console.log(str2) // 1
console.log(typeof str2) // string

var global_num = 12
class Numbers {
  num_val = 13
  static sval = 10

  storeNum():void {
    var local_num = 14
    console.log(local_num) // 14
  }
}

console.log('global_num: ' + global_num) // global_num: 12
console.log('sval: ' + Numbers.sval) // sval: 10
let obj = new Numbers()
console.log('num_val: ' + obj.num_val) // num_val: 13
console.log(obj.storeNum()) // undefined

