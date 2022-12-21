import { combineReducers } from 'redux';
import AuthReducer from './AuthenticationRed';
import BookPlanReducer from './BookingPlanRed';
import formReducer from './FormRed';
import viewReducer from './ViewRecordRed';
import StateReducer from './StateChanges';
import tokenReducer from './TokenRefreshRed';

const appReducer= combineReducers({
    AuthReducer,
    BookPlanReducer,
    StateReducer,
    formReducer,
    viewReducer,
    tokenReducer
})
export default appReducer


// const rootReducer = (state, action) => {
//     if (action.type === 'SIGNOUT_REQUEST') {
//         // for all keys defined in your persistConfig(s)
//         localStorage.removeItem('persist:root')
//         // storage.removeItem('persist:otherKey')

//         state = undefined;
//     }
//     return appReducer(state, action);
// };


//WHITELIST WHAT TO PERSIST (INCLUDE THE REDUCER FORM COMBINED REDUCER )
export const whitelisted=[
    'AuthReducer',
    'BookPlanReducer',
    'StateReducer',
    'tokenReducer'
]
