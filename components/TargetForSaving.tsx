import React from "react";

const TargetForSaving = () => {
  return (
    <div>
      <form action="">
        <div className="form-field">
          <label htmlFor="source">Set Target</label>
          <input type="number" name="amount" id="amount" required />
              </div>
              <button>Reset</button>
          </form>
          <p>Target: 4000</p>
          <p>Current Saving: 1000</p>
          <p><progress max={4000} value={1000} /></p>
    </div>
  );
};

export default TargetForSaving;
