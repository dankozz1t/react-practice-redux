import { nanoid } from 'nanoid';

const headerItems = [
  {
    id: nanoid(),
    to: '/products',
    text: 'Products',
  },
  {
    id: nanoid(),
    to: '/cart',
    text: 'Cart',
  },
];

export default headerItems;
