import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './gownsaree.css';
import './sidebar.css';
import WishlistHeart from '../components/WishlistHeart';
import { useShop } from '../context/ShopContext';

function GownSaree() {
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
                        <WishlistHeart item={{ id: "GownSaree_Premium Pre-Draped Saree Gown in Soft Georgette with Embellished Belt", title: "Premium Pre-Draped Saree Gown in Soft Georgette with Embellished Belt", image: "", brand: "Maison d'Élégance", price: <><span>₹</span>14,999</> }} />
                        <img src="https://res.cloudinary.com/dw95uihdu/image/upload/v1776505153/b3349433ca3554cd5cc6b8af40660cb6-removebg-preview_jabuo2.png"
                            alt="Saree Gown" className="card-image" style={{ backgroundColor: '#e5ccce' }} />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#e5ccce' }}></div>
                                <div className="swatch" style={{ backgroundColor: '#bb9b9f' }}></div>
                                <div className="swatch" style={{ backgroundColor: '#2F2A26' }}></div>
                            </div>
                            <h3 className="brand-name">
                                Blush Pink Ruffle Pre-Draped Saree Gown – Elegant Occasion Wear
                            </h3>
                            <p className="product-title">
                                Soft blush pink saree gown with ruffle detailing and embellished blouse. Perfect for receptions and cocktail events.
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

                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_1a784b4b", name: "Premium Pre-Draped Saree Gown in Soft Georgette with Embellished Belt", price: 14999, image: "", color: "#e5ccce", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>

                    {/* CARD 2 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "GownSaree_Modern Indo-Western Fusion Saree with Attached Pallu", title: "Modern Indo-Western Fusion Saree with Attached Pallu", image: "", brand: "Queen's Wardrobe", price: <><span>₹</span>18,499</> }} />
                        <img src="https://res.cloudinary.com/dw95uihdu/image/upload/v1776505153/c33faef63ccc6cccf1be64448097f65d-removebg-preview_aya4pe.png"
                            alt="Indo Western Saree" className="card-image" />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#a37272' }}></div>
                                <div className="swatch" style={{ backgroundColor: '#5d675b' }}></div>
                            </div>
                            <h3 className="brand-name">
                                Pink Ombre Draped Saree Gown with Cape – Statement Party Wear
                            </h3>
                            <p className="product-title">
                                Gradient pink to lavender saree gown with flowing cape drape. A bold and modern festive look.
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

                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_22643124", name: "Modern Indo-Western Fusion Saree with Attached Pallu", price: 18499, image: "", color: "#a37272", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>

                    {/* CARD 3 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "GownSaree_Cocktail Saree Gown with Cape Sleeves", title: "Cocktail Saree Gown with Cape Sleeves", image: "", brand: "Western Elegance", price: <><span>₹</span>24,999</> }} />
                        <img src="https://res.cloudinary.com/dodmxncwc/image/upload/v1775915213/indo_west_2nd-removebg-preview_12_jl4rqh.png"
                            alt="Modern Saree" className="card-image" />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#2F2A26' }}></div>
                            </div>
                            <h3 className="brand-name">
                                Wine Sequin Draped Saree Dress – Glam Evening Wear
                            </h3>
                            <p className="product-title">
                                Deep wine saree gown with full sequin embellishment. Perfect for glamorous evening occasions.
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

                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_506cd2bd", name: "Cocktail Saree Gown with Cape Sleeves", price: 24999, image: "", color: "#2F2A26", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>

                    {/* CARD 4 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "GownSaree_Heritage Silk Trim Saree Gown for Wedding Receptions", title: "Heritage Silk Trim Saree Gown for Wedding Receptions", image: "", brand: "Maison d'Élégance", price: <><span>₹</span>21,000</> }} />
                        <img src="https://res.cloudinary.com/dodmxncwc/image/upload/v1775915193/indo_western_1st-removebg-preview_8_qrty2e.png"
                            alt="Traditional Saree Gown" className="card-image" style={{ backgroundColor: '#fceceb' }} />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#c93b4a' }}></div>
                                <div className="swatch" style={{ backgroundColor: '#0b2b4e' }}></div>
                                <div className="swatch" style={{ backgroundColor: '#b08a5d' }}></div>
                            </div>
                            <h3 className="brand-name">
                                Red Embroidered Slit Saree Gown – Festive Statement Wear
                            </h3>
                            <p className="product-title">
                                Bold red saree gown with embroidered blouse and thigh-high slit. Dramatic and festive.
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

                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_afcb4033", name: "Heritage Silk Trim Saree Gown for Wedding Receptions", price: 21000, image: "", color: "#c93b4a", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>

                    {/* CARD 5 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "GownSaree_Custom-Fit Sequined Saree Dress", title: "Custom-Fit Sequined Saree Dress", image: "", brand: "Queen's Bespoke", price: <><span>₹</span>38,500</> }} />
                        <img src="https://res.cloudinary.com/dodmxncwc/image/upload/v1775915172/indo_west_2nd-removebg-preview_11_ddmzga.png"
                            alt="Bespoke Saree Gown" className="card-image" style={{ backgroundColor: '#e5e0dc' }} />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#d1bfae' }}></div>
                                <div className="swatch" style={{ backgroundColor: '#e8e8e8' }}></div>
                            </div>
                            <h3 className="brand-name">
                                Gold Pre-Draped Saree Gown with Pleats – Luxe Occasion Wear
                            </h3>
                            <p className="product-title">
                                Rich gold saree gown with structured pleats and minimal blouse. Elegant and timeless.
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

                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_1e5af15f", name: "Custom-Fit Sequined Saree Dress", price: 38500, image: "", color: "#d1bfae", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>

                    {/* CARD 6 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "GownSaree_Embroidered Pastel Saree Gown with Dupatta", title: "Embroidered Pastel Saree Gown with Dupatta", image: "", brand: "Maison d'Élégance", price: <><span>₹</span>19,500</> }} />
                        <img src="https://res.cloudinary.com/dw95uihdu/image/upload/v1776495963/d8e25076e52dbe8f971fc12870c10d7b-removebg-preview_tcdtrx.png"
                            alt="Embroidered Saree Gown" className="card-image" style={{ backgroundColor: '#fceceb' }} />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#bb9b9f' }}></div>
                            </div>
                            <h3 className="brand-name">
                                Mustard Yellow Draped Saree Gown – Bright Festive Wear
                            </h3>
                            <p className="product-title">
                                Vibrant yellow saree gown with fitted drape and embellished blouse. Perfect for celebrations.
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
                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_e5a86c42", name: "Embroidered Pastel Saree Gown with Dupatta", price: 19500, image: "", color: "#bb9b9f", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>

                    {/* CARD 7 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "GownSaree_Olive Green Sequin Trim Saree", title: "Olive Green Sequin Trim Saree", image: "", brand: "Queen's Wardrobe", price: <><span>₹</span>16,200</> }} />
                        <img src="https://res.cloudinary.com/dw95uihdu/image/upload/v1776495961/a18b203cca4f7d237992a8410333ab34-removebg-preview_ecfghm.png"
                            alt="Sequin Saree" className="card-image" />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#5d675b' }}></div>
                                <div className="swatch" style={{ backgroundColor: '#a37272' }}></div>
                            </div>
                            <h3 className="brand-name">
                                Mint Green Slit Saree Gown – Soft Contemporary Ethnic Wear
                            </h3>
                            <p className="product-title">
                                Pastel mint saree gown with sleek draping and thigh slit. Fresh and elegant.
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
                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_0bf1ad59", name: "Olive Green Sequin Trim Saree", price: 16200, image: "", color: "#5d675b", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>

                    {/* CARD 8 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "GownSaree_Midnight Black Chiffon Saree Gown", title: "Midnight Black Chiffon Saree Gown", image: "", brand: "Western Elegance", price: <><span>₹</span>12,499</> }} />
                        <img src="https://res.cloudinary.com/dodmxncwc/image/upload/v1775915123/indo_western_1st-removebg-preview_7_x0lwww.png"
                            alt="Chiffon Saree Gown" className="card-image" />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#2F2A26' }}></div>
                                <div className="swatch" style={{ backgroundColor: '#e5ccce' }}></div>
                            </div>
                            <h3 className="brand-name">
                                Black Printed One-Shoulder Saree Gown – Indo-Western Statement
                            </h3>
                            <p className="product-title">
                                Modern one-shoulder saree gown with bold prints. A fusion of tradition and contemporary style.
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
                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_ebd92887", name: "Midnight Black Chiffon Saree Gown", price: 12499, image: "", color: "#2F2A26", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>

                    {/* CARD 9 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "GownSaree_Royal Navy Blue Designer Saree with Floral Appliques", title: "Royal Navy Blue Designer Saree with Floral Appliques", image: "", brand: "Maison d'Élégance", price: <><span>₹</span>28,000</> }} />
                        <img src="https://res.cloudinary.com/dw95uihdu/image/upload/v1776495962/ead35864bb973e64f6e9ce60bf224bb1-removebg-preview_ygqsdl.png"
                            alt="Royal Saree" className="card-image" style={{ backgroundColor: '#fceceb' }} />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#0b2b4e' }}></div>
                            </div>
                            <h3 className="brand-name">
                                Champagne Embellished Saree Gown – Elegant Reception Wear
                            </h3>
                            <p className="product-title">
                                Soft champagne saree gown with subtle shimmer and detailed drape. Perfect for evening events.
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
                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_0abe6b30", name: "Royal Navy Blue Designer Saree with Floral Appliques", price: 28000, image: "", color: "#0b2b4e", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>

                    {/* CARD 10 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "GownSaree_Nude Beige Premium Drape", title: "Nude Beige Premium Drape", image: "", brand: "Queen's Bespoke", price: <><span>₹</span>36,100</> }} />
                        <img src="https://res.cloudinary.com/dodmxncwc/image/upload/v1775915093/indo_west_2nd-removebg-preview_7_yff6hi.png"
                            alt="Premium Drape" className="card-image" style={{ backgroundColor: '#e5e0dc' }} />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#d1bfae' }}></div>
                            </div>
                            <h3 className="brand-name">
                                Red Slit Draped Saree Dress – Bold Party Wear
                            </h3>
                            <p className="product-title">
                                Bright red saree dress with modern draping and slit detail. A striking festive look.
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
                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_6b1f03d6", name: "Nude Beige Premium Drape", price: 36100, image: "", color: "#d1bfae", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>

                    {/* CARD 11 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "GownSaree_Draped Georgette Saree Gown in Rose Pink", title: "Draped Georgette Saree Gown in Rose Pink", image: "", brand: "Maison d'Élégance", price: <><span>₹</span>18,000</> }} />
                        <img src="https://res.cloudinary.com/dw95uihdu/image/upload/v1776495962/d0d3f2c76ab46961bd94d2e5555ed7c7-removebg-preview_f1je54.png"
                            alt="Saree Gown" className="card-image" style={{ backgroundColor: '#e5ccce' }} />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#e5ccce' }}></div>
                            </div>
                            <h3 className="brand-name">
                                Silver Grey Pre-Draped Saree Gown – Minimal Luxe Wear
                            </h3>
                            <p className="product-title">
                                Sleek grey saree gown with clean draping and subtle shine. Understated and elegant.
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
                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_7feff94a", name: "Draped Georgette Saree Gown in Rose Pink", price: 18000, image: "", color: "#e5ccce", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>

                    {/* CARD 12 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "GownSaree_Pleated Indo-Western Saree with Matching Clutch", title: "Pleated Indo-Western Saree with Matching Clutch", image: "", brand: "Queen's Wardrobe", price: <><span>₹</span>12,500</> }} />
                        <img src="https://res.cloudinary.com/dw95uihdu/image/upload/v1776495963/88a4e510a9863dd093949ac2be328cf6-removebg-preview_etwoln.png"
                            alt="Saree Gown" className="card-image" />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#a37272' }}></div>
                            </div>
                            <h3 className="brand-name">
                                Charcoal Metallic Saree Gown with Cape – Glam Fusion Wear
                            </h3>
                            <p className="product-title">
                                Metallic saree gown paired with a dramatic cape. Perfect for cocktail and evening styling.
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
                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_230c4104", name: "Pleated Indo-Western Saree with Matching Clutch", price: 12500, image: "", color: "#a37272", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>

                    {/* CARD 13 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "GownSaree_Minimalist Evening Gown Saree", title: "Minimalist Evening Gown Saree", image: "", brand: "Western Elegance", price: <><span>₹</span>21,000</> }} />
                        <img src="https://res.cloudinary.com/dw95uihdu/image/upload/v1776495963/8b52c572664d9efb63475973dbc3bd8a-removebg-preview_vficyo.png"
                            alt="Saree Gown" className="card-image" />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#2F2A26' }}></div>
                            </div>
                            <h3 className="brand-name">
                                Bright Yellow Embroidered Saree Gown – Festive Occasion Wear
                            </h3>
                            <p className="product-title">
                                Vibrant yellow saree gown with embroidered blouse and structured drape. Eye-catching and festive.
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
                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_f42f6152", name: "Minimalist Evening Gown Saree", price: 21000, image: "", color: "#2F2A26", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>

                    {/* CARD 14 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "GownSaree_Handloom Silk Saree Gown for Receptions", title: "Handloom Silk Saree Gown for Receptions", image: "", brand: "Heritage Silks", price: <><span>₹</span>14,000</> }} />
                        <img src="https://res.cloudinary.com/dw95uihdu/image/upload/v1776495962/563da21ae8464c469d33958e94be106f-removebg-preview_wfpl7m.png"
                            alt="Traditional Saree Gown" className="card-image" style={{ backgroundColor: '#fceceb' }} />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#c93b4a' }}></div>
                                <div className="swatch" style={{ backgroundColor: '#0b2b4e' }}></div>
                            </div>
                            <h3 className="brand-name">
                                Pastel Green Embellished Saree Gown – Soft Elegant Wear
                            </h3>
                            <p className="product-title">
                                Light pastel saree gown with intricate embellishments and soft drape. Graceful and refined.
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
                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_b76f9693", name: "Handloom Silk Saree Gown for Receptions", price: 14000, image: "", color: "#c93b4a", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>

                    {/* CARD 15 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "GownSaree_Signature Embellished Custom Saree", title: "Signature Embellished Custom Saree", image: "", brand: "Queen's Bespoke", price: <><span>₹</span>45,000</> }} />
                        <img src="https://res.cloudinary.com/dw95uihdu/image/upload/v1776495962/339e316b821f79606e3d391137df05cd-removebg-preview_tgdlgc.png"
                            alt="Bespoke Saree Gown" className="card-image" style={{ backgroundColor: '#e5e0dc' }} />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#d1bfae' }}></div>
                            </div>
                            <h3 className="brand-name">
                                Lavender Draped Saree Gown – Feminine Occasion Wear
                            </h3>
                            <p className="product-title">
                                Soft lavender saree gown with layered drape. A delicate and romantic look.
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
                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_07761b61", name: "Signature Embellished Custom Saree", price: 45000, image: "", color: "#d1bfae", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>

                    {/* CARD 16 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "GownSaree_Peach Pastel Georgette Gown Saree", title: "Peach Pastel Georgette Gown Saree", image: "", brand: "Maison d'Élégance", price: <><span>₹</span>13,300</> }} />
                        <img src="https://res.cloudinary.com/dodmxncwc/image/upload/v1775914968/indo_western_1st-removebg-preview_4_hynyhi.png"
                            alt="Pastel Saree" className="card-image" style={{ backgroundColor: '#fceceb' }} />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#bb9b9f' }}></div>
                            </div>
                            <h3 className="brand-name">
                                Lime Green Ruffle Saree Gown – Bold Contemporary Wear
                            </h3>
                            <p className="product-title">
                                Layered ruffle saree gown with vibrant lime tone. Dramatic and modern.
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
                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_b2e62a69", name: "Peach Pastel Georgette Gown Saree", price: 13300, image: "", color: "#bb9b9f", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>

                    {/* CARD 17 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "GownSaree_Festive Green Pre-Stitched Gown", title: "Festive Green Pre-Stitched Gown", image: "", brand: "Queen's Wardrobe", price: <><span>₹</span>15,400</> }} />
                        <img src="https://res.cloudinary.com/dw95uihdu/image/upload/v1776495962/ec3660c48df9dfb2ced3cb88676b70b8-removebg-preview_fk0glm.png"
                            alt="Festive Gown" className="card-image" />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#5d675b' }}></div>
                            </div>
                            <h3 className="brand-name">
                                Ivory Slit Saree Gown with Cape – Luxe Indo-Western Wear
                            </h3>
                            <p className="product-title">
                                Elegant ivory saree gown with thigh slit and sheer cape. Perfect for receptions.
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
                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_08420aef", name: "Festive Green Pre-Stitched Gown", price: 15400, image: "", color: "#5d675b", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>

                    {/* CARD 18 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "GownSaree_Classic Black Contemporary Wrap Saree", title: "Classic Black Contemporary Wrap Saree", image: "", brand: "Western Elegance", price: <><span>₹</span>18,000</> }} />
                        <img src="https://res.cloudinary.com/dw95uihdu/image/upload/v1776495963/276e201e1039f96d64b4142d3b7152f4-removebg-preview_kiha0p.png"
                            alt="Gown" className="card-image" />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#2F2A26' }}></div>
                            </div>
                            <h3 className="brand-name">
                                Sky Blue Draped Saree Gown – Soft Glam Occasion Wear
                            </h3>
                            <p className="product-title">
                                Flowy sky blue saree gown with modern draping. Light and graceful.
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
                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_79e856d0", name: "Classic Black Contemporary Wrap Saree", price: 18000, image: "", color: "#2F2A26", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>

                    {/* CARD 19 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "GownSaree_Rich Indigo Occasion Wear Layout Saree", title: "Rich Indigo Occasion Wear Layout Saree", image: "", brand: "Heritage Silks", price: <><span>₹</span>21,000</> }} />
                        <img src="https://res.cloudinary.com/dw95uihdu/image/upload/v1776495963/89e5d27007e3eb852c1ab992e6e88460-removebg-preview_wqtoxk.png"
                            alt="Royal Saree" className="card-image" style={{ backgroundColor: '#fceceb' }} />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#0b2b4e' }}></div>
                            </div>
                            <h3 className="brand-name">
                                Mauve Contemporary Draped Saree – Modern Ethnic Wear
                            </h3>
                            <p className="product-title">
                                Muted mauve saree gown with sleek drape and minimal blouse. Elegant and modern.
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
                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_da760b06", name: "Rich Indigo Occasion Wear Layout Saree", price: 21000, image: "", color: "#0b2b4e", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>

                    {/* CARD 20 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "GownSaree_Taupe High-Society Event Saree", title: "Taupe High-Society Event Saree", image: "", brand: "Queen's Bespoke", price: <><span>₹</span>30,800</> }} />
                        <img src="https://res.cloudinary.com/dodmxncwc/image/upload/v1775914897/indo_west_2nd-removebg-preview_3_agbezx.png"
                            alt="Premium Drape" className="card-image" style={{ backgroundColor: '#e5e0dc' }} />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#d1bfae' }}></div>
                                <div className="swatch" style={{ backgroundColor: '#bb9b9f' }}></div>
                            </div>
                            <h3 className="brand-name">
                                Rose Gold Embellished Saree Gown – Premium Festive Wear
                            </h3>
                            <p className="product-title">
                                Rich rose gold saree gown with heavy embellishment. A luxurious pick for weddings and events.
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
                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_231c5d69", name: "Taupe High-Society Event Saree", price: 30800, image: "", color: "#d1bfae", size: "Free Size" })}>Add to Cart</button>
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

export default GownSaree;
