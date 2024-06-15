import React, { useState } from "react";

export const Form = ({ onClickHander }) => {
  // storing input value
  const [form, setForm] = useState({});
  // form submit handler
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  // input change handler
  const onChageHandler = (e) => {
    const { value } = e.target;
    const { name } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <form onSubmit={onSubmitHandler} className="container-sm">
      <div className="row row1 gap-2 mt-5  border-sm p-sm-5  shadow">
        <div className="col-sm-4  ">
          <input
            id="task"
            type="text"
            className="form-control"
            placeholder="Enter the activity"
            aria-label="First name"
            name="task"
            required
            onChange={onChageHandler}
          />
        </div>
        <div className="col-sm-3">
          <input
            name="hour"
            id="hours"
            type="number"
            className="form-control"
            placeholder="Hours"
            aria-label="Last name"
            min="1"
            max="168"
            required
            onChange={onChageHandler}
          />
        </div>

        <div className=" col-sm-3 d-grid">
          <button
            className="btn  btn-primary"
            onClick={() => {
              onClickHander(form);
            }}
            type="submit"
          >
            Add TASK
          </button>
        </div>
      </div>
    </form>
  );
};
