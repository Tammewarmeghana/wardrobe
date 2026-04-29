import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './gownsaree.css';
import './sidebar.css';
import WishlistHeart from '../components/WishlistHeart';
import { useShop } from '../context/ShopContext';

function CorsetLehenga() {
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
                        <WishlistHeart item={{ id: "CorsetLehenga_Premium Pre-Draped Saree Gown in Soft Georgette with Embellished Belt", title: "Premium Pre-Draped Saree Gown in Soft Georgette with Embellished Belt", image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776061739/c22-removebg-preview_rqfcvq.png", brand: "Maison d'Élégance", price: <><span>₹</span>14,999</> }} />
                        <img src="https://res.cloudinary.com/dugksxwkr/image/upload/v1776061739/c22-removebg-preview_rqfcvq.png"
                            alt="Saree Gown" className="card-image" style={{ backgroundColor: '#e5ccce' }} />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#e5ccce' }}></div>
                                <div className="swatch" style={{ backgroundColor: '#bb9b9f' }}></div>
                                <div className="swatch" style={{ backgroundColor: '#2F2A26' }}></div>
                            </div>
                            <h3 className="brand-name">
                                Silver Embellished Corset Lehenga – Glam Festive Ethnic Wear
                            </h3>
                            <p className="product-title">
                                Shimmering corset blouse paired with a heavily embellished lehenga. A graceful and modern festive look for special occasions.
                            </p>

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

                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_0aba0923", name: "Premium Pre-Draped Saree Gown in Soft Georgette with Embellished Belt", price: 14999, image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776061739/c22-removebg-preview_rqfcvq.png", color: "#e5ccce", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>

                    {/* CARD 2 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "CorsetLehenga_Modern Indo-Western Fusion Saree with Attached Pallu", title: "Modern Indo-Western Fusion Saree with Attached Pallu", image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776061731/c21-removebg-preview_ao44yj.png", brand: "Queen's Wardrobe", price: <><span>₹</span>18,499</> }} />
                        <img src="https://res.cloudinary.com/dugksxwkr/image/upload/v1776061731/c21-removebg-preview_ao44yj.png"
                            alt="Indo Western Saree" className="card-image" />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#a37272' }}></div>
                                <div className="swatch" style={{ backgroundColor: '#5d675b' }}></div>
                            </div>
                            <h3 className="brand-name">
                                Grey Indo-Western Corset Lehenga – Contemporary Ethnic Style
                            </h3>
                            <p className="product-title">
                                Structured corset with intricate patterns styled with a flared lehenga. Perfect for a modern ethnic statement.
                            </p>
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

                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_2d16147c", name: "Modern Indo-Western Fusion Saree with Attached Pallu", price: 18499, image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776061731/c21-removebg-preview_ao44yj.png", color: "#a37272", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>

                    {/* CARD 3 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "CorsetLehenga_Cocktail Saree Gown with Cape Sleeves", title: "Cocktail Saree Gown with Cape Sleeves", image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776061720/c20-removebg-preview_ujyd9l.png", brand: "Western Elegance", price: <><span>₹</span>24,999</> }} />
                        <img src="https://res.cloudinary.com/dugksxwkr/image/upload/v1776061720/c20-removebg-preview_ujyd9l.png"
                            alt="Modern Saree" className="card-image" />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#2F2A26' }}></div>
                            </div>
                            <h3 className="brand-name">
                                Hot Pink Statement Corset Lehenga – Bold Festive Ethnic Wear
                            </h3>
                            <p className="product-title">
                                Bold corset top with rich textures paired with a voluminous lehenga. Ideal for weddings and celebrations.
                            </p>

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

                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_334f5f22", name: "Cocktail Saree Gown with Cape Sleeves", price: 24999, image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776061720/c20-removebg-preview_ujyd9l.png", color: "#2F2A26", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>

                    {/* CARD 4 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "CorsetLehenga_Heritage Silk Trim Saree Gown for Wedding Receptions", title: "Heritage Silk Trim Saree Gown for Wedding Receptions", image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776061711/c19-removebg-preview_w0pybf.png", brand: "Maison d'Élégance", price: <><span>₹</span>21,000</> }} />
                        <img src="https://res.cloudinary.com/dugksxwkr/image/upload/v1776061711/c19-removebg-preview_w0pybf.png"
                            alt="Traditional Saree Gown" className="card-image" style={{ backgroundColor: '#fceceb' }} />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#c93b4a' }}></div>
                                <div className="swatch" style={{ backgroundColor: '#0b2b4e' }}></div>
                                <div className="swatch" style={{ backgroundColor: '#b08a5d' }}></div>
                            </div>
                            <h3 className="brand-name">
                                Gold Traditional Corset Lehenga – Royal Ethnic Wear
                            </h3>
                            <p className="product-title">
                                Elegant corset with classic detailing paired with a luxurious lehenga. A regal festive outfit.
                            </p>

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

                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_8e49e403", name: "Heritage Silk Trim Saree Gown for Wedding Receptions", price: 21000, image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776061711/c19-removebg-preview_w0pybf.png", color: "#c93b4a", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>

                    {/* CARD 5 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "CorsetLehenga_Custom-Fit Sequined Saree Dress", title: "Custom-Fit Sequined Saree Dress", image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776061701/c18-removebg-preview_axufpn.png", brand: "Queen's Bespoke", price: <><span>₹</span>38,500</> }} />
                        <img src="https://res.cloudinary.com/dugksxwkr/image/upload/v1776061701/c18-removebg-preview_axufpn.png"
                            alt="Bespoke Saree Gown" className="card-image" style={{ backgroundColor: '#e5e0dc' }} />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#d1bfae' }}></div>
                                <div className="swatch" style={{ backgroundColor: '#e8e8e8' }}></div>
                            </div>
                            <h3 className="brand-name">
                                Beige Sequin Corset Lehenga – Glamorous Festive Wear
                            </h3>
                            <p className="product-title">
                                Fitted corset adorned with sequins paired with a shimmering lehenga. Effortlessly glamorous.
                            </p>

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

                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_79d06436", name: "Custom-Fit Sequined Saree Dress", price: 38500, image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776061701/c18-removebg-preview_axufpn.png", color: "#d1bfae", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>

                    {/* CARD 6 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "CorsetLehenga_Embroidered Pastel Saree Gown with Dupatta", title: "Embroidered Pastel Saree Gown with Dupatta", image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776061691/c17-removebg-preview_jyw3m5.png", brand: "Maison d'Élégance", price: <><span>₹</span>19,500</> }} />
                        <img src="https://res.cloudinary.com/dugksxwkr/image/upload/v1776061691/c17-removebg-preview_jyw3m5.png"
                            alt="Embroidered Saree Gown" className="card-image" style={{ backgroundColor: '#fceceb' }} />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#bb9b9f' }}></div>
                            </div>
                            <h3 className="brand-name">
                                Pastel Floral Corset Lehenga – Soft Feminine Ethnic Wear
                            </h3>
                            <p className="product-title">
                                Soft corset paired with a floral lehenga. A fresh and elegant look for daytime events.
                            </p>
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
                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_f9401d03", name: "Embroidered Pastel Saree Gown with Dupatta", price: 19500, image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776061691/c17-removebg-preview_jyw3m5.png", color: "#bb9b9f", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>

                    {/* CARD 7 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "CorsetLehenga_Olive Green Sequin Trim Saree", title: "Olive Green Sequin Trim Saree", image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776061682/c16-removebg-preview_l0bmfp.png", brand: "Queen's Wardrobe", price: <><span>₹</span>16,200</> }} />
                        <img src="https://res.cloudinary.com/dugksxwkr/image/upload/v1776061682/c16-removebg-preview_l0bmfp.png"
                            alt="Sequin Saree" className="card-image" />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#5d675b' }}></div>
                                <div className="swatch" style={{ backgroundColor: '#a37272' }}></div>
                            </div>
                            <h3 className="brand-name">
                                Wine Embroidered Corset Lehenga – Elegant Evening Ethnic Wear
                            </h3>
                            <p className="product-title">
                                Deep wine corset with intricate embroidery styled with a rich lehenga. Perfect for receptions.
                            </p>

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
                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_cb1a447a", name: "Olive Green Sequin Trim Saree", price: 16200, image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776061682/c16-removebg-preview_l0bmfp.png", color: "#5d675b", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>

                    {/* CARD 8 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "CorsetLehenga_Midnight Black Chiffon Saree Gown", title: "Midnight Black Chiffon Saree Gown", image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776061673/c15-removebg-preview_gderc4.png", brand: "Western Elegance", price: <><span>₹</span>12,499</> }} />
                        <img src="https://res.cloudinary.com/dugksxwkr/image/upload/v1776061673/c15-removebg-preview_gderc4.png"
                            alt="Chiffon Saree Gown" className="card-image" />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#2F2A26' }}></div>
                                <div className="swatch" style={{ backgroundColor: '#e5ccce' }}></div>
                            </div>
                            <h3 className="brand-name">
                                Red Chiffon Corset Lehenga – Lightweight Festive Wear
                            </h3>
                            <p className="product-title">
                                Light corset paired with a flowy chiffon lehenga. Comfortable and stylish for celebrations.
                            </p>
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
                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_b1130031", name: "Midnight Black Chiffon Saree Gown", price: 12499, image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776061673/c15-removebg-preview_gderc4.png", color: "#2F2A26", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>

                    {/* CARD 9 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "CorsetLehenga_Royal Navy Blue Designer Saree with Floral Appliques", title: "Royal Navy Blue Designer Saree with Floral Appliques", image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776061663/c14-removebg-preview_zq5gtg.png", brand: "Maison d'Élégance", price: <><span>₹</span>28,000</> }} />
                        <img src="https://res.cloudinary.com/dugksxwkr/image/upload/v1776061663/c14-removebg-preview_zq5gtg.png"
                            alt="Royal Saree" className="card-image" style={{ backgroundColor: '#fceceb' }} />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#0b2b4e' }}></div>
                            </div>
                            <h3 className="brand-name">
                                Ombre Designer Corset Lehenga – Modern Festive Ethnic Wear
                            </h3>
                            <p className="product-title">
                                Gradient corset paired with a layered lehenga. A trendy and contemporary festive look.
                            </p>

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
                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_7f439df1", name: "Royal Navy Blue Designer Saree with Floral Appliques", price: 28000, image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776061663/c14-removebg-preview_zq5gtg.png", color: "#0b2b4e", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>

                    {/* CARD 10 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "CorsetLehenga_Nude Beige Premium Drape", title: "Nude Beige Premium Drape", image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776061626/c13-removebg-preview_y7i7zp.png", brand: "Queen's Bespoke", price: <><span>₹</span>36,100</> }} />
                        <img src="https://res.cloudinary.com/dugksxwkr/image/upload/v1776061626/c13-removebg-preview_y7i7zp.png"
                            alt="Premium Drape" className="card-image" style={{ backgroundColor: '#e5e0dc' }} />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#d1bfae' }}></div>
                            </div>
                            <h3 className="brand-name">
                                Classic Red Bridal Corset Lehenga – Traditional Bridal Wear
                            </h3>
                            <p className="product-title">
                                Classic corset blouse with detailed embellishments paired with a heavy lehenga. Perfect for brides.
                            </p>
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
                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_ceaefcea", name: "Nude Beige Premium Drape", price: 36100, image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776061626/c13-removebg-preview_y7i7zp.png", color: "#d1bfae", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>

                    {/* CARD 11 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "CorsetLehenga_Draped Georgette Saree Gown in Rose Pink", title: "Draped Georgette Saree Gown in Rose Pink", image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776061618/c12-removebg-preview_egohmx.png", brand: "Maison d'Élégance", price: <><span>₹</span>18,000</> }} />
                        <img src="https://res.cloudinary.com/dugksxwkr/image/upload/v1776061618/c12-removebg-preview_egohmx.png"
                            alt="Saree Gown" className="card-image" style={{ backgroundColor: '#e5ccce' }} />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#e5ccce' }}></div>
                            </div>
                            <h3 className="brand-name">
                                Mint Green Corset Lehenga – Fresh Pastel Ethnic Wear
                            </h3>
                            <p className="product-title">
                                Light pastel corset paired with a soft embellished lehenga. Ideal for daytime celebrations.
                            </p>

                            <div className="rating-block">
                                <span className="stars">★★★★★</span>
                                <span className="rating-count">140</span>
                            </div>
                            <div className="pricing-block">
                                <span className="discount">-10%</span>
                                <span className="price"><span>₹</span>18,000</span>
                                <span className="original-price">₹20,000</span>
                            </div>
                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_8fcd2408", name: "Draped Georgette Saree Gown in Rose Pink", price: 18000, image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776061618/c12-removebg-preview_egohmx.png", color: "#e5ccce", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>

                    {/* CARD 12 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "CorsetLehenga_Pleated Indo-Western Saree with Matching Clutch", title: "Pleated Indo-Western Saree with Matching Clutch", image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776061607/c11-removebg-preview_tetgp9.png", brand: "Queen's Wardrobe", price: <><span>₹</span>12,500</> }} />
                        <img src="https://res.cloudinary.com/dugksxwkr/image/upload/v1776061607/c11-removebg-preview_tetgp9.png"
                            alt="Saree Gown" className="card-image" />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#a37272' }}></div>
                            </div>
                            <h3 className="brand-name">
                                Ivory Net Corset Lehenga – Elegant Minimal Ethnic Wear
                            </h3>
                            <p className="product-title">
                                Delicate corset with net detailing paired with a soft flared lehenga. Refined and graceful.
                            </p>
                            <div className="rating-block">
                                <span className="stars">★★★★☆</span>
                                <span className="rating-count">245</span>
                            </div>
                            <div className="pricing-block">
                                <span className="discount">-20%</span>
                                <span className="price"><span>₹</span>12,500</span>
                                <span className="original-price">₹15,625</span>
                            </div>
                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_5882f2e2", name: "Pleated Indo-Western Saree with Matching Clutch", price: 12500, image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776061607/c11-removebg-preview_tetgp9.png", color: "#a37272", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>

                    {/* CARD 13 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "CorsetLehenga_Minimalist Evening Gown Saree", title: "Minimalist Evening Gown Saree", image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776061598/c10-removebg-preview_kdtsvb.png", brand: "Western Elegance", price: <><span>₹</span>21,000</> }} />
                        <img src="https://res.cloudinary.com/dugksxwkr/image/upload/v1776061598/c10-removebg-preview_kdtsvb.png"
                            alt="Saree Gown" className="card-image" />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#2F2A26' }}></div>
                            </div>
                            <h3 className="brand-name">
                                Multicolor Panel Corset Lehenga – Vibrant Festive Wear
                            </h3>
                            <p className="product-title">
                                Colorful corset paired with a panelled lehenga. A playful and festive outfit.
                            </p>
                            <div className="rating-block">
                                <span className="stars">★★★★★</span>
                                <span className="rating-count">88</span>
                            </div>
                            <div className="pricing-block">
                                <span className="discount">-15%</span>
                                <span className="price"><span>₹</span>21,000</span>
                                <span className="original-price">₹24,700</span>
                            </div>
                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_5351946d", name: "Minimalist Evening Gown Saree", price: 21000, image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776061598/c10-removebg-preview_kdtsvb.png", color: "#2F2A26", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>

                    {/* CARD 14 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "CorsetLehenga_Handloom Silk Saree Gown for Receptions", title: "Handloom Silk Saree Gown for Receptions", image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776061586/c9-removebg-preview_hfdtzv.png", brand: "Heritage Silks", price: <><span>₹</span>14,000</> }} />
                        <img src="https://res.cloudinary.com/dugksxwkr/image/upload/v1776061586/c9-removebg-preview_hfdtzv.png"
                            alt="Traditional Saree Gown" className="card-image" style={{ backgroundColor: '#fceceb' }} />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#c93b4a' }}></div>
                                <div className="swatch" style={{ backgroundColor: '#0b2b4e' }}></div>
                            </div>
                            <h3 className="brand-name">
                                Black Silk Corset Lehenga – Bold Evening Ethnic Wear
                            </h3>
                            <p className="product-title">
                                Structured corset with a rich silk lehenga. A sleek and sophisticated evening look.
                            </p>

                            <div className="rating-block">
                                <span className="stars">★★★★☆</span>
                                <span className="rating-count">421</span>
                            </div>
                            <div className="pricing-block">
                                <span className="discount">-50%</span>
                                <span className="price"><span>₹</span>14,000</span>
                                <span className="original-price">₹28,000</span>
                            </div>
                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_ae8661f5", name: "Handloom Silk Saree Gown for Receptions", price: 14000, image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776061586/c9-removebg-preview_hfdtzv.png", color: "#c93b4a", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>

                    {/* CARD 15 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "CorsetLehenga_Signature Embellished Custom Saree", title: "Signature Embellished Custom Saree", image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776061567/c8-removebg-preview_yipuhv.png", brand: "Queen's Bespoke", price: <><span>₹</span>45,000</> }} />
                        <img src="https://res.cloudinary.com/dugksxwkr/image/upload/v1776061567/c8-removebg-preview_yipuhv.png"
                            alt="Bespoke Saree Gown" className="card-image" style={{ backgroundColor: '#e5e0dc' }} />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#d1bfae' }}></div>
                            </div>
                            <h3 className="brand-name">
                                Navy Embellished Corset Lehenga – Statement Festive Wear
                            </h3>
                            <p className="product-title">
                                Deep-toned corset with detailed embellishments paired with a statement lehenga. Perfect for grand events.
                            </p>
                            <div className="rating-block">
                                <span className="stars">★★★★★</span>
                                <span className="rating-count">19</span>
                            </div>
                            <div className="pricing-block">
                                <span className="discount">-5%</span>
                                <span className="price"><span>₹</span>45,000</span>
                                <span className="original-price">₹47,360</span>
                            </div>
                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_e638d179", name: "Signature Embellished Custom Saree", price: 45000, image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776061567/c8-removebg-preview_yipuhv.png", color: "#d1bfae", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>

                    {/* CARD 16 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "CorsetLehenga_Peach Pastel Georgette Gown Saree", title: "Peach Pastel Georgette Gown Saree", image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776061553/c7-removebg-preview_rbcw8q.png", brand: "Maison d'Élégance", price: <><span>₹</span>13,300</> }} />
                        <img src="https://res.cloudinary.com/dugksxwkr/image/upload/v1776061553/c7-removebg-preview_rbcw8q.png"
                            alt="Pastel Saree" className="card-image" style={{ backgroundColor: '#fceceb' }} />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#bb9b9f' }}></div>
                            </div>
                            <h3 className="brand-name">
                                Green Embroidered Corset Lehenga – Traditional Festive Wear
                            </h3>
                            <p className="product-title">
                                Rich corset with intricate embroidery paired with a matching lehenga. Classic festive styling.
                            </p>
                            <div className="rating-block">
                                <span className="stars">★★★★☆</span>
                                <span className="rating-count">112</span>
                            </div>
                            <div className="pricing-block">
                                <span className="discount">-30%</span>
                                <span className="price"><span>₹</span>13,300</span>
                                <span className="original-price">₹19,000</span>
                            </div>
                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_b7c2a7a7", name: "Peach Pastel Georgette Gown Saree", price: 13300, image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776061553/c7-removebg-preview_rbcw8q.png", color: "#bb9b9f", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>

                    {/* CARD 17 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "CorsetLehenga_Festive Green Pre-Stitched Gown", title: "Festive Green Pre-Stitched Gown", image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776061543/c6-removebg-preview_qhd0qm.png", brand: "Queen's Wardrobe", price: <><span>₹</span>15,400</> }} />
                        <img src="https://res.cloudinary.com/dugksxwkr/image/upload/v1776061543/c6-removebg-preview_qhd0qm.png"
                            alt="Festive Gown" className="card-image" />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#5d675b' }}></div>
                            </div>
                            <h3 className="brand-name">
                                Lime Green Designer Corset Lehenga – Vibrant Ethnic Wear
                            </h3>
                            <p className="product-title">
                                Bright corset paired with a vibrant lehenga. A standout festive outfit.
                            </p>
                            <div className="rating-block">
                                <span className="stars">★★★★★</span>
                                <span className="rating-count">478</span>
                            </div>
                            <div className="pricing-block">
                                <span className="discount">-45%</span>
                                <span className="price"><span>₹</span>15,400</span>
                                <span className="original-price">₹28,000</span>
                            </div>
                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_468d3035", name: "Festive Green Pre-Stitched Gown", price: 15400, image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776061543/c6-removebg-preview_qhd0qm.png", color: "#5d675b", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>

                    {/* CARD 18 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "CorsetLehenga_Classic Black Contemporary Wrap Saree", title: "Classic Black Contemporary Wrap Saree", image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776061534/c5-removebg-preview_gxzxms.png", brand: "Western Elegance", price: <><span>₹</span>18,000</> }} />
                        <img src="https://res.cloudinary.com/dugksxwkr/image/upload/v1776061534/c5-removebg-preview_gxzxms.png"
                            alt="Gown" className="card-image" />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#2F2A26' }}></div>
                            </div>
                            <h3 className="brand-name">
                                Mustard Festive Corset Lehenga – Bright Ethnic Wear
                            </h3>
                            <p className="product-title">
                                Mustard corset paired with a flared lehenga. Lively and festive for celebrations.
                            </p>

                            <div className="rating-block">
                                <span className="stars">★★★★☆</span>
                                <span className="rating-count">334</span>
                            </div>
                            <div className="pricing-block">
                                <span className="discount">-10%</span>
                                <span className="price"><span>₹</span>18,000</span>
                                <span className="original-price">₹20,000</span>
                            </div>
                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_da53d875", name: "Classic Black Contemporary Wrap Saree", price: 18000, image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776061534/c5-removebg-preview_gxzxms.png", color: "#2F2A26", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>

                    {/* CARD 19 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "CorsetLehenga_Rich Indigo Occasion Wear Layout Saree", title: "Rich Indigo Occasion Wear Layout Saree", image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776061517/c3_-removebg-preview_mthnzv.png", brand: "Heritage Silks", price: <><span>₹</span>21,000</> }} />
                        <img src="https://res.cloudinary.com/dugksxwkr/image/upload/v1776061517/c3_-removebg-preview_mthnzv.png"
                            alt="Royal Saree" className="card-image" style={{ backgroundColor: '#fceceb' }} />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#0b2b4e' }}></div>
                            </div>
                            <h3 className="brand-name">
                                Bottle Green Corset Lehenga – Elegant Evening Wear
                            </h3>
                            <p className="product-title">
                                Deep green corset with subtle detailing paired with a graceful lehenga. Perfect for evening occasions.
                            </p>

                            <div className="rating-block">
                                <span className="stars">★★★★★</span>
                                <span className="rating-count">650</span>
                            </div>
                            <div className="pricing-block">
                                <span className="discount">-40%</span>
                                <span className="price"><span>₹</span>21,000</span>
                                <span className="original-price">₹35,000</span>
                            </div>
                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_86c819be", name: "Rich Indigo Occasion Wear Layout Saree", price: 21000, image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776061517/c3_-removebg-preview_mthnzv.png", color: "#0b2b4e", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>

                    {/* CARD 20 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "CorsetLehenga_Taupe High-Society Event Saree", title: "Taupe High-Society Event Saree", image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776061508/c2-removebg-preview_uhl8vu.png", brand: "Queen's Bespoke", price: <><span>₹</span>30,800</> }} />
                        <img src="https://res.cloudinary.com/dugksxwkr/image/upload/v1776061508/c2-removebg-preview_uhl8vu.png"
                            alt="Premium Drape" className="card-image" style={{ backgroundColor: '#e5e0dc' }} />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#d1bfae' }}></div>
                                <div className="swatch" style={{ backgroundColor: '#bb9b9f' }}></div>
                            </div>
                            <h3 className="brand-name">
                                Maroon Bridal Corset Lehenga – Luxe Wedding Wear
                            </h3>
                            <p className="product-title">
                                Rich maroon corset with heavy embellishments paired with a grand lehenga. Ideal for bridal celebrations.
                            </p>
                            <div className="rating-block">
                                <span className="stars">★★★★★</span>
                                <span className="rating-count">93</span>
                            </div>
                            <div className="pricing-block">
                                <span className="discount">-12%</span>
                                <span className="price"><span>₹</span>30,800</span>
                                <span className="original-price">₹35,000</span>
                            </div>
                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_5105135f", name: "Taupe High-Society Event Saree", price: 30800, image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776061508/c2-removebg-preview_uhl8vu.png", color: "#d1bfae", size: "Free Size" })}>Add to Cart</button>
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

export default CorsetLehenga;
