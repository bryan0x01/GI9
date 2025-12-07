// Budget class to store income and expenses
class Budget {
  constructor() {
    this.income = [];
    this.expenses = [];
  }

  // Add income amount to the income array
  addIncome(desc, amt) {
    this.income.push(amt);
  }

  // Add expense amount to the expenses array
  addExpense(desc, amt) {
    this.expenses.push(amt);
  }

  // Get total of all income
  getTotalIncome() {
    return this.income.reduce((a, b) => a + b, 0);
  }

  // Get total of all expenses
  getTotalExpenses() {
    return this.expenses.reduce((a, b) => a + b, 0);
  }

  // Get remaining budget (income - expenses)
  getTotalBudget() {
    return this.getTotalIncome() - this.getTotalExpenses();
  }
}

// Create a new budget object
const budget = new Budget();

// Get input elements from the HTML
const descInput = document.getElementById("desc");
const amountInput = document.getElementById("amount");

// When Add Income button is clicked
document.getElementById("add-income").addEventListener("click", () => {
  const desc = descInput.value;
  const amt = Number(amountInput.value);

  // Simple validation
  if (desc === "" || amt <= 0) {
    alert("Please enter valid income");
    return;
  }

  budget.addIncome(desc, amt);
  updateUI();
});

// When Add Expense button is clicked
document.getElementById("add-expense").addEventListener("click", () => {
  const desc = descInput.value;
  const amt = Number(amountInput.value);

  // Simple validation
  if (desc === "" || amt <= 0) {
    alert("Please enter valid expense");
    return;
  }

  budget.addExpense(desc, amt);
  updateUI();
});

// Updates the totals on the screen
function updateUI() {
  document.getElementById("income").textContent = budget.getTotalIncome();
  document.getElementById("expense").textContent = budget.getTotalExpenses();
  document.getElementById("total").textContent = budget.getTotalBudget();
}
