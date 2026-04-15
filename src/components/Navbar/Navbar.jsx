import React, { useState, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FiMenu, FiX, FiCamera, FiPhone } from 'react-icons/fi';
import SearchBar from './SearchBar';
import WishlistIcon from './WishlistIcon';
import CartIcon from './CartIcon';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const fileInputRef = useRef(null);

  const handleCameraClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log('Image selected for visual search:', file.name);
      navigate(`/search?visual=true&file=${encodeURIComponent(file.name)}`);
    }
  };

  // Helper to determine active link
  const isActive = (path) => location.pathname === path;

  // The original App.jsx had hiddenRoutes, we can either handle it here or in App component.
  // We'll mimic the original hiddenRoutes array from App.jsx so it only shows where intended.
  const hiddenRoutes = ['/', '/login'];
  if (hiddenRoutes.includes(location.pathname)) return null;

  return (
    <nav className="elegant-navbar">
      <div className="hamburger-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <FiX /> : <FiMenu />}
      </div>

      <div className={`nav-left ${isMenuOpen ? 'mobile-open' : ''}`}>
        <Link 
          to="/home" 
          className={`nav-link-elegant ${isActive('/home') ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(false)}
        >
          HOME
        </Link>
        <Link 
          to="/collection" 
          className={`nav-link-elegant highlight ${isActive('/collection') ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(false)}
        >
          COLLECTIONS
        </Link>
        {/* <Link 
          to="/categories" 
          className={`nav-link-elegant ${isActive('/categories') ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(false)}
        >
          CATEGORIES
        </Link> */}
        <Link 
          to="/contact" 
          className={`nav-link-elegant ${isActive('/contact') ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(false)}
        >
          CONTACT
        </Link>
      </div>

      <div className="nav-center">
        <Link to="/home" className="brand-logo">
          Queen's Wardrobe
        </Link>
      </div>

      <div className="nav-right">
        <SearchBar />
        <div className="icon-wrapper" title="Picture Search" style={{ opacity: 0.6, cursor: 'pointer', display: 'flex', alignItems: 'center' }} onClick={handleCameraClick}>
          <FiCamera />
        </div>
        <input 
          type="file" 
          accept="image/*" 
          capture="environment" 
          ref={fileInputRef} 
          style={{ display: 'none' }} 
          onChange={handleFileChange}
        />
        <Link to="/contact" className="icon-wrapper" title="Call Us" style={{ opacity: 0.6 }}>
          <FiPhone />
        </Link>
        <WishlistIcon />
        <CartIcon />
      </div>
    </nav>
  );
};

export default Navbar;
