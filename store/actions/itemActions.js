import * as actionTypes from './actionTypes';
import { firestore } from '../../src/config';

const connectCategoryItemsStart = () => (
    {
        type: actionTypes.CONNECT_CATEGORY_ITEMS_START,
    }
);

const getCategoryItemsSuccess = (items) => (
    {
        type: actionTypes.GET_CATEGORY_ITEMS_SUCCESS,
        payload: items,
    }
);

export const cleanUpItems = () => (
    {
        type: actionTypes.CLEAN_UP_ITEMS,
    }
);


export const getCategoryItems = (catKey) => ((dispatch) => {
    dispatch(connectCategoryItemsStart());
    console.log('item action', catKey);
    firestore.collection('categoryItems').where('categoryKey', '==', catKey).get()
        .then((res) => {
            console.log('dispatch from action to reducer')
            dispatch(getCategoryItemsSuccess(res));
        })
        .catch((err) => {
            console.log('Something went wrong', err)
        })
});
