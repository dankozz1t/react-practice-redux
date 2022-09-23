import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addCart(state, { payload }) {
      state.items.push(payload);
    },

    deleteCart(state, { payload }) {
      state.items = state.items.filter(contact => contact.id !== payload);
    },
  },
});

export const cartReducer = cartSlice.reducer;

export const { addCart, deleteCart } = cartSlice.actions;
