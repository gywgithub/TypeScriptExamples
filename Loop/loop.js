var num = 5;
var i;
var factorial = 1;
for (i = num; i >= 1; i--) {
    console.log('i: ', i);
    factorial *= i;
}
console.log(factorial);
var j;
var n = 'abc';
for (j in n) {
    console.log(n[j]);
}
console.log('-----');
var someArray = [1, 'string', false];
for (var _i = 0, someArray_1 = someArray; _i < someArray_1.length; _i++) {
    var item = someArray_1[_i];
    console.log(item);
}
console.log('-----');
var list = [4, 5, 6];
list.forEach(function (val, i, array) {
    console.log(val);
    console.log(i);
    console.log(array);
});
console.log('-----');
var list2 = [1, 2, 3];
list2.every(function (v, i, arr) {
    console.log(v);
    console.log(i);
    console.log(arr);
    if (v === 2) {
        return false;
    }
    return true;
});
console.log('-----');
var num2 = 5;
var factorial2 = 1;
while (num2 >= 1) {
    factorial2 *= num2;
    num2--;
}
console.log(factorial2);
console.log('-----');
var num3 = 10;
do {
    console.log(num3);
    num3--;
} while (num3 > 5);
console.log(num3);
console.log('-----');
var num4 = 1;
while (num4 <= 10) {
    if (num % 5 == 0) {
        console.log(num);
        break;
    }
    num4++;
}
console.log('------');
var num5 = 0;
var count = 0;
for (num5 = 0; num5 < 20; num5++) {
    if (num5 % 2 == 0) {
        continue;
    }
    console.log(num5);
    count++;
}
console.log(count);
