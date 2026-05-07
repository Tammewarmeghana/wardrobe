import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './gownsaree.css';
import './sidebar.css';
import WishlistHeart from '../components/WishlistHeart';
import { useShop } from '../context/ShopContext';
import FilterPanel from '../components/Filters/FilterPanel';
import { useProductFilter } from '../hooks/useProductFilter';

const products = [
    {
        id: "IWF_01",
        title: "Premium Pre-Draped Saree Gown in Soft Georgette with Embellished Belt",
        brand: "Maison d'Élégance",
        price: 14999,
        originalPrice: 35999,
        discount: "-58%",
        image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776495519/34f67b978ba181b1179dff2a05e5b962-removebg-preview_eihd5e.png",
        color: "#e5ccce",
        colors: ["#e5ccce", "#bb9b9f", "#2F2A26"],
        fabric: "Georgette",
        rating: 4.0,
        ratingCount: "1,245",
        delivery: "Thursday, April 14"
    },
    {
        id: "IWF_02",
        title: "Modern Indo-Western Fusion Saree with Attached Pallu",
        brand: "Queen's Wardrobe",
        price: 18499,
        originalPrice: 30999,
        discount: "-40%",
        image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776495519/c188b442559e569d3053be9a7a73d75d-removebg-preview_sn2n10.png",
        color: "#a37272",
        colors: ["#a37272", "#5d675b"],
        fabric: "Silk Blend",
        rating: 5.0,
        ratingCount: "892",
        delivery: "Friday, April 15"
    },
    {
        id: "IWF_03",
        title: "Cocktail Saree Gown with Cape Sleeves",
        brand: "Western Elegance",
        price: 24999,
        originalPrice: 31500,
        discount: "-20%",
        image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776495519/6a6757a62464a9b113b08d8aea696de8-removebg-preview_xhuzsi.png",
        color: "#2F2A26",
        colors: ["#2F2A26"],
        fabric: "Chiffon",
        rating: 4.0,
        ratingCount: "340",
        delivery: "Wednesday, April 13"
    },
    {
        id: "IWF_04",
        title: "Heritage Silk Trim Saree Gown for Wedding Receptions",
        brand: "Maison d'Élégance",
        price: 21000,
        originalPrice: 60000,
        discount: "-65%",
        image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776495519/ab72ca0b04667a9a70eb8ffcbbfda0a6-removebg-preview_nbx5eu.png",
        color: "#c93b4a",
        colors: ["#c93b4a", "#0b2b4e", "#b08a5d"],
        fabric: "Silk",
        rating: 5.0,
        ratingCount: "2,109",
        delivery: "Tomorrow, 11 AM"
    },
    {
        id: "IWF_05",
        title: "Custom-Fit Sequined Saree Dress",
        brand: "Queen's Bespoke",
        price: 38500,
        originalPrice: 42800,
        discount: "-10%",
        image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776495519/288d9d4ef645afaa94802bdf31cc2c96-removebg-preview_g4rip5.png",
        color: "#d1bfae",
        colors: ["#d1bfae", "#e8e8e8"],
        fabric: "Net",
        rating: 4.0,
        ratingCount: "112",
        delivery: "April 20"
    },
    {
        id: "IWF_06",
        title: "Embroidered Pastel Saree Gown with Dupatta",
        brand: "Maison d'Élégance",
        price: 19500,
        originalPrice: 22940,
        discount: "-15%",
        image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776495520/0e074dab0eafc394aba3474de2ed031d-removebg-preview_nwzh7o.png",
        color: "#bb9b9f",
        colors: ["#bb9b9f"],
        fabric: "Georgette",
        rating: 4.0,
        ratingCount: "85",
        delivery: "Saturday, April 16"
    },
    {
        id: "IWF_07",
        title: "Olive Green Sequin Trim Saree",
        brand: "Queen's Wardrobe",
        price: 16200,
        originalPrice: 21600,
        discount: "-25%",
        image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776495522/9e2b2d69ec25d38445ae7c328a28b6e4-removebg-preview_lzo6rx.png",
        color: "#5d675b",
        colors: ["#5d675b", "#a37272"],
        fabric: "Silk Blend",
        rating: 5.0,
        ratingCount: "430",
        delivery: "Monday, April 18"
    },
    {
        id: "IWF_08",
        title: "Midnight Black Chiffon Saree Gown",
        brand: "Western Elegance",
        price: 12499,
        originalPrice: 24998,
        discount: "-50%",
        image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776508221/06570fc3454dd61aca1fab36bea638ec-removebg-preview_uxpain.png",
        color: "#2F2A26",
        colors: ["#2F2A26", "#e5ccce"],
        fabric: "Chiffon",
        rating: 4.0,
        ratingCount: "612",
        delivery: "Thursday, April 14"
    },
    {
        id: "IWF_09",
        title: "Royal Navy Blue Designer Saree with Floral Appliques",
        brand: "Maison d'Élégance",
        price: 28000,
        originalPrice: 40000,
        discount: "-30%",
        image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776508226/fdb2fc81c19a64b5e841a3beffe723b9-removebg-preview_nsotoq.png",
        color: "#0b2b4e",
        colors: ["#0b2b4e"],
        fabric: "Silk",
        rating: 5.0,
        ratingCount: "190",
        delivery: "Friday, April 15"
    },
    {
        id: "IWF_10",
        title: "Nude Beige Premium Drape",
        brand: "Queen's Bespoke",
        price: 36100,
        originalPrice: 38000,
        discount: "-5%",
        image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776508459/b82520a1b4dd49e739d3b597dcd47bc0-removebg-preview_xbplqw.png",
        color: "#d1bfae",
        colors: ["#d1bfae"],
        fabric: "Net",
        rating: 4.0,
        ratingCount: "56",
        delivery: "April 20"
    },
    {
        id: "IWF_11",
        title: "Draped Georgette Saree Gown in Rose Pink",
        brand: "Maison d'Élégance",
        price: 18000,
        originalPrice: 20000,
        discount: "-10%",
        image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776508459/e50165984272afc90f09931908f7eb7e-removebg-preview_aw7ldo.png",
        color: "#e5ccce",
        colors: ["#e5ccce"],
        fabric: "Georgette",
        rating: 5.0,
        ratingCount: "140",
        delivery: "Tomorrow, 11 AM"
    },
    {
        id: "IWF_12",
        title: "Pleated Indo-Western Saree with Matching Clutch",
        brand: "Queen's Wardrobe",
        price: 12500,
        originalPrice: 15625,
        discount: "-20%",
        image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776508460/d12b3d9a076bc8ed24d2c28dfba0fa2b-removebg-preview_ftvsdt.png",
        color: "#a37272",
        colors: ["#a37272"],
        fabric: "Silk Blend",
        rating: 4.0,
        ratingCount: "245",
        delivery: "Saturday, April 16"
    },
    {
        id: "IWF_13",
        title: "Minimalist Evening Gown Saree",
        brand: "Western Elegance",
        price: 21000,
        originalPrice: 24700,
        discount: "-15%",
        image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776508460/7f3a165e04a9f355dd0a5bac934b0f9b-removebg-preview_ayfzwe.png",
        color: "#2F2A26",
        colors: ["#2F2A26"],
        fabric: "Chiffon",
        rating: 5.0,
        ratingCount: "88",
        delivery: "Monday, April 18"
    },
    {
        id: "IWF_14",
        title: "Handloom Silk Saree Gown for Receptions",
        brand: "Heritage Silks",
        price: 14000,
        originalPrice: 28000,
        discount: "-50%",
        image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776508460/bf8adca14907141ee7628398804ad23e-removebg-preview_zydphz.png",
        color: "#c93b4a",
        colors: ["#c93b4a", "#0b2b4e"],
        fabric: "Handloom Silk",
        rating: 4.0,
        ratingCount: "421",
        delivery: "Thursday, April 14"
    },
    {
        id: "IWF_15",
        title: "Signature Embellished Custom Saree",
        brand: "Queen's Bespoke",
        price: 45000,
        originalPrice: 47360,
        discount: "-5%",
        image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776508463/583bd1fa415e323f18b4557dd744338c-removebg-preview_cezhl5.png",
        color: "#d1bfae",
        colors: ["#d1bfae"],
        fabric: "Net",
        rating: 5.0,
        ratingCount: "19",
        delivery: "Friday, April 15"
    },
    {
        id: "IWF_16",
        title: "Peach Pastel Georgette Gown Saree",
        brand: "Maison d'Élégance",
        price: 13300,
        originalPrice: 19000,
        discount: "-30%",
        image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776508463/ba1e0a2e5588bb02f1ca55f13675ce19-removebg-preview_rntw6i.png",
        color: "#bb9b9f",
        colors: ["#bb9b9f"],
        fabric: "Georgette",
        rating: 4.0,
        ratingCount: "112",
        delivery: "Tomorrow, 11 AM"
    },
    {
        id: "IWF_17",
        title: "Festive Green Pre-Stitched Gown",
        brand: "Queen's Wardrobe",
        price: 15400,
        originalPrice: 28000,
        discount: "-45%",
        image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776509412/54f1d0ed799e8159fd8d795c44c9f40b-removebg-preview_loqypg.png",
        color: "#5d675b",
        colors: ["#5d675b"],
        fabric: "Silk Blend",
        rating: 5.0,
        ratingCount: "478",
        delivery: "Saturday, April 16"
    },
    {
        id: "IWF_18",
        title: "Classic Black Contemporary Wrap Saree",
        brand: "Western Elegance",
        price: 18000,
        originalPrice: 20000,
        discount: "-10%",
        image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776509412/c2aa35da66d95364eeddf53b5e1f094e-removebg-preview_hjoarc.png",
        color: "#2F2A26",
        colors: ["#2F2A26"],
        fabric: "Chiffon",
        rating: 4.0,
        ratingCount: "334",
        delivery: "Monday, April 18"
    },
    {
        id: "IWF_19",
        title: "Rich Indigo Occasion Wear Layout Saree",
        brand: "Heritage Silks",
        price: 21000,
        originalPrice: 35000,
        discount: "-40%",
        image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776509413/2fa293aa908123881a3793d70c4a2ce8-removebg-preview_s5nlup.png",
        color: "#0b2b4e",
        colors: ["#0b2b4e"],
        fabric: "Handloom Silk",
        rating: 5.0,
        ratingCount: "650",
        delivery: "Thursday, April 14"
    },
    {
        id: "IWF_20",
        title: "Taupe High-Society Event Saree",
        brand: "Queen's Bespoke",
        price: 30800,
        originalPrice: 35000,
        discount: "-12%",
        image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776509416/318897c3167564591981cbd2472c92d0-removebg-preview_lhco5f.png",
        color: "#d1bfae",
        colors: ["#d1bfae", "#bb9b9f"],
        fabric: "Net",
        rating: 5.0,
        ratingCount: "93",
        delivery: "Friday, April 15"
    }
];

function IndoWesternFrocks() {
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

    const { filteredProducts, activeFilters, toggleFilter, clearFilters } = useProductFilter(products);

    return (
        <div className="gownsaree-wrapper gown-saree-page-container">
            <div className="page-container" style={{ overflowX: 'hidden' }}>
                {/* Header & Tabs */}
                <div className="page-header">
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

                <FilterPanel
                    products={products}
                    activeFilters={activeFilters}
                    toggleFilter={toggleFilter}
                    clearFilters={clearFilters}
                />

                <div className="product-grid">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product) => (
                            <div className="product-card" key={product.id} style={{ position: "relative" }}>
                                <WishlistHeart item={{ id: product.id, title: product.title, image: product.image, brand: product.brand, price: product.price }} />
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    style={{
                                        width: "100%",
                                        height: "280px",
                                        objectFit: "contain",
                                        objectPosition: "top",
                                        padding: "10px",
                                        ...product.imageStyle
                                    }}
                                />
                                <div className="card-content">
                                    <div className="swatches">
                                        <div className="swatch" style={{ backgroundColor: product.color }}></div>
                                    </div>
                                    <h3 className="brand-name">{product.brand}</h3>
                                    <p className="product-title">{product.title}</p>
                                    <div className="rating-block">
                                        <span className="stars">
                                            {'★'.repeat(Math.floor(product.rating))}
                                            {product.rating % 1 !== 0 ? '½' : ''}
                                            {'☆'.repeat(5 - Math.ceil(product.rating))}
                                        </span>
                                        <span className="rating-count">{product.ratingCount}</span>
                                    </div>
                                    <div className="pricing-block">
                                        <span className="discount">{product.discount}</span>
                                        <span className="price"><span>₹</span>{product.price.toLocaleString()}</span>
                                        <span className="original-price">₹{product.originalPrice.toLocaleString()}</span>
                                    </div>
                                    <p className="delivery-info">Get it by <span>{product.delivery}</span><br />FREE Delivery</p>
                                    <button className="buying-options-btn" onClick={() => handleAddToCart({ id: product.id, name: product.title, price: product.price, image: product.image, color: product.color, size: "Free Size" })}>Add to Cart</button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div style={{
                            gridColumn: '1 / -1',
                            textAlign: 'center',
                            padding: '60px 20px',
                            background: 'rgba(255, 255, 255, 0.05)',
                            borderRadius: '16px',
                            border: '1px dashed rgba(0,0,0,0.1)'
                        }}>
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>No items match your criteria</h3>
                            <p style={{ color: '#666', marginBottom: '20px' }}>Try adjusting your filters to see more products.</p>
                            <button
                                onClick={clearFilters}
                                style={{
                                    padding: '10px 24px',
                                    borderRadius: '8px',
                                    background: 'var(--accent-main, #333)',
                                    color: '#fff',
                                    border: 'none',
                                    cursor: 'pointer'
                                }}
                            >
                                Clear All Filters
                            </button>
                        </div>
                    )}
                </div>
            </div>

            <div className={`sidebar-overlay ${isSidebarOpen ? 'active' : ''}`} onClick={closeSidebar}></div>
            <div className={`sidebar-panel ${isSidebarOpen ? 'active' : ''}`}>
                <div className="sidebar-header">
                    <h3 className="sidebar-title">Menu</h3>
                    <button className="close-btn" onClick={closeSidebar}>&times;</button>
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

export default IndoWesternFrocks;
