import * as actionTypes from '../actions/actionTypes';

const initState = {
    results: null,
    loading: false,
    error: null,
};

const connectResultsStart = (state) => ({
    ...state,
    loading: true,
});

const createResultSuccess = (state) => ({
    ...state,
    loading: false,
    error: null,
});

const createResultError = (state, error) => ({
    ...state,
    loading: false,
    error: error,
});

const resultReducer = (state = initState, action) => {
    switch(action.type){
        case actionTypes.CONNECT_RESULTS_START:
            return connectResultsStart(state, action);
        case actionTypes.CREATE_RESULT_SUCCESS:
            return createResultSuccess(state, action);
        case actionTypes.CREATE_RESULT_ERROR:
            return createResultError(state, action);
        default:
            return state;
    };
};

export default resultReducer;
