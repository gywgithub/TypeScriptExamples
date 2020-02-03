var num = 5;
if (num > 0) {
    console.log('number is positive');
}
var num1 = 12;
if (num1 % 2 == 0) {
    console.log('odd number');
}
else {
    console.log('even number');
}
var num2 = 2;
if (num2 > 0) {
    console.log('positive number');
}
else if (num2 < 0) {
    console.log('nagetive number');
}
else {
    console.log('neither positive number nor nagetive number');
}
var grade = 'A';
switch (grade) {
    case 'A':
        console.log('A');
        break;
    case 'B':
        console.log('B');
        break;
    case 'C':
        console.log('C');
        break;
    case 'D':
        console.log('D');
        break;
    default:
        console.log('illegal input');
        break;
}
