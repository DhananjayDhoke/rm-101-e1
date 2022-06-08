import React, { useState } from "react";
import AddTask from "../AddTask/AddTask";
import styles from "./task.module.css";

const Task = () => {
  // NOTE: do not delete `data-testid` key value pair

  const [showText, setShowtext] = useState()

  const [count,setCount] = useState(0)

  let handelCounter =(data)=>{
    
    if(count>=0){
      setCount(count+value)

    }

  }
    
  const getdata=(value)=>{
    // const payload={
    //      id:1,
    //     text:value,
    //     done:false,
    //     count:0
    // }

    setShowtext(value)
 }
    
  return (
    <li data-testid="task" className={styles.task}>
     <AddTask getText={getdata}></AddTask>
      <input type="checkbox" data-testid="task-checkbox" />
      <div data-testid="task-text">{showText}</div>
      {/* Counter here */}
       <button onClick={()=>{handelCounter(1)}}>+</button>
       <h3>{count}</h3>
       <button onClick={()=>{handelCounter(-1)}}>-</button>
      <button data-testid="task-remove-button"></button>
    </li>
  );
};

export default Task;
