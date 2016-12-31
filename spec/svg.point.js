describe('Point', function() {
  var SVG = require('../src/svg.point.js')

  // This test will be removed once the version 2.3.7 of svg.js is released as
  // this functionality will be built-in
  describe('morph()', function() {
    it('allow passing the point by directly passing its coordinates', function() {
      var point1 = new SVG.Point(1,1)
        , point2 = new SVG.Point(2,2)

      point1.morph(point2.x, point2.y)

      expect(point1.destination).toEqual(point2)
    })
  })


  describe('toArray()', function() {
    it('return an array of the x and y coordinates', function() {
      var point = new SVG.Point(2,-13)
      expect(point.toArray()).toEqual([point.x, point.y])
    })
  })

  describe('plus()', function() {
    it('perform an element-wise addition with the passed point', function() {
      var point1 = new SVG.Point(4,3)
        , point2 = new SVG.Point(2,5)
        , point3 = point1.plus(point2)

      expect(point3).toEqual(new SVG.Point(point1.x + point2.x, point1.y + point2.y))
    })
    it('allow passing the point by directly passing its coordinates', function() {
      var point1 = new SVG.Point(4,3)
      , point2 = new SVG.Point(2,5)
      , point3 = point1.plus(point2.x, point2.y)

      expect(point3).toEqual(new SVG.Point(point1.x + point2.x, point1.y + point2.y))
    })
    it('perform an element-wise addition with the passed number', function() {
      var point1 = new SVG.Point(4,3)
        , number = 6
        , point2 = point1.plus(number)

      expect(point2).toEqual(new SVG.Point(point1.x + number, point1.y + number))
    })
  })

  describe('minus()', function() {
    it('perform an element-wise subtraction with the passed point', function() {
      var point1 = new SVG.Point(4,3)
        , point2 = new SVG.Point(2,5)
        , point3 = point1.minus(point2)

      expect(point3).toEqual(new SVG.Point(point1.x - point2.x, point1.y - point2.y))
    })
    it('allow passing the point by directly passing its coordinates', function() {
      var point1 = new SVG.Point(4,3)
      , point2 = new SVG.Point(2,5)
      , point3 = point1.minus(point2.x, point2.y)

      expect(point3).toEqual(new SVG.Point(point1.x - point2.x, point1.y - point2.y))
    })
    it('perform an element-wise subtraction with the passed number', function() {
      var point1 = new SVG.Point(4,3)
        , number = 6
        , point2 = point1.minus(number)

      expect(point2).toEqual(new SVG.Point(point1.x - number, point1.y - number))
    })
  })

  describe('times()', function() {
    it('perform an element-wise multiplication with the passed point', function() {
      var point1 = new SVG.Point(4,3)
        , point2 = new SVG.Point(2,5)
        , point3 = point1.times(point2)

      expect(point3).toEqual(new SVG.Point(point1.x * point2.x, point1.y * point2.y))
    })
    it('allow passing the point by directly passing its coordinates', function() {
      var point1 = new SVG.Point(4,3)
      , point2 = new SVG.Point(2,5)
      , point3 = point1.times(point2.x, point2.y)

      expect(point3).toEqual(new SVG.Point(point1.x * point2.x, point1.y * point2.y))
    })
    it('perform an element-wise multiplication with the passed number', function() {
      var point1 = new SVG.Point(4,3)
        , number = 6
        , point2 = point1.times(number)

      expect(point2).toEqual(new SVG.Point(point1.x * number, point1.y * number))
    })
  })

  describe('divide()', function() {
    it('perform an element-wise division with the passed point', function() {
      var point1 = new SVG.Point(4,3)
        , point2 = new SVG.Point(2,5)
        , point3 = point1.divide(point2)

      expect(point3).toEqual(new SVG.Point(point1.x / point2.x, point1.y / point2.y))
    })
    it('allow passing the point by directly passing its coordinates', function() {
      var point1 = new SVG.Point(4,3)
      , point2 = new SVG.Point(2,5)
      , point3 = point1.divide(point2.x, point2.y)

      expect(point3).toEqual(new SVG.Point(point1.x / point2.x, point1.y / point2.y))
    })
    it('perform an element-wise division with the passed number', function() {
      var point1 = new SVG.Point(4,3)
        , number = 6
        , point2 = point1.divide(number)

      expect(point2).toEqual(new SVG.Point(point1.x / number, point1.y / number))
    })
  })

  describe('equal()', function() {
    it('should return true if this point is equal to the passed point', function() {
      var point1 = new SVG.Point(45, 68)
        , point2 = new SVG.Point(45, 68)

      expect(point1.equal(point2)).toBe(true)
    })
    it('should return false if this point is not equal to the passed point', function() {
      var point1 = new SVG.Point(11, 45)
      , point2 = new SVG.Point(23, 5)

      expect(point1.equal(point2.x, point2.y)).toBe(false)
    })
    it('should return true if both coordinates of this point are equals with the passed number', function() {
      var point1 = new SVG.Point(7)
        , number = 7

      expect(point1.equal(number)).toBe(true)
    })
    it('should return false if at least one of the coordinates of this point is not equal with the passed number', function() {
      var point1 = new SVG.Point(12, 3)
        , number = 3

      expect(point1.equal(number)).toBe(false)
    })
  })

  describe('norm()', function() {
    it('calculate the Euclidean norm', function() {
      var point = new SVG.Point(-2,12)
      expect(point.norm()).toBe(Math.sqrt(point.x*point.x + point.y*point.y))
    })
  })

  describe('distance()', function() {
    it('calculate the distance to the passed point', function() {
      var point1 = new SVG.Point(-6,-20)
        , point2 = new SVG.Point(8,18)

      expect(point1.distance(point2)).toBe(Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2)))
    })
    it('allow passing the point by directly passing its coordinates', function() {
      var point1 = new SVG.Point(-6,-20)
        , point2 = new SVG.Point(8,18)

      expect(point1.distance(point2.x, point2.y)).toBe(Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2)))
    })
  })
})
