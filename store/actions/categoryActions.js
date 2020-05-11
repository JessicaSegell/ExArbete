import * as actionTypes from './actionTypes';
import { firestore } from '../../src/config';
import collectionNames from '../../firestore/collectionNames';

const connectCategoriesStart = () => (
    {
        type: actionTypes.CONNECT_CATEGORIES_START,
    }
);

const getCategoriesSuccess = (categories) => (
    {
        type: actionTypes.GET_CATEGORIES_SUCCESS,
        /* fetchedCategories */payload: categories,
    }
);

export const cleanUpCategory = () => (
    {
        type: actionTypes.CLEAN_UP_CATEGORY,
    }
)

export const getCategories = () => ((dispatch) => {
    console.log('cat action');
    dispatch(connectCategoriesStart());
    firestore.collection('categories').get()
        .then((response) => {
            console.log('then block')
            dispatch(getCategoriesSuccess(response));
            console.log('2 then block');
        })
        .catch((err) => {
            console.log('Something went wrong', err);
        })
});

/*     firestore.collection("categoryItems").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
        });
    }); */

/* querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => ${doc.data()}`)
            }) */

/* export const fetchCategories = () => (
    (dispatch) => {
        firestore.collection(collectionsNames.CATEGORIES).orderBy('name').get()
            .then((querySnapshot) => {
                dispatch(connectCategoriesStart());
                dispatch(fetchCategoriesSuccess(querySnapshot));
            })
            .catch((err) => {
                dispatch(fetchCategoriesError(err));
            });
    }
); */


