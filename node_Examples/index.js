var rect = require('./rectangle')

function solveRectangle(l,b) {
    console.log("solving for rectangle with l =" + l + " Width b =" + b)
   rect(l,b, (err, rectangle) => {
       if (err) {
           console.log("Error: ", err.message)
       } else {
           console.log("The area of the rectangle of dimentions a =" + l + "and b =" + b + "is "+ rectangle.area())
           console.log("The perimeter of the rectangle of dimentions a =" + l + "and b =" + b + "is "+ rectangle.perimeter())
       }
   })
   console.log("this is after exce")
}

solveRectangle(2,4)
solveRectangle(3,5)
solveRectangle(0,5)
solveRectangle(-3,5)