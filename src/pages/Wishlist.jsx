import React from 'react';
import { useShop } from '../context/ShopContext';
import { useNavigate } from 'react-router-dom';
import './gownsaree.css'; 

const Wishlist = () => {
    const { wishlistItems, toggleWishlist } = useShop();
    const navigate = useNavigate();

    return (
        <div className="gownsaree-wrapper page-container" style={{ padding: '40px 20px', minHeight: '80vh' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '30px' }}>
                <button onClick={() => navigate(-1)} title="Go Back" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0', display: 'flex', alignItems: 'center', color: 'var(--text-main)' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="19" y1="12" x2="5" y2="12"></line>
                        <polyline points="12 19 5 12 12 5"></polyline>
                    </svg>
                </button>
                <h1 style={{ fontSize: '28px', margin: 0, fontFamily: "'Playfair Display', serif" }}>Your Wishlist</h1>
            </div>

            {wishlistItems.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '100px 0', color: '#666' }}>
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.3, marginBottom: '20px' }}>
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                    <p style={{ fontSize: '18px' }}>Your wishlist is currently empty.</p>
                    <button onClick={() => navigate('/collection')} style={{ marginTop: '20px', padding: '12px 24px', backgroundColor: '#c93b4a', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                        Explore Collections
                    </button>
                </div>
            ) : (
                <div className="product-grid">
                    {wishlistItems.map((item, index) => (
                        <div key={index} className="product-card" style={{ position: "relative" }}>
                            <button 
                                onClick={(e) => { 
                                    e.preventDefault(); 
                                    toggleWishlist(item); 
                                }}
                                className="wishlist-heart active"
                                style={{
                                    position: 'absolute', top: '12px', right: '12px', background: 'rgba(255, 255, 255, 0.7)',
                                    border: 'none', borderRadius: '50%', width: '36px', height: '36px', display: 'flex',
                                    alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 10,
                                    boxShadow: '0 2px 5px rgba(0,0,0,0.1)', color: '#c93b4a'
                                }}
                                title="Remove from wishlist"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                </svg>
                            </button>
                            <img src={item.image || ""} alt={item.title || item} className="card-image" style={{ backgroundColor: '#fceceb' }} />
                            <div className="card-content">
                                <h3 className="brand-name">{item.brand || "Wishlisted Item"}</h3>
                                <p className="product-title">{item.title || item}</p>
                                <div className="pricing-block" style={{ marginTop: '10px' }}>
                                    <span className="price" style={{fontSize: '18px'}}>{item.price || <span style={{fontSize: '14px', color: '#666'}}>Saved in wishlist</span>}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Wishlist;
