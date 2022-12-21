import ViewRecords from "../../layout/ViewRecords/ViewRecords"
import { VIEW_RECORDS, VIEW_RECORDS_FAILURE, VIEW_RECORDS_SUCCESS } from "../actions/ViewRecordsActn";


const initialState = {
    viewRecordObj : {
        isLoading: false,
        error: null,
        data: null
    }
}

const viewReducer = (state = initialState, action) => {
    debugger;
    switch(action.type){
        case VIEW_RECORDS:{
            return {
                ...state, viewRecordObj:{
                    isLoading: true,
                    error: null,
                    data: null
                }
            }
        }
        case VIEW_RECORDS_SUCCESS: {
            return {
                ...state, viewRecordObj:{
                    isLoading: false,
                    error: null,
                    data: action.data
                }
            }
        }
        case VIEW_RECORDS_FAILURE: {
            return {
                ...state, viewRecordObj:{
                    isLoading: false,
                    error: true,
                    data: action.data
                }
            }
        }
        default: 
        return state;
    }
}
export default viewReducer;