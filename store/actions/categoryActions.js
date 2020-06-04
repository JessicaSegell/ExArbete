import * as actionTypes from './actionTypes';
import { firestore } from '../../src/config';

const connectCategoriesStart = () => (
    {
        type: actionTypes.CONNECT_CATEGORIES_START,
    }
);

const getCategoriesSuccess = (categories) => (
    {
        type: actionTypes.GET_CATEGORIES_SUCCESS,
        payload: categories,
    }
);

export const cleanUpCategory = () => (
    {
        type: actionTypes.CLEAN_UP_CATEGORY,
    }
);

export const getCategories = () => ((dispatch) => {
    console.log('cat action');
    dispatch(connectCategoriesStart());
    firestore.collection('categories').get()
        .then((response) => {
            console.log('then block')
            dispatch(getCategoriesSuccess(response));
        })
        .catch((err) => {
            console.log('Something went wrong', err);
        })
});
