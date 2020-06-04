import * as actionTypes from '../actions/actionTypes';

const initState = {
    userList: null,
    loading: false,
    error: null,
};

const getListStart = (state) => ({
    ...state,
    loading: true,
});

const getListSuccess = (state, action) => {
    console.log('get list reducer');
    const listItems = [];
    action.payload.forEach((item) => {
        listItems.push({
            id: item.id,
            name: item.name,
            plu: item.plu,
            url: item.url,
            categoryKey: item.categoryKey,
        });
    });
    console.log('reducer done', listItems);
    return {
        ...state,
        loading: false,
        error: null,
        userList: listItems,
    };
};

const getListError = (state, error) => ({
    ...state,
    loading: false,
    error: error,
});

const connectListStart = (state) => ({
    ...state,
    loading: true,
});

const createListSuccess = (state) => ({
    ...state,
    loading: false,
    error: null,
});

const createListError = (state, error) => ({
    ...state,
    loading: false,
    error: error,
});

const userListReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GET_LIST_START:
            return getListStart(state, action);
        case actionTypes.GET_LIST_SUCCESS:
            return getListSuccess(state, action);
        case actionTypes.GET_LIST_ERROR:
            return getListError(state, action);
        case actionTypes.CONNECT_LIST_START:
            return connectListStart(state, action);
        case actionTypes.CREATE_LIST_SUCCESS:
            return createListSuccess(state, action);
        case actionTypes.CREATE_LIST_ERROR:
            return createListError(state, action);
        default:
            return state;
    };
};

export default userListReducer;
