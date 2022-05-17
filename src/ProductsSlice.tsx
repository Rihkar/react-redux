import { createSlice } from '@reduxjs/toolkit';

export const ProductSlice = createSlice({
  name: 'product',
  initialState: {
    value: [] as object[],
  },
  reducers: {
    add: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = [...state.value, action.payload];
    },
    remove: (state: {value:object[]}, { payload }:{payload:number}) => {
      state.value.splice(payload, 1);
    },

  },
});

// Action creators are generated for each case reducer function
export const {
  add, remove,
} = ProductSlice.actions;

export default ProductSlice.reducer;
