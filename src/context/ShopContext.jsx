import React, { createContext, useState, useContext } from 'react';

const ShopContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useShop = () => useContext(ShopContext);

export const ShopProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [wishlistItems, setWishlistItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const toggleWishlist = (item) => {
    setWishlistItems(prev => {
      const exists = prev.some(i => i.id === item.id);
      return exists ? prev.filter(i => i.id !== item.id) : [...prev, item];
    });
  };

  const addToCart = (item) => {
    setCartItems(prev => [...prev, item]);
  };

  return (
    <ShopContext.Provider value={{
      searchQuery, setSearchQuery,
      wishlistItems, toggleWishlist, wishlistCount: wishlistItems.length,
      cartItems, addToCart, cartCount: cartItems.length
    }}>
      {children}
    </ShopContext.Provider>
  );
};
