var SVG = require('svg.js')

module.exports = SVG

// Modify the SVG.Point constructor so that when a single Number is passed it
// is used as the x and y coordinates
// This will be removed when the version 2.3.7 of svg.js is released since it
// will be built-in
var oldSVGPoint = SVG.Point
SVG.Point = function (x, y) {
  if (y == null) {y = x}
  return oldSVGPoint.call(this, x, y)
}
SVG.Point.prototype = oldSVGPoint.prototype


// Modify the morph method to allow it to receive the point as an x and y coordinates
// Again, this will be removed when the version 2.3.7 of svg.js is released
SVG.extend(SVG.Point, {
  // Morph one point into another
  morph: function(x, y) {
    // store new destination
    this.destination = new SVG.Point(x, y)

    return this
  }
})


SVG.extend(SVG.Point, {
  // perform an element-wise addition with the passed point or number
  plus: function(x, y) {
    var point = new SVG.Point(x, y)
    return new SVG.Point(this.x + point.x, this.y + point.y)
  }
  // perform an element-wise subtraction with the passed point or number
, minus: function(x, y) {
    var point = new SVG.Point(x, y)
    return new SVG.Point(this.x - point.x, this.y - point.y)
  }
  // perform an element-wise multiplication with the passed point or number
, times: function(x, y) {
    var point = new SVG.Point(x, y)
    return new SVG.Point(this.x * point.x, this.y * point.y)
  }
  // perform an element-wise division with the passed point or number
, divide: function(x, y) {
    var point = new SVG.Point(x, y)
    return new SVG.Point(this.x / point.x, this.y / point.y)
  }
  // test if the passed point is equal with this point
, equal: function(x, y) {
    var point = new SVG.Point(x, y)
    return this.x === point.x && this.y === point.y
  }
  // return an array of the x and y coordinates
, toArray: function() {
    return [this.x, this.y]
  }
  // calculate the Euclidean norm
, norm: function() {
    return Math.sqrt(this.x*this.x + this.y*this.y)
  }
  // calculate the distance to the passed point
, distance: function(x, y) {
    return this.minus(x, y).norm()
  }
})
