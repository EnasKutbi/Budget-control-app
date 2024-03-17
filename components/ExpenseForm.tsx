import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useForm } from "react-hook-form";

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

  const [expenses, setExpenses] = useState<ExpenseType[]>([]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    const expense = {
      id: uuidv4(),
      source: data.source,
      amount: data.amount,
      date: data.date,
    };
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
    reset();
  };

  useEffect(() => {
    const totalAmount = expenses.reduce(
      (total, currentValue) => total + currentValue.amount,
      0
    );
    props.onGetTotalExpenseAmount(totalAmount);
  }, [expenses, props]);

  
  const handleDeleteExpenses = (id?: string) => {
    setExpenses((prevExpenses) => {
      return prevExpenses.filter((Expense) => Expense.id !== id);
    });
  };

  return (
    <div className="expense">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-field">
          <label htmlFor="expense-source">Expense source</label>
          <input
            type="text"
            id="expense-source"
            {...register("source", { required: "Source is required" })}
          />
          {errors.source && (
            <span className="error">{errors.source.message?.toString()}</span>
          )}
        </div>
        <div className="form-field">
          <label htmlFor="expense-amount">Amount of Expense</label>
          <input
            type="number"
            id="expense-amount"
            {...register("amount", {
              required: "Amount is required",
              min: { value: 0, message: "Amount must be a positive number" },
            })}
          />
          {errors.amount && (
            <span className="error">{errors.amount.message?.toString()}</span>
          )}
        </div>
        <div className="form-field">
          <label htmlFor="expense-date">Date of Expense</label>
          <input
            type="date"
            id="expense-date"
            {...register("date", { required: "Date is required" })}
          />
          {errors.date && (
            <span className="error">{errors.date.message?.toString()}</span>
          )}
        </div>
        <button>Add Expense</button>
      </form>
      <ul>
        {expenses.map((expense) => {
          return (
            <li key={expense.id}>
              {expense.source}: {expense.amount} EUR on {expense.date}{" "}
              <button onClick={() => handleDeleteExpenses(expense.id)}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ExpenseForm;
