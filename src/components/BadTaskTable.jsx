import React from "react";

export const BadTaskTable = ({
  taskList,
  OnSwitchhandler,
  onDeleteHandler,
}) => {
  const badList = taskList.filter((item) => {
    return item.type === "bad";
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
          {badList.map((item, i) => {
            return (
              <tr key={item.id}>
                <td scope="row">{i + 1}.</td>
                <td>{item.task} </td>
                <td>{item.hour} hrs</td>
                <td className="text-end">
                  <button
                    className="btn btn-warning "
                    onClick={() => {
                      OnSwitchhandler(item.id, "entry");
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-arrow-left-circle"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"
                      />
                    </svg>
                  </button>
                  <button
                    className="btn btn-danger deletebutton mx-2"
                    onClick={() => {
                      onDeleteHandler(item.id);
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
