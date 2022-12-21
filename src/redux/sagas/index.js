
import { all } from 'redux-saga/effects';
import { formSubmitWatcher } from './FormSaga';
import { tokenRefreshWatcher } from './TokenSaga';
import { viewRecordWatcher } from './ViewRecordSaga';


export default function* rootSaga() {
    yield all([
        formSubmitWatcher(),
        viewRecordWatcher(),
        tokenRefreshWatcher(),
    ]);
 }
