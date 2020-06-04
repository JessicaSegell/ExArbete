import * as actionTypes from './actionTypes';
import { firebaseAuth, firestore } from '../../src/config';

const connectAuthStart = () => ({
    type: actionTypes.CONNECT_AUTH_START,
})

const loginSuccess = () => ({
    type: actionTypes.LOGIN_SUCCESS,
});

const loginError = (error) => ({
    type: actionTypes.LOGIN_ERROR,
    error: error.message,
});

const logoutSuccess = () => ({
    type: actionTypes.LOGOUT_SUCCESS,
});

const signUpSuccess = () => ({
    type: actionTypes.SIGNUP_SUCCESS,
});

const signUpError = (error) => ({
    type: actionTypes.SIGNUP_ERROR,
    error: error.message,
})

export const signIn = (credentials) => (dispatch) => {
    dispatch(connectAuthStart());
    console.log('signIn ran start');
    firebaseAuth.signInWithEmailAndPassword(
        credentials.email,
        credentials.password,
    ).then(() => {
        dispatch(loginSuccess());
        console.log('loginIn success ran');

    }).catch(error => {
        dispatch(loginError(error));
        console.log('Something went wrong', error.message);
    });
};

export const signOut = () => (dispatch) => {
    console.log('sign out ran start');
    firebaseAuth.signOut()
    .then(() => {
        dispatch(logoutSuccess());
        console.log('logout success ran');
    });
};

export const signUp = (newUser) => (dispatch) => {
    console.log('sign up ran start');
    /* const myListRef = firestore.collection('user_items_list').doc();
    myListRef.set({
        myList: [],
    }); */
    firebaseAuth.createUserWithEmailAndPassword(
        newUser.email,
        newUser.password,
    ).then((res) => {
        return firestore.collection('user_accounts').doc(res.user.uid).set({
            userName: newUser.userName,
            myListKey: firestore.collection('user_items_list').doc().id,
        })
    }).then(() => {
        dispatch(signUpSuccess());
        console.log('sign up success ran');
    }).catch(error => {
        dispatch(signUpError(error));
        console.log('Something went wrong', error);
    });
};
