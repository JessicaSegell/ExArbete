import categoryReducer from './categoryReducer';
import itemReducer from './itemReducer';
import { combineReducers } from 'redux';
import formReducer from './formReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
    categories: categoryReducer,
    items: itemReducer,
    form: formReducer,
    auth: authReducer,
});

export default rootReducer
