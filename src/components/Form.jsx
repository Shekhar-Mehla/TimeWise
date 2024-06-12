import React from "react";

export const Form = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(e);

    console.log(task);
    console.log(hour);
    // const obj = {
    //   task,
    //   hour,
    //   id: idgenrator(),
    //   type: "good",
    // };
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="row row1  mt-5  border-sm p-sm-5  shadow">
        <div className="col-sm-6  ">
          <input
            id="task"
            type="text"
            className="form-control"
            placeholder="Enter the activity Name"
            aria-label="First name"
            name="task"
          />
        </div>
        <div className="col-sm-3">
          <input
            name="hours"
            id="hours"
            type="number"
            className="form-control"
            placeholder="Hours"
            aria-label="Last name"
            min="1"
            max="168"
          />
        </div>
        <div className="col-sm-3 d-grid">
          <button className="btn btn-primary" type="submit">
            Add TASK
          </button>
        </div>
      </div>
    </form>
  );
};
