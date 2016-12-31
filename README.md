# svg.point.js

This is a plugin for the [svg.js](http://svgjs.com) library that add methods to `SVG.Point`.

## Installation
```
npm install --save svg.point.js
```
## Usage
### How to include
#### In Html
Include this plugin after including svg.js in your html document.

#### CommonJs
You can just require this plugin, it will take care of requiring svg.js,
perform the necessary modification and return you the modified `SVG` object.
```javascript
var SVG = require('svg.point.js')
```

Or, you can require this plugin after having required svg.js.
```javascript
var SVG = require('svg.js')
require('svg.point.js')
```
If you are using npm3, the two require in the code above would return a
reference to the same object since npm3 install secondary dependencies in a
flat way. That would not be the case if you are using npm2 since it installs
all dependencies in a nested way.

```javascript
// If using npm3
var SVG1 = require('svg.js')
var SVG2 = require('svg.point.js')
SVG1 === SVG2 // true
SVG1.Point.prototype.add != null // true

// If using npm2
var SVG1 = require('svg.js')
var SVG2 = require('svg.point.js')
SVG1 === SVG2 // false
SVG1.Point.prototype.add != null // false
```

Long story short, to avoid issues you should use npm3 if you plan to use this
plugin with a CommonJs module bundler.

### Creating a point
The `SVG.Point` constructor of svg.js allow passing the _x_ and _y_ coordinates
that make up a point using any of the following ways.

#### As parameters
When 2 parameters are passed, the first one is used as the _x_ coordinates and
the other one as the _y_ coordinate.

```javascript
var point = new SVG.Point(3, 4)
point.x // 3
point.y // 4
```

When only one parameter is used and that parameter is not an object or an
array, it is used as the value for both the _x_ and _y_ coordinates.

```javascript
var point = new SVG.Point(7)
point.x // 7
point.y // 7
```

When no parameter are passed to the constructor, the _x_ and _y_ coordinates
default to 0.

```javascript
var point = new SVG.Point()
point.x // 0
point.y // 0
```

#### As an object
Any object that have an _x_ and _y_ attribute can be used to create a new `SVG.Point`.

```javascript
var point = new SVG.Point({x:1, y:2})
point.x // 1
point.y // 2

point = new SVG.Point(new SVG.Point(3, 4))
point.x // 3
point.y // 4
```

#### As an array
Any array of at least two values can be used to specify the _x_ and _y_ coordinates.
The first value of the array represent the _x_ coordinate while the second value represent the _y_ coordinate.

```javascript
var point = new SVG.Point([5, 6])
point.x // 5
point.y // 6
```



### Methods added by this plugin
Here are the methods added to `SVG.Point` by this plugin. Note that for any of
those methods that require a point you can pass the _x_ and _y_ coordinates the
same ways as for the `SVG.Point` constructor.


#### plus()
Create a new `SVG.Point` from the addition of the _x_ and _y_ coordinates of this
point to the _x_ and _y_ coordinates of the passed point.

```javascript
var point1 = new SVG.Point(7, 12)
var point2 = new SVG.Point(3, 8)
var point3 = point1.add(point2)

point3.x // 10
point3.y // 20
```

Also, since a point can be passed by passing a single number that represent
both the _x_ and _y_ coordinates, you can perform an addition with a constant too.

```javascript
var point1 = new SVG.Point(2, 25)
var constant = 4
var point2 = point1.add(constant)

point2.x //  6
point2.y // 29
```

__`returns`: `SVG.Point`__


#### minus()
Create a new `SVG.Point` from the soustraction of the _x_ and _y_ coordinates of
this point to the _x_ and _y_ coordinates of the passed point.

```javascript
var point1 = new SVG.Point(5, 12)
var point2 = point1.minus(6, 8)

point2.x // -1
point2.y // 4
```

Also, since a point can be passed by passing a single number that represent
both the _x_ and _y_ coordinates, you can perform a soustraction with a
constant too.

```javascript
var point1 = new SVG.Point(2, 25)
var constant = 4
var point2 = point1.minus(constant)

point2.x // -2
point2.y // 21
```

__`returns`: `SVG.Point`__


#### times()
Create a new `SVG.Point` from the multiplication of the _x_ and _y_ coordinates of
this point to the _x_ and _y_ coordinates of the passed point.

```javascript
var point1 = new SVG.Point(5, 12)
var point2 = point1.times([6, 10])

point2.x // 30
point2.y // 120
```

Also, since a point can be passed by passing a single number that represent
both the _x_ and _y_ coordinates, you can perform a multiplication with a
constant too.

```javascript
var point1 = new SVG.Point(2, 25)
var constant = 5
var point2 = point1.times(constant)

point2.x // 10
point2.y // 125
```

__`returns`: `SVG.Point`__


#### divide()
Create a new `SVG.Point` from the division of the _x_ and _y_ coordinates of this
point to the _x_ and _y_ coordinates of the passed point.

```javascript
var point1 = new SVG.Point(30, 49)
var point2 = new SVG.Point(5, 7)
var point3 = point1.divide(point2)

point3.x // 6
point3.y // 7
```

Also, since a point can be passed by passing a single number that represent
both the _x_ and _y_ coordinates, you can perform a division with a constant too.

```javascript
var point1 = new SVG.Point(18, 16)
var constant = 2
var point2 = point1.divide(constant)

point2.x // 9
point2.y // 8
```

__`returns`: `SVG.Point`__


#### equal()
Return `true` if the passed point is equal to this point, `false` otherwise.

```javascript
var point1 = new SVG.Point(3, 7)

point1.equal(3, 7) // true
point1.equal(9, 7) // false
```

__`returns`: `boolean`__


#### toArray()
Return the _x_ and _y_ coordinates in an array of two values where the first value
is _x_ and the second value is _y_.

```javascript
var point = new SVG.Point(13, 21)
point.toArray() // [13, 21]
```

__`returns`: `array`__


#### norm()
Calculate the Euclidean norm (i.e., _sqrt(x^2 + y^2)_).

```javascript
var point = new SVG.Point([14, 26])
point.norm() // 29.5296461204668
```

__`returns`: `number`__


#### distance()
Return the distance between this point and the passed point.

```javascript
var point1 = new SVG.Point(14, 22)
var point2 = new SVG.Point(30, 17)

point1.distance(point2) // 16.76305461424021
```

__`returns`: `number`__


## Dependencies
svg.js >= v2.3.6


## License
svg.point.js is licensed under the [MIT License](LICENSE).
