import React, { useState } from 'react';
import logo from './logo.svg';
import IncomeForm from '../components/IncomeForm';
import ExpenseForm from "../components/ExpenseForm";
import TargetForSaving from "../components/TargetForSaving";
import TransferForSaving from '../components/TransferForSaving'
import './App.css';

function App() {

  const [savingAmount, setSavingAmount] = useState(0);
  const getSavingAmount = (amount: number) => {
    setSavingAmount(amount);
  }

  return (
    <div className="container">
      <IncomeForm />
      <ExpenseForm />
      <TargetForSaving savingAmount = {savingAmount} />
      <TransferForSaving onGetSavingAmount={getSavingAmount} />
    </div>
  );
}

export default App;
