import axios from "axios";
import React, { useEffect, useState } from "react";
import AddTask from "../AddTask/AddTask";
import Counter from "../Counter/Counter";
import styles from "./task.module.css";

const Task = ({counterdata}) => {
  // NOTE: do not delete `data-testid` key value pair

  const [textdata,setTextdata]= useState([])

 


  useEffect(()=>{
    getData()
  },[])
  
  const getData=()=>{
    axios.get("http://localhost:3001/todo").then((res)=>setTextdata(res.data))

  }



  // const addData=(text)=>{
  //   axios.post("http://localhost:8080/TodoData")
  //   .then(()=>
  //   {getData()})
  // }

  const handelDelete=(id)=>{
    axios.delete(`http://localhost:3001/todo/${id}`).then(getData)
  }

 
  //console.log(textdata)
 
    
  return (
      textdata.map((e)=>{
        return(
          <li data-testid="task" key={e.id} className={styles.task}>
     
          <input type="checkbox" data-testid="task-checkbox" />
          <div data-testid="task-text">{e.text}</div>
          {/* Counter here */}
          <Counter countervalue={e.count}></Counter>
           
          <button data-testid="task-remove-button" onClick={()=>{handelDelete(e.id)}}>X</button>
        </li>
        )
      })
  );
};

export default Task;
