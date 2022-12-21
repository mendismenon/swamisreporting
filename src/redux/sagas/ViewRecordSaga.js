import { put, call, takeLatest } from "redux-saga/effects";
import { apiCall } from "../../utill/Api";
import { pageURL } from "../../utill/MicroServiceURL";
import { VIEW_RECORDS, VIEW_RECORDS_FAILURE, VIEW_RECORDS_SUCCESS } from "../actions/ViewRecordsActn";

function* viewRecordsFn(action) {
    try{
        debugger;
        let viewRecordsURL = pageURL.SHEET_URL;
        let response = yield call(apiCall, "get", viewRecordsURL);
        console.log(response);
        if (response?.status === 200) {
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