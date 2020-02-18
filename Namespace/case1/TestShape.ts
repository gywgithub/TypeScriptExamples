/// <reference path = "IShape.ts" />
/// <reference path = "Circle.ts" />
/// <reference path = "Triangle.ts" />
function drawShape(shape:Drawing.IShape) {
  shape.draw()
}

drawShape(new Drawing.Circle())
drawShape(new Drawing.Triangle())