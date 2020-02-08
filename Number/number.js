console.log('TypeScript Number');
console.log('MAX_VALUE ', Number.MAX_VALUE);
console.log('MIN_VALUE ', Number.MIN_VALUE);
console.log('NEGATIVE INFINITY ', Number.NEGATIVE_INFINITY);
console.log('POSITIVE INFINITY ', Number.POSITIVE_INFINITY);
var month = 1;
if (month <= 0 || month > 12) {
    month = Number.NaN;
    console.log('month: ', month);
}
else {
    console.log('right');
}
function employee(id, name) {
    this.id = id;
    this.name = name;
}
var emp = new employee(10001, 'kyle');
console.log('id: ' + emp.id + ' name: ' + emp.name);
employee.prototype.email = 'qingyi_w@outlook.com';
console.log(emp.email);
var num1 = 1225.30;
var val1 = num1.toExponential();
console.log(val1);
var num2 = 177.234;
console.log(num2.toFixed());
console.log(num2.toFixed(2));
console.log(num2.toFixed(6));
var num3 = new Number(177.1234);
console.log(num3);
console.log(num3.toLocaleString());
var num4 = new Number(7.123456);
console.log(num4.toPrecision());
console.log(num4.toPrecision(1));
console.log(num4.toPrecision(2));
var num5 = new Number(10);
console.log(num5.toString());
console.log(num5.toString(2));
console.log(num5.toString(8));
console.log(num5.toString(10));
var num6 = new Number(10);
console.log(num6.valueOf());
