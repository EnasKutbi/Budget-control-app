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

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="source">Set Target</label>
          <input
            type="number"
            name="amount"
            id="amount"
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
        progress: <progress max={4000} value={1000} />
      </p>
    </div>
  );
};

export default TargetForSaving;
