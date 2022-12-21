import { apiCall } from "../../utill/Api";
import { pageURL } from "../../utill/MicroServiceURL";
import { TOKEN_REFRESH, TOKEN_REFRESH_SUCCESS } from "../actions/TokenRefreshActn";
import { put, call, takeLatest } from "redux-saga/effects";
import { FORM_SUBMIT_FAILURE } from "../actions/FormAction";

function* tokenRefreshFn (action) {
    try{
        let tokenURL = pageURL.TOKEN_REFRESH;
        let response = yield call(apiCall, "post", tokenURL, action.data);
        console.log(response);
        if (response?.status === 200) {
            yield put({ type: TOKEN_REFRESH_SUCCESS, data: response.data });
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

export function* tokenRefreshWatcher(){
    yield takeLatest(TOKEN_REFRESH, tokenRefreshFn)
} 