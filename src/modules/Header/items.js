import { nanoid } from 'nanoid';

const headerItems = [
  {
    id: nanoid(),
    to: '/products',
    text: 'Products',
  },
  {
    id: nanoid(),
    to: '/basket',
    text: 'Basket',
  },
];

export default headerItems;
