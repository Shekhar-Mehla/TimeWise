import React from "react";

export const List = () => {
  return (
    <>
      <div className="row">
        {/* <!-- entry list  --> */}
        <div className="col-sm-6 mt-4">
          <h3 className="text-center">TASKS List</h3>
          <hr />
          <table className="table table-striped border shadow table-hover">
            <tbody id="entrylist">
              <>
                <td>
                  <small>
                    {" "}
                    Task list is blank. Let's fill it up with some goals!
                  </small>
                </td>
              </>
            </tbody>
          </table>
        </div>
        {/* <!-- bad list  --> */}
        <div className="col-sm-6 mt-2">
          <h3 className="text-center">BAD TASKS LIST</h3>
          <hr />
          <table className="table table-striped border shadow table-hover">
            <tbody id="badlist">
              <td>
                <small>
                  Select a task from the Task list that isn't worth investing
                  time in
                </small>
              </td>
            </tbody>
          </table>
          <div className=" fw-bolder p-2 m-2 h-40 w-75 bg-white rounded">
            {" "}
            you could save <span className="badlist_hours ">0</span> hours
          </div>
        </div>
      </div>
    </>
  );
};
