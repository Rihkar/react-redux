import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'toDo',
  initialState: {
    value: [] as string[],
  },
  reducers: {
    create: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = [...state.value, action.payload];
    },
    Delete: (state: {value:string[]}, { payload }:{payload:number}) => {
      state.value.splice(payload, 1);
    },

  },
});

// Action creators are generated for each case reducer function
export const { create, Delete } = counterSlice.actions;
export default counterSlice.reducer;
