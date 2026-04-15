import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './gownsaree.css';
import './sidebar.css';
import WishlistHeart from '../components/WishlistHeart';
import { useShop } from '../context/ShopContext';

function JacketLehenga() {
    const { addToCart } = useShop();
    const handleAddToCart = (item) => { addToCart(item); };

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const navigate = useNavigate();

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    return (
        <div className="gownsaree-wrapper gown-saree-page-container">
            <div className="page-container" style={{overflowX: 'hidden'}}>
                {/* Header & Tabs */}
                <div className="page-header">
                    {/* Search & Actions */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '24px', paddingBottom: '20px' }}>
                        
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                            <button onClick={() => navigate(-1)} title="Go Back" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0', display: 'flex', alignItems: 'center', color: 'var(--text-main)' }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="19" y1="12" x2="5" y2="12"></line>
                                    <polyline points="12 19 5 12 12 5"></polyline>
                                </svg>
                            </button>
                            <button className="hamburger-btn" onClick={toggleSidebar}>
                                <span></span><span></span><span></span>
                            </button>
                        </div>

                    </div>
                    <div className="top-tabs">
                        <div className="tab active">For you</div>
                        <div className="tab">Deals</div>
                        <div className="tab">Bestsellers</div>
                        <div className="tab">Bought together</div>
                    </div>
                </div>

                {/* Filters */}
                <div className="filter-row">
                    <div className="filter-pill">Price <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="2">
                            <path d="M6 9l6 6 6-6" />
                        </svg></div>
                    <div className="filter-pill">4 stars & up <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="2">
                            <path d="M6 9l6 6 6-6" />
                        </svg></div>
                    <div className="filter-pill">Brand <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="2">
                            <path d="M6 9l6 6 6-6" />
                        </svg></div>
                    <div className="filter-pill">Color <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="2">
                            <path d="M6 9l6 6 6-6" />
                        </svg></div>
                    <div className="filter-pill">Fabric <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="2">
                            <path d="M6 9l6 6 6-6" />
                        </svg></div>
                </div>

                {/* Product Grid */}
                <div className="product-grid">

                    {/* CARD 1 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "JacketLehenga_Premium Pre-Draped Saree Gown in Soft Georgette with Embellished Belt", title: "Premium Pre-Draped Saree Gown in Soft Georgette with Embellished Belt", image: "https://res.cloudinary.com/dodmxncwc/image/upload/v1775991459/5fa06f94-7d9f-486e-b633-a43465ca8a5c_te47iw.png", brand: "Maison d'Élégance", price: <><span>₹</span>14,999</> }} />
                        <img src="https://res.cloudinary.com/dodmxncwc/image/upload/v1775991459/5fa06f94-7d9f-486e-b633-a43465ca8a5c_te47iw.png"
                            alt="Saree Gown" className="card-image" style={{ backgroundColor: '#e5ccce' }} />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#e5ccce' }}></div>
                                <div className="swatch" style={{ backgroundColor: '#bb9b9f' }}></div>
                                <div className="swatch" style={{ backgroundColor: '#2F2A26' }}></div>
                            </div>
                            <h3 className="brand-name">Maison d'Élégance</h3>
                            <p className="product-title">Premium Pre-Draped Saree Gown in Soft Georgette with Embellished Belt</p>

                            <div className="rating-block">
                                <span className="stars">★★★★☆</span>
                                <span className="rating-count">1,245</span>
                            </div>

                            <div className="pricing-block">
                                <span className="discount">-58%</span>
                                <span className="price"><span>₹</span>14,999</span>
                                <span className="original-price">₹35,999</span>
                            </div>

                            <p className="delivery-info">Get it by <span>Thursday, April 14</span><br />FREE Delivery by Maison</p>

                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_b6618fe9", name: "Premium Pre-Draped Saree Gown in Soft Georgette with Embellished Belt", price: 14999, image: "https://res.cloudinary.com/dodmxncwc/image/upload/v1775991459/5fa06f94-7d9f-486e-b633-a43465ca8a5c_te47iw.png", color: "#e5ccce", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>

                    {/* CARD 2 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "JacketLehenga_Modern Indo-Western Fusion Saree with Attached Pallu", title: "Modern Indo-Western Fusion Saree with Attached Pallu", image: "https://res.cloudinary.com/dodmxncwc/image/upload/v1775991587/5f9fc23b-cd2e-43d3-8f36-343501ca9d06_df2oya.png", brand: "Queen's Wardrobe", price: <><span>₹</span>18,499</> }} />
                        <img src="https://res.cloudinary.com/dodmxncwc/image/upload/v1775991587/5f9fc23b-cd2e-43d3-8f36-343501ca9d06_df2oya.png"
                            alt="Indo Western Saree" className="card-image" />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#a37272' }}></div>
                                <div className="swatch" style={{ backgroundColor: '#5d675b' }}></div>
                            </div>
                            <h3 className="brand-name">Queen's Wardrobe</h3>
                            <p className="product-title">Modern Indo-Western Fusion Saree with Attached Pallu</p>

                            <div className="rating-block">
                                <span className="stars">★★★★★</span>
                                <span className="rating-count">892</span>
                            </div>

                            <div className="pricing-block">
                                <span className="discount">-40%</span>
                                <span className="price"><span>₹</span>18,499</span>
                                <span className="original-price">₹30,999</span>
                            </div>

                            <p className="delivery-info">Get it by <span>Friday, April 15</span><br />FREE Delivery</p>

                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_1ac4445a", name: "Modern Indo-Western Fusion Saree with Attached Pallu", price: 18499, image: "https://res.cloudinary.com/dodmxncwc/image/upload/v1775991587/5f9fc23b-cd2e-43d3-8f36-343501ca9d06_df2oya.png", color: "#a37272", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>

                    {/* CARD 3 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "JacketLehenga_Cocktail Saree Gown with Cape Sleeves", title: "Cocktail Saree Gown with Cape Sleeves", image: "https://res.cloudinary.com/dodmxncwc/image/upload/v1775992089/indo_western_1st-removebg-preview_16_mmqopi.png", brand: "Western Elegance", price: <><span>₹</span>24,999</> }} />
                        <img src="https://res.cloudinary.com/dodmxncwc/image/upload/v1775992089/indo_western_1st-removebg-preview_16_mmqopi.png"
                            alt="Modern Saree" className="card-image" />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#2F2A26' }}></div>
                            </div>
                            <h3 className="brand-name">Western Elegance</h3>
                            <p className="product-title">Cocktail Saree Gown with Cape Sleeves</p>

                            <div className="rating-block">
                                <span className="stars">★★★★☆</span>
                                <span className="rating-count">340</span>
                            </div>

                            <div className="pricing-block">
                                <span className="discount">-20%</span>
                                <span className="price"><span>₹</span>24,999</span>
                                <span className="original-price">₹31,500</span>
                            </div>

                            <p className="delivery-info">Get it by <span>Wednesday, April 13</span><br />Prime Delivery</p>

                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_7410bf84", name: "Cocktail Saree Gown with Cape Sleeves", price: 24999, image: "https://res.cloudinary.com/dodmxncwc/image/upload/v1775992089/indo_western_1st-removebg-preview_16_mmqopi.png", color: "#2F2A26", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>

                    {/* CARD 4 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "JacketLehenga_Heritage Silk Trim Saree Gown for Wedding Receptions", title: "Heritage Silk Trim Saree Gown for Wedding Receptions", image: "https://res.cloudinary.com/dodmxncwc/image/upload/v1775991901/indo_western_1st-removebg-preview_15_c6zpuq.png", brand: "Maison d'Élégance", price: <><span>₹</span>21,000</> }} />
                        <img src="https://res.cloudinary.com/dodmxncwc/image/upload/v1775991901/indo_western_1st-removebg-preview_15_c6zpuq.png"
                            alt="Traditional Saree Gown" className="card-image" style={{ backgroundColor: '#fceceb' }} />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#c93b4a' }}></div>
                                <div className="swatch" style={{ backgroundColor: '#0b2b4e' }}></div>
                                <div className="swatch" style={{ backgroundColor: '#b08a5d' }}></div>
                            </div>
                            <h3 className="brand-name">Maison d'Élégance</h3>
                            <p className="product-title">Heritage Silk Trim Saree Gown for Wedding Receptions</p>

                            <div className="rating-block">
                                <span className="stars">★★★★★</span>
                                <span className="rating-count">2,109</span>
                            </div>

                            <div className="pricing-block">
                                <span className="discount">-65%</span>
                                <span className="price"><span>₹</span>21,000</span>
                                <span className="original-price">₹60,000</span>
                            </div>

                            <p className="delivery-info">Get it by <span>Tomorrow, 11 AM</span><br />FREE Express Delivery</p>

                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_241ef3bc", name: "Heritage Silk Trim Saree Gown for Wedding Receptions", price: 21000, image: "https://res.cloudinary.com/dodmxncwc/image/upload/v1775991901/indo_western_1st-removebg-preview_15_c6zpuq.png", color: "#c93b4a", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>

                    {/* CARD 5 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "JacketLehenga_Custom-Fit Sequined Saree Dress", title: "Custom-Fit Sequined Saree Dress", image: "https://res.cloudinary.com/dodmxncwc/image/upload/v1775991913/indo_west_2nd-removebg-preview_21_qv4pcn.png", brand: "Queen's Bespoke", price: <><span>₹</span>38,500</> }} />
                        <img src="https://res.cloudinary.com/dodmxncwc/image/upload/v1775991913/indo_west_2nd-removebg-preview_21_qv4pcn.png"
                            alt="Bespoke Saree Gown" className="card-image" style={{ backgroundColor: '#e5e0dc' }} />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#d1bfae' }}></div>
                                <div className="swatch" style={{ backgroundColor: '#e8e8e8' }}></div>
                            </div>
                            <h3 className="brand-name">Queen's Bespoke</h3>
                            <p className="product-title">Custom-Fit Sequined Saree Dress</p>

                            <div className="rating-block">
                                <span className="stars">★★★★☆</span>
                                <span className="rating-count">112</span>
                            </div>

                            <div className="pricing-block">
                                <span className="discount">-10%</span>
                                <span className="price"><span>₹</span>38,500</span>
                                <span className="original-price">₹42,800</span>
                            </div>

                            <p className="delivery-info">Custom Tailored Delivery by <span>April 20</span><br />White-glove Service
                            </p>

                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_7d3f7394", name: "Custom-Fit Sequined Saree Dress", price: 38500, image: "https://res.cloudinary.com/dodmxncwc/image/upload/v1775991913/indo_west_2nd-removebg-preview_21_qv4pcn.png", color: "#d1bfae", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>

                    {/* CARD 6 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "JacketLehenga_Embroidered Pastel Saree Gown with Dupatta", title: "Embroidered Pastel Saree Gown with Dupatta", image: "https://res.cloudinary.com/dodmxncwc/image/upload/v1775991883/8f77448b-e3e1-4502-9e7b-970ec01ff681_myzq3n.png", brand: "Maison d'Élégance", price: <><span>₹</span>19,500</> }} />
                        <img src="https://res.cloudinary.com/dodmxncwc/image/upload/v1775991883/8f77448b-e3e1-4502-9e7b-970ec01ff681_myzq3n.png"
                            alt="Embroidered Saree Gown" className="card-image" style={{ backgroundColor: '#fceceb' }} />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#bb9b9f' }}></div>
                            </div>
                            <h3 className="brand-name">Maison d'Élégance</h3>
                            <p className="product-title">Embroidered Pastel Saree Gown with Dupatta</p>
                            <div className="rating-block">
                                <span className="stars">★★★★☆</span>
                                <span className="rating-count">85</span>
                            </div>
                            <div className="pricing-block">
                                <span className="discount">-15%</span>
                                <span className="price"><span>₹</span>19,500</span>
                                <span className="original-price">₹22,940</span>
                            </div>
                            <p className="delivery-info">Get it by <span>Saturday, April 16</span><br />FREE Express Delivery</p>
                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_2dd17e8c", name: "Embroidered Pastel Saree Gown with Dupatta", price: 19500, image: "https://res.cloudinary.com/dodmxncwc/image/upload/v1775991883/8f77448b-e3e1-4502-9e7b-970ec01ff681_myzq3n.png", color: "#bb9b9f", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>

                    {/* CARD 7 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "JacketLehenga_Olive Green Sequin Trim Saree", title: "Olive Green Sequin Trim Saree", image: "https://res.cloudinary.com/dodmxncwc/image/upload/v1775992004/indo_western_1st-removebg-preview_18_usw2id.png", brand: "Queen's Wardrobe", price: <><span>₹</span>16,200</> }} />
                        <img src="https://res.cloudinary.com/dodmxncwc/image/upload/v1775992004/indo_western_1st-removebg-preview_18_usw2id.png"
                            alt="Sequin Saree" className="card-image" />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#5d675b' }}></div>
                                <div className="swatch" style={{ backgroundColor: '#a37272' }}></div>
                            </div>
                            <h3 className="brand-name">Queen's Wardrobe</h3>
                            <p className="product-title">Olive Green Sequin Trim Saree</p>
                            <div className="rating-block">
                                <span className="stars">★★★★★</span>
                                <span className="rating-count">430</span>
                            </div>
                            <div className="pricing-block">
                                <span className="discount">-25%</span>
                                <span className="price"><span>₹</span>16,200</span>
                                <span className="original-price">₹21,600</span>
                            </div>
                            <p className="delivery-info">Get it by <span>Monday, April 18</span><br />FREE Delivery</p>
                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_14e78899", name: "Olive Green Sequin Trim Saree", price: 16200, image: "https://res.cloudinary.com/dodmxncwc/image/upload/v1775992004/indo_western_1st-removebg-preview_18_usw2id.png", color: "#5d675b", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>

                    {/* CARD 8 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "JacketLehenga_Midnight Black Chiffon Saree Gown", title: "Midnight Black Chiffon Saree Gown", image: "https://res.cloudinary.com/dodmxncwc/image/upload/v1775992009/indo_west_2nd-removebg-preview_23_anxrk1.png", brand: "Western Elegance", price: <><span>₹</span>12,499</> }} />
                        <img src="https://res.cloudinary.com/dodmxncwc/image/upload/v1775992009/indo_west_2nd-removebg-preview_23_anxrk1.png"
                            alt="Chiffon Saree Gown" className="card-image" />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#2F2A26' }}></div>
                                <div className="swatch" style={{ backgroundColor: '#e5ccce' }}></div>
                            </div>
                            <h3 className="brand-name">Western Elegance</h3>
                            <p className="product-title">Midnight Black Chiffon Saree Gown</p>
                            <div className="rating-block">
                                <span className="stars">★★★★☆</span>
                                <span className="rating-count">612</span>
                            </div>
                            <div className="pricing-block">
                                <span className="discount">-50%</span>
                                <span className="price"><span>₹</span>12,499</span>
                                <span className="original-price">₹24,998</span>
                            </div>
                            <p className="delivery-info">Get it by <span>Thursday, April 14</span><br />Prime Delivery</p>
                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_5664b406", name: "Midnight Black Chiffon Saree Gown", price: 12499, image: "https://res.cloudinary.com/dodmxncwc/image/upload/v1775992009/indo_west_2nd-removebg-preview_23_anxrk1.png", color: "#2F2A26", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>

                    {/* CARD 9 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "JacketLehenga_Royal Navy Blue Designer Saree with Floral Appliques", title: "Royal Navy Blue Designer Saree with Floral Appliques", image: "https://res.cloudinary.com/dodmxncwc/image/upload/v1775992009/indo_west_2nd-removebg-preview_23_anxrk1.png", brand: "Maison d'Élégance", price: <><span>₹</span>28,000</> }} />
                        <img src="https://res.cloudinary.com/dodmxncwc/image/upload/v1775992009/indo_west_2nd-removebg-preview_23_anxrk1.png"
                            alt="Royal Saree" className="card-image" style={{ backgroundColor: '#fceceb' }} />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#0b2b4e' }}></div>
                            </div>
                            <h3 className="brand-name">Maison d'Élégance</h3>
                            <p className="product-title">Royal Navy Blue Designer Saree with Floral Appliques</p>
                            <div className="rating-block">
                                <span className="stars">★★★★★</span>
                                <span className="rating-count">190</span>
                            </div>
                            <div className="pricing-block">
                                <span className="discount">-30%</span>
                                <span className="price"><span>₹</span>28,000</span>
                                <span className="original-price">₹40,000</span>
                            </div>
                            <p className="delivery-info">Get it by <span>Friday, April 15</span><br />FREE Express Delivery</p>
                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_7ba380f9", name: "Royal Navy Blue Designer Saree with Floral Appliques", price: 28000, image: "https://res.cloudinary.com/dodmxncwc/image/upload/v1775992009/indo_west_2nd-removebg-preview_23_anxrk1.png", color: "#0b2b4e", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>

                    {/* CARD 10 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "JacketLehenga_Nude Beige Premium Drape", title: "Nude Beige Premium Drape", image: "https://res.cloudinary.com/dodmxncwc/image/upload/v1775992056/indo_western_1st-removebg-preview_17_i7yjkl.png", brand: "Queen's Bespoke", price: <><span>₹</span>36,100</> }} />
                        <img src="https://res.cloudinary.com/dodmxncwc/image/upload/v1775992056/indo_western_1st-removebg-preview_17_i7yjkl.png"
                            alt="Premium Drape" className="card-image" style={{ backgroundColor: '#e5e0dc' }} />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#d1bfae' }}></div>
                            </div>
                            <h3 className="brand-name">Queen's Bespoke</h3>
                            <p className="product-title">Nude Beige Premium Drape</p>
                            <div className="rating-block">
                                <span className="stars">★★★★☆</span>
                                <span className="rating-count">56</span>
                            </div>
                            <div className="pricing-block">
                                <span className="discount">-5%</span>
                                <span className="price"><span>₹</span>36,100</span>
                                <span className="original-price">₹38,000</span>
                            </div>
                            <p className="delivery-info">Get it by <span>April 20</span><br />White-glove Service</p>
                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_423d0888", name: "Nude Beige Premium Drape", price: 36100, image: "https://res.cloudinary.com/dodmxncwc/image/upload/v1775992056/indo_western_1st-removebg-preview_17_i7yjkl.png", color: "#d1bfae", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>

                    {/* CARD 11 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "JacketLehenga_Draped Georgette Saree Gown in Rose Pink", title: "Draped Georgette Saree Gown in Rose Pink", image: "https://res.cloudinary.com/dodmxncwc/image/upload/v1775992065/indo_west_2nd-removebg-preview_22_modwto.png", brand: "Maison d'Élégance", price: <><span>₹</span>18,000</> }} />
                        <img src="https://res.cloudinary.com/dodmxncwc/image/upload/v1775992065/indo_west_2nd-removebg-preview_22_modwto.png"
                            alt="Saree Gown" className="card-image" style={{ backgroundColor: '#e5ccce' }} />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#e5ccce' }}></div>
                            </div>
                            <h3 className="brand-name">Maison d'Élégance</h3>
                            <p className="product-title">Draped Georgette Saree Gown in Rose Pink</p>
                            <div className="rating-block">
                                <span className="stars">★★★★★</span>
                                <span className="rating-count">140</span>
                            </div>
                            <div className="pricing-block">
                                <span className="discount">-10%</span>
                                <span className="price"><span>₹</span>18,000</span>
                                <span className="original-price">₹20,000</span>
                            </div>
                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_35c8ea52", name: "Draped Georgette Saree Gown in Rose Pink", price: 18000, image: "https://res.cloudinary.com/dodmxncwc/image/upload/v1775992065/indo_west_2nd-removebg-preview_22_modwto.png", color: "#e5ccce", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>

                    {/* CARD 12 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "JacketLehenga_Pleated Indo-Western Saree with Matching Clutch", title: "Pleated Indo-Western Saree with Matching Clutch", image: "https://res.cloudinary.com/dodmxncwc/image/upload/v1775991121/d41830fb-4bbd-4b5e-9960-395ba63a593d_eqrdit.png", brand: "Queen's Wardrobe", price: <><span>₹</span>12,500</> }} />
                        <img src="https://res.cloudinary.com/dodmxncwc/image/upload/v1775991121/d41830fb-4bbd-4b5e-9960-395ba63a593d_eqrdit.png"
                            alt="Saree Gown" className="card-image" />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#a37272' }}></div>
                            </div>
                            <h3 className="brand-name">Queen's Wardrobe</h3>
                            <p className="product-title">Pleated Indo-Western Saree with Matching Clutch</p>
                            <div className="rating-block">
                                <span className="stars">★★★★☆</span>
                                <span className="rating-count">245</span>
                            </div>
                            <div className="pricing-block">
                                <span className="discount">-20%</span>
                                <span className="price"><span>₹</span>12,500</span>
                                <span className="original-price">₹15,625</span>
                            </div>
                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_65a6238e", name: "Pleated Indo-Western Saree with Matching Clutch", price: 12500, image: "https://res.cloudinary.com/dodmxncwc/image/upload/v1775991121/d41830fb-4bbd-4b5e-9960-395ba63a593d_eqrdit.png", color: "#a37272", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>

                    {/* CARD 13 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "JacketLehenga_Minimalist Evening Gown Saree", title: "Minimalist Evening Gown Saree", image: "https://res.cloudinary.com/dodmxncwc/image/upload/v1775992186/indo_western_1st-removebg-preview_19_mxq67f.png", brand: "Western Elegance", price: <><span>₹</span>21,000</> }} />
                        <img src="https://res.cloudinary.com/dodmxncwc/image/upload/v1775992186/indo_western_1st-removebg-preview_19_mxq67f.png"
                            alt="Saree Gown" className="card-image" />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#2F2A26' }}></div>
                            </div>
                            <h3 className="brand-name">Western Elegance</h3>
                            <p className="product-title">Minimalist Evening Gown Saree</p>
                            <div className="rating-block">
                                <span className="stars">★★★★★</span>
                                <span className="rating-count">88</span>
                            </div>
                            <div className="pricing-block">
                                <span className="discount">-15%</span>
                                <span className="price"><span>₹</span>21,000</span>
                                <span className="original-price">₹24,700</span>
                            </div>
                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_fad3c5f7", name: "Minimalist Evening Gown Saree", price: 21000, image: "https://res.cloudinary.com/dodmxncwc/image/upload/v1775992186/indo_western_1st-removebg-preview_19_mxq67f.png", color: "#2F2A26", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>

                    {/* CARD 14 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "JacketLehenga_Handloom Silk Saree Gown for Receptions", title: "Handloom Silk Saree Gown for Receptions", image: "https://res.cloudinary.com/dodmxncwc/image/upload/v1775992199/indo_west_2nd-removebg-preview_27_hjfgpx.png", brand: "Heritage Silks", price: <><span>₹</span>14,000</> }} />
                        <img src="https://res.cloudinary.com/dodmxncwc/image/upload/v1775992199/indo_west_2nd-removebg-preview_27_hjfgpx.png"
                            alt="Traditional Saree Gown" className="card-image" style={{ backgroundColor: '#fceceb' }} />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#c93b4a' }}></div>
                                <div className="swatch" style={{ backgroundColor: '#0b2b4e' }}></div>
                            </div>
                            <h3 className="brand-name">Heritage Silks</h3>
                            <p className="product-title">Handloom Silk Saree Gown for Receptions</p>
                            <div className="rating-block">
                                <span className="stars">★★★★☆</span>
                                <span className="rating-count">421</span>
                            </div>
                            <div className="pricing-block">
                                <span className="discount">-50%</span>
                                <span className="price"><span>₹</span>14,000</span>
                                <span className="original-price">₹28,000</span>
                            </div>
                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_f8c025d3", name: "Handloom Silk Saree Gown for Receptions", price: 14000, image: "https://res.cloudinary.com/dodmxncwc/image/upload/v1775992199/indo_west_2nd-removebg-preview_27_hjfgpx.png", color: "#c93b4a", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>

                    {/* CARD 15 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "JacketLehenga_Signature Embellished Custom Saree", title: "Signature Embellished Custom Saree", image: "https://res.cloudinary.com/dodmxncwc/image/upload/v1775992205/indo_west_2nd-removebg-preview_26_yec3lz.png", brand: "Queen's Bespoke", price: <><span>₹</span>45,000</> }} />
                        <img src="https://res.cloudinary.com/dodmxncwc/image/upload/v1775992205/indo_west_2nd-removebg-preview_26_yec3lz.png"
                            alt="Bespoke Saree Gown" className="card-image" style={{ backgroundColor: '#e5e0dc' }} />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#d1bfae' }}></div>
                            </div>
                            <h3 className="brand-name">Queen's Bespoke</h3>
                            <p className="product-title">Signature Embellished Custom Saree</p>
                            <div className="rating-block">
                                <span className="stars">★★★★★</span>
                                <span className="rating-count">19</span>
                            </div>
                            <div className="pricing-block">
                                <span className="discount">-5%</span>
                                <span className="price"><span>₹</span>45,000</span>
                                <span className="original-price">₹47,360</span>
                            </div>
                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_8bcf3b97", name: "Signature Embellished Custom Saree", price: 45000, image: "https://res.cloudinary.com/dodmxncwc/image/upload/v1775992205/indo_west_2nd-removebg-preview_26_yec3lz.png", color: "#d1bfae", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>

                    {/* CARD 16 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "JacketLehenga_Peach Pastel Georgette Gown Saree", title: "Peach Pastel Georgette Gown Saree", image: "https://res.cloudinary.com/dodmxncwc/image/upload/v1775992194/indo_western_1st-removebg-preview_21_l3d3cr.png", brand: "Maison d'Élégance", price: <><span>₹</span>13,300</> }} />
                        <img src="https://res.cloudinary.com/dodmxncwc/image/upload/v1775992194/indo_western_1st-removebg-preview_21_l3d3cr.png"
                            alt="Pastel Saree" className="card-image" style={{ backgroundColor: '#fceceb' }} />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#bb9b9f' }}></div>
                            </div>
                            <h3 className="brand-name">Maison d'Élégance</h3>
                            <p className="product-title">Peach Pastel Georgette Gown Saree</p>
                            <div className="rating-block">
                                <span className="stars">★★★★☆</span>
                                <span className="rating-count">112</span>
                            </div>
                            <div className="pricing-block">
                                <span className="discount">-30%</span>
                                <span className="price"><span>₹</span>13,300</span>
                                <span className="original-price">₹19,000</span>
                            </div>
                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_01729f4b", name: "Peach Pastel Georgette Gown Saree", price: 13300, image: "https://res.cloudinary.com/dodmxncwc/image/upload/v1775992194/indo_western_1st-removebg-preview_21_l3d3cr.png", color: "#bb9b9f", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>

                    {/* CARD 17 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "JacketLehenga_Festive Green Pre-Stitched Gown", title: "Festive Green Pre-Stitched Gown", image: "https://res.cloudinary.com/dodmxncwc/image/upload/v1775992212/indo_western_1st-removebg-preview_20_v6469e.png", brand: "Queen's Wardrobe", price: <><span>₹</span>15,400</> }} />
                        <img src="https://res.cloudinary.com/dodmxncwc/image/upload/v1775992212/indo_western_1st-removebg-preview_20_v6469e.png"
                            alt="Festive Gown" className="card-image" />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#5d675b' }}></div>
                            </div>
                            <h3 className="brand-name">Queen's Wardrobe</h3>
                            <p className="product-title">Festive Green Pre-Stitched Gown</p>
                            <div className="rating-block">
                                <span className="stars">★★★★★</span>
                                <span className="rating-count">478</span>
                            </div>
                            <div className="pricing-block">
                                <span className="discount">-45%</span>
                                <span className="price"><span>₹</span>15,400</span>
                                <span className="original-price">₹28,000</span>
                            </div>
                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_363de56c", name: "Festive Green Pre-Stitched Gown", price: 15400, image: "https://res.cloudinary.com/dodmxncwc/image/upload/v1775992212/indo_western_1st-removebg-preview_20_v6469e.png", color: "#5d675b", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>

                    {/* CARD 18 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "JacketLehenga_Classic Black Contemporary Wrap Saree", title: "Classic Black Contemporary Wrap Saree", image: "https://res.cloudinary.com/dodmxncwc/image/upload/v1775992220/indo_west_2nd-removebg-preview_25_oetosc.png", brand: "Western Elegance", price: <><span>₹</span>18,000</> }} />
                        <img src="https://res.cloudinary.com/dodmxncwc/image/upload/v1775992220/indo_west_2nd-removebg-preview_25_oetosc.png"
                            alt="Gown" className="card-image" />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#2F2A26' }}></div>
                            </div>
                            <h3 className="brand-name">Western Elegance</h3>
                            <p className="product-title">Classic Black Contemporary Wrap Saree</p>
                            <div className="rating-block">
                                <span className="stars">★★★★☆</span>
                                <span className="rating-count">334</span>
                            </div>
                            <div className="pricing-block">
                                <span className="discount">-10%</span>
                                <span className="price"><span>₹</span>18,000</span>
                                <span className="original-price">₹20,000</span>
                            </div>
                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_0298feb9", name: "Classic Black Contemporary Wrap Saree", price: 18000, image: "https://res.cloudinary.com/dodmxncwc/image/upload/v1775992220/indo_west_2nd-removebg-preview_25_oetosc.png", color: "#2F2A26", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>

                    {/* CARD 19 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "JacketLehenga_Rich Indigo Occasion Wear Layout Saree", title: "Rich Indigo Occasion Wear Layout Saree", image: "https://res.cloudinary.com/dodmxncwc/image/upload/v1775992227/indo_west_2nd-removebg-preview_24_ayhqb4.png", brand: "Heritage Silks", price: <><span>₹</span>21,000</> }} />
                        <img src="https://res.cloudinary.com/dodmxncwc/image/upload/v1775992227/indo_west_2nd-removebg-preview_24_ayhqb4.png"
                            alt="Royal Saree" className="card-image" style={{ backgroundColor: '#fceceb' }} />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#0b2b4e' }}></div>
                            </div>
                            <h3 className="brand-name">Heritage Silks</h3>
                            <p className="product-title">Rich Indigo Occasion Wear Layout Saree</p>
                            <div className="rating-block">
                                <span className="stars">★★★★★</span>
                                <span className="rating-count">650</span>
                            </div>
                            <div className="pricing-block">
                                <span className="discount">-40%</span>
                                <span className="price"><span>₹</span>21,000</span>
                                <span className="original-price">₹35,000</span>
                            </div>
                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_172a0a6b", name: "Rich Indigo Occasion Wear Layout Saree", price: 21000, image: "https://res.cloudinary.com/dodmxncwc/image/upload/v1775992227/indo_west_2nd-removebg-preview_24_ayhqb4.png", color: "#0b2b4e", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>

                    {/* CARD 20 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "JacketLehenga_Taupe High-Society Event Saree", title: "Taupe High-Society Event Saree", image: "https://res.cloudinary.com/dodmxncwc/image/upload/v1775992380/indo_west_2nd-removebg-preview_28_rzrwzx.png", brand: "Queen's Bespoke", price: <><span>₹</span>30,800</> }} />
                        <img src="https://res.cloudinary.com/dodmxncwc/image/upload/v1775992380/indo_west_2nd-removebg-preview_28_rzrwzx.png"
                            alt="Premium Drape" className="card-image" style={{ backgroundColor: '#e5e0dc' }} />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#d1bfae' }}></div>
                                <div className="swatch" style={{ backgroundColor: '#bb9b9f' }}></div>
                            </div>
                            <h3 className="brand-name">Queen's Bespoke</h3>
                            <p className="product-title">Taupe High-Society Event Saree</p>
                            <div className="rating-block">
                                <span className="stars">★★★★★</span>
                                <span className="rating-count">93</span>
                            </div>
                            <div className="pricing-block">
                                <span className="discount">-12%</span>
                                <span className="price"><span>₹</span>30,800</span>
                                <span className="original-price">₹35,000</span>
                            </div>
                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_708aa420", name: "Taupe High-Society Event Saree", price: 30800, image: "https://res.cloudinary.com/dodmxncwc/image/upload/v1775992380/indo_west_2nd-removebg-preview_28_rzrwzx.png", color: "#d1bfae", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>

                </div>
            </div>
            
            {/* Hamburger Sidebar Menu */}
            <div className={`sidebar-overlay ${isSidebarOpen ? 'active' : ''}`} id="sidebar-overlay" onClick={closeSidebar}></div>
            <div className={`sidebar-panel ${isSidebarOpen ? 'active' : ''}`} id="sidebar">
                <div className="sidebar-header">
                    <h3 className="sidebar-title">Menu</h3>
                    <button className="close-btn" id="sidebar-close" onClick={closeSidebar}>&times;</button>
                </div>
                <nav className="sidebar-nav">
                    <Link to="/gownsaree">The Saree Gown</Link>
                    <Link to="/jacket-lehenga">Jacketed Style Lehanga</Link>
                    <Link to="/dhoti-croptop">Dhoti Pant with Croptop</Link>
                    <Link to="/indowestern-frocks">Indo-Western Frocks</Link>
                    <Link to="/sharara-peplum">Sharara Set with Peplum Top</Link>
                    <Link to="/corset-lehenga">Corset Lehenga</Link>
                    <Link to="/asymmetric-kurtas">Asymmetrical Hemline Kurthis</Link>
                    <Link to="/peplum-pantsuit">Peplum Pant Suits</Link>
                </nav>
            </div>
        </div>
    );
}

export default JacketLehenga;
