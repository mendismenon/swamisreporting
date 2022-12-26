import { put, call, takeLatest } from "redux-saga/effects";
import { apiCall, fetchCall } from "../../utill/Api";
import { pageURL } from "../../utill/MicroServiceURL";
import { VIEW_RECORDS, VIEW_RECORDS_FAILURE, VIEW_RECORDS_SUCCESS } from "../actions/ViewRecordsActn";

function* viewRecordsFn(action) {
    try{
        let viewRecordsURL = pageURL.FETCH_CALLDATA;
        let response = yield call(fetchCall, "get", viewRecordsURL);
        console.log(response);
        debugger;
        if (response?.status === 200 || response?.status === 201) {
            yield put({ type: VIEW_RECORDS_SUCCESS, data: response.data });
        }else{
            yield put({ type: VIEW_RECORDS_FAILURE, data: response?.data });
        }
    }
    catch(e){
        yield put({ type: VIEW_RECORDS_FAILURE, data: "Something went wrong" });
    }   
}

export function* viewRecordWatcher(){
    yield takeLatest(VIEW_RECORDS, viewRecordsFn)
}