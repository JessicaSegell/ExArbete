import * as actionTypes from './actionTypes';
import { firestore } from '../../src/config';

const connectResultsStart = () => ({
    type: actionTypes.CONNECT_RESULTS_START,
});

const createResultSuccess = () => ({
    type: actionTypes.CREATE_RESULT_SUCCESS,
});

const createResultError = (error) => ({
    type: actionTypes.CREATE_RESULT_ERROR,
    error: error.message,
});

export const createResult = (result) => (dispatch) => {
    dispatch(connectResultsStart());
    firestore.collection('results').doc(id).update({

    })

};
