var val;
val = 123;
console.log(val); // 123
val = 'abc';
console.log(val); // abc
// val = true // union.ts:6:1 - error TS2322: Type 'true' is not assignable to type 'string | number'.
// console.log(val)
function disp(name) {
    if (typeof name == 'string') {
        console.log(name);
    }
    else {
        if (name.length > 0) {
            for (var n in name) {
                console.log(name[n]);
            }
        }
    }
}
console.log('string name');
disp('Runoob');
console.log('string[] name: ');
disp(['Google', 'Facebook', 'Youdao']);
var arr;
var i;
arr = [1, 2, 4];
for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
