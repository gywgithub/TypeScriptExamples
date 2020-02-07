function test() {
    console.log('test');
}
test();
function greet() {
    return 'hello world';
}
function caller() {
    var msg = greet();
    console.log(msg);
}
caller();
function add(x, y) {
    return x + y;
}
console.log(add(1, 2));
function buildName(firstName, lastName) {
    return firstName + ' ' + lastName;
}
console.log(buildName('kyle', 'jack'));
// console.log(buildName('david')) // function.ts:28:13 - error TS2554: Expected 2 arguments, but got 1.
// console.log(buildName('abc', '123', '456')) // function.ts:29:37 - error TS2554: Expected 2 arguments, but got 3.
function calculate_discount(price, rate) {
    if (rate === void 0) { rate = 0.3; }
    var discount = price * rate;
    console.log('discount: ', discount);
    return discount;
}
console.log(calculate_discount(100, 0.5)); // 50
console.log(calculate_discount(100)); // 30
function buildName2(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + ' ' + restOfName.join(' ');
}
console.log(buildName2('Joseph', 'Samuel', 'Kyle')); // Joseph Samuel Kyle
function addNumbers() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var i;
    var sum = 0;
    for (i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    return sum;
}
console.log(addNumbers(1, 2, 3, 4)); // 10
console.log(addNumbers(10, 20, 10, 20)); // 60
var msg2 = function () {
    return 'msg2';
};
console.log(msg2());
var r = function (x, y) {
    var n = x * y;
    return n;
};
console.log(r(1, 2)); // 2
// (function () {
//   let num = 123
//   console.log(num)
// })()
var myFunc = new Function('a', 'b', 'return a*b');
var x = myFunc(4, 3);
console.log('x: ', x); // x: 12
function factorial(number) {
    if (number <= 0) {
        return 1;
    }
    else {
        // console.log(number)
        // console.log(factorial(number - 1))
        return (number * (factorial(number - 1)));
    }
}
console.log(factorial(6)); // 720  
var foo = function (x) { return x + 10; };
console.log(foo(100)); // 110
var foo2 = function (x) {
    x = 10 + x;
    console.log(x); // 210
};
foo2(200);
var func = function (x) {
    if (typeof x === 'number') {
        console.log(x + ' typeof number');
    }
    else if (typeof x === 'string') {
        console.log(x + ' typeof string');
    }
};
func(12);
func('abc');
var disp = function () {
    console.log('function invoked');
};
disp();
console.log('---');
function disp3(x, y) {
    console.log(x);
    console.log(y);
}
disp3('123');
// disp3(123, 'abc')
