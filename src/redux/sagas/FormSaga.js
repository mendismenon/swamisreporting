import { apiCall } from "../../utill/Api";
import { pageURL } from "../../utill/MicroServiceURL";
import { FORM_SUBMIT, FORM_SUBMIT_FAILURE, FORM_SUBMIT_SUCCESS } from "../actions/FormAction";
import { put, takeLatest, call } from "redux-saga/effects";
import { STATE } from "../actions/StateAction";

function* formSubmitFn(action) {
    try{
        let submitFormUrl = pageURL.SHEET_URL;
        let response = yield call(apiCall, "post", submitFormUrl, action.data);
        console.log(response);
        if (response?.status === 200) {
            yield put({ type: FORM_SUBMIT_SUCCESS, data: response.data });
            //yield put({type: STATE, data: {}});
        }else{
            yield put({ type: FORM_SUBMIT_FAILURE, data: response?.data });
        }
    }
    catch(e){
        console.log(e);
        yield put({ type: FORM_SUBMIT_FAILURE, data: "Something went wrong!" });
    }
}

export function* formSubmitWatcher(){
    yield takeLatest(FORM_SUBMIT, formSubmitFn)
} 