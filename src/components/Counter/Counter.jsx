import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./counter.module.css";

const Counter = ({countervalue}) => {
  // sample value to be replaced


   const [count,setCount] = useState(countervalue)


  let handelCounter =(data)=>{
  
      setCount(count+data)
  

  }
  // NOTE: do not delete `data-testid` key value pair
  return (
    <div className={styles.counter}>
      <button data-testid="task-counter-increment-button" onClick={()=>{handelCounter(1)}}>+</button>
      <span data-testid="task-counter-value">{count}</span>
      <button data-testid="task-counter-decrement-button" onClick={()=>{if(count>=1)handelCounter(-1)}}>-</button>
    </div>
  );
};

export default Counter;
