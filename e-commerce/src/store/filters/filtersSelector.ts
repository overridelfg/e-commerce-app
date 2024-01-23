import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export const filtersSelector = (state: RootState) => state.filtersReducer.queryParams;