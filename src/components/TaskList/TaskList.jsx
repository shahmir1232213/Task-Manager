import React, { useEffect } from "react";
import "../../taskScroll.css";
import NewTask from "./NewTask";
import Accept from "./ActiveTasks";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ employFound }) => {
  let tasks = employFound.tasks;
  console.log("from tasklist: ",tasks)
  let ActiveTasks = tasks.active;
  let NewTasks = tasks.new;
  return (
    <div className="TaskList">
      <Accept ActiveTasks={ActiveTasks} />
      <NewTask NewTasks={NewTasks} />
    </div>
  );
};

export default TaskList;
