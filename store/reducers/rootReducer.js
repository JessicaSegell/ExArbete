import categoryReducer from './categoryReducer';
import itemReducer from './itemReducer';
import { combineReducers } from 'redux';
import formReducer from './formReducer';
import authReducer from './authReducer';
import userListReducer from './userListReducer';

const rootReducer = combineReducers({
    categories: categoryReducer,
    items: itemReducer,
    form: formReducer,
    auth: authReducer,
    userList: userListReducer,
});

export default rootReducer
