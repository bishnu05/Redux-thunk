import axios from "axios";
import * as types from "./actionTypes";

//actionCreaters=>action object

const getTasksRequest=()=>{
    return{
        type:types.GET_TASKS_REQUEST
    }
}
const getTasksSuccess=(payload)=>{
    return{
        type:types.GET_TASKS_SUCCESS,
        payload,
    }
}
const getTasksFailure=()=>{
    return{
        type:types.GET_TASKS_FAILURE
    }
}

const addTaskRequest=()=>{
    return{
        type:types.ADD_TASK_REQUEST
    };
};
const addTaskSuccess=()=>{
    return{
        type:types.ADD_TASK_SUCCESS,
        
    }
}
const addTaskFailure=(errorMessage)=>{
    return{
        type:types.ADD_TASK_FAILURE,
        payload:errorMessage,
    }
}

const getTasks=(dispatch)=>{
    dispatch(getTasksRequest())
    axios.get("http://localhost:8080/tasks")
     .then((r)=>{
        dispatch(getTasksSuccess(r.data))
     }) 
      .catch((e)=>{
        dispatch(getTasksFailure(e))
      })
}


export {getTasks,getTasksRequest,getTasksSuccess,getTasksFailure,addTaskRequest,addTaskSuccess,addTaskFailure}