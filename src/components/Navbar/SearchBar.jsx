import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { useShop } from '../../context/ShopContext';
import './Navbar.css';

const SearchBar = () => {
  const { searchQuery, setSearchQuery } = useShop();
  const navigate = useNavigate();

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      navigate('/search');
    }
  };

  return (
    <div className="search-container">
      <FiSearch className="search-icon-nav" onClick={() => navigate('/search')} style={{cursor: 'pointer'}} />
      <input 
        type="text" 
        className="search-input" 
        placeholder="Search products (e.g. 'saree')..." 
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <FiSearch className="search-icon-mobile" onClick={() => navigate('/search')} style={{cursor: 'pointer'}} />
    </div>
  );
};

export default SearchBar;
