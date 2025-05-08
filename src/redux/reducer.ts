import type { ActionTypes, SortValue, StoreState } from "./actionType";

const initialState: StoreState = {
    sortValue: "" as SortValue
};

export const carReducer = (state = initialState, action: ActionTypes): StoreState => {
    switch (action.type) {
        case "SET_SORTING_ORDER":
            return {
                ...state,
                sortValue: action.payload
            };
        default:
            return state;
    }
}