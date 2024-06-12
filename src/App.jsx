import React, { useState } from "react";
import { Form } from "./components/Form";
import { List } from "./components/List";

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
  console.log(taskList);
  return (
    <>
      <Form onClickHander={onClickHander} />
      <List taskList={taskList} />
    </>
  );
};
