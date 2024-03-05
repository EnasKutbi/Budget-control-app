import React from 'react';
import logo from './logo.svg';
import IncomeForm from '../components/IncomeForm';
import ExpenseForm from "../components/ExpenseForm";
import TargetForSaving from "../components/TargetForSaving";
import TransferForSaving from '../components/TransferForSaving'
import './App.css';

function App() {
  return (
    <div className='container'>
      <IncomeForm />
      <ExpenseForm />
      <TargetForSaving />
      <TransferForSaving />
    </div>
  );
}

export default App;
