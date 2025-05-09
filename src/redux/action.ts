import {
    SET_SORTING_ORDER,
    SET_PICKUP_RETURN_DETAILS,
    SET_CAR_DETAILS_ARRAY_DATA,
    SET_CAR_DETAILS,
    type SortValue,
    type ActionTypes,
    type PickupReturnDetails,
    type CarDetails,
} from './actionType';

export const setSortingOrder = (sortValue: SortValue): ActionTypes => {
    return {
        type: SET_SORTING_ORDER,
        payload: sortValue
    };
};
export const setPickupReturnDetails = (pickupReturnDetails: PickupReturnDetails): ActionTypes => {
    return {
        type: SET_PICKUP_RETURN_DETAILS,
        payload: pickupReturnDetails
    };
};
export const setCarDetailsArrayData = (carDetails: CarDetails[]): ActionTypes => {
    return {
        type: SET_CAR_DETAILS_ARRAY_DATA,
        payload: carDetails
    };
};

export const setCarDetails = (selectedCarDetails: CarDetails[]): ActionTypes => {
    return {
        type: SET_CAR_DETAILS,
        payload: selectedCarDetails
    };
};
