let userName = "Ashutosh";
let age = 21;
let isMember = true;
let hobbies = ["Reading", "Coding", "Traveling"];
let userDetails = { city: "Bhopal", country: "India" };
let score = null;
let pendingTask;

let dataSummary = [
  { label: "userName", value: userName, type: typeof userName },
  { label: "age", value: age, type: typeof age },
  { label: "isMember", value: isMember, type: typeof isMember },
  { label: "hobbies", value: hobbies, type: Array.isArray(hobbies) ? "array" : typeof hobbies },
  { label: "userDetails", value: userDetails, type: typeof userDetails },
  { label: "score", value: score, type: typeof score },
  { label: "pendingTask", value: pendingTask, type: typeof pendingTask }
];

console.table(dataSummary);
