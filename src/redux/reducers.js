import { createStore, combineReducers} from 'redux'


const CHANGE='CHANGE';
const volumeReducer=(state=30,action)=>
{
    switch(action.type)
    {
        case CHANGE :
        const newState=action.volume
        return newState;
        default :
        return state;
    }
}

const SWITCH='SWITCH';
const powerReducer=(state=true,action)=>
{
    switch(action.type)
    {
        case SWITCH :        
        return !state;
        default :
        return state;
    }
}



const rootReducer = combineReducers({
    volume:volumeReducer,
    power:powerReducer
  }); 
  
  
const store=createStore(rootReducer)

export {store, volumeReducer}