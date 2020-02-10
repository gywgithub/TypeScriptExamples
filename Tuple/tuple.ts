let mytuple = [1, 'Runoob']
console.log(mytuple)
console.log(mytuple[0])
console.log(mytuple[1])

let mytuple2 = []
mytuple2[0] = 110
mytuple2[1] = 111
console.log(mytuple2)

let mytuple3 = [1, 'hello', 'world', 'TypeScript']
console.log(mytuple3) // [ 1, 'hello', 'world', 'TypeScript' ]

let len = mytuple3.push('abc')
console.log(len) // 5

let item = mytuple3.pop()
console.log(item) // abc

let mytuple4 = [10, 'Google', 'Facebook', 'Taobao']
console.log(mytuple4) // [ 10, 'Google', 'Facebook', 'Taobao' ]
console.log(mytuple4[0]) // 10
mytuple4[0] = 20
console.log(mytuple4[0]) // 20

let mytuple5 = [10, 'abc']
let [b, c] = mytuple5
console.log(b) // 10
console.log(c) // abc