import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './gownsaree.css';
import './sidebar.css';
import WishlistHeart from '../components/WishlistHeart';
import { useShop } from '../context/ShopContext';

function ReadyMadeItem6() {
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
                        <WishlistHeart item={{ id: "ReadyMadeItem6_Premium Pre-Draped Saree Gown in Soft Georgette with Embellished Belt", title: "Premium Pre-Draped Saree Gown in Soft Georgette with Embellished Belt", image: "", brand: "Maison d'Élégance", price: <><span>₹</span>14,999</> }} />
                        <img src="https://res.cloudinary.com/dugksxwkr/image/upload/v1777267409/6c5eb2b525c7a0df33800686e7b5a048-removebg-preview_vtcvwa.png"
                            alt="Saree Gown" className="card-image" style={{ backgroundColor: '#e5ccce' }} />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#e5ccce' }}></div>
                                <div className="swatch" style={{ backgroundColor: '#bb9b9f' }}></div>
                                <div className="swatch" style={{ backgroundColor: '#2F2A26' }}></div>
                            </div>
                            <h3 className="brand-name">Rust Brown Jumpsuit – Elegant Modern Wear</h3>
                            <p className="product-title">Rust brown jumpsuit with halter neck and sleek silhouette.</p>

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
                        <WishlistHeart item={{ id: "ReadyMadeItem6_Modern Indo-Western Fusion Saree with Attached Pallu", title: "Modern Indo-Western Fusion Saree with Attached Pallu", image: "", brand: "Queen's Wardrobe", price: <><span>₹</span>18,499</> }} />
                        <img src="https://res.cloudinary.com/dugksxwkr/image/upload/v1777267409/caf6622be241d63756d4fcf89897e2f8-removebg-preview_wasodu.png"
                            alt="Indo Western Saree" className="card-image" />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#a37272' }}></div>
                                <div className="swatch" style={{ backgroundColor: '#5d675b' }}></div>
                            </div>
                            <h3 className="brand-name">Bright Yellow Jumpsuit – Bold Casual Wear</h3>
                            <p className="product-title">Bright yellow jumpsuit with wide legs and vibrant styling.</p>

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
                        <WishlistHeart item={{ id: "ReadyMadeItem6_Cocktail Saree Gown with Cape Sleeves", title: "Cocktail Saree Gown with Cape Sleeves", image: "", brand: "Western Elegance", price: <><span>₹</span>24,999</> }} />
                        <img src="https://res.cloudinary.com/dugksxwkr/image/upload/v1777267416/f37416af0c1de4f7264576ae3d22df64-removebg-preview_gn0n0u.png"
                            alt="Modern Saree" className="card-image" />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#2F2A26' }}></div>
                            </div>
                            <h3 className="brand-name">White Green Printed Jumpsuit – Fresh Summer Wear</h3>
                            <p className="product-title">White jumpsuit with green prints and breezy feel.</p>

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
                        <WishlistHeart item={{ id: "ReadyMadeItem6_Heritage Silk Trim Saree Gown for Wedding Receptions", title: "Heritage Silk Trim Saree Gown for Wedding Receptions", image: "", brand: "Maison d'Élégance", price: <><span>₹</span>21,000</> }} />
                        <img src="https://res.cloudinary.com/dugksxwkr/image/upload/v1777267409/aaacebb8b0ef74e7b9e3ab94a37e7193-removebg-preview_yjihdv.png"
                            alt="Traditional Saree Gown" className="card-image" style={{ backgroundColor: '#fceceb' }} />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#c93b4a' }}></div>
                                <div className="swatch" style={{ backgroundColor: '#0b2b4e' }}></div>
                                <div className="swatch" style={{ backgroundColor: '#b08a5d' }}></div>
                            </div>
                            <h3 className="brand-name">Multicolor Printed Jumpsuit – Playful Statement Wear</h3>
                            <p className="product-title">Multicolor jumpsuit with artistic prints and bold design.</p>

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
                        <WishlistHeart item={{ id: "ReadyMadeItem6_Custom-Fit Sequined Saree Dress", title: "Custom-Fit Sequined Saree Dress", image: "", brand: "Queen's Bespoke", price: <><span>₹</span>38,500</> }} />
                        <img src="https://res.cloudinary.com/dugksxwkr/image/upload/v1777267407/399e4c9c49159ebdfb1f256dba095c5e-removebg-preview_ulk24g.png"
                            alt="Bespoke Saree Gown" className="card-image" style={{ backgroundColor: '#e5e0dc' }} />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#d1bfae' }}></div>
                                <div className="swatch" style={{ backgroundColor: '#e8e8e8' }}></div>
                            </div>
                            <h3 className="brand-name">Beige Printed Jumpsuit – Relaxed Chic Wear</h3>
                            <p className="product-title">Beige jumpsuit with earthy prints and soft casual fit.</p>

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
                        <WishlistHeart item={{ id: "ReadyMadeItem6_Embroidered Pastel Saree Gown with Dupatta", title: "Embroidered Pastel Saree Gown with Dupatta", image: "", brand: "Maison d'Élégance", price: <><span>₹</span>19,500</> }} />
                        <img src="https://res.cloudinary.com/dugksxwkr/image/upload/v1777267408/79e1483de4f7caa78c9941b5556e3727-removebg-preview_u0hbk9.png"
                            alt="Embroidered Saree Gown" className="card-image" style={{ backgroundColor: '#fceceb' }} />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#bb9b9f' }}></div>
                            </div>
                            <h3 className="brand-name">Black Floral Jumpsuit – Stylish Casual Wear</h3>
                            <p className="product-title">Black jumpsuit with floral prints and wide-leg silhouette.</p>
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
                        <WishlistHeart item={{ id: "ReadyMadeItem6_Olive Green Sequin Trim Saree", title: "Olive Green Sequin Trim Saree", image: "", brand: "Queen's Wardrobe", price: <><span>₹</span>16,200</> }} />
                        <img src="https://res.cloudinary.com/dugksxwkr/image/upload/v1777267408/242fabb20890a13d066465c2d58ffb9a-removebg-preview_jthotm.png"
                            alt="Sequin Saree" className="card-image" />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#5d675b' }}></div>
                                <div className="swatch" style={{ backgroundColor: '#a37272' }}></div>
                            </div>
                            <h3 className="brand-name">Olive Green Jumpsuit – Casual Utility Wear</h3>
                            <p className="product-title">Olive green jumpsuit with belted waist and modern style.</p>
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
                        <WishlistHeart item={{ id: "ReadyMadeItem6_Midnight Black Chiffon Saree Gown", title: "Midnight Black Chiffon Saree Gown", image: "", brand: "Western Elegance", price: <><span>₹</span>12,499</> }} />
                        <img src="https://res.cloudinary.com/dugksxwkr/image/upload/v1777267408/50d87b2c73011f77b3a399c376245497-removebg-preview_fjvpxv.png"
                            alt="Chiffon Saree Gown" className="card-image" />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#2F2A26' }}></div>
                                <div className="swatch" style={{ backgroundColor: '#e5ccce' }}></div>
                            </div>
                            <h3 className="brand-name">Black Ethnic Jumpsuit – Bold Fusion Wear</h3>
                            <p className="product-title">Black jumpsuit with ethnic patterns and structured fit.</p>
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
                        <WishlistHeart item={{ id: "ReadyMadeItem6_Royal Navy Blue Designer Saree with Floral Appliques", title: "Royal Navy Blue Designer Saree with Floral Appliques", image: "", brand: "Maison d'Élégance", price: <><span>₹</span>28,000</> }} />
                        <img src="https://res.cloudinary.com/dugksxwkr/image/upload/v1777282563/e4604994de16ca8c9ed910a572b7f0a6_vv0vhi.jpg"
                            alt="Royal Saree" className="card-image" style={{ backgroundColor: '#fceceb' }} />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#0b2b4e' }}></div>
                            </div>
                            <h3 className="brand-name">Beige Elegant Jumpsuit – Soft Formal Wear</h3>
                            <p className="product-title">Beige jumpsuit with lace details and refined styling.</p>
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
                        <WishlistHeart item={{ id: "ReadyMadeItem6_Nude Beige Premium Drape", title: "Nude Beige Premium Drape", image: "", brand: "Queen's Bespoke", price: <><span>₹</span>36,100</> }} />
                        <img src="https://res.cloudinary.com/dugksxwkr/image/upload/v1777267408/f7a2c74f302375e120e2f8b06b0edf56-removebg-preview_rkv5gl.png"
                            alt="Premium Drape" className="card-image" style={{ backgroundColor: '#e5e0dc' }} />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#d1bfae' }}></div>
                            </div>
                            <h3 className="brand-name">Black Strapless Jumpsuit – Sleek Evening Wear</h3>
                            <p className="product-title">Black strapless jumpsuit with fitted bodice and clean look.</p>
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
                        <WishlistHeart item={{ id: "ReadyMadeItem6_Draped Georgette Saree Gown in Rose Pink", title: "Draped Georgette Saree Gown in Rose Pink", image: "", brand: "Maison d'Élégance", price: <><span>₹</span>18,000</> }} />
                        <img src="https://res.cloudinary.com/dugksxwkr/image/upload/v1777267416/d17f4af528d3c546311287caf2b0bbef-removebg-preview_ur3qqs.png "
                            alt="Saree Gown" className="card-image" style={{ backgroundColor: '#e5ccce' }} />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#e5ccce' }}></div>
                            </div>
                            <h3 className="brand-name">White Green Printed Jumpsuit – Breezy Casual Wear</h3>
                            <p className="product-title">White jumpsuit with leafy prints and light summer vibe.</p>
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
                        <WishlistHeart item={{ id: "ReadyMadeItem6_Pleated Indo-Western Saree with Matching Clutch", title: "Pleated Indo-Western Saree with Matching Clutch", image: "", brand: "Queen's Wardrobe", price: <><span>₹</span>12,500</> }} />
                        <img src="https://res.cloudinary.com/dugksxwkr/image/upload/v1777267407/c2e0420bf64ee0c2477b3fcbbbb7daff-removebg-preview_eejapu.png"
                            alt="Saree Gown" className="card-image" />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#a37272' }}></div>
                            </div>
                            <h3 className="brand-name">Maroon One-Shoulder Jumpsuit – Elegant Party Wear</h3>
                            <p className="product-title">Maroon jumpsuit with one-shoulder design and rich styling.</p>
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
                        <WishlistHeart item={{ id: "ReadyMadeItem6_Minimalist Evening Gown Saree", title: "Minimalist Evening Gown Saree", image: "", brand: "Western Elegance", price: <><span>₹</span>21,000</> }} />
                        <img src="https://res.cloudinary.com/dugksxwkr/image/upload/v1777267384/96501acf512edd50e2d34ed5190b27f9-removebg-preview_wzidk2.png "
                            alt="Saree Gown" className="card-image" />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#2F2A26' }}></div>
                            </div>
                            <h3 className="brand-name">Beige Printed Jumpsuit – Soft Casual Wear</h3>
                            <p className="product-title">Beige jumpsuit with subtle prints and relaxed silhouette.</p>
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
                        <WishlistHeart item={{ id: "ReadyMadeItem6_Handloom Silk Saree Gown for Receptions", title: "Handloom Silk Saree Gown for Receptions", image: "", brand: "Heritage Silks", price: <><span>₹</span>14,000</> }} />
                        <img src="https://res.cloudinary.com/dugksxwkr/image/upload/v1777267407/f5ebf28c1da95ee08f38322ee837538e-removebg-preview_uxuexw.png"
                            alt="Traditional Saree Gown" className="card-image" style={{ backgroundColor: '#fceceb' }} />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#c93b4a' }}></div>
                                <div className="swatch" style={{ backgroundColor: '#0b2b4e' }}></div>
                            </div>
                            <h3 className="brand-name">Dark Green Jumpsuit – Bold Modern Wear</h3>
                            <p className="product-title">Dark green jumpsuit with strapless design and strong style.</p>
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
                        <WishlistHeart item={{ id: "ReadyMadeItem6_Signature Embellished Custom Saree", title: "Signature Embellished Custom Saree", image: "", brand: "Queen's Bespoke", price: <><span>₹</span>45,000</> }} />
                        <img src="https://res.cloudinary.com/dugksxwkr/image/upload/v1777267406/57dc529b5f6690d6091d1f23c792acf1-removebg-preview_jkmpsi.png"
                            alt="Bespoke Saree Gown" className="card-image" style={{ backgroundColor: '#e5e0dc' }} />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#d1bfae' }}></div>
                            </div>
                            <h3 className="brand-name">Gold Beige Jumpsuit – Luxe Festive Wear</h3>
                            <p className="product-title">Gold beige jumpsuit with shimmer and elegant finish.</p>
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
                        <WishlistHeart item={{ id: "ReadyMadeItem6_Peach Pastel Georgette Gown Saree", title: "Peach Pastel Georgette Gown Saree", image: "", brand: "Maison d'Élégance", price: <><span>₹</span>13,300</> }} />
                        <img src="https://res.cloudinary.com/dugksxwkr/image/upload/v1777267407/4341c62f4acbabd99bdb73332a04eb46-removebg-preview_zqeztc.png"
                            alt="Pastel Saree" className="card-image" style={{ backgroundColor: '#fceceb' }} />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#bb9b9f' }}></div>
                            </div>
                            <h3 className="brand-name">White Wide-Leg Jumpsuit – Minimal Chic Wear</h3>
                            <p className="product-title">White jumpsuit with wide-leg fit and clean modern look.</p>
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
                        <WishlistHeart item={{ id: "ReadyMadeItem6_Festive Green Pre-Stitched Gown", title: "Festive Green Pre-Stitched Gown", image: "", brand: "Queen's Wardrobe", price: <><span>₹</span>15,400</> }} />
                        <img src="https://res.cloudinary.com/dugksxwkr/image/upload/v1777267407/69472e4f26415e835a46a144ab7d557d-removebg-preview_dm0rny.png"
                            alt="Festive Gown" className="card-image" />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#5d675b' }}></div>
                            </div>
                            <h3 className="brand-name">Brown Puff Sleeve Jumpsuit – Structured Casual Wear</h3>
                            <p className="product-title">Brown jumpsuit with puff sleeves and flattering silhouette.</p>
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
                        <WishlistHeart item={{ id: "ReadyMadeItem6_Classic Black Contemporary Wrap Saree", title: "Classic Black Contemporary Wrap Saree", image: "", brand: "Western Elegance", price: <><span>₹</span>18,000</> }} />
                        <img src="https://res.cloudinary.com/dugksxwkr/image/upload/v1777267407/667be3a19fb2419d54b785c099c0d493-removebg-preview_j9ywfl.png"
                            alt="Gown" className="card-image" />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#2F2A26' }}></div>
                            </div>
                            <h3 className="brand-name">Green Floral Jumpsuit – Fresh Feminine Wear</h3>
                            <p className="product-title">Green floral jumpsuit with flowy design and natural charm.</p>
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
                        <WishlistHeart item={{ id: "ReadyMadeItem6_Rich Indigo Occasion Wear Layout Saree", title: "Rich Indigo Occasion Wear Layout Saree", image: "", brand: "Heritage Silks", price: <><span>₹</span>21,000</> }} />
                        <img src="https://res.cloudinary.com/dugksxwkr/image/upload/v1777267408/eba1b6e59f011c7d51a0ff8a9b2f20be-removebg-preview_ikqkrj.png"
                            alt="Royal Saree" className="card-image" style={{ backgroundColor: '#fceceb' }} />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#0b2b4e' }}></div>
                            </div>
                            <h3 className="brand-name">Light Blue Pleated Jumpsuit – Soft Elegant Wear</h3>
                            <p className="product-title">Light blue jumpsuit with pleats and graceful movement.</p>
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
                        <WishlistHeart item={{ id: "ReadyMadeItem6_Taupe High-Society Event Saree", title: "Taupe High-Society Event Saree", image: "", brand: "Queen's Bespoke", price: <><span>₹</span>30,800</> }} />
                        <img src="https://res.cloudinary.com/dugksxwkr/image/upload/v1777267892/caf55450fd993e1d3a04c9c291416c32-removebg-preview_aacu3c.png"
                            alt="Premium Drape" className="card-image" style={{ backgroundColor: '#e5e0dc' }} />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#d1bfae' }}></div>
                                <div className="swatch" style={{ backgroundColor: '#bb9b9f' }}></div>
                            </div>
                            <h3 className="brand-name">White Printed Jumpsuit – Playful Casual Wear</h3>
                            <p className="product-title">White jumpsuit with prints and relaxed everyday styling.</p>
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

export default ReadyMadeItem6;
