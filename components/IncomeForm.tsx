import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import { useForm } from "react-hook-form";

type IncomeType = {
  id?: string;
  source: string;
  amount: number;
  date: string;
}

type IncomeFormProps = { onGetTotalIncomeAmount :(amount: number) => void}

const IncomeForm = (props: IncomeFormProps) => {

  const [incomes, setIncomes] = useState<IncomeType[]>([]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    const income = {
      id: uuidv4(),
      source: data.source,
      amount: data.amount,
      date: data.date,
    };
    setIncomes((prevIncomes) => [...prevIncomes, income]);
    reset();
  };

  useEffect(() => {
    const totalAmount = incomes.reduce(
      (total, currentValue) => total + currentValue.amount,
      0
    );
    props.onGetTotalIncomeAmount(totalAmount);
  }, [incomes, props]);

  const handleDeleteIncome = (id?: string) => {
    setIncomes((prevIncomes) => {
      return prevIncomes.filter((income) => income.id !== id);
    });
  }

  return (
    <div className="income">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-field">
          <label htmlFor="income-source">Income source</label>
          <input
            type="text"
            id="income-source"
            {...register("source", { required: "Source is required" })}
          />
          {errors.source && (
            <span className="error">{errors.source.message?.toString()}</span>
          )}
        </div>
        <div className="form-field">
          <label htmlFor="income-amount">Amount of Income</label>
          <input
            type="number"
            id="income-amount"
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
          <label htmlFor="income-date">Date of Income</label>
          <input
            type="date"
            id="income-date"
            {...register("date", { required: "Date is required" })}
          />
          {errors.date && (
            <span className="error">{errors.date.message?.toString()}</span>
          )}
        </div>
        <button>Add income</button>
      </form>
      <ul>
        {incomes.map((income) => {
          return (
            <li key={income.id}>
              {income.source}: {income.amount} EUR on {income.date}{" "}
              <button onClick={() => handleDeleteIncome(income.id)}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default IncomeForm;
