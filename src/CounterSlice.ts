import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    name: 'janis',
    rating: 0,
  },
  reducers: {
    incrementByOne: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += action.payload;
    },
    decrementByOne: (state, action) => {
      state.value -= action.payload;
    },
    // sis sanak nevajadzigs
    incrementByFive: (state, action) => {
      state.value += action.payload;
    },
    divideByTwo: (state, action) => {
      state.value /= action.payload;
    },
    mulitplyBySeven: (state, action) => {
      state.value *= action.payload;
    },
    backToZero: (state, action) => {
      state.value = action.payload;
    },

  },
});

// Action creators are generated for each case reducer function
export const {
  incrementByOne, decrementByOne, incrementByFive, divideByTwo, mulitplyBySeven, backToZero,
} = counterSlice.actions;

export default counterSlice.reducer;
