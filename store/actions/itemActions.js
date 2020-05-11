import * as actionTypes from './actionTypes';
import { firestore, fieldPath } from '../../src/config';
import collectionNames from '../../firestore/collectionNames';

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
}
)

    // .where(fieldPath.documentId(), 'in', itemIds)
/* export const fetchQuestionsByIds = (questionIds) => (dispatch) => {
    dispatch(connectQuestionsStart());
    console.log('question keys', questionIds);
    firestore.collection(collectionsNames.QUESTIONS)
        .where(fieldPath.documentId(), 'in', questionIds)
        .get()
        .then((questions) => {
            dispatch(fetchQuestionsByIdsSuccess(questions));
        })
        .catch((err) => {
            dispatch(fetchQuestionsByIdsError(err));
        });
}; */


/* export const getCategories = () => (
    (dispatch) => {
        firestore.collection('categories').orderBy('name').get()
            .then((querySnapshot) => {
                dispatch(connectCategoriesStart());
                dispatch(getCategoriesSuccess(querySnapshot));
                //console.log(querySnapshot);
            });
    }); */