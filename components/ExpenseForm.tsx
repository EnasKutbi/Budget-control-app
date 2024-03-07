import React, { ChangeEvent, FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { text } from "stream/consumers";

type ExpenseType = {
  id?: string;
  source: string;
  amount: number;
  date: string;
};

type ExpenseFormProps = {
  onGetTotalExpenseAmount: (amount: number) => void;
};

const ExpenseForm = (props: ExpenseFormProps) => {

  const [source, setSource] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  const [date, setDate] = useState<string>("");

  const [expenses, setExpenses] = useState<ExpenseType[]>([]);

    const totalAmount = expenses.reduce(
      (total, currentValue) => total + currentValue.amount,
      0
    );
    props.onGetTotalExpenseAmount(totalAmount);

    const handleSourceChange = (event: ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      setSource(value);
    };

    const handleAmountChange = (event: ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      setAmount(Number(value));
    };

    const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      setDate(value);
    };

    const handleSubmit = (event: FormEvent) => {
      event.preventDefault();
      const expense = {
        id: uuidv4(),
        source: source,
        amount: amount,
        date: date,
      };
      setExpenses((prevExpenses) => {
        return [...prevExpenses, expense];
      });

      setSource("");
      setAmount(0);
      setDate("");
    };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="source">Expense source</label>
          <input
            type="text"
            name="source"
            id="source"
            value={source}
            onChange={handleSourceChange}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="amount">Amount of Expense</label>
          <input
            type="number"
            name="amount"
            id="amount"
            value={amount}
            onChange={handleAmountChange}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="date">Date of Expense</label>
          <input
            type="date"
            name="date"
            id="date"
            value={date}
            onChange={handleDateChange}
            required
          />
        </div>
        <button>Add Expense</button>
      </form>
      <ul>{expenses.map((expense) => {
        return (
          <li key={expense.id}>
            {expense.source}: {expense.amount} EUR on {expense.date}
          </li>
        );
      })}</ul>
    </div>
  );
};

export default ExpenseForm;
