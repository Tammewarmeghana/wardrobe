import React from 'react';
import { useShop } from '../context/ShopContext';
import { useNavigate } from 'react-router-dom';
import './gownsaree.css'; 

const Wishlist = () => {
    const { wishlistItems, toggleWishlist, addToCart } = useShop();
    const navigate = useNavigate();

    return (
        <div className="gownsaree-wrapper page-container" style={{ minHeight: '80vh' }}>
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
                        <div key={index} className="product-card" style={{ 
                            position: "relative", 
                            height: 'auto',
                            display: 'flex',
                            flexDirection: 'column',
                            backgroundColor: 'white',
                            borderRadius: '12px',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
                        }}>
                            <button 
                                onClick={(e) => { 
                                    e.preventDefault(); 
                                    toggleWishlist(item); 
                                }}
                                className="wishlist-heart active"
                                style={{
                                    position: 'absolute', top: '12px', right: '12px', background: 'rgba(255, 255, 255, 0.9)',
                                    border: 'none', borderRadius: '50%', width: '32px', height: '32px', display: 'flex',
                                    alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 10,
                                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)', color: '#c93b4a'
                                }}
                                title="Remove from wishlist"
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                </svg>
                            </button>
                            
                            <div style={{ height: '300px', overflow: 'hidden', borderTopLeftRadius: '12px', borderTopRightRadius: '12px' }}>
                                <img 
                                    src={item.image || ""} 
                                    alt={item.title || item} 
                                    style={{ 
                                        width: '100%', 
                                        height: '100%', 
                                        objectFit: 'cover',
                                        backgroundColor: '#f9f9f9'
                                    }} 
                                />
                            </div>

                            <div className="card-content" style={{ padding: '16px', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                                <div>
                                    <h3 className="brand-name" style={{ fontSize: '15px', fontWeight: '600', marginBottom: '6px', color: '#111' }}>
                                        {item.brand || "Maison d'Élégance"}
                                    </h3>
                                    <p className="product-title" style={{ 
                                        fontSize: '13px', 
                                        color: '#666', 
                                        margin: '0 0 12px 0',
                                        display: '-webkit-box',
                                        WebkitLineClamp: 2,
                                        WebkitBoxOrient: 'vertical',
                                        overflow: 'hidden',
                                        height: '36px',
                                        lineHeight: '1.4'
                                    }}>
                                        {item.title || item}
                                    </p>
                                </div>
                                
                                <div style={{ borderTop: '1px solid #f0f0f0', paddingTop: '12px', marginTop: 'auto' }}>
                                    <div className="price" style={{ fontSize: '18px', fontWeight: '700', marginBottom: '12px', color: '#111' }}>
                                        {typeof item.price === 'number' ? `₹${item.price.toLocaleString()}` : (item.price || <span style={{fontSize: '12px', color: '#999'}}>Price unavailable</span>)}
                                    </div>
                                    <button 
                                        className="buying-options-btn" 
                                        style={{ 
                                            width: '100%', 
                                            margin: 0, 
                                            padding: '10px',
                                            borderRadius: '8px',
                                            fontSize: '13px',
                                            fontWeight: '600',
                                            backgroundColor: '#111',
                                            color: 'white',
                                            border: 'none',
                                            cursor: 'pointer'
                                        }}
                                        onClick={() => addToCart({
                                            id: item.id || `wish_${index}`,
                                            name: item.title || item,
                                            price: parseFloat(String(item.price).replace(/[^0-9.]/g, '')) || 0,
                                            image: item.image,
                                            color: 'Default',
                                            size: 'Free Size'
                                        })}
                                    >
                                        Add to Cart
                                    </button>
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
