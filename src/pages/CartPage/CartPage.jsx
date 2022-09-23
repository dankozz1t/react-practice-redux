import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteCart } from '../../redux/cart/cart-slice';

const CartPage = () => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  if (!cart.length) {
    return <></>;
  }

  console.log(cart);

  const elements = cart.map(({ item: { id, name, description } }) => (
    <li key={id}>
      <h3>{name}</h3>
      <p>{description}</p>
      <button
        type="button"
        onClick={() => {
          dispatch(deleteCart({ id }));
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
