import React, { useState } from "react";
import { Form } from "./components/Form";
import { Table } from "./components/Table";
import { TotalHrs } from "./components/TotalHrs";
import "./App.css";
import { Api_post_mehtod } from "../src/Apihelper/axious.js";
import { getUser } from "../src/Apihelper/axious.js";
import { updateUser } from "../src/Apihelper/axious.js";
import { deleteTask } from "../src/Apihelper/axious.js";
import { useEffect } from "react";

export const App = () => {
  const [taskList, setTaskList] = useState([]);

  const fetchdata = async () => {
    const data = await getUser();
    return setTaskList(data.result);
  };

  useEffect(() => {
    fetchdata();
  }, []);

  // storing the from object in the task list

  // call get method here

  // reciving form on button click
  const onClickHander = async (form) => {
    // make api function call here for post
    await Api_post_mehtod(form);
    fetchdata();
  };
  // handle on Switch button clicked
  const OnSwitchhandler = (_id, type) => {
    const getdata = async () => {
      const obj = { _id, type };
      return await updateUser(obj);
    };
    getdata();
    fetchdata();
  };

  // handle on delete button clicked

  const onDeleteHandler = (_id) => {
    // confirm("Are you sure about deleting this item ?");
    const deleteData = async (_id) => {
      const data = { _id };
      return await deleteTask(data);
    };
    deleteData(_id);
    fetchdata();
  };

  return (
    <>
      <div className="wrapper">
        <div className="container p-3">
          <h1 className="text-center">
            TimeWise: Your Personal Time Tracker & Saver
          </h1>

          <Form onClickHander={onClickHander} />
          <Table
            taskList={taskList}
            OnSwitchhandler={OnSwitchhandler}
            onDeleteHandler={onDeleteHandler}
          />
          <TotalHrs taskList={taskList} />
        </div>
      </div>
    </>
  );
};
