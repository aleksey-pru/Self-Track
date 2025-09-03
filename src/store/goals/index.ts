import { createSlice } from '@reduxjs/toolkit';

import type { TSelectGoals } from '../../types/apiResponse.ts';
import type { RootState } from '../store.ts';
import { INITIAL_STATE } from './constant.ts';

/**
 * Reducer
 */
const { reducer, actions } = createSlice({
  name: 'goals',
  initialState: INITIAL_STATE,
  reducers: {}
});

export default reducer;

/**
 * Selectors
 */
export const selectGoals: TSelectGoals = (state: RootState) => state.goals;
