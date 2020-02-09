var numlist = [2, 4, 6, 8];
console.log(numlist); // [ 2, 4, 6, 8 ]
var sites;
sites = ['Google', 'Runoob', 'Taobao'];
console.log(sites); // [ 'Google', 'Runoob', 'Taobao' ]
console.log(sites[0]);
console.log(sites[1]);
var nums = [1, 2, 3, 4];
console.log(nums); // [ 1, 2, 3, 4 ]
console.log(nums[1]); // 2
console.log(nums[3]); // 4
var array_names = new Array(4);
console.log(array_names); // [ <4 empty items> ]
for (var i = 0; i < array_names.length; i++) {
    array_names[i] = i * 2;
    console.log(array_names[i]);
}
console.log(array_names); // [ 0, 2, 4, 6 ]
var sites2 = new Array('Google', 'Runoob', 'Facebook', 'Taobao');
console.log(sites2); // [ 'Google', 'Runoob', 'Facebook', 'Taobao' ]
for (var i = 0; i < sites2.length; i++) {
    console.log(sites2[i]);
}
var arr2 = [2, 3];
var x = arr2[0], y = arr2[1];
console.log(x); // 2
console.log(y); // 3
var j;
var nums2 = [4, 5, 6, 7];
for (j in nums2) {
    console.log(nums2[j]);
}
var multi = [[1, 2, 3], [22, 33, 44]];
console.log(multi[0][0]); // 1
console.log(multi[0][1]); // 2
console.log(multi[0][2]); // 3
console.log(multi[1][0]); // 22
console.log(multi[1][1]); // 33
console.log(multi[1][2]); // 44
console.log('---');
var sites3 = new Array('Google', 'Facebook', 'Taobao', 'Youdao');
function disp(array_sites) {
    for (var i = 0; i < array_sites.length; i++) {
        console.log(array_sites[i]);
    }
}
disp(sites3);
function disp2() {
    return new Array('Google', 'Facebook', 'Taobao', 'Youdao');
}
var sites4 = disp2();
console.log(sites4); // [ 'Google', 'Facebook', 'Taobao', 'Youdao' ]
for (var i in sites4) {
    console.log(sites4[i]);
}
console.log('---');
var alpha = ['a', 'b', 'c'];
var alpha2 = ['1', '2', '3'];
// let numeric2 = [1, 2, 3]
var alpha3 = alpha.concat(alpha2);
console.log(alpha3);
function isBigEnough(element, index, array) {
    return (element > 10);
}
var passed = [12, 5, 8, 139, 44].every(isBigEnough);
console.log(passed); // false
var passed2 = [12, 4, 6, 123, 56].filter(isBigEnough);
console.log(passed2); // [12, 123, 56]
var num = [7, 8, 9];
num.forEach(function (e) {
    console.log(e);
});
var arr = [1, 33, 44, 55, 64];
var index = arr.indexOf(33);
console.log(index); // 1
var index2 = arr.indexOf(55);
console.log(index2); // 3
var arr3 = new Array('First', 'Second', 'Third');
var str = arr3.join();
console.log(str); // First,Second,Third
var str2 = arr3.join(', ');
console.log(str2); // First, Second, Third
var str3 = arr3.join(' + ');
console.log(str3); // First + Second + Third
var index3 = [12, 25, 6, 32, 25].lastIndexOf(25);
console.log(index3); // 4
var arr4 = [1, 4, 9];
var arr5 = arr4.map(Math.sqrt);
console.log(arr5); // [ 1, 2, 3 ]
var arr6 = [1, 2, 4, 5, 6];
var element = arr6.pop();
console.log(element); // 6
var ele2 = arr6.pop();
console.log(ele2); // 5
var arr7 = [1, 2, 3, 6];
var length2 = arr7.push(8);
console.log(length2); // 5
console.log(arr7); // [ 1, 2, 3, 6, 8 ]
var total = arr7.reduce(function (a, b) {
    return a + b;
});
console.log(total); // 20
var n = [1, 2, 4, 20].reduceRight(function (a, b) {
    return a - b;
});
console.log(n); // 13
var arr8 = [1, 2, 3, 4];
console.log(arr8.reverse()); // [ 4, 3, 2, 1 ]
var n2 = arr8.shift();
console.log(n2); // 4
console.log(arr8); // [ 3, 2, 1 ]
var arr9 = ['orange', 'black', 'red', 'blue', 'red'];
var arr10 = arr9.slice(0, 2);
console.log(arr9); // [ 'orange', 'black', 'red', 'blue', 'red' ]
console.log(arr10); // [ 'orange', 'black' ]
var arr11 = [11, 22, 333, 444, 55];
var res = arr11.some(function (e) {
    return e > 50;
});
console.log(res); // true
var arr12 = ['orange', 'black', 'red', 'green', 'yellow'];
var arrSort = arr12.sort();
console.log(arrSort); // [ 'black', 'green', 'orange', 'red', 'yellow' ]
console.log(arr12); // [ 'black', 'green', 'orange', 'red', 'yellow' ]
var remove = arr12.splice(0, 2);
console.log(remove); // [ 'black', 'green' ]
console.log(arr12); // [ 'orange', 'red', 'yellow' ]
var add = arr12.splice(2, 0, 'white');
console.log(add); // []
console.log(arr12); // [ 'orange', 'red', 'white', 'yellow' ]
var arrStr = arr12.toString();
console.log(arrStr); // orange,red,white,yellow
var arrNew = [1, 2, 3].unshift(5);
console.log(arrNew);
