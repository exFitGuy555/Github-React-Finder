//Basically will change the state of curtain cmponents thats need changing when somthing happen
import {
   SET_ALERT,
   REMOVE_ALERT
} from '../types'


export default (state, action) => {
    switch (action.type) {
        case SET_ALERT:
            return action.payload;
            case REMOVE_ALERT: 
            return null;
            default:
                return state
}
}