import axios from "axios";
import React, { useState } from "react";
import styles from "./taskHeader.module.css";



const TaskHeader = () => {
  // sample values to be replaced
  const [len, setLen] = useState(0)
  const getData=()=>{
    axios.get("http://localhost:3001/todo").then((res)=>setLen(res.data.length))

  }
  getData()
   

  let totalTask = len;
  let unCompletedTask = 0;

  

  // NOTE: do not delete `data-testid` key value pair
  return (
    <div data-testid="task-header" className={styles.taskHeader}>
      <h1>Todo List</h1>
      <b data-testid="header-remaining-task">You have {unCompletedTask}</b>
      <b data-testid="header-total-task"> of {totalTask} task remaning</b>
    </div>
  );
};

export default TaskHeader;
