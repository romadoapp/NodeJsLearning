var rect = require('./rectangle')

function solveRectangle(l,b) {
    console.log("solving for rectangle with l =" + l + " Width b =" + b)
    if (l <= 0 || b <= 0) {
        console.log("rectangle dimentions should be greater than zero: l =" + l +", and b=" + b)
    } else {
        console.log("the area of the rectangel is" + rect.area(l,b))
        console.log("the perimeter of the rectangle is " + rect.perimeter(l,b))
    }
}

solveRectangle(2,4)
solveRectangle(3,5)
solveRectangle(0,5)
solveRectangle(-3,5)