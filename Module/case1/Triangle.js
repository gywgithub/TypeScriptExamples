"use strict";
exports.__esModule = true;
var Triangle = /** @class */ (function () {
    function Triangle() {
    }
    Triangle.prototype.draw = function () {
        console.log('triangle is drawn (external module)');
    };
    return Triangle;
}());
exports.Triangle = Triangle;