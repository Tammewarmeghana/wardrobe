import React, { createContext, useState, useContext, useEffect } from 'react';

const ShopContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useShop = () => useContext(ShopContext);

export const ShopProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [wishlistItems, setWishlistItems] = useState(() => {
    try {
      const saved = localStorage.getItem('wishlistItems');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('cartItems');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const toggleWishlist = (item) => {
    setWishlistItems(prev => {
      const exists = prev.some(i => i.id === item.id);
      return exists ? prev.filter(i => i.id !== item.id) : [...prev, item];
    });
  };

  const addToCart = (item) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: (i.quantity || 1) + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const updateCartQuantity = (id, quantity) => {
    setCartItems(prev => {
      if (quantity <= 0) {
        return prev.filter(i => i.id !== id);
      }
      return prev.map(i => i.id === id ? { ...i, quantity } : i);
    });
  };

  const cartCount = cartItems.reduce((acc, item) => acc + (item.quantity || 1), 0);

  return (
    <ShopContext.Provider value={{
      searchQuery, setSearchQuery,
      wishlistItems, toggleWishlist, wishlistCount: wishlistItems.length,
      cartItems, addToCart, updateCartQuantity, cartCount
    }}>
      {children}
    </ShopContext.Provider>
  );
};
