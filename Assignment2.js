const fs = require("fs");

const studentFile = "student.txt";

// 1. Create/Write student details
const student = `Name: Rahul 
Roll Number: 101
Branch: CSE
Semester: 3
`;

fs.writeFileSync(studentFile, student);
console.log("Student details written successfully.");

// 2. Read student details
let data = fs.readFileSync(studentFile, "utf8");
console.log("\nStudent Details:");
console.log(data);

// 3. Update student details
const additionalData = `Subject: Full Stack Development 1
Marks: 85
Attendance: 92%
`;

fs.appendFileSync(studentFile, additionalData);
console.log("Student details updated successfully.");

// 4. Read updated student details
data = fs.readFileSync(studentFile, "utf8");
console.log("\nUpdated Student Details:");
console.log(data);