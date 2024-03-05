import React from 'react';

const IncomeForm = () => {
    return (
      <div>
        <form action="">
          <div className="form-field">
            <label htmlFor="source">Income source</label>
            <input type="text" name="source" id="source" required />
          </div>
          <div className="form-field">
            <label htmlFor="amount">Amount of Income</label>
            <input type="number" name="amount" id="amount" required />
          </div>
          <div className="form-field">
            <label htmlFor="date">Date of Income</label>
            <input type="date" name="date" id="date" required />
                </div>
                <button>Add income</button>
        </form>
      </div>
    );
};

export default IncomeForm;