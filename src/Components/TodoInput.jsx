import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTaskFailure, addTaskRequest, addTaskSuccess,getTasks } from "../Redux/action";
import axios from "axios";
const TodoInput=()=>{
    const dispatch=useDispatch()
    const [currentTask,setCurrentTask] = useState("")

  const addTask=()=>{
    if(currentTask){
        const payload={
            title:currentTask,
            status:false,
        };
        dispatch(addTaskRequest())
        axios.post("http://localhost:8080/tasks",payload).then((r)=>{
            dispatch(addTaskSuccess(r.data))
        }).then(()=>dispatch(getTasks))
        .catch((e)=>{
            dispatch(addTaskFailure(e))
        })
    }
  }

    return <div>
        <input value={currentTask} placeholder="add task"
        onChange={(e)=>setCurrentTask(e.target.value)}/>
        <button onClick={addTask}>Add Task</button>
    </div>
}

export {TodoInput}