import React from "react";
import { GoodTaskTable } from "./GoodTaskTable";
import { BadTaskTable } from "./BadTaskTable";
import { TotalBadHrs } from "./TotalBadHrs";
export const Table = ({ taskList, OnSwitchhandler, onDeleteHandler }) => {
  return (
    <div>
      <div className="row">
        {/* <!-- entry list  --> */}
        <div className="col-sm-6 mt-4">
          <h3 className="text-center">TASKS List</h3>
          <hr />

          <GoodTaskTable
            taskList={taskList}
            OnSwitchhandler={OnSwitchhandler}
            onDeleteHandler={onDeleteHandler}
          />
        </div>
        {/* <!-- bad list  --> */}
        <div className="col-sm-6 mt-2">
          <h3 className="text-center">BAD TASKS LIST</h3>
          <hr />
          <BadTaskTable
            taskList={taskList}
            onDeleteHandler={onDeleteHandler}
            OnSwitchhandler={OnSwitchhandler}
          />
          <TotalBadHrs />
        </div>
      </div>
    </div>
  );
};
