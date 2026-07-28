// student_marks.js

// Array containing student marks
let marks = [85, 72, 90, 65, 78];

console.log("Student Marks:", marks);

// Calculate total marks
let total = 0;

for (let i = 0; i < marks.length; i++) {
    total = total + marks[i];
}

console.log("Total Marks:", total);

// Calculate average
let average = total / marks.length;

console.log("Average Marks:", average);

// Find highest mark
let highest = marks[0];

for (let i = 1; i < marks.length; i++) {
    if (marks[i] > highest) {
        highest = marks[i];
    }
}

console.log("Highest Mark:", highest);

// Find lowest mark
let lowest = marks[0];

for (let i = 1; i < marks.length; i++) {
    if (marks[i] < lowest) {
        lowest = marks[i];
    }
}

console.log("Lowest Mark:", lowest);

// Check result
if (average >= 40) {
    console.log("Result: PASS");
} else {
    console.log("Result: FAIL");
}