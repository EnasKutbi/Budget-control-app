import React, { useState, ChangeEvent, FormEvent } from "react";

const TargetForSaving = () => {

  const [target, setTarget] = useState<number>(0);
  
  const handleTargetChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setTarget(Number(value));
  };

const handleSubmit = (event: FormEvent) => {
  event.preventDefault();
  setTarget((prevTarget) => {
    return prevTarget+ target;
  });
  
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
      <p>Target: {target}</p>
      <p>Current Saving: 1000</p>
      <p>
        <progress max={4000} value={1000} />
      </p>
    </div>
  );
};

export default TargetForSaving;
