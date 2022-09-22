import { ADD_CART, REMOVE_CART } from './cart-types';

const cartReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ADD_CART:
      return [...state, payload];

    case REMOVE_CART:
      return [...state.filter(({ id }) => id !== payload)];

    default:
      return state;
  }
};

export default cartReducer;
