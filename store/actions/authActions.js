//import { AsyncStorage } from 'react-native';
//import * as Google from 'expo-google-app-auth';
import * as actionTypes from './actionTypes';
import { firebase, firebaseAuth, firestore } from '../../src/config';
//import { cleanUpLoggedInUserAccount } from './userAccountActions';

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

const createMyList = () => {
}

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

//export default signIn;


//REFERENS

/* let timer;

export const setDidTryAL = () => ({ type: actionTypes.SET_DID_TRY_AL });

const saveDataToStorage = (userId, token, expirationDate, email) => {
    AsyncStorage.setItem(
        'userData',
        JSON.stringify({
            userId,
            token,
            expiryDate: expirationDate.toISOString(),
            email,
        }),
    );
};

const connectAuthStart = () => ({
    type: actionTypes.CONNECT_AUTH_START,
});

const firebaseAuthError = (err) => ({
    type: actionTypes.FIREBASE_AUTH_ERROR,
    error: err,
});

const clearLogoutTimer = () => {
    if (timer) {
        clearTimeout(timer);
    }
};

const loggedOut = () => ({ type: actionTypes.LOGOUT });

export const logout = () => (dispatch) => {
    dispatch(connectAuthStart());
    clearLogoutTimer();
    AsyncStorage.removeItem('userData');
    firebaseAuth.signOut().then(() => {
        console.log('Signed out');
        dispatch(loggedOut());
        dispatch(cleanUpLoggedInUserAccount());
    }).catch((error) => {
        dispatch(firebaseAuthError(error));
    });
};

const setLogoutTimer = (expirationTime) => (dispatch) => {
    console.log(expirationTime);
    timer = setTimeout(() => {
        dispatch(logout());
    }, expirationTime);
};

export const authenticate = (
    userId, token, expirationDate, email,
) => (dispatch) => {
    saveDataToStorage(userId, token, expirationDate, email);
    const expirationTime = expirationDate.getTime() - new Date().getTime();
    dispatch(setLogoutTimer(expirationTime));
    dispatch({
        type: actionTypes.AUTHENTICATE, userId, token, email,
    });
};

 export const googleSignIn = () => async (dispatch) => {
    dispatch(connectAuthStart());
    try {
        const result = await Google.logInAsync({
            androidClientId: ANDROID_CLIENT_ID,
            iosClientId: IOS_CLIENT_ID,
            androidStandaloneAppClientId: ANDROID_STANDALONE_APP_CLIENT_ID,
            iosStandaloneAppClientId: IOS_STANDALONE_APPCLIENT_ID,
            scopes: ['profile', 'email'],
        });

        if (result.type === 'success') {
            console.log(result);
            const credential = firebase.auth.GoogleAuthProvider.credential(
                result.idToken, result.accessToken,
            );
            firebaseAuth.signInWithCredential(credential).then(() => {
                console.log('signed in with google credential');
            }).catch((err) => {
                console.log('authActions.js:googleSignIn()', err);
            });
        }
    } catch (err) {
        console.log('google log in error');
        dispatch(firebaseAuthError(err));
    }
}; 

export const cleanUpAuthError = () => ({
    type: actionTypes.CLEAN_UP_AUTH_ERROR,
});
 */