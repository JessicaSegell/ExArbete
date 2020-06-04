import categoryReducer from './categoryReducer';
import itemReducer from './itemReducer';
import { combineReducers } from 'redux';
import authReducer from './authReducer';
import userListReducer from './userListReducer';

const rootReducer = combineReducers({
    categories: categoryReducer,
    items: itemReducer,
    auth: authReducer,
    userList: userListReducer,
});

export default rootReducer;
