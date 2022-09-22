import axios from 'axios';

const LIMIT_PRODUCTS = 10;

const instanceProducts = axios.create({
  baseURL: 'https://62becfba0bc9b125615fd0f7.mockapi.io/api/products?',
});

const fetchProducts = () =>
  instanceProducts.get('', { params: { page: 1, limit: LIMIT_PRODUCTS } });

export const api = {
  fetchProducts,
};
