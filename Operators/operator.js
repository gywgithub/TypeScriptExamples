var num1 = 10;
var num2 = 2;
var res = 0;
res = num1 + num2;
console.log(res); // 12
res = num1 - num2;
console.log(res); // 8
res = num1 * num2;
console.log(res); // 20
res = num1 / num2;
console.log(res); // 5
res = num1 % num2;
console.log(res); // 0
num1++;
console.log(num1); // 11
num2--;
console.log(num2); // 1
console.log('--------------------------------------');
var num3 = 5;
var num4 = 9;
var res2 = num3 > num4;
console.log('> ', res2); // >  false
res2 = num3 < num4;
console.log('< ', res2); // <  true
res2 = num3 == num4;
console.log('== ', res2); // ==  false
res2 = num3 === num4;
console.log('=== ', res2); // ===  false
res2 = num3 >= num4;
console.log('>= ', res2); // >=  false
res2 = num3 <= num4;
console.log('<= ', res2); // <=  true
res2 = num3 != num4;
console.log('!= ', res2); // !=  true
console.log('------------------------------------------');
var avg = 20;
var percentage = 90;
console.log('avg: ' + avg + ' percentage: ' + percentage);
var res3 = ((avg > 50) && (percentage > 80));
console.log(res3); // false
res3 = ((avg > 50) || (percentage > 80));
console.log(res3); // true
res3 = !((avg > 50) && (percentage > 80));
console.log(res3); // true
console.log('-------------------------------------------');
var a = 2;
var b = 3;
var res4 = (a & b);
console.log(res4); // 2
res4 = (a | b);
console.log(res4); // 3
res4 = (a ^ b);
console.log(res4); // 1
res4 = (~b);
console.log(res4); // -4
res4 = (a << b);
console.log(res4); // 16
res4 = (a >> b);
console.log(res4); // 0
res4 = (a >>> 1);
console.log(res4); // 1
console.log('------------------------------------------------');
var x = 10;
var y = 5;
x = y;
console.log(x); // 5 
x += y;
console.log(x); // 10
x -= y;
console.log(x); // 5
x *= y;
console.log(x); // 25
x /= y;
console.log(x); // 5
console.log('------------------------------------------------');
var num5 = -2;
var res5 = num5 > 0 ? '>0' : '<0';
console.log(res5); // <0
console.log('------------------------------------------------');
var num6 = 12;
console.log(typeof num6); // number
var num7 = 12;
var num8 = -num7;
console.log(num8); // -12
var msg = 'abc' + '123';
console.log(msg); // abc123
