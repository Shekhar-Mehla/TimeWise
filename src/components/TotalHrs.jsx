import React from "react";

export const TotalHrs = ({ taskList }) => {
  const Totalhrs = taskList.reduce((accumulator, item) => {
    return (accumulator += eval(item.hour));
  }, 0);
  return (
    <div>
      <div className=" bg-white w-70 h-10 px-3 py-2 m-5 fw-bolder rounded">
        you have used <span className="totalhrs ">{Totalhrs}</span> hours
      </div>
    </div>
  );
};
