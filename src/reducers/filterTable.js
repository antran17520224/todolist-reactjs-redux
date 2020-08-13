import * as types from '../constants/ActionTypes'

var initialState = {
    name : '',
    status : -1,
} 

var myReducers = (state = initialState, action) => {
    switch (action.type) {
        case types.FILTER_TABLE:
            return action.filter;
        default: return state;
    }
}

export default myReducers;