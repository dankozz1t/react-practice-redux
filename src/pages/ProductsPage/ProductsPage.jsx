import React, { useState, useEffect } from 'react';
import { api } from 'shared/service/api.service';
import { useSelector, useDispatch } from 'react-redux';

import { ADD_CART } from '../../redux/cart/cart-types';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    try {
      api
        .fetchProducts()
        .then(({ data }) => {
          setProducts(state => [...state, ...data]);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  const handleBuyClick = item => {
    if (cart.some(({ id }) => id === item.id)) {
      alert(`Duplicate product ${item.name}`);
      return;
    }

    dispatch({ type: ADD_CART, payload: item });
  };

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  const elements = products.map(({ id, name, description }) => (
    <li key={id}>
      <h3>{name}</h3>
      <p>{description}</p>
      <button
        type="button"
        onClick={() => {
          handleBuyClick({ id, name, description });
        }}
      >
        Buy
      </button>
    </li>
  ));

  return (
    <>
      <h2>Products Page</h2>
      <ul style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
        {elements}
      </ul>
    </>
  );
};

export default ProductsPage;
