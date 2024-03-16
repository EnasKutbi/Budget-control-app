import React, { useState } from "react";

import IncomeForm from "../components/IncomeForm";
import ExpenseForm from "../components/ExpenseForm";
import TargetForSaving from "../components/TargetForSaving";
import TransferForSaving from "../components/TransferForSaving";

const Main = () => {
    const [savingAmount, setSavingAmount] = useState(0);
    const [totalIncomeAmount, setTotalIncomeAmount] = useState(0);
    const [totalExpenseAmount, setTotalExpenseAmount] = useState(0);

    const getSavingAmount = (amount: number) => {
      setSavingAmount(amount);
    };

    const getTotalIncomeAmount = (amount: number) => {
      setTotalIncomeAmount(amount);
    };

    const getTotalExpenseAmount = (amount: number) => {
      setTotalExpenseAmount(amount);
    };
  return (
    <div className="app">
      <h1>Budget App</h1>
      <div className="container">
        <IncomeForm onGetTotalIncomeAmount={getTotalIncomeAmount} />
        <ExpenseForm onGetTotalExpenseAmount={getTotalExpenseAmount} />
        <TargetForSaving savingAmount={savingAmount} />
      </div>
      <TransferForSaving
        onGetSavingAmount={getSavingAmount}
        totalIncomeAmount={totalIncomeAmount}
        totalExpenseAmount={totalExpenseAmount}
      />
    </div>
  );
};

export default Main;
