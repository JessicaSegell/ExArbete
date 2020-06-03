import * as actionTypes from './actionTypes';
import { firebase, firebaseAuth, firestore, fieldPath, fieldValue } from '../../src/config';

const connectListStart = () => ({
    type: actionTypes.CONNECT_LIST_START,
});

const createListSuccess = () => ({
    type: actionTypes.CREATE_LIST_SUCCESS,
});

const createListError = (error) => ({
    type: actionTypes.CREATE_LIST_ERROR,
    error: error.message,
});

const getListStart = () => ({
    type: actionTypes.GET_LIST_START,
});

const getListSuccess = (fetchedList) => ({
    type: actionTypes.GET_LIST_SUCCESS,
    payload: fetchedList,
});

const getListError = (error) => ({
    type: actionTypes.GET_LIST_ERROR,
    error: error.message,
});

/* let listKey;
const getListKey = () => {
    let user = firebaseAuth.currentUser;
    firestore.collection('user_accounts').doc(user.uid).get()
        .then((doc) => {
            listKey = doc.data().myListKey
            console.log("Document data:", doc.data().myListKey, 'listKey:', listKey);
        })
    return listKey;
}; */

export const createList = (list) => (dispatch) => {
    //getListKey();
    let listKey;
    let user = firebaseAuth.currentUser;
    firestore.collection('user_accounts').doc(user.uid).get()
        .then((doc) => {
            listKey = doc.data().myListKey
            console.log("Document data:", doc.data().myListKey, 'listKey:', listKey);
        })
        .then(() => {
            console.log('listkey stick:', listKey)
            dispatch(connectListStart());
            const docRef = firestore.collection('user_items_list').doc(listKey);
            docRef.update({
                'myList': fieldValue.arrayUnion({ list }),
            })
        })
        .then(() => {
            dispatch(createListSuccess()) //skicka in result?
            console.log('create list success!')
        })
        .catch(error => {
            dispatch(createListError(error))
            console.log('Something went wrong', error);
        });
};

export const getList = () => ((dispatch) => {
    dispatch(getListStart());
    let listKey;
    let fetchedList;
    let listItem;
    let user = firebaseAuth.currentUser;
    firestore.collection('user_accounts').doc(user.uid).get()
        .then((doc) => {
            listKey = doc.data().myListKey
            console.log('listKey:', listKey);
        })
        .then(() => {
            const docRef = firestore.collection('user_items_list').doc(listKey)
            docRef.get()
                .then((doc) => {
                    fetchedList = doc.data().myList
                    console.log('doc data:', fetchedList)
                    let x;
                    for(x of fetchedList){
                        console.log('X:', x.list[0].name);
                        return x.list;
                    }
                }).then((res) => {
                    console.log('dispatch from action to reducer');
                    console.log('Res:', res);
                    dispatch(getListSuccess(res));
                }).catch((err) => {
                    dispatch(getListError(err));
                    console.log('Something went wrong', err);
                });
        })



});

/* { merge: true }
.where(fieldPath.documentId(), '==', listKey) */

/* .catch(err => {
                    console.log('Something went wrong:', err)
                }) */
