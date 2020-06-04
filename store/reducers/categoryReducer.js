import * as actionTypes from '../actions/actionTypes';

const initState = {
    categories: null,
    loading: false,
    error: null,
};

const connectCategoriesStart = (state) => (
    {
        ...state,
        loading: true,
    }
);

const cleanUpCategory = (state) => (
    {
        ...state,
        categories: null,
        loading: false,
        error: null,
    }
);

const getCategoriesSuccess = (state, action) => {
    console.log('cat reducer');
    const categories = [];
    action.payload.forEach((category) => {
        categories.push({ id: category.id, name: category.data().name, url: category.data().url });
    });
    return {
        ...state,
        loading: false,
        error: null,
        categories: categories,
    };
};

const categoryReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GET_CATEGORIES_SUCCESS:
            return getCategoriesSuccess(state, action)
        case actionTypes.CONNECT_CATEGORIES_START:
            return connectCategoriesStart(state, action)
        case actionTypes.CLEAN_UP_CATEGORY: 
            return cleanUpCategory(state, action);
        default:
            return state;
    };
};

export default categoryReducer;
