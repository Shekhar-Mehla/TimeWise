import React from "react";

export const GoodTaskTable = ({
  taskList,
  OnSwitchhandler,
  onDeleteHandler,
}) => {
  const goodList = taskList.filter((item) => {
    return item.type === "entry";
  });

  return (
    <div>
      <table className="table table-striped border shadow table-hover">
        <thead>
          <tr>
            <th scope="col">Sr. No.</th>
            <th scope="col">Tasks</th>
            <th scope="col">Time</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody id="entrylist">
          {goodList.map((item, i) => {
            return (
              <tr key={item._id}>
                <td scope="row">{i + 1}.</td>
                <td>{item.task} </td>
                <td>{item.hr} hrs</td>
                <td className="text-end">
                  <button
                    className="btn btn-danger deletebutton mx-2"
                    onClick={() => {
                      onDeleteHandler(item._id);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-trash3-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
                    </svg>
                  </button>
                  <button
                    className="btn btn-success "
                    onClick={() => {
                      OnSwitchhandler(item._id, "bad");
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-arrow-right-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                    </svg>
                  </button>
                </td>
              </tr>
            );
          })}

          {/* <td>
            <small>
              {" "}
              Task list is blank. Let's fill it up with some goals!
            </small>
          </td> */}
        </tbody>
      </table>
    </div>
  );
};
