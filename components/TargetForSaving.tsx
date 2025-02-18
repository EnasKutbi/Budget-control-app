import React, { useState, ChangeEvent, FormEvent } from "react";

const TargetForSaving = (props: {savingAmount: number}) => {

  const [target, setTarget] = useState<number>(0);
  
  const handleTargetChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTarget(Number(event.target.value));
  };

const handleSubmit = (event: FormEvent) => {
  event.preventDefault();
  setTarget(0);
};

  const percentage = target !== 0 ? (props.savingAmount / target) * 100 : 0;
  
  return (
    <div className="target">
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="target-amount">Set Target</label>
          <input
            type="number"
            name="amount"
            id="target-amount"
            value={target}
            onChange={handleTargetChange}
            required
          />
        </div>
        <button>Reset</button>
      </form>
      <p>Current Saving: {props.savingAmount}</p>
      <p>Target: {target}</p>
      <p>
        progress: {percentage}% <progress max={100} value={percentage} />
      </p>
    </div>
  );
};

export default TargetForSaving;
