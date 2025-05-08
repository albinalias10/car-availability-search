import {
    SET_SORTING_ORDER,
    type SortValue,
    type ActionTypes
} from './actionType';

export const setSortingOrder = (sortValue: SortValue): ActionTypes => {
    return {
        type: SET_SORTING_ORDER,
        payload: sortValue
    };
};