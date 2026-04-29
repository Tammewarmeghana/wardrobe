import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './gownsaree.css';
import './sidebar.css';
import WishlistHeart from '../components/WishlistHeart';
import { useShop } from '../context/ShopContext';

function ReadyMadeItem4() {
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
            <div className="page-container" style={{ overflowX: 'hidden' }}>
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
                        <WishlistHeart item={{ id: "ReadyMadeItem4_Premium Pre-Draped Saree Gown in Soft Georgette with Embellished Belt", title: "Premium Pre-Draped Saree Gown in Soft Georgette with Embellished Belt", image: "", brand: "Maison d'Élégance", price: <><span>₹</span>14,999</> }} />
                        <img src="https://res.cloudinary.com/dodmxncwc/image/upload/v1777217422/A15-removebg-preview_fq0tyl.png"
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

                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_d28b534a", name: "Premium Pre-Draped Saree Gown in Soft Georgette with Embellished Belt", price: 14999, image: "", color: "#e5ccce", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>

                    {/* CARD 2 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "ReadyMadeItem4_Modern Indo-Western Fusion Saree with Attached Pallu", title: "Modern Indo-Western Fusion Saree with Attached Pallu", image: "", brand: "Queen's Wardrobe", price: <><span>₹</span>18,499</> }} />
                        <img src="https://res.cloudinary.com/dodmxncwc/image/upload/v1777217421/A16-removebg-preview_zeo0u4.png"
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

                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_814f5c76", name: "Modern Indo-Western Fusion Saree with Attached Pallu", price: 18499, image: "", color: "#a37272", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>

                    {/* CARD 3 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "ReadyMadeItem4_Cocktail Saree Gown with Cape Sleeves", title: "Cocktail Saree Gown with Cape Sleeves", image: "", brand: "Western Elegance", price: <><span>₹</span>24,999</> }} />
                        <img src="https://res.cloudinary.com/dodmxncwc/image/upload/v1777217421/A17-removebg-preview_uuuq90.png"
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

                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_eb40bca7", name: "Cocktail Saree Gown with Cape Sleeves", price: 24999, image: "", color: "#2F2A26", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>

                    {/* CARD 4 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "ReadyMadeItem4_Heritage Silk Trim Saree Gown for Wedding Receptions", title: "Heritage Silk Trim Saree Gown for Wedding Receptions", image: "", brand: "Maison d'Élégance", price: <><span>₹</span>21,000</> }} />
                        <img src="https://res.cloudinary.com/dodmxncwc/image/upload/v1777217420/A19-removebg-preview_a9jaut.png"
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

                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_828d2bbb", name: "Heritage Silk Trim Saree Gown for Wedding Receptions", price: 21000, image: "", color: "#c93b4a", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>

                    {/* CARD 5 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "ReadyMadeItem4_Custom-Fit Sequined Saree Dress", title: "Custom-Fit Sequined Saree Dress", image: "", brand: "Queen's Bespoke", price: <><span>₹</span>38,500</> }} />
                        <img src="https://res.cloudinary.com/dodmxncwc/image/upload/v1777217420/A18-removebg-preview_krigcw.png"
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

                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_d1119b95", name: "Custom-Fit Sequined Saree Dress", price: 38500, image: "", color: "#d1bfae", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>

                    {/* CARD 6 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "ReadyMadeItem4_Embroidered Pastel Saree Gown with Dupatta", title: "Embroidered Pastel Saree Gown with Dupatta", image: "", brand: "Maison d'Élégance", price: <><span>₹</span>19,500</> }} />
                        <img src="https://res.cloudinary.com/dodmxncwc/image/upload/v1777217420/A14-removebg-preview_vasze2.png"
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
                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_d9184d42", name: "Embroidered Pastel Saree Gown with Dupatta", price: 19500, image: "", color: "#bb9b9f", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>

                    {/* CARD 7 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "ReadyMadeItem4_Olive Green Sequin Trim Saree", title: "Olive Green Sequin Trim Saree", image: "", brand: "Queen's Wardrobe", price: <><span>₹</span>16,200</> }} />
                        <img src="https://res.cloudinary.com/dodmxncwc/image/upload/v1777217419/A13-removebg-preview_gibyhg.png"
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
                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_bc9a11f3", name: "Olive Green Sequin Trim Saree", price: 16200, image: "", color: "#5d675b", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>

                    {/* CARD 8 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "ReadyMadeItem4_Midnight Black Chiffon Saree Gown", title: "Midnight Black Chiffon Saree Gown", image: "", brand: "Western Elegance", price: <><span>₹</span>12,499</> }} />
                        <img src="https://res.cloudinary.com/dodmxncwc/image/upload/v1777217417/A12-removebg-preview_nhrtw2.png"
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
                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_aa498c41", name: "Midnight Black Chiffon Saree Gown", price: 12499, image: "", color: "#2F2A26", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>

                    {/* CARD 9 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "ReadyMadeItem4_Royal Navy Blue Designer Saree with Floral Appliques", title: "Royal Navy Blue Designer Saree with Floral Appliques", image: "", brand: "Maison d'Élégance", price: <><span>₹</span>28,000</> }} />
                        <img src="https://res.cloudinary.com/dodmxncwc/image/upload/v1777217417/A8-removebg-preview_mik7au.png"
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
                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_69f400af", name: "Royal Navy Blue Designer Saree with Floral Appliques", price: 28000, image: "", color: "#0b2b4e", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>

                    {/* CARD 10 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "ReadyMadeItem4_Nude Beige Premium Drape", title: "Nude Beige Premium Drape", image: "", brand: "Queen's Bespoke", price: <><span>₹</span>36,100</> }} />
                        <img src="https://res.cloudinary.com/dodmxncwc/image/upload/v1777217417/A11-removebg-preview_ivouai.png"
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
                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_23beedf4", name: "Nude Beige Premium Drape", price: 36100, image: "", color: "#d1bfae", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>

                    {/* CARD 11 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "ReadyMadeItem4_Draped Georgette Saree Gown in Rose Pink", title: "Draped Georgette Saree Gown in Rose Pink", image: "", brand: "Maison d'Élégance", price: <><span>₹</span>18,000</> }} />
                        <img src="https://res.cloudinary.com/dodmxncwc/image/upload/v1777217417/A10-removebg-preview_kdntqo.png"
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
                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_6c38bb49", name: "Draped Georgette Saree Gown in Rose Pink", price: 18000, image: "", color: "#e5ccce", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>

                    {/* CARD 12 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "ReadyMadeItem4_Pleated Indo-Western Saree with Matching Clutch", title: "Pleated Indo-Western Saree with Matching Clutch", image: "", brand: "Queen's Wardrobe", price: <><span>₹</span>12,500</> }} />
                        <img src="https://res.cloudinary.com/dodmxncwc/image/upload/v1777217417/A7-removebg-preview_iywg0x.png"
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
                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_1de27234", name: "Pleated Indo-Western Saree with Matching Clutch", price: 12500, image: "", color: "#a37272", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>

                    {/* CARD 13 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "ReadyMadeItem4_Minimalist Evening Gown Saree", title: "Minimalist Evening Gown Saree", image: "", brand: "Western Elegance", price: <><span>₹</span>21,000</> }} />
                        <img src="https://res.cloudinary.com/dodmxncwc/image/upload/v1777217417/A9-removebg-preview_xboyq9.png"
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
                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_78fe40e0", name: "Minimalist Evening Gown Saree", price: 21000, image: "", color: "#2F2A26", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>

                    {/* CARD 14 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "ReadyMadeItem4_Handloom Silk Saree Gown for Receptions", title: "Handloom Silk Saree Gown for Receptions", image: "", brand: "Heritage Silks", price: <><span>₹</span>14,000</> }} />
                        <img src="https://res.cloudinary.com/dodmxncwc/image/upload/v1777217417/A6-removebg-preview_s1r3ho.png"
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
                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_73048628", name: "Handloom Silk Saree Gown for Receptions", price: 14000, image: "", color: "#c93b4a", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>

                    {/* CARD 15 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "ReadyMadeItem4_Signature Embellished Custom Saree", title: "Signature Embellished Custom Saree", image: "", brand: "Queen's Bespoke", price: <><span>₹</span>45,000</> }} />
                        <img src="https://res.cloudinary.com/dodmxncwc/image/upload/v1777217416/A5-removebg-preview_gs9imm.png"
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
                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_60853202", name: "Signature Embellished Custom Saree", price: 45000, image: "", color: "#d1bfae", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>

                    {/* CARD 16 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "ReadyMadeItem4_Peach Pastel Georgette Gown Saree", title: "Peach Pastel Georgette Gown Saree", image: "", brand: "Maison d'Élégance", price: <><span>₹</span>13,300</> }} />
                        <img src="https://res.cloudinary.com/dodmxncwc/image/upload/v1777217416/A4-removebg-preview_n6qivv.png"
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
                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_caeee527", name: "Peach Pastel Georgette Gown Saree", price: 13300, image: "", color: "#bb9b9f", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>

                    {/* CARD 17 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "ReadyMadeItem4_Festive Green Pre-Stitched Gown", title: "Festive Green Pre-Stitched Gown", image: "", brand: "Queen's Wardrobe", price: <><span>₹</span>15,400</> }} />
                        <img src="https://res.cloudinary.com/dodmxncwc/image/upload/v1777217416/A3-removebg-preview_z4j4ct.png"
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
                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_12d48db8", name: "Festive Green Pre-Stitched Gown", price: 15400, image: "", color: "#5d675b", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>

                    {/* CARD 18 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "ReadyMadeItem4_Classic Black Contemporary Wrap Saree", title: "Classic Black Contemporary Wrap Saree", image: "", brand: "Western Elegance", price: <><span>₹</span>18,000</> }} />
                        <img src="https://res.cloudinary.com/dodmxncwc/image/upload/v1777217416/ed66a52a3f845a638cfab899cd14149c-removebg-preview_vn3fzv.png"
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
                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_486f5a32", name: "Classic Black Contemporary Wrap Saree", price: 18000, image: "", color: "#2F2A26", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>

                    {/* CARD 19 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "ReadyMadeItem4_Rich Indigo Occasion Wear Layout Saree", title: "Rich Indigo Occasion Wear Layout Saree", image: "", brand: "Heritage Silks", price: <><span>₹</span>21,000</> }} />
                        <img src="https://res.cloudinary.com/dodmxncwc/image/upload/v1777217416/A1-removebg-preview_jxmxes.png"
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
                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_f7a1d6ed", name: "Rich Indigo Occasion Wear Layout Saree", price: 21000, image: "", color: "#0b2b4e", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>

                    {/* CARD 20 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "ReadyMadeItem4_Taupe High-Society Event Saree", title: "Taupe High-Society Event Saree", image: "", brand: "Queen's Bespoke", price: <><span>₹</span>30,800</> }} />
                        <img src="https://res.cloudinary.com/dodmxncwc/image/upload/v1777217416/A2-removebg-preview_iwfgzw.png"
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
                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_1a203538", name: "Taupe High-Society Event Saree", price: 30800, image: "", color: "#d1bfae", size: "Free Size" })}>Add to Cart</button>
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
                  <Link to="/gownsaree">Short Frocks</Link>
                    <Link to="/jacket-lehenga">Kurthis</Link>
                    <Link to="/dhoti-croptop">Peplum Tops</Link>
                    <Link to="/indowestern-frocks">Plazzo Tops</Link>
                    <Link to="/sharara-peplum">Skirts</Link>
                     <Link to="/peplum-pantsuit">Jumpsuits </Link>
                    <Link to="/asymmetric-kurtas">Kaftan Dresses</Link>
                    <Link to="/corset-lehenga">Wrap Dresses</Link>
                
                </nav>
            </div>
        </div>
    );
}

export default ReadyMadeItem4;
