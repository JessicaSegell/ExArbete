import * as actionTypes from './actionTypes';
import { firestore, firebaseAuth } from '../../src/config';

const connectSignUpNewUserStart = () => ({
    type: actionTypes.CONNECT_SIGN_UP_NEW_USER_START,
});

const signUpNewUserSuccess = () => ({
    type: actionTypes.SIGN_UP_NEW_USER_SUCCESS,
    // payload: newUser,
});

export const signUpNewUser = (newUser) => (dispatch) => {
    dispatch(connectSignUpNewUserStart);
    firebaseAuth.createUserWithEmailAndPassword(
        newUser.email,
        newUser.password,
    ).then(res => {
        firestore.collection('user_account').doc(res.user.uid).set({
            userName: newUser.userName,
        })
    }).then(() => {
        dispatch(signUpNewUserSuccess());
    }).catch(error => {
        console.log('Something went wrong', error)
    })
    /*  firestore.collection('user_account').doc().set({
         email: newUser.email,
         password: newUser.password,
     }).then(
         dispatch(signUpNewUserSuccess(newUser))   
     ).catch(error => {
         console.log('Something went wrong', error)
     }) */
}
