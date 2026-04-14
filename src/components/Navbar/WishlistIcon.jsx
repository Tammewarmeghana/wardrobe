import React from 'react';
import { FiHeart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useShop } from '../../context/ShopContext';
import './Navbar.css';

const WishlistIcon = () => {
  const { wishlistCount } = useShop();

  return (
    <Link to="/wishlist" className="icon-wrapper">
      <FiHeart />
      {wishlistCount > 0 && <span className="badge">{wishlistCount}</span>}
    </Link>
  );
};

export default WishlistIcon;
