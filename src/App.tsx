import React, { useState } from 'react';
import logo from './logo.svg';
import IncomeForm from '../components/IncomeForm';
import ExpenseForm from "../components/ExpenseForm";
import TargetForSaving from "../components/TargetForSaving";
import TransferForSaving from '../components/TransferForSaving'
import './App.css';

function App() {

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
    <div className="container">
      <IncomeForm onGetTotalIncomeAmount={getTotalIncomeAmount} />
      <ExpenseForm onGetTotalExpenseAmount={getTotalExpenseAmount} />
      <TargetForSaving savingAmount={savingAmount} />
      <TransferForSaving
        onGetSavingAmount={getSavingAmount}
        totalIncomeAmount={totalIncomeAmount}
        totalExpenseAmount={totalExpenseAmount}
      />
    </div>
  );
}

export default App;
