import React from 'react';
import { useShop } from '../context/ShopContext';

const WishlistHeart = ({ item }) => {
  const { wishlistItems, toggleWishlist } = useShop();
  // Support both old string items and new object items via id
  const isWishlisted = wishlistItems.some(i => (i.id || i) === (item.id || item));

  return (
    <button 
      onClick={(e) => { 
        e.preventDefault(); 
        e.stopPropagation(); 
        toggleWishlist(item); 
      }}
      className={`wishlist-heart ${isWishlisted ? 'active' : ''}`}
      style={{
        position: 'absolute',
        top: '12px',
        right: '12px',
        background: 'rgba(255, 255, 255, 0.7)',
        border: 'none',
        borderRadius: '50%',
        width: '36px',
        height: '36px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        zIndex: 10,
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
        transition: 'all 0.2s ease',
        color: isWishlisted ? '#c93b4a' : '#666'
      }}
      title={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill={isWishlisted ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
      </svg>
    </button>
  );
};

export default WishlistHeart;
