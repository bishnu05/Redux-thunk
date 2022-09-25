import * as types from "./actionTypes";

const initState={
    tasks:[],
    isLoading:false,
    isError:false,
};

const reducer=(oldState=initState,action)=>{
    const {type,payload} = action;
    switch(type){
        case types.GET_TASKS_REQUEST:
            return {
                ...oldState,
                isLoading:true,
                isError:false,
            }
        case types.GET_TASKS_SUCCESS:
            return {
                ...oldState,
                tasks:payload,
                isLoading:false,
                isError:false,
            }
        case types.GET_TASKS_FAILURE:
            return {
                ...oldState,
                isLoading:false,
                isError:true,
            }
        
        default:
            return oldState;
    }
}

export {reducer}