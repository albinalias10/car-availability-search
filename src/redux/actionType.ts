export const SET_SORTING_ORDER = "SET_SORTING_ORDER";

export type SortValue = "asc" | "desc" | "";

export interface StoreState {
    sortValue: SortValue;
}


export interface setSortingAction {
    type: typeof SET_SORTING_ORDER;
    payload: SortValue;
  }

export type ActionTypes = setSortingAction;