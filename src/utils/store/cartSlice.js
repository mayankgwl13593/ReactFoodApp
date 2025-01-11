import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
      state.items.push(action.payload);
    },
    clearItems: (state) => {
      state.items.length = 0;
    },
    removeItem: (state, action) => {
      const index = state.items.indexOf(action.payload);
      if (index > -1) {
        // only splice array when item is found
        state.items.splice(index, 1); // 2nd parameter means remove one item only
      }
    },
  },
});
export const { addItems, clearItems, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
