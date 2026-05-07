import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './gownsaree.css';
import './sidebar.css';
import WishlistHeart from '../components/WishlistHeart';
import { useShop } from '../context/ShopContext';

function Croptops() {
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
                    <div className="filter-pill">Fabric <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2">
                        <path d="M6 9l6 6 6-6" />
                    </svg></div>
                </div>

                {/* Product Grid */}
                <div className="product-grid">

                    {/* CARD 1 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "Croptops_Premium Pre-Draped Saree Gown in Soft Georgette with Embellished Belt", title: "Premium Pre-Draped Saree Gown in Soft Georgette with Embellished Belt", image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776155831/78a839e7f5d80bc52f89ae1592fe4086-removebg-preview_pfh16a.png", brand: "Maison d'Élégance", price: <><span>₹</span>14,999</> }} />
                        <img src="https://res.cloudinary.com/dugksxwkr/image/upload/v1776155831/78a839e7f5d80bc52f89ae1592fe4086-removebg-preview_pfh16a.png"
                            alt="Saree Gown" className="card-image" style={{ backgroundColor: '#e5ccce' }} />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#e5ccce' }}></div>
                                <div className="swatch" style={{ backgroundColor: '#bb9b9f' }}></div>
                                <div className="swatch" style={{ backgroundColor: '#2F2A26' }}></div>
                            </div>
                            <h3 className="brand-name">
                                Brown Layered Peplum Crop Top – Feminine Casual Wear
                            </h3>
                            <p className="product-title">
                                Flowy layered peplum crop top with a soft silhouette. Perfect for casual outings and brunch looks.
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

                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_0b0f174d", name: "Premium Pre-Draped Saree Gown in Soft Georgette with Embellished Belt", price: 14999, image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776155831/78a839e7f5d80bc52f89ae1592fe4086-removebg-preview_pfh16a.png", color: "#e5ccce", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>

                    {/* CARD 2 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "Croptops_Modern Indo-Western Fusion Saree with Attached Pallu", title: "Modern Indo-Western Fusion Saree with Attached Pallu", image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776155831/b73f84961566efc41939d7135d8b16fd-removebg-preview_lgnjuc.png", brand: "Queen's Wardrobe", price: <><span>₹</span>18,499</> }} />
                        <img src="https://res.cloudinary.com/dugksxwkr/image/upload/v1776155831/b73f84961566efc41939d7135d8b16fd-removebg-preview_lgnjuc.png"
                            alt="Indo Western Saree" className="card-image" />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#a37272' }}></div>
                                <div className="swatch" style={{ backgroundColor: '#5d675b' }}></div>
                            </div>
                            <h3 className="brand-name">
                                Rust Off-Shoulder Crop Top – Trendy Casual Wear
                            </h3>
                            <p className="product-title">
                                Stylish off-shoulder design with ruched detailing. A chic pick for modern casual styling.
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

                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_e9234167", name: "Modern Indo-Western Fusion Saree with Attached Pallu", price: 18499, image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776155831/b73f84961566efc41939d7135d8b16fd-removebg-preview_lgnjuc.png", color: "#a37272", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>

                    {/* CARD 3 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "Croptops_Cocktail Saree Gown with Cape Sleeves", title: "Cocktail Saree Gown with Cape Sleeves", image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776155832/aa10b61a11530d969057f8ba911affa1-removebg-preview_zfdnqu.png", brand: "Western Elegance", price: <><span>₹</span>24,999</> }} />
                        <img src="https://res.cloudinary.com/dugksxwkr/image/upload/v1776155832/aa10b61a11530d969057f8ba911affa1-removebg-preview_zfdnqu.png"
                            alt="Modern Saree" className="card-image" />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#2F2A26' }}></div>
                            </div>
                            <h3 className="brand-name">
                                Black Tie-Up Crop Top – Classic Chic Wear
                            </h3>
                            <p className="product-title">
                                Minimal black crop top with front tie-up detail. Easy to style for everyday fashion.
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

                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_fe559030", name: "Cocktail Saree Gown with Cape Sleeves", price: 24999, image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776155832/aa10b61a11530d969057f8ba911affa1-removebg-preview_zfdnqu.png", color: "#2F2A26", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>

                    {/* CARD 4 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "Croptops_Heritage Silk Trim Saree Gown for Wedding Receptions", title: "Heritage Silk Trim Saree Gown for Wedding Receptions", image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776155832/a536cf01418555ae9068022d77afe747-removebg-preview_ydnigc.png", brand: "Maison d'Élégance", price: <><span>₹</span>21,000</> }} />
                        <img src="https://res.cloudinary.com/dugksxwkr/image/upload/v1776155832/a536cf01418555ae9068022d77afe747-removebg-preview_ydnigc.png"
                            alt="Traditional Saree Gown" className="card-image" style={{ backgroundColor: '#fceceb' }} />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#c93b4a' }}></div>
                                <div className="swatch" style={{ backgroundColor: '#0b2b4e' }}></div>
                                <div className="swatch" style={{ backgroundColor: '#b08a5d' }}></div>
                            </div>
                            <h3 className="brand-name">
                                Light Brown Corset Crop Top – Structured Modern Wear
                            </h3>
                            <p className="product-title">
                                Fitted corset-style crop top with clean lines. Perfect for a sharp and modern outfit.
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

                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_b95ceaba", name: "Heritage Silk Trim Saree Gown for Wedding Receptions", price: 21000, image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776155832/a536cf01418555ae9068022d77afe747-removebg-preview_ydnigc.png", color: "#c93b4a", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>

                    {/* CARD 5 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "Croptops_Custom-Fit Sequined Saree Dress", title: "Custom-Fit Sequined Saree Dress", image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776155832/832e39e5d264ee624652c1f8bb29f2e3-removebg-preview_ddywrn.png", brand: "Queen's Bespoke", price: <><span>₹</span>38,500</> }} />
                        <img src="https://res.cloudinary.com/dugksxwkr/image/upload/v1776155832/832e39e5d264ee624652c1f8bb29f2e3-removebg-preview_ddywrn.png"
                            alt="Bespoke Saree Gown" className="card-image" style={{ backgroundColor: '#e5e0dc' }} />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#d1bfae' }}></div>
                                <div className="swatch" style={{ backgroundColor: '#e8e8e8' }}></div>
                            </div>
                            <h3 className="brand-name">
                                Brown Crop Top – Casual Streetwear Style
                            </h3>
                            <p className="product-title">
                                Classic denim crop top with a structured fit. A versatile everyday piece.
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

                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_cdd48fb1", name: "Custom-Fit Sequined Saree Dress", price: 38500, image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776155832/832e39e5d264ee624652c1f8bb29f2e3-removebg-preview_ddywrn.png", color: "#d1bfae", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>

                    {/* CARD 6 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "Croptops_Embroidered Pastel Saree Gown with Dupatta", title: "Embroidered Pastel Saree Gown with Dupatta", image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776155832/045800bd32dda628fc6f4f2504497b38-removebg-preview_zdf6z8.png", brand: "Maison d'Élégance", price: <><span>₹</span>19,500</> }} />
                        <img src="https://res.cloudinary.com/dugksxwkr/image/upload/v1776155832/045800bd32dda628fc6f4f2504497b38-removebg-preview_zdf6z8.png"
                            alt="Embroidered Saree Gown" className="card-image" style={{ backgroundColor: '#fceceb' }} />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#bb9b9f' }}></div>
                            </div>
                            <h3 className="brand-name">
                              Black Sleeve Crop Top – Soft Feminine Wear
                            </h3>
                            <p className="product-title">
                                Crop top with voluminous puff sleeves and a fitted waist. Cute and stylish.
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
                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_858f5678", name: "Embroidered Pastel Saree Gown with Dupatta", price: 19500, image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776155832/045800bd32dda628fc6f4f2504497b38-removebg-preview_zdf6z8.png", color: "#bb9b9f", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>

                    {/* CARD 7 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "Croptops_Olive Green Sequin Trim Saree", title: "Olive Green Sequin Trim Saree", image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776155832/ae09ea78bf6f964c90898d14ffffc01c-removebg-preview_lmknyk.png", brand: "Queen's Wardrobe", price: <><span>₹</span>16,200</> }} />
                        <img src="https://res.cloudinary.com/dugksxwkr/image/upload/v1776155832/ae09ea78bf6f964c90898d14ffffc01c-removebg-preview_lmknyk.png"
                            alt="Sequin Saree" className="card-image" />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#5d675b' }}></div>
                                <div className="swatch" style={{ backgroundColor: '#a37272' }}></div>
                            </div>
                            <h3 className="brand-name">
                                Beige Ribbed Crop Top – Minimal Everyday Wear
                            </h3>
                            <p className="product-title">
                                Simple ribbed crop top with a snug fit. Perfect for layering and daily wear.
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
                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_5272fbed", name: "Olive Green Sequin Trim Saree", price: 16200, image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776155832/ae09ea78bf6f964c90898d14ffffc01c-removebg-preview_lmknyk.png", color: "#5d675b", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>

                    {/* CARD 8 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "Croptops_Midnight Black Chiffon Saree Gown", title: "Midnight Black Chiffon Saree Gown", image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776155832/0e09c197083ba8fae8d01aea1483144c-removebg-preview_yxpkbe.png", brand: "Western Elegance", price: <><span>₹</span>12,499</> }} />
                        <img src="https://res.cloudinary.com/dugksxwkr/image/upload/v1776155832/0e09c197083ba8fae8d01aea1483144c-removebg-preview_yxpkbe.png"
                            alt="Chiffon Saree Gown" className="card-image" />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#2F2A26' }}></div>
                                <div className="swatch" style={{ backgroundColor: '#e5ccce' }}></div>
                            </div>
                            <h3 className="brand-name">
                                Green Wrap Crop Top – Chic Casual Wear
                            </h3>
                            <p className="product-title">
                                Wrap-style crop top with a flattering fit. Stylish and comfortable for any occasion.
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
                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_e832b5b7", name: "Midnight Black Chiffon Saree Gown", price: 12499, image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776155832/0e09c197083ba8fae8d01aea1483144c-removebg-preview_yxpkbe.png", color: "#2F2A26", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>

                    {/* CARD 9 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "Croptops_Royal Navy Blue Designer Saree with Floral Appliques", title: "Royal Navy Blue Designer Saree with Floral Appliques", image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776155833/2f97c15bc32af2cf458399e020542836-removebg-preview_ignokv.png", brand: "Maison d'Élégance", price: <><span>₹</span>28,000</> }} />
                        <img src="https://res.cloudinary.com/dugksxwkr/image/upload/v1776155833/2f97c15bc32af2cf458399e020542836-removebg-preview_ignokv.png"
                            alt="Royal Saree" className="card-image" style={{ backgroundColor: '#fceceb' }} />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#0b2b4e' }}></div>
                            </div>
                            <h3 className="brand-name">
                                Choco Brown  Crop Top – Romantic Feminine Wear
                            </h3>
                            <p className="product-title">
                                Delicate lace crop top with soft detailing. Ideal for elegant casual outfits.
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
                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_6e888b37", name: "Royal Navy Blue Designer Saree with Floral Appliques", price: 28000, image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776155833/2f97c15bc32af2cf458399e020542836-removebg-preview_ignokv.png", color: "#0b2b4e", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>

                    {/* CARD 10 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "Croptops_Nude Beige Premium Drape", title: "Nude Beige Premium Drape", image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776155833/7a48360095eb4071bb462e15b6e3ba4d-removebg-preview_i6wbsv.png", brand: "Queen's Bespoke", price: <><span>₹</span>36,100</> }} />
                        <img src="https://res.cloudinary.com/dugksxwkr/image/upload/v1776155833/7a48360095eb4071bb462e15b6e3ba4d-removebg-preview_i6wbsv.png"
                            alt="Premium Drape" className="card-image" style={{ backgroundColor: '#e5e0dc' }} />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#d1bfae' }}></div>
                            </div>
                            <h3 className="brand-name">
                                Black Strapless Crop Top – Sleek Party Wear
                            </h3>
                            <p className="product-title">
                                Minimal strapless design with a fitted silhouette. Perfect for bold styling.
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
                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_a040358c", name: "Nude Beige Premium Drape", price: 36100, image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776155833/7a48360095eb4071bb462e15b6e3ba4d-removebg-preview_i6wbsv.png", color: "#d1bfae", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>

                    {/* CARD 11 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "Croptops_Draped Georgette Saree Gown in Rose Pink", title: "Draped Georgette Saree Gown in Rose Pink", image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776155834/c91d4d0446eb6bbd47d65f1774f860fc-removebg-preview_wm9hxj.png", brand: "Maison d'Élégance", price: <><span>₹</span>18,000</> }} />
                        <img src="https://res.cloudinary.com/dugksxwkr/image/upload/v1776155834/c91d4d0446eb6bbd47d65f1774f860fc-removebg-preview_wm9hxj.png"
                            alt="Saree Gown" className="card-image" style={{ backgroundColor: '#e5ccce' }} />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#e5ccce' }}></div>
                            </div>
                            <h3 className="brand-name">
                                Lavender Soft Crop Top – Pastel Casual Wear
                            </h3>
                            <p className="product-title">
                                Soft pastel crop top with a relaxed fit. Light and comfortable for everyday wear.
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
                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_58c331f4", name: "Draped Georgette Saree Gown in Rose Pink", price: 18000, image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776155834/c91d4d0446eb6bbd47d65f1774f860fc-removebg-preview_wm9hxj.png", color: "#e5ccce", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>

                    {/* CARD 12 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "Croptops_Pleated Indo-Western Saree with Matching Clutch", title: "Pleated Indo-Western Saree with Matching Clutch", image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776155835/f857a5c56c887094c7f1d073dda5046a-removebg-preview_qazuvn.png", brand: "Queen's Wardrobe", price: <><span>₹</span>12,500</> }} />
                        <img src="https://res.cloudinary.com/dugksxwkr/image/upload/v1776155835/f857a5c56c887094c7f1d073dda5046a-removebg-preview_qazuvn.png"
                            alt="Saree Gown" className="card-image" />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#a37272' }}></div>
                            </div>
                            <h3 className="brand-name">
                                Grey Basic Crop Top – Essential Casual Wear
                            </h3>
                            <p className="product-title">
                                Simple and versatile crop top for daily styling. A wardrobe essential.
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
                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_62c50594", name: "Pleated Indo-Western Saree with Matching Clutch", price: 12500, image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776155835/f857a5c56c887094c7f1d073dda5046a-removebg-preview_qazuvn.png", color: "#a37272", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>

                    {/* CARD 13 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "Croptops_Minimalist Evening Gown Saree", title: "Minimalist Evening Gown Saree", image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776155835/a5472a1f9e786e5fd9c60a5a7d1d0957-removebg-preview_lqf4mo.png", brand: "Western Elegance", price: <><span>₹</span>21,000</> }} />
                        <img src="https://res.cloudinary.com/dugksxwkr/image/upload/v1776155835/a5472a1f9e786e5fd9c60a5a7d1d0957-removebg-preview_lqf4mo.png"
                            alt="Saree Gown" className="card-image" />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#2F2A26' }}></div>
                            </div>
                            <h3 className="brand-name">
                                Yellow Tie-Front Crop Top – Bright Summer Wear
                            </h3>
                            <p className="product-title">
                                Tie-front design with a breezy fit. Perfect for summer outfits.
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
                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_0bb3af02", name: "Minimalist Evening Gown Saree", price: 21000, image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776155835/a5472a1f9e786e5fd9c60a5a7d1d0957-removebg-preview_lqf4mo.png", color: "#2F2A26", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>

                    {/* CARD 14 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "Croptops_Handloom Silk Saree Gown for Receptions", title: "Handloom Silk Saree Gown for Receptions", image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776155835/c0f551a3bc66b6b8109c39bfc201a67b-removebg-preview_uqx2f5.png", brand: "Heritage Silks", price: <><span>₹</span>14,000</> }} />
                        <img src="https://res.cloudinary.com/dugksxwkr/image/upload/v1776155835/c0f551a3bc66b6b8109c39bfc201a67b-removebg-preview_uqx2f5.png"
                            alt="Traditional Saree Gown" className="card-image" style={{ backgroundColor: '#fceceb' }} />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#c93b4a' }}></div>
                                <div className="swatch" style={{ backgroundColor: '#0b2b4e' }}></div>
                            </div>
                            <h3 className="brand-name">
                                Black Mesh Sleeve Crop Top – Edgy Party Wear
                            </h3>
                            <p className="product-title">
                                Crop top with sheer mesh sleeves. A bold and edgy fashion statement.
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
                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_6ad302a6", name: "Handloom Silk Saree Gown for Receptions", price: 14000, image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776155835/c0f551a3bc66b6b8109c39bfc201a67b-removebg-preview_uqx2f5.png", color: "#c93b4a", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>

                    {/* CARD 15 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "Croptops_Signature Embellished Custom Saree", title: "Signature Embellished Custom Saree", image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776155835/c0f551a3bc66b6b8109c39bfc201a67b-removebg-preview_uqx2f5.png", brand: "Queen's Bespoke", price: <><span>₹</span>45,000</> }} />
                        <img src="https://res.cloudinary.com/dugksxwkr/image/upload/v1776512463/eb26ee671b362324b8449edce2f980c6-removebg-preview_ipswkx.png"
                            alt="Bespoke Saree Gown" className="card-image" style={{ backgroundColor: '#e5e0dc' }} />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#d1bfae' }}></div>
                            </div>
                            <h3 className="brand-name">
                                Cream Satin Crop Top – Elegant Casual Wear
                            </h3>
                            <p className="product-title">
                                Smooth satin finish with a soft drape. Perfect for refined casual styling.
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
                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_26fa1bd2", name: "Signature Embellished Custom Saree", price: 45000, image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776155835/c0f551a3bc66b6b8109c39bfc201a67b-removebg-preview_uqx2f5.png", color: "#d1bfae", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>

                    {/* CARD 16 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "Croptops_Peach Pastel Georgette Gown Saree", title: "Peach Pastel Georgette Gown Saree", image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776155836/2d6075fca914f5ed7fdbd5ea838d8ef2-removebg-preview_ekbzur.png", brand: "Maison d'Élégance", price: <><span>₹</span>13,300</> }} />
                        <img src="https://res.cloudinary.com/dugksxwkr/image/upload/v1776155836/2d6075fca914f5ed7fdbd5ea838d8ef2-removebg-preview_ekbzur.png"
                            alt="Pastel Saree" className="card-image" style={{ backgroundColor: '#fceceb' }} />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#bb9b9f' }}></div>
                            </div>
                            <h3 className="brand-name">
                                Teal Fitted Crop Top – Minimal Modern Wear
                            </h3>
                            <p className="product-title">
                                Clean fitted design with a sleek look. Stylish and versatile.
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
                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_af3b00a7", name: "Peach Pastel Georgette Gown Saree", price: 13300, image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776155836/2d6075fca914f5ed7fdbd5ea838d8ef2-removebg-preview_ekbzur.png", color: "#bb9b9f", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>

                    {/* CARD 17 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "Croptops_Festive Green Pre-Stitched Gown", title: "Festive Green Pre-Stitched Gown", image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776155837/bbb1d088d656d6ce9c496fd9aad95769-removebg-preview_cnc65f.png", brand: "Queen's Wardrobe", price: <><span>₹</span>15,400</> }} />
                        <img src="https://res.cloudinary.com/dugksxwkr/image/upload/v1776155837/bbb1d088d656d6ce9c496fd9aad95769-removebg-preview_cnc65f.png"
                            alt="Festive Gown" className="card-image" />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#5d675b' }}></div>
                            </div>
                            <h3 className="brand-name">
                                Maroon Ruched Crop Top – Trendy Casual Wear
                            </h3>
                            <p className="product-title">
                                Ruched detailing with a flattering fit. A stylish addition to your wardrobe.
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
                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_66119b1a", name: "Festive Green Pre-Stitched Gown", price: 15400, image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776155837/bbb1d088d656d6ce9c496fd9aad95769-removebg-preview_cnc65f.png", color: "#5d675b", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>

                    {/* CARD 18 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "Croptops_Classic Black Contemporary Wrap Saree", title: "Classic Black Contemporary Wrap Saree", image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776155837/4f632b069a01dbe3ebd61d669b6e9d5d-removebg-preview_pvwtan.png", brand: "Western Elegance", price: <><span>₹</span>18,000</> }} />
                        <img src="https://res.cloudinary.com/dugksxwkr/image/upload/v1776155837/4f632b069a01dbe3ebd61d669b6e9d5d-removebg-preview_pvwtan.png"
                            alt="Gown" className="card-image" />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#2F2A26' }}></div>
                            </div>
                            <h3 className="brand-name">
                                White Button Crop Top – Classic Everyday Wear
                            </h3>
                            <p className="product-title">
                                Button-down crop top with a structured fit. Simple and timeless.
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
                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_a0147b19", name: "Classic Black Contemporary Wrap Saree", price: 18000, image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776155837/4f632b069a01dbe3ebd61d669b6e9d5d-removebg-preview_pvwtan.png", color: "#2F2A26", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>

                    {/* CARD 19 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "Croptops_Rich Indigo Occasion Wear Layout Saree", title: "Rich Indigo Occasion Wear Layout Saree", image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776155838/ff79e19e54b82606581d313b05b41a36-removebg-preview_wgzzld.png", brand: "Heritage Silks", price: <><span>₹</span>21,000</> }} />
                        <img src="https://res.cloudinary.com/dugksxwkr/image/upload/v1776155838/ff79e19e54b82606581d313b05b41a36-removebg-preview_wgzzld.png"
                            alt="Royal Saree" className="card-image" style={{ backgroundColor: '#fceceb' }} />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#0b2b4e' }}></div>
                            </div>
                            <h3 className="brand-name">
                                Olive Green Casual Crop Top – Relaxed Streetwear
                            </h3>
                            <p className="product-title">
                                Comfortable crop top with a relaxed silhouette. Perfect for street-style outfits.
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
                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_a94c39ff", name: "Rich Indigo Occasion Wear Layout Saree", price: 21000, image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776155838/ff79e19e54b82606581d313b05b41a36-removebg-preview_wgzzld.png", color: "#0b2b4e", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>

                    {/* CARD 20 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "Croptops_Taupe High-Society Event Saree", title: "Taupe High-Society Event Saree", image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776155837/bbb1d088d656d6ce9c496fd9aad95769-removebg-preview_cnc65f.png", brand: "Queen's Bespoke", price: <><span>₹</span>30,800</> }} />
                        <img src="https://res.cloudinary.com/dugksxwkr/image/upload/v1776512993/d75ae25def67a93389b3967b498160ea-removebg-preview_1_e40zp0.png"
                            alt="Premium Drape" className="card-image" style={{ backgroundColor: '#e5e0dc' }} />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#d1bfae' }}></div>
                                <div className="swatch" style={{ backgroundColor: '#bb9b9f' }}></div>
                            </div>
                            <h3 className="brand-name">
                                Black Basic Crop Top – Minimal Essential Wear
                            </h3>
                            <p className="product-title">
                                Simple black crop top with a clean fit. A must-have staple for any wardrobe.
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
                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_6b3cc46a", name: "Taupe High-Society Event Saree", price: 30800, image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776155837/bbb1d088d656d6ce9c496fd9aad95769-removebg-preview_cnc65f.png", color: "#d1bfae", size: "Free Size" })}>Add to Cart</button>
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
                    <Link to="/bodycon">Bodycons</Link>
                    <Link to="/sportswear">Sportswear</Link>
                    <Link to="/maxidress">Maxi Dresses</Link>
                    <Link to="/croptops">Croptops</Link>
                    <Link to="/blazers">Blazers</Link>
                    <Link to="/maxiskirts">Maxi Skirts</Link>
                    <Link to="/formals">Formals</Link>
                    <Link to="/koreanwear">Korean Dresses</Link>
                </nav>
            </div>
        </div>
    );
}

export default Croptops;
