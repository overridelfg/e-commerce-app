import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export enum EnumProductSort {
    HIGH_PRICE = 'high-price',
    LOW_PRICE = 'low-price',
    NEWEST = 'newest',
    OLDEST = 'oldest',
}

export type TypeProductDataFilters = {
    sort?: EnumProductSort | string;
    page?: string;
    perPage?: string;
    searchTerm?: string;
}

export interface IFilterState {
    queryParams: TypeProductDataFilters
}

export interface IFiltersActionsPayload {
    key: keyof TypeProductDataFilters
    value: string
}

const initialState: IFilterState = {
    queryParams: {
        sort: EnumProductSort.NEWEST,
        page: '1',
        perPage: '4',
        searchTerm: ''
    }
}

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        updateQueryParam: (state, action: PayloadAction<IFiltersActionsPayload>) => {
            const {key, value} = action.payload;
            state.queryParams[key] = value;
        }
    }
});

const {reducer, actions} = filtersSlice;

export default reducer;

export const {
    updateQueryParam
} = actions
