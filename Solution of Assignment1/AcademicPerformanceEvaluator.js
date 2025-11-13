let marks = [90, 85, 78, 92, 88];
let total = marks.reduce((sum, val) => sum + val, 0);
let average = total / marks.length;
let percentage = average;

if (marks.some(mark => mark < 35)) {
  console.log("Detained (One or more subjects below 35)");
} else if (percentage >= 85) {
  console.log("Promoted with Distinction");
} else if (percentage >= 50 && percentage < 85) {
  console.log("Promoted");
} else {
  console.log("Detained");
}

console.log("Average Marks:", average.toFixed(2));
console.log("Overall Percentage:", percentage.toFixed(2) + "%");
