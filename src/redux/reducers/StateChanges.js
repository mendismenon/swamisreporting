import { PLAN_SELECT, STATE, VERIFY } from "../actions/StateAction"


const initialState = {
    verify: {
        email: ""
    },
    planSelected: {
        date: "",
        tickets: [],
        previousExpand: -1,
        meals: []
    },
    reportingData: {

    }
}

const StateReducer = (state = initialState, action) => {
    switch (action.type) {
        case VERIFY:{
            return {...state, verify:{
                email: action.data
            }}
        };
        case PLAN_SELECT: {
            return{
                ...state, planSelected: action.data
            }
        };
        case STATE: {
            return{
                ...state,reportingData: action.data
            }
        }
        default:{
            return state;
        }
    }
};
export default StateReducer