export const SET_SORTING_ORDER = "SET_SORTING_ORDER";
export const SET_PICKUP_RETURN_DETAILS = "SET_PICKUP_RETURN_DETAILS";
export const SET_CAR_DETAILS_ARRAY_DATA = "SET_CAR_DETAILS_ARRAY_DATA";
export const SET_CAR_DETAILS = "SET_CAR_DETAILS";

export type SortValue = "asc" | "desc";

export interface StoreState {
    sortValue: SortValue;
    pickupReturnDetails: PickupReturnDetails;
    carDetailsData: CarDetails[];
    selectedCarDetails: CarDetails[];
}

export interface PickupReturnDetails {
    pickupLocation: string;
    returnLocation: string;
}

export interface CarDetails {
    vendorName: string;
    modelName: string;
    transmissionType: string;
    fuelType: string;
    passengerQuantity: string;
    baggageQuantity: string;
    doorQuantity: string;
    carImage: string;
    price: number;
    currency: string;
    isAirConditioned: boolean;
  }

export interface setSortingAction {
    type: typeof SET_SORTING_ORDER;
    payload: SortValue;
}

export interface setPickupReturnDetailsAction {
    type: typeof SET_PICKUP_RETURN_DETAILS;
    payload: PickupReturnDetails;
}
export interface setCarDetailsArrayAction {
    type: typeof SET_CAR_DETAILS_ARRAY_DATA;
    payload: CarDetails[];
}

export interface setCarDetailsAction {
    type: typeof SET_CAR_DETAILS;
    payload: CarDetails[];
}

export type ActionTypes = setSortingAction | setPickupReturnDetailsAction | setCarDetailsArrayAction | setCarDetailsAction;