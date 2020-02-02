var uname = 'kyle';
console.log(uname); // kyle
var uname2;
console.log(uname2); // undefined
var score1 = 50;
var score2 = 88;
var sum = score1 + score2;
console.log('name: ' + uname); // name: kyle
console.log('score1: ' + score1); // score1: 50
console.log('score2: ' + score2); // score2: 88
console.log('sum: ' + sum); // sum: 138
// let num:number = 'hello' // veriable.ts:15:5 - error TS2322: Type '"hello"' is not assignable to type 'number'.
var str = '1';
var str2 = str;
console.log(str2); // 1
console.log(typeof str2); // string
var global_num = 12;
var Numbers = /** @class */ (function () {
    function Numbers() {
        this.num_val = 13;
    }
    Numbers.prototype.storeNum = function () {
        var local_num = 14;
        console.log(local_num);
    };
    Numbers.sval = 10;
    return Numbers;
}());
console.log('global_num: ' + global_num); // global_num: 12
console.log('sval: ' + Numbers.sval); // sval: 10
var obj = new Numbers();
console.log('num_val: ' + obj.num_val); // num_val: 13
console.log(obj.storeNum());
