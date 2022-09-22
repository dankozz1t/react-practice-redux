import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { REMOVE_CART } from '../../redux/cart/cart-types';

const CartPage = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const elements = cart.map(({ id, name, description }) => (
    <li key={id}>
      <h3>{name}</h3>
      <p>{description}</p>
      <button
        type="button"
        onClick={() => {
          dispatch({ type: REMOVE_CART, payload: id });
        }}
      >
        Delete
      </button>
    </li>
  ));

  return (
    <div>
      <h1> {cart.length} products in cart</h1>
      <ul style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {elements}
      </ul>
    </div>
  );
};

export default CartPage;
