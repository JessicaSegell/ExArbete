import * as actionTypes from '../actions/actionTypes';

const initState = {
    isValid: false,
    user: null,
    loading: false,
    error: null,
}

const connectSignUpNewUserStart = (state, action) => ({
    ...state,
    loading: true,
});

const signUpNewUserSuccess = (state, action) => ({
    ...state,
    isValid: true,
   // user: action.user,
    loading: false,
    error: null,
})

/* const signUpNewUserError = (state) => ({
    ...state,
    error: err,
}); */

const formReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.CONNECT_SIGN_UP_NEW_USER_START:
            return connectSignUpNewUserStart(state, action);
        case actionTypes.SIGN_UP_NEW_USER_SUCCESS:
            return signUpNewUserSuccess(state, action);
        default:
            return state;
    };
};

export default formReducer;
