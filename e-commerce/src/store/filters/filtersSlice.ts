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
    categoryNames?: string[];
    minPrice? : string;
    maxPrice? : string;
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
        searchTerm: '',
        categoryNames: [],
        minPrice: '0',
        maxPrice: '10000000000'
    }
}

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        updateQueryParam: (state, action: PayloadAction<IFiltersActionsPayload>) => {
            const {key, value} = action.payload;
            if(key === 'categoryNames') {
                if(state.queryParams[key]?.find(el => el === value)) {
                    state.queryParams[key] = state.queryParams[key]?.filter(el => el !== value);
                }else {
                    state.queryParams[key]?.push(value);
                }

            } else {
                state.queryParams[key] = value as string;
            }
        },
        updateCategoryQueryParam: (state, action: PayloadAction<IFiltersActionsPayload>) => {
            const {key, value} = action.payload;
            const category = [];
            category.push(value);
            if(key === 'categoryNames'){
                state.queryParams[key] = category;
            }
        }
    }
});

const {reducer, actions} = filtersSlice;

export default reducer;

export const {
    updateQueryParam,
    updateCategoryQueryParam
} = actions
