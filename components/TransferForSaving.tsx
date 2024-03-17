import React, { ChangeEvent, FormEvent } from "react";
import { useForm } from "react-hook-form";

type TransferForSavingProps = {
  onGetSavingAmount: (amount: number) => void;
  totalIncomeAmount: number;
  totalExpenseAmount: number;
};

const TransferForSaving = (props: TransferForSavingProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: Record<string, any>) => {
    const amount = Number(data.amount);
    props.onGetSavingAmount(amount);
  };

  const balance = props.totalIncomeAmount - props.totalExpenseAmount;

  return (
    <div className="transfer">
      <h3>Current Balance: {balance}</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-field">
          <label htmlFor="transfer-amount">Transfer to save account</label>
          <input
            type="number"
            id="transfer-amount"
            {...register("amount", {
              required: true,
              validate: {
                positive: (value) => parseFloat(value) > 0,
              },
            })}
          />
          {errors.amount && <span>the number should be positive</span>}
        </div>
        <button type="submit">Transfer</button>
      </form>
    </div>
  );
};

export default TransferForSaving;
