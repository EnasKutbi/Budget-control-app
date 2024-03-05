import React from "react";

const TransferForSaving = () => {
  return (
    <div>
      <form action="">
        <div className="form-field">
          <label htmlFor="source">Transfer to save account</label>
          <input type="number" name="amount" id="amount" required />
        </div>
        <button>Transfer</button>
      </form>
    </div>
  );
};

export default TransferForSaving;
