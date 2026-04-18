













import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './gownsaree.css';
import './sidebar.css';
import WishlistHeart from '../components/WishlistHeart';
import { useShop } from '../context/ShopContext';


function Anarkalis() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const navigate = useNavigate();
    const { addToCart } = useShop();

    const handleAddToCart = (item) => {
        addToCart(item);
    };


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
                        <WishlistHeart item={{ id: "Premium Pre-Draped Saree Gown in Soft Georgette with Embellished Belt", title: "Premium Pre-Draped Saree Gown in Soft Georgette with Embellished Belt", image: "", brand: "Maison d'Élégance", price: <><span>₹</span>14,999</> }} />
                        <img src="https://res.cloudinary.com/dugksxwkr/image/upload/v1776189487/a1-removebg-preview_uk9vjp.png"
                            alt="Saree Gown" className="card-image" style={{ backgroundColor: '#e5ccce' }} />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#e5ccce' }}></div>
                                <div className="swatch" style={{ backgroundColor: '#bb9b9f' }}></div>
                                <div className="swatch" style={{ backgroundColor: '#2F2A26' }}></div>
                            </div>
                            <h3 className="brand-name">Yellow Embellished Pre-Draped Saree Gown with Belt</h3>
                            <p className="product-title">Soft georgette saree gown featuring intricate embellishments, a flattering pre-draped silhouette, and a statement belt for an elegant festive look.</p>


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


                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_a21144fb", name: "Premium Pre-Draped Saree Gown in Soft Georgette with Embellished Belt", price: 14999, image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776189487/a1-removebg-preview_uk9vjp.png", color: "#e5ccce", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>


                    {/* CARD 2 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "Modern Indo-Western Fusion Saree with Attached Pallu", title: "Modern Indo-Western Fusion Saree with Attached Pallu", image: "", brand: "Queen's Wardrobe", price: <><span>₹</span>18,499</> }} />
                        <img src="https://res.cloudinary.com/dugksxwkr/image/upload/v1776189487/a2-removebg-preview_n1gpzq.png"
                            alt="Indo Western Saree" className="card-image" />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#a37272' }}></div>
                                <div className="swatch" style={{ backgroundColor: '#5d675b' }}></div>
                            </div>
                            <h3 className="brand-name">Ivory Floral Border Indo-Western Saree Gown</h3>
                            <p className="product-title">Flowing ivory gown with delicate floral border detailing and an attached draped pallu, blending modern grace with traditional charm.</p>


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


                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_e55b3e68", name: "Modern Indo-Western Fusion Saree with Attached Pallu", price: 18499, image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776189487/a2-removebg-preview_n1gpzq.png", color: "#a37272", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>


                    {/* CARD 3 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "Cocktail Saree Gown with Cape Sleeves", title: "Cocktail Saree Gown with Cape Sleeves", image: "", brand: "Western Elegance", price: <><span>₹</span>24,999</> }} />
                        <img src="https://res.cloudinary.com/dugksxwkr/image/upload/v1776189488/a4-removebg-preview_dr51lc.png"
                            alt="Modern Saree" className="card-image" />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#2F2A26' }}></div>
                            </div>
                            <h3 className="brand-name">Purple Embroidered Cocktail Saree Gown with Cape Sleeves</h3>
                            <p className="product-title">Regal purple saree gown enhanced with rich embroidery and dramatic cape sleeves, perfect for evening events and receptions.</p>


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


                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_6101370a", name: "Cocktail Saree Gown with Cape Sleeves", price: 24999, image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776189488/a4-removebg-preview_dr51lc.png", color: "#2F2A26", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>


                    {/* CARD 4 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "Heritage Silk Trim Saree Gown for Wedding Receptions", title: "Heritage Silk Trim Saree Gown for Wedding Receptions", image: "", brand: "Maison d'Élégance", price: <><span>₹</span>21,000</> }} />
                        <img src="https://res.cloudinary.com/dugksxwkr/image/upload/v1776189489/a5-removebg-preview_b2ge9r.png"
                            alt="Traditional Saree Gown" className="card-image" style={{ backgroundColor: '#fceceb' }} />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#c93b4a' }}></div>
                                <div className="swatch" style={{ backgroundColor: '#0b2b4e' }}></div>
                                <div className="swatch" style={{ backgroundColor: '#b08a5d' }}></div>
                            </div>
                            <h3 className="brand-name">Fuchsia Silk Trim Heritage Saree Gown</h3>
                            <p className="product-title">Vibrant fuchsia gown with heritage-inspired silk trims and a flared silhouette, designed for wedding celebrations and festive occasions.</p>


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


                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_6ca7d92e", name: "Heritage Silk Trim Saree Gown for Wedding Receptions", price: 21000, image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776189489/a5-removebg-preview_b2ge9r.png", color: "#c93b4a", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>


                    {/* CARD 5 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "Custom-Fit Sequined Saree Dress", title: "Custom-Fit Sequined Saree Dress", image: "", brand: "Queen's Bespoke", price: <><span>₹</span>38,500</> }} />
                        <img src="https://res.cloudinary.com/dugksxwkr/image/upload/v1776189490/a6-removebg-preview_ptvjcc.png"
                            alt="Bespoke Saree Gown" className="card-image" style={{ backgroundColor: '#e5e0dc' }} />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#d1bfae' }}></div>
                                <div className="swatch" style={{ backgroundColor: '#e8e8e8' }}></div>
                            </div>
                            <h3 className="brand-name">Champagne Sequin Custom-Fit Saree Dress</h3>
                            <p className="product-title">Elegant champagne-toned saree dress with subtle sequin work and a structured custom-fit design for a refined, modern look.</p>


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


                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_fe028f87", name: "Custom-Fit Sequined Saree Dress", price: 38500, image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776189490/a6-removebg-preview_ptvjcc.png", color: "#d1bfae", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>


                    {/* CARD 6 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "Embroidered Pastel Saree Gown with Dupatta", title: "Embroidered Pastel Saree Gown with Dupatta", image: "", brand: "Maison d'Élégance", price: <><span>₹</span>19,500</> }} />
                        <img src="https://res.cloudinary.com/dugksxwkr/image/upload/v1776189490/a7-removebg-preview_ai4wli.png"
                            alt="Embroidered Saree Gown" className="card-image" style={{ backgroundColor: '#fceceb' }} />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#bb9b9f' }}></div>
                            </div>
                            <h3 className="brand-name">Black Embroidered Saree Gown with Dupatta</h3>
                            <p className="product-title">Classic black gown with intricate embroidery and a matching dupatta, offering timeless sophistication for formal gatherings.</p>
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
                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_f8f68d4d", name: "Embroidered Pastel Saree Gown with Dupatta", price: 19500, image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776189490/a7-removebg-preview_ai4wli.png", color: "#bb9b9f", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>


                    {/* CARD 7 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "Olive Green Sequin Trim Saree", title: "Olive Green Sequin Trim Saree", image: "", brand: "Queen's Wardrobe", price: <><span>₹</span>16,200</> }} />
                        <img src="https://res.cloudinary.com/dugksxwkr/image/upload/v1776189491/a8-removebg-preview_wna4gk.png"
                            alt="Sequin Saree" className="card-image" />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#5d675b' }}></div>
                                <div className="swatch" style={{ backgroundColor: '#a37272' }}></div>
                            </div>
                            <h3 className="brand-name">Wine Sequin Trim Flared Saree Gown</h3>
                            <p className="product-title">Rich wine-colored saree gown with sequin borders and a voluminous flare, ideal for festive evenings and celebrations.</p>
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
                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_5e40e34e", name: "Olive Green Sequin Trim Saree", price: 16200, image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776189491/a8-removebg-preview_wna4gk.png", color: "#5d675b", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>


                    {/* CARD 8 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "Midnight Black Chiffon Saree Gown", title: "Midnight Black Chiffon Saree Gown", image: "", brand: "Western Elegance", price: <><span>₹</span>12,499</> }} />
                        <img src="https://res.cloudinary.com/dugksxwkr/image/upload/v1776189492/a9-removebg-preview_rer59s.png"
                            alt="Chiffon Saree Gown" className="card-image" />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#2F2A26' }}></div>
                                <div className="swatch" style={{ backgroundColor: '#e5ccce' }}></div>
                            </div>
                            <h3 className="brand-name">Olive Green Chiffon Saree Gown with Embellished Hem</h3>
                            <p className="product-title">Lightweight chiffon gown in olive green featuring a detailed embellished hem and a graceful drape for effortless elegance.</p>
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
                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_f8d86983", name: "Midnight Black Chiffon Saree Gown", price: 12499, image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776189492/a9-removebg-preview_rer59s.png", color: "#2F2A26", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>


                    {/* CARD 9 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "Royal Navy Blue Designer Saree with Floral Appliques", title: "Royal Navy Blue Designer Saree with Floral Appliques", image: "", brand: "Maison d'Élégance", price: <><span>₹</span>28,000</> }} />
                        <img src="https://res.cloudinary.com/dugksxwkr/image/upload/v1776189493/a10-removebg-preview_jicb4l.png"
                            alt="Royal Saree" className="card-image" style={{ backgroundColor: '#fceceb' }} />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#0b2b4e' }}></div>
                            </div>
                            <h3 className="brand-name">Bronze Designer Saree Gown with Metallic Finish</h3>
                            <p className="product-title">Statement bronze saree gown with a metallic sheen and structured pleats, perfect for high-impact festive and wedding looks.</p>
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
                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_3edbd003", name: "Royal Navy Blue Designer Saree with Floral Appliques", price: 28000, image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776189493/a10-removebg-preview_jicb4l.png", color: "#0b2b4e", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>


                    {/* CARD 10 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "Nude Beige Premium Drape", title: "Nude Beige Premium Drape", image: "", brand: "Queen's Bespoke", price: <><span>₹</span>36,100</> }} />
                        <img src="https://res.cloudinary.com/dugksxwkr/image/upload/v1776189494/a11-removebg-preview_z4sy5p.png"
                            alt="Premium Drape" className="card-image" style={{ backgroundColor: '#e5e0dc' }} />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#d1bfae' }}></div>
                            </div>
                            <h3 className="brand-name">Beige & Red Embroidered Bridal Saree Gown</h3>
                            <p className="product-title">Heavily embroidered beige and red saree gown with intricate detailing, crafted for bridal wear and grand occasions.</p>
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
                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_9f886ab3", name: "Nude Beige Premium Drape", price: 36100, image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776189494/a11-removebg-preview_z4sy5p.png", color: "#d1bfae", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>


                    {/* CARD 11 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "Draped Georgette Saree Gown in Rose Pink", title: "Draped Georgette Saree Gown in Rose Pink", image: "", brand: "Maison d'Élégance", price: <><span>₹</span>18,000</> }} />
                        <img src="https://res.cloudinary.com/dugksxwkr/image/upload/v1776189494/a12-removebg-preview_n6wold.png"
                            alt="Saree Gown" className="card-image" style={{ backgroundColor: '#e5ccce' }} />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#e5ccce' }}></div>
                            </div>
                            <h3 className="brand-name">Red Embroidered Georgette Saree Gown with Dupatta</h3>
                            <p className="product-title">Rich red georgette saree gown adorned with intricate embroidery and paired with a flowing dupatta, ideal for weddings and festive occasions.</p>
                            <div className="rating-block">
                                <span className="stars">★★★★★</span>
                                <span className="rating-count">140</span>
                            </div>
                            <div className="pricing-block">
                                <span className="discount">-10%</span>
                                <span className="price"><span>₹</span>18,000</span>
                                <span className="original-price">₹20,000</span>
                            </div>
                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_eb3aa0f6", name: "Draped Georgette Saree Gown in Rose Pink", price: 18000, image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776189494/a12-removebg-preview_n6wold.png", color: "#e5ccce", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>


                    {/* CARD 12 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "Pleated Indo-Western Saree with Matching Clutch", title: "Pleated Indo-Western Saree with Matching Clutch", image: "", brand: "Queen's Wardrobe", price: <><span>₹</span>12,500</> }} />
                        <img src="https://res.cloudinary.com/dugksxwkr/image/upload/v1776189496/a15-removebg-preview_l9uzhp.png"
                            alt="Saree Gown" className="card-image" />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#a37272' }}></div>
                            </div>
                            <h3 className="brand-name">Sage Green Pleated Indo-Western Saree Gown with Clutch</h3>
                            <p className="product-title">Elegant sage green pleated saree gown with a modern Indo-western silhouette, complemented by a matching clutch for a complete look.</p>
                            <div className="rating-block">
                                <span className="stars">★★★★☆</span>
                                <span className="rating-count">245</span>
                            </div>
                            <div className="pricing-block">
                                <span className="discount">-20%</span>
                                <span className="price"><span>₹</span>12,500</span>
                                <span className="original-price">₹15,625</span>
                            </div>
                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_9a510617", name: "Pleated Indo-Western Saree with Matching Clutch", price: 12500, image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776189496/a15-removebg-preview_l9uzhp.png", color: "#a37272", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>


                    {/* CARD 13 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "Minimalist Evening Gown Saree", title: "Minimalist Evening Gown Saree", image: "", brand: "Western Elegance", price: <><span>₹</span>21,000</> }} />
                        <img src="https://res.cloudinary.com/dugksxwkr/image/upload/v1776189496/a13-removebg-preview_lcgiou.png"
                            alt="Saree Gown" className="card-image" />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#2F2A26' }}></div>
                            </div>
                            <h3 className="brand-name">Blush Pink Minimalist Evening Saree Gown</h3>
                            <p className="product-title">Soft blush pink saree gown with subtle embellishments and a clean, minimalist design, perfect for evening parties and receptions.</p>
                            <div className="rating-block">
                                <span className="stars">★★★★★</span>
                                <span className="rating-count">88</span>
                            </div>
                            <div className="pricing-block">
                                <span className="discount">-15%</span>
                                <span className="price"><span>₹</span>21,000</span>
                                <span className="original-price">₹24,700</span>
                            </div>
                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_6201c6fa", name: "Minimalist Evening Gown Saree", price: 21000, image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776189496/a13-removebg-preview_lcgiou.png", color: "#2F2A26", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>


                    {/* CARD 14 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "Handloom Silk Saree Gown for Receptions", title: "Handloom Silk Saree Gown for Receptions", image: "", brand: "Heritage Silks", price: <><span>₹</span>14,000</> }} />
                        <img src="https://res.cloudinary.com/dugksxwkr/image/upload/v1776189497/a16-removebg-preview_ckfo5s.png"
                            alt="Traditional Saree Gown" className="card-image" style={{ backgroundColor: '#fceceb' }} />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#c93b4a' }}></div>
                                <div className="swatch" style={{ backgroundColor: '#0b2b4e' }}></div>
                            </div>
                            <h3 className="brand-name">Navy Blue Handloom Silk Saree Gown with Dupatta
</h3>
                            <p className="product-title">Deep navy blue saree gown crafted from handloom silk with delicate motifs and a coordinated dupatta, blending tradition with elegance.</p>
                            <div className="rating-block">
                                <span className="stars">★★★★☆</span>
                                <span className="rating-count">421</span>
                            </div>
                            <div className="pricing-block">
                                <span className="discount">-50%</span>
                                <span className="price"><span>₹</span>14,000</span>
                                <span className="original-price">₹28,000</span>
                            </div>
                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_1905509f", name: "Handloom Silk Saree Gown for Receptions", price: 14000, image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776189497/a16-removebg-preview_ckfo5s.png", color: "#c93b4a", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>


                    {/* CARD 15 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "Signature Embellished Custom Saree", title: "Signature Embellished Custom Saree", image: "", brand: "Queen's Bespoke", price: <><span>₹</span>45,000</> }} />
                        <img src="https://res.cloudinary.com/dugksxwkr/image/upload/v1776189497/a17-removebg-preview_lmsh6g.png"
                            alt="Bespoke Saree Gown" className="card-image" style={{ backgroundColor: '#e5e0dc' }} />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#d1bfae' }}></div>
                            </div>
                            <h3 className="brand-name">Powder Blue Embellished Custom Saree Gown</h3>
                            <p className="product-title">Graceful powder blue saree gown featuring intricate embellishments and a custom-tailored fit for a refined festive appearance.</p>
                            <div className="rating-block">
                                <span className="stars">★★★★★</span>
                                <span className="rating-count">19</span>
                            </div>
                            <div className="pricing-block">
                                <span className="discount">-5%</span>
                                <span className="price"><span>₹</span>45,000</span>
                                <span className="original-price">₹47,360</span>
                            </div>
                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_cbe5d612", name: "Signature Embellished Custom Saree", price: 45000, image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776189497/a17-removebg-preview_lmsh6g.png", color: "#d1bfae", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>


                    {/* CARD 16 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "Peach Pastel Georgette Gown Saree", title: "Peach Pastel Georgette Gown Saree", image: "", brand: "Maison d'Élégance", price: <><span>₹</span>13,300</> }} />
                        <img src="https://res.cloudinary.com/dugksxwkr/image/upload/v1776189498/edd9b6851019956dc157a8d6b4a7895b-removebg-preview_rs2uzg.png"
                            alt="Pastel Saree" className="card-image" style={{ backgroundColor: '#fceceb' }} />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#bb9b9f' }}></div>
                            </div>
                            <h3 className="brand-name">Emerald Green Georgette Saree Gown with Belt</h3>
                            <p className="product-title">Flowing emerald green gown with a cinched waist belt and soft georgette drape, offering a flattering and contemporary ethnic look.</p>
                            <div className="rating-block">
                                <span className="stars">★★★★☆</span>
                                <span className="rating-count">112</span>
                            </div>
                            <div className="pricing-block">
                                <span className="discount">-30%</span>
                                <span className="price"><span>₹</span>13,300</span>
                                <span className="original-price">₹19,000</span>
                            </div>
                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_28542478", name: "Peach Pastel Georgette Gown Saree", price: 13300, image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776189498/edd9b6851019956dc157a8d6b4a7895b-removebg-preview_rs2uzg.png", color: "#bb9b9f", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>


                    {/* CARD 17 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "Festive Green Pre-Stitched Gown", title: "Festive Green Pre-Stitched Gown", image: "", brand: "Queen's Wardrobe", price: <><span>₹</span>15,400</> }} />
                        <img src="https://res.cloudinary.com/dugksxwkr/image/upload/v1776189667/372aa87b64ea452cea5886f8d63142b6-removebg-preview_e7hats.png"
                            alt="Festive Gown" className="card-image" />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#5d675b' }}></div>
                            </div>
                            <h3 className="brand-name">Deep Pink Festive Pre-Stitched Saree Gown with Dupatta</h3>
                            <p className="product-title">Vibrant deep pink pre-stitched saree gown paired with a contrasting dupatta, designed for effortless festive styling.</p>
                            <div className="rating-block">
                                <span className="stars">★★★★★</span>
                                <span className="rating-count">478</span>
                            </div>
                            <div className="pricing-block">
                                <span className="discount">-45%</span>
                                <span className="price"><span>₹</span>15,400</span>
                                <span className="original-price">₹28,000</span>
                            </div>
                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_ddb7f2a8", name: "Festive Green Pre-Stitched Gown", price: 15400, image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776189667/372aa87b64ea452cea5886f8d63142b6-removebg-preview_e7hats.png", color: "#5d675b", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>


                    {/* CARD 18 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "Classic Black Contemporary Wrap Saree", title: "Classic Black Contemporary Wrap Saree", image: "", brand: "Western Elegance", price: <><span>₹</span>18,000</> }} />
                        <img src="https://res.cloudinary.com/dugksxwkr/image/upload/v1776189668/18487d0368fb9588a05388332e469c83-removebg-preview_edeqzq.png"
                            alt="Gown" className="card-image" />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#2F2A26' }}></div>
                            </div>
                            <h3 className="brand-name">Red & Gold Contemporary Wrap Saree Gown</h3>
                            <p className="product-title">Striking red saree gown with gold patterns in a modern wrap silhouette, perfect for statement-making traditional wear.</p>
                            <div className="rating-block">
                                <span className="stars">★★★★☆</span>
                                <span className="rating-count">334</span>
                            </div>
                            <div className="pricing-block">
                                <span className="discount">-10%</span>
                                <span className="price"><span>₹</span>18,000</span>
                                <span className="original-price">₹20,000</span>
                            </div>
                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_6df192af", name: "Classic Black Contemporary Wrap Saree", price: 18000, image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776189668/18487d0368fb9588a05388332e469c83-removebg-preview_edeqzq.png", color: "#2F2A26", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>


                    {/* CARD 19 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "Rich Indigo Occasion Wear Layout Saree", title: "Rich Indigo Occasion Wear Layout Saree", image: "", brand: "Heritage Silks", price: <><span>₹</span>21,000</> }} />
                        <img src="https://res.cloudinary.com/dugksxwkr/image/upload/v1776189780/a85bb4678102d9f7c4ee65f6170fc59b-removebg-preview_prwdry.png"
                            alt="Royal Saree" className="card-image" style={{ backgroundColor: '#fceceb' }} />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#0b2b4e' }}></div>
                            </div>
                            <h3 className="brand-name">Olive Green Occasion Wear Saree Gown</h3>
                            <p className="product-title">Elegant olive green saree gown with a flowing flare and minimal detailing, suitable for formal gatherings and celebrations.</p>
                            <div className="rating-block">
                                <span className="stars">★★★★★</span>
                                <span className="rating-count">650</span>
                            </div>
                            <div className="pricing-block">
                                <span className="discount">-40%</span>
                                <span className="price"><span>₹</span>21,000</span>
                                <span className="original-price">₹35,000</span>
                            </div>
                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_2dc84780", name: "Rich Indigo Occasion Wear Layout Saree", price: 21000, image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776189780/a85bb4678102d9f7c4ee65f6170fc59b-removebg-preview_prwdry.png", color: "#0b2b4e", size: "Free Size" })}>Add to Cart</button>
                        </div>
                    </div>


                    {/* CARD 20 */}
                    <div className="product-card" style={{ position: "relative" }}>
                        <WishlistHeart item={{ id: "Taupe High-Society Event Saree", title: "Taupe High-Society Event Saree", image: "", brand: "Queen's Bespoke", price: <><span>₹</span>30,800</> }} />
                        <img src="https://res.cloudinary.com/dugksxwkr/image/upload/v1776190224/017fca75c4284d5f50ec54785fc82d4d-removebg-preview_b0zdi0.png"
                            alt="Premium Drape" className="card-image" style={{ backgroundColor: '#e5e0dc' }} />
                        <div className="card-content">
                            <div className="swatches">
                                <div className="swatch" style={{ backgroundColor: '#d1bfae' }}></div>
                                <div className="swatch" style={{ backgroundColor: '#bb9b9f' }}></div>
                            </div>
                            <h3 className="brand-name">Mustard & Teal High-Society Event Saree Gown</h3>
                            <p className="product-title">Sophisticated mustard saree gown with teal dupatta accents and refined detailing, crafted for upscale events and occasions.</p>
                            <div className="rating-block">
                                <span className="stars">★★★★★</span>
                                <span className="rating-count">93</span>
                            </div>
                            <div className="pricing-block">
                                <span className="discount">-12%</span>
                                <span className="price"><span>₹</span>30,800</span>
                                <span className="original-price">₹35,000</span>
                            </div>
                            <button className="buying-options-btn" onClick={() => handleAddToCart({ id: "prod_c9a788c8", name: "Taupe High-Society Event Saree", price: 30800, image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776190224/017fca75c4284d5f50ec54785fc82d4d-removebg-preview_b0zdi0.png", color: "#d1bfae", size: "Free Size" })}>Add to Cart</button>
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
                    <Link to="/sarees">Sarees</Link>
                    <Link to="/lehengas">Lehangas</Link>
                    <Link to="/croptops">Croptops</Link>
                    <Link to="/kurthisets">Kurthi Sets</Link>
                    <Link to="/anarkalis">Anarkalis</Link>
                    <Link to="/gagracholi">Ghagra Choli</Link>
                    <Link to="/salwarkamis">Salwar Kamiz</Link>
                    <Link to="/indiangowns">Indian Gowns</Link>
                </nav>
            </div>
        </div>
    );
}


export default Anarkalis;