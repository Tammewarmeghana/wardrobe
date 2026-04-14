import React from 'react';
import { FiShoppingBag } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useShop } from '../../context/ShopContext';
import './Navbar.css';

const CartIcon = () => {
  const { cartCount } = useShop();

  return (
    <Link to="/cart" className="icon-wrapper">
      <FiShoppingBag />
      {cartCount > 0 && <span className="badge">{cartCount}</span>}
    </Link>
  );
};

export default CartIcon;
