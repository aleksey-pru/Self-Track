import { createSlice } from "@reduxjs/toolkit";
import { INITIAL_STATE } from "./constant.ts";
import type { RootState } from "../store.ts";
import type { TSelectGoals } from "../../types/apiResponse.ts";

/**
 * Reducer
 */
const { reducer, actions } = createSlice({
  name: "goals",
  initialState: INITIAL_STATE,
  reducers: {},
});

export default reducer;

/**
 * Selectors
 */
export const selectGoals: TSelectGoals = (state: RootState) => state.goals;
