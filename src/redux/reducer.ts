import type { ActionTypes, PickupReturnDetails, StoreState } from "./actionType";

const initialState: StoreState = {
    sortValue: "asc",
    pickupReturnDetails: {} as PickupReturnDetails,
    carDetailsData: [],
    selectedCarDetails:[]
};

export const carReducer = (state = initialState, action: ActionTypes): StoreState => {
    switch (action.type) {
        case "SET_PICKUP_RETURN_DETAILS":
            return {
                ...state,
                pickupReturnDetails: action.payload
            };
        case "SET_CAR_DETAILS_ARRAY_DATA":
            return {
                ...state,
                carDetailsData: action.payload
            };
        case "SET_CAR_DETAILS":
            return {
                ...state,
                selectedCarDetails: action.payload
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