import * as actionTypes from '../actions/actionTypes';

const initState = {
    loggedIn: false,
    loading: false,
    error: null,
};

const connectAuthStart = (state) => ({
    ...state,
    loading: true,
})

const loginSuccess = (state) => ({
    ...state,
    loggedIn: true,
    loading: false,
    error: null,
});

const loginError = (state, error) => ({
    ...state,
    loading: false,
    error: error,
})

const logoutSuccess = () => ({
    loggedIn: false,
    loading: false,
    error: null,
});

const signUpSuccess = () => ({
    //...state,
    loggedIn: true,
    loading: false,
    error: null,
});

const signUpError = (state, error) => ({
    ...state,
    loading: false,
    error: error,
});

const authReducer = (state = initState, action) => {
    switch(action.type){
        case actionTypes.CONNECT_AUTH_START:
            return connectAuthStart(state, action);
        case actionTypes.LOGIN_SUCCESS:
            return loginSuccess(state, action);
        case actionTypes.LOGIN_ERROR:
            return loginError(state, action);
        case actionTypes.LOGOUT_SUCCESS:
            return logoutSuccess(state, action);
        case actionTypes.SIGNUP_SUCCESS:
            return signUpSuccess(state, action);
        case actionTypes.SIGNUP_ERROR:
            return signUpError(state, action);
        default: 
            return state;
    };
};

export default authReducer;

//REFERENS

/* const initialState = {
    token: null,
    userId: null,
    email: null,
    didTryAutoLogin: false,
    error: null,
    loading: false,
};

const connectAuthStart = (state) => ({
    ...state,
    loading: true,
});

const authenticate = (state, action) => ({
    token: action.token,
    userId: action.userId,
    email: action.email,
    didTryAutoLogin: true,
    error: null,
    loading: false,
});

const setDidTryAl = (state) => ({
    ...state,
    didTryAutoLogin: true,
});

const logout = () => ({
    ...initialState,
    didTryAutoLogin: true,
});

const firebaseAuthError = (state, action) => ({
    ...state,
    error: action.error,
    loading: false,
});

const cleanUpAuthError = (state) => ({
    ...state,
    error: null,
});

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CONNECT_AUTH_START:
            return connectAuthStart(state, action);
        case actionTypes.AUTHENTICATE:
            return authenticate(state, action);
        case actionTypes.SET_DID_TRY_AL:
            return setDidTryAl(state, action);
        case actionTypes.LOGOUT:
            return logout(state, action);
        case actionTypes.FIREBASE_AUTH_ERROR:
            return firebaseAuthError(state, action);
        case actionTypes.CLEAN_UP_AUTH_ERROR:
            return cleanUpAuthError(state, action);
        default:
            return state;
    }
};

export default authReducer; */