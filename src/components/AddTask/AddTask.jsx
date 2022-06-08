import React, { useState } from "react";
import styles from "./addTask.module.css";

const AddTask = ({getText}) => {

  // NOTE: do not delete `data-testid` key value pair
     let [text,setText] =useState()


  return (
    <div className={styles.todoForm}>
      <input data-testid="add-task-input" type="text" className="inp" onChange={(e)=>{
        setText(e.target.value)
      }}/>
      <button data-testid="add-task-button" className="but" onClick={()=>{getText(text)}} >+</button>
    </div>
  );
};

export default AddTask;
