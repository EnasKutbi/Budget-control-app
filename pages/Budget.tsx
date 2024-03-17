import React, { useCallback, useState } from "react";

import IncomeForm from "../components/IncomeForm";
import ExpenseForm from "../components/ExpenseForm";
import TargetForSaving from "../components/TargetForSaving";
import TransferForSaving from "../components/TransferForSaving";

const Budget = () => {
  const [savingAmount, setSavingAmount] = useState(0);
  const [totalIncomeAmount, setTotalIncomeAmount] = useState(0);
  const [totalExpenseAmount, setTotalExpenseAmount] = useState(0);

  const getSavingAmount = useCallback(
    (amount: number) => {
      setSavingAmount(amount);
    },
    [savingAmount]
  );

    const getTotalIncomeAmount = useCallback((amount: number) => {
        setTotalIncomeAmount(amount);
    }, [totalIncomeAmount]);

    const getTotalExpenseAmount = useCallback((amount: number) => {
        setTotalExpenseAmount(amount);
    },
        [totalExpenseAmount]);

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

export default Budget;
