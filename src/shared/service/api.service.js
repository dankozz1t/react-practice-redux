import axios from 'axios';

const LIMIT_PRODUCTS = 10;

const instanceProducts = axios.create({
  baseURL: 'https://62becfba0bc9b125615fd0f7.mockapi.io/api/products?',
});

const fetchProducts = page =>
  instanceProducts.get('', { params: { page, limit: LIMIT_PRODUCTS } });

const fetchTotalPage = async () => {
  return await instanceProducts.get('').then(({ data }) => {
    return Math.ceil(data.length / 10) + 1;
  });
};

export const api = {
  fetchProducts,
  fetchTotalPage,
};
