function findTriangleType(side1, side2, side3) {
    if (side1 == side2 && side2 == side3) {
      console.log("Equilateral triangle.");
    } else if (side1 == side2 || side2 == side3 || side1 == side3) {
      console.log("Isosceles triangle.");
    } else {
      console.log("Scalene triangle.");
    }
  }
  
 
  findTriangleType(5, 5, 5); // Equilateral triangle.
  findTriangleType(3, 4, 4); // Isosceles triangle.
  findTriangleType(3, 4, 5); // Scalene triangle.
  