import React, { useState } from "react";
import { Form } from "./components/Form";
import { Table } from "./components/Table";
import { TotalHrs } from "./components/TotalHrs";
import "./App.css";

export const App = () => {
  // id gentrator function
  function idgenrator() {
    const str =
      "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM1234567890";
    let genrated_id = "";
    for (let i = 0; i < 6; i++) {
      const index = Math.floor(Math.random() * str.length);
      genrated_id += str[index];
    }
    return genrated_id;
  }
  // storing the from object in the task list

  const [taskList, setTaskList] = useState([]);
  // reciving form on button click
  const onClickHander = (form) => {
    setTaskList([...taskList, { ...form, type: "entry", id: idgenrator() }]);
  };

  return (
    <>
      <div className="wrapper">
        <div className="container p-3">
          <h1 className="text-center">
            TimeWise: Your Personal Time Tracker & Saver
          </h1>

          <Form onClickHander={onClickHander} />
          <Table taskList={taskList} />
          <TotalHrs />
        </div>
      </div>
    </>
  );
};
