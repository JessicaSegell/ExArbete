import * as actionTypes from '../actions/actionTypes';

const initState = {
    loggedIn: false,
    loading: false,
    error: null,
};

const connectAuthStart = (state) => ({
    ...state,
    loading: true,
});

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
});

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
