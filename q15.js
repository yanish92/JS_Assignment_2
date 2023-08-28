function findStudentGrade(marks) {
    if (marks >= 90 && marks <= 100) {
      console.log("S grade");
    } else if (marks >= 80 && marks < 90) {
      console.log("A grade");
    } else if (marks >= 70 && marks < 80) {
      console.log("B grade");
    } else if (marks >= 60 && marks < 70) {
      console.log("C grade");
    } else if (marks >= 50 && marks < 60) {
      console.log("D grade");
    } else if (marks >= 40 && marks < 50) {
      console.log("E grade");
    } else if (marks >= 0 && marks < 40) {
      console.log("Student has failed");
    } else {
      console.log("Invalid marks");
    }
  }
  
  // Example usage:
  findStudentGrade(95);   // S grade
  findStudentGrade(85);   // A grade
  findStudentGrade(75);   // B grade
  findStudentGrade(65);   // C grade
  findStudentGrade(55);   // D grade
  findStudentGrade(45);   // E grade
  findStudentGrade(35);   // Student has failed
  findStudentGrade(110);  // Invalid marks
  