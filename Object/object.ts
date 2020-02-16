var object_name = {
  key1: 'value1',
  key2: 'value',
  key3: function () {
    console.log('key3')
  },
  key4: ['abc', 'def', '333']
}

console.log(object_name)
// {
//   key1: 'value1',
//   key2: 'value',
//   key3: [Function: key3],
//   key4: [ 'abc', 'def', '333' ]
// }

var site = {
  site1: 'Runoob',
  site2: 'Google',
  sayHello: function () {
    console.log('Hi Google')
  }
}

console.log(site.site1) // Runoob
console.log(site.site2) // Google
site.sayHello() // Hi Google

site.sayHello = function () {
  console.log('Hello ' + site.site1)
}

site.sayHello() // Hello Runoob

var invokesites = function (obj: {site1: string, site2: string}) {
  console.log('site1: ', obj.site1)
  console.log('site2: ', obj.site2)
}

invokesites(site)
// site1:  Runoob
// site2:  Google

interface IPoint {
  x: number
  y: number
}

function addPoints (p1:IPoint, p2:IPoint) {
  var x = p1.x + p2.x
  var y = p1.y + p1.y
  return {x: x, y: y}
}

var newPoint1 = addPoints({x:1, y:1}, {x: 2, y: 2})
console.log('newPoint1 ', newPoint1) // newPoint1  { x: 3, y: 2 }

// var newPoint2 = addPoints({x: 2, y: 2}, {x: 3})
// object.ts:59:41 - error TS2345: Argument of type '{ x: number; }' is not assignable to parameter of type 'IPoint'.
//   Property 'y' is missing in type '{ x: number; }' but required in type 'IPoint'.
