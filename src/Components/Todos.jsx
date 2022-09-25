import React from "react";
import { useEffect } from "react";
import { getTasks } from "../Redux/action";
import { TodoInput } from "./TodoInput";
import {useDispatch,useSelector} from "react-redux";


const Todos=()=>{
       const dispatch=useDispatch()
       const tasksData=useSelector((store)=>store.tasks)

useEffect(()=>{
    dispatch(getTasks)
},[])

    return <div>
        <h3>Todos</h3>
        <TodoInput />
        {tasksData?.length>0 && tasksData?.map((task)=>{
            return <div key={task.id}>{task.title}</div>
        })}
    </div>
}
export {Todos}