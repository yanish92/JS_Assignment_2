function performArithmeticOperation(num1, num2, operation) {
    if (operation === "add") {
      console.log(num1 + num2);
    } else if (operation === "subtract") {
      console.log(num1 - num2);
    } else if (operation === "multiply") {
      console.log(num1 * num2);
    } else if (operation === "divide") {
      if (num2 !== 0) {
        console.log(num1 / num2);
      } else {
        console.log("Division by zero is not allowed.");
      }
    } else if (operation === "modulus") {
      if (num2 !== 0) {
        console.log(num1 % num2);
      } else {
        console.log("Modulus by zero is not allowed.");
      }
    } else {
      console.log("Invalid operation");
    }
  }
  
  // Example usage:
  performArithmeticOperation(5, 3, "add");       // 8
  performArithmeticOperation(10, 4, "subtract"); // 6
  performArithmeticOperation(6, 7, "multiply");  // 42
  performArithmeticOperation(12, 3, "divide");   // 4
  performArithmeticOperation(10, 0, "divide");   // Division by zero is not allowed.
  performArithmeticOperation(17, 5, "modulus");  // 2
  performArithmeticOperation(8, 0, "modulus");   // Modulus by zero is not allowed.
  performArithmeticOperation(5, 3, "power");     // Invalid operation
  