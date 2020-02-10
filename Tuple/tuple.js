var mytuple = [1, 'Runoob'];
console.log(mytuple);
console.log(mytuple[0]);
console.log(mytuple[1]);
var mytuple2 = [];
mytuple2[0] = 110;
mytuple2[1] = 111;
console.log(mytuple2);
var mytuple3 = [1, 'hello', 'world', 'TypeScript'];
console.log(mytuple3); // [ 1, 'hello', 'world', 'TypeScript' ]
var len = mytuple3.push('abc');
console.log(len); // 5
var item = mytuple3.pop();
console.log(item); // abc
var mytuple4 = [10, 'Google', 'Facebook', 'Taobao'];
console.log(mytuple4); // [ 10, 'Google', 'Facebook', 'Taobao' ]
console.log(mytuple4[0]); // 10
mytuple4[0] = 20;
console.log(mytuple4[0]); // 20
var mytuple5 = [10, 'abc'];
var b = mytuple5[0], c = mytuple5[1];
console.log(b); // 10
console.log(c); // abc
