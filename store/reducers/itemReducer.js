import * as actionTypes from '../actions/actionTypes';

const initState = {
    items: null,
    loading: false,
    error: null,
};

const connectCategoryItemsStart = (state) => (
    {
        ...state,
        loading: true,
    }
);

const cleanUpItems = (state) => (
    {
        ...state,
        items: null,
        loading: false,
        error: null,
    }
);

const getCategoryItemsSuccess = (state, action) => {
    console.log('item reducer');
    const itms = [];
    action.payload.forEach((item) => {
        itms.push({
            id: item.id,
            name: item.data().name,
            plu: item.data().plu,
            url: item.data().url,
            categoryKey: item.data().categoryKey,
        });
    });
    console.log('reducer done');
    return {
        ...state,
        loading: false,
        error: null,
        items: itms,
    };
};

const itemReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.CONNECT_CATEGORY_ITEMS_START:
            return connectCategoryItemsStart(state, action);
        case actionTypes.GET_CATEGORY_ITEMS_SUCCESS:
            return getCategoryItemsSuccess(state, action);
    }
    return state;
};

export default itemReducer;

