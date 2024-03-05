import React from "react";

const ExpenseForm = () => {
  return (
    <div>
      <form action="">
        <div className="form-field">
          <label htmlFor="source">Expense source</label>
          <input type="text" name="source" id="source" required />
        </div>
        <div className="form-field">
          <label htmlFor="amount">Amount of Expense</label>
          <input type="number" name="amount" id="amount" required />
        </div>
        <div className="form-field">
          <label htmlFor="date">Date of Expense</label>
          <input type="date" name="date" id="date" required />
        </div>
        <button>Add Expense</button>
      </form>
    </div>
  );
};

export default ExpenseForm;
