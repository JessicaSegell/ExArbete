import categoryReducer from './categoryReducer';
import itemReducer from './itemReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    categories: categoryReducer,
    items: itemReducer
});

export default rootReducer
