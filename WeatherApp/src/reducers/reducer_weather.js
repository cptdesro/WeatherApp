import {FETCH_WEATHER} from '../actions/index'
export default function(state = [], action){
    switch(action.type){
        case FETCH_WEATHER:
            return  state.concat([action.payload.data]);
            //here its important to contat because concat create a new instance array, with new stuff to the end
            //we cannot do state.push(action...) because we would manipulate the existing state, we need to create a new state and return it
    }
    return state;
}