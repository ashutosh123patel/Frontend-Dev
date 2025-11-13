let expenses = [12000, 3000, 8000, 2500, 1500];
let total = expenses.reduce((sum, val) => sum + val, 0);
let average = total / expenses.length;
let finalAmount = total + total * 0.1;

console.log("Total Expenses:", total.toFixed(2));
console.log("Average Expense:", average.toFixed(2));
console.log("Final Amount (with 10% tax):", finalAmount.toFixed(2));
