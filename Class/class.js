var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var Car = /** @class */ (function () {
    function Car(engine) {
        this.engine = engine;
    }
    Car.prototype.disp = function () {
        console.log('发动机为: ', this.engine);
    };
    return Car;
}());
var myCar = new Car('XXSY1');
console.log('读取发动机型号: ', myCar.engine);
myCar.disp();
console.log('---');
var Shape = /** @class */ (function () {
    function Shape(a) {
        this.Area = a;
    }
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Circle.prototype.disp = function () {
        console.log('circle area: ', this.Area);
    };
    return Circle;
}(Shape));
var circle = new Circle(20);
circle.disp();
console.log('---');
var Root = /** @class */ (function () {
    function Root() {
    }
    return Root;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Child;
}(Root));
var Leaf = /** @class */ (function (_super) {
    __extends(Leaf, _super);
    function Leaf() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Leaf;
}(Child));
var leaf = new Leaf();
leaf.str = 'hello';
console.log('str: ', leaf.str);
var PrinterClass = /** @class */ (function () {
    function PrinterClass() {
    }
    PrinterClass.prototype.doPrint = function () {
        console.log('parent class doPrint().');
    };
    return PrinterClass;
}());
var StringPrinter = /** @class */ (function (_super) {
    __extends(StringPrinter, _super);
    function StringPrinter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StringPrinter.prototype.doPrint = function () {
        _super.prototype.doPrint.call(this);
        console.log('child class doPrint().');
    };
    return StringPrinter;
}(PrinterClass));
var obj = new StringPrinter();
obj.doPrint();
var StaticMem = /** @class */ (function () {
    function StaticMem() {
    }
    StaticMem.disp = function () {
        console.log('num value is ' + StaticMem.num);
    };
    return StaticMem;
}());
StaticMem.num = 12;
StaticMem.disp();
var Person2 = /** @class */ (function () {
    function Person2() {
    }
    return Person2;
}());
var obj2 = new Person();
var isPerson = obj2 instanceof Person;
console.log(isPerson);
var Encapsulate = /** @class */ (function () {
    function Encapsulate() {
        this.str1 = 'abc';
        this.str2 = 'def';
    }
    return Encapsulate;
}());
var obj3 = new Encapsulate();
console.log(obj3.str1);
// console.log(obj3.str2) // class.ts:90:18 - error TS2341: Property 'str2' is private and only accessible within class 'Encapsulate'.
console.log('---');
var AgriIloan = /** @class */ (function () {
    function AgriIloan(interest, rebate) {
        this.interest = interest;
        this.rebate = rebate;
    }
    return AgriIloan;
}());
var obj4 = new AgriIloan(10, 1);
console.log('interest: ' + obj4.interest + ' rebate: ' + obj4.rebate);
