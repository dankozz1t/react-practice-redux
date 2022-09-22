import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import headerItems from './items';

import s from './header.module.css';

const getActiveClassName = ({ isActive }) => {
  return isActive ? `${s.link} ${s.active}` : `${s.link}`;
};

const Header = () => {
  const cart = useSelector(state => state.cart);

  const menuElements = headerItems.map(({ id, text, to }) => (
    <NavLink end className={getActiveClassName} key={id} to={to}>
      {text}
    </NavLink>
  ));

  return (
    <>
      <span>Logo</span>
      {menuElements}
      <span
        style={{
          backgroundColor: 'darkred',
          color: 'white',
          borderRadius: '50px',
          padding: '5px',
        }}
      >
        {cart.length}
      </span>
    </>
  );
};

export default Header;
