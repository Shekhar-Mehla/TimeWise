import React from "react";

export const TotalBadHrs = ({ badList }) => {
  const TotalBadhrs = badList.reduce((accumulator, item) => {
    return (accumulator += eval(item.hr));
  }, 0);

  return (
    <div>
      <div className=" fw-bolder p-2 m-2 h-40 w-75 bg-white rounded">
        {" "}
        you could save{" "}
        <span className="badlist_hours ">{TotalBadhrs || "0"}</span> hours
      </div>
    </div>
  );
};
