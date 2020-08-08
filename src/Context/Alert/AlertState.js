//initial State, All of our actions For example SearchUsers and request to Github.....
import React, {useReducer} from 'react';
import AlertContext from './alertContext';
import AlertReducer from './alertReducer';
import {
  SET_ALERT,
  REMOVE_ALERT
} from '../types'

const AlertState = props => {
const initialState = null;

const [state, dispatch] = useReducer(AlertReducer, initialState);

//Set Alert
 //Error Handling method, alert obj will get pass to Alert compn. with the msg and type weve setted in the Search comp.
 const setAlert = (msg, type) => {
     dispatch({type:SET_ALERT,
    payload:{msg, type}
     })

     setTimeout(() => dispatch({type:REMOVE_ALERT}), 5000)
    }
    

return <AlertContext.Provider
//with the props here will make the avaibalbe for the entire app
value= {{
  alert: state,
  setAlert,

}}
>
    {props.children}
</AlertContext.Provider>

}

export default AlertState;