import React, { ChangeEvent, FormEvent, useState } from "react";

type TransferForSavingProps = {
  onGetSavingAmount: (amount: number) => void;
  totalIncomeAmount: number;
  totalExpenseAmount: number;
};

const TransferForSaving = (props: TransferForSavingProps) => {
  const [amount, setAmount] = useState(0);

  const handleAmountChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(event.target.value));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    props.onGetSavingAmount(amount);
  };

  const balance = props.totalIncomeAmount - props.totalExpenseAmount - amount;

  return (
    <div className="transfer">
      <h3>Current Balance: {balance}</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="source">Transfer to save account</label>
          <input
            type="number"
            name="amount"
            id="amount"
            onChange={handleAmountChange}
            required
          />
        </div>
        <button>Transfer</button>
      </form>
    </div>
  );
};

export default TransferForSaving;
