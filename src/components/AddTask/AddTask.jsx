
import React, { useState } from "react";
import styles from "./addTask.module.css";
import axios from "axios";
import  {nanoid}  from "nanoid";
const AddTask = ({getText}) => {

  // NOTE: do not delete `data-testid` key value pair
     let [text,setText] =useState()

     const handelclick=()=>{
       let  payload ={
          id:nanoid(2),
          text: text,
          done: false,
          count:0
        }

        axios.post("http://localhost:3001/todo",payload)
      
     
     }


  return (
    <div className={styles.todoForm}>
      <input data-testid="add-task-input" type="text" size={"40"} placeholder="Add Task...." onChange={(e)=>{
        setText(e.target.value)
      }}/>
      <button data-testid="add-task-button" onClick={handelclick} >+</button>
    </div>
  );
};

export default AddTask;
