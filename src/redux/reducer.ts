import type { ActionTypes, PickupReturnDetails, SortValue, StoreState } from "./actionType";

const initialState: StoreState = {
    sortValue: "" as SortValue,
    pickupReturnDetails: {} as PickupReturnDetails,
    carDetails: []
};

export const carReducer = (state = initialState, action: ActionTypes): StoreState => {
    switch (action.type) {
        case "SET_PICKUP_RETURN_DETAILS":
            return {
                ...state,
                pickupReturnDetails: action.payload
            };
        case "SET_CAR_DETAILS":
            return {
                ...state,
                carDetails: action.payload
            };
        case "SET_SORTING_ORDER":
            return {
                ...state,
                sortValue: action.payload
            };
        default:
            return state;
    }
}