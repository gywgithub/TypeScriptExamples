var customer = {
    firstName: 'Tom',
    lastName: 'Hanks',
    sayHi: function () {
        return 'Hi Here';
    }
};
console.log('Customer 对象');
console.log(customer.firstName);
console.log(customer.lastName);
console.log(customer.sayHi());
var employee = {
    firstName: 'Jim',
    lastName: 'Blacks',
    sayHi: function () {
        return 'Hello';
    }
};
console.log('Employee 对象');
console.log(employee.firstName);
console.log(employee.lastName);
console.log(employee.sayHi());
var options = {
    program: 'test1',
    commandline: 'hello'
};
console.log('options');
console.log(options.program);
console.log(options.commandline);
options = {
    program: 'test1',
    commandline: ['hello', 'world']
};
console.log('options-');
console.log(options.commandline[0]);
console.log(options.commandline[1]);
options = {
    program: 'test1',
    commandline: function () {
        return 'hello ***';
    }
};
console.log('options--');
console.log(options.program);
console.log(options.commandline);
var fn = options.commandline;
console.log('fn any');
console.log(fn());
var drummer = {};
drummer.age = 27;
drummer.instrument = 'Drum';
console.log('age: ', drummer.age);
console.log('instrument: ', drummer.instrument);
var Iobj = {
    v1: 12,
    v2: 34
};
console.log(Iobj.v1);
console.log(Iobj.v2);
