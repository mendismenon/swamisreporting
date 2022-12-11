
import { all } from 'redux-saga/effects';
import { formSubmitWatcher } from './FormSaga';


export default function* rootSaga() {
    yield all([
        formSubmitWatcher()
    ]);
 }
