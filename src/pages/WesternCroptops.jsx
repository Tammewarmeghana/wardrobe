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
        id: "WCT_01",
        title: "Classic White Ribbed Crop Top",
        brand: "Modern Essence",
        price: 1299,
        originalPrice: 2499,
        discount: "-48%",
        image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776512463/eb26ee671b362324b8449edce2f980c6-removebg-preview_ipswkx.png",
        color: "#ffffff",
        colors: ["#ffffff"],
        fabric: "Cotton",
        rating: 4.2,
        ratingCount: "850",
        delivery: "Thursday, April 14"
    },
    {
        id: "WCT_02",
        title: "Black Off-Shoulder Ruched Top",
        brand: "Urban Chic",
        price: 1599,
        originalPrice: 2999,
        discount: "-46%",
        image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776155832/0e09c197083ba8fae8d01aea1483144c-removebg-preview_yxpkbe.png",
        color: "#000000",
        colors: ["#000000"],
        fabric: "Polyester",
        rating: 4.8,
        ratingCount: "1,120",
        delivery: "Friday, April 15"
    },
    {
        id: "WCT_03",
        title: "Sage Green Puff Sleeve Crop Top",
        brand: "Pastel Dreams",
        price: 6899,
        originalPrice: 12499,
        discount: "-45%",
        image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776155832/ae09ea78bf6f964c90898d14ffffc01c-removebg-preview_lmknyk.png",
        color: "#b2ac88",
        colors: ["#b2ac88"],
        fabric: "Linen",
        rating: 4.4,
        ratingCount: "430",
        delivery: "Wednesday, April 13"
    },
    {
        id: "WCT_04",
        title: "Rust Orange Tie-Front Top",
        brand: "Boho Vibes",
        price: 1450,
        originalPrice: 2800,
        discount: "-48%",
        image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776155831/b73f84961566efc41939d7135d8b16fd-removebg-preview_lgnjuc.png",
        color: "#d35400",
        colors: ["#d35400"],
        fabric: "Cotton",
        rating: 4.7,
        ratingCount: "670",
        delivery: "Tomorrow, 11 AM"
    },
    {
        id: "WCT_05",
        title: "Midnight Blue Velvet Crop Top",
        brand: "Luxury Line",
        price: 7200,
        originalPrice: 14500,
        discount: "-50%",
        image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776155833/2f97c15bc32af2cf458399e020542836-removebg-preview_ignokv.png",
        color: "#191970",
        colors: ["#191970"],
        fabric: "Velvet",
        rating: 4.5,
        ratingCount: "320",
        delivery: "Saturday, April 16"
    },
    {
        id: "WCT_06",
        title: "Blush Pink Floral Crop Top",
        brand: "Soft Aesthetic",
        price: 1399,
        originalPrice: 2599,
        discount: "-46%",
        image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776155834/c91d4d0446eb6bbd47d65f1774f860fc-removebg-preview_wm9hxj.png",
        color: "#ffb6c1",
        colors: ["#ffb6c1"],
        fabric: "Georgette",
        rating: 4.9,
        ratingCount: "980",
        delivery: "Monday, April 18"
    },
    {
        id: "WCT_07",
        title: "Lavender Mesh Detailed Top",
        brand: "Trendy Wear",
        price: 1699,
        originalPrice: 3200,
        discount: "-47%",
        image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776155836/2d6075fca914f5ed7fdbd5ea838d8ef2-removebg-preview_ekbzur.png",
        color: "#e6e6fa",
        colors: ["#e6e6fa"],
        fabric: "Mesh",
        rating: 4.3,
        ratingCount: "540",
        delivery: "Thursday, April 14"
    },
    {
        id: "WCT_08",
        title: "Emerald Green Satin Crop Top",
        brand: "Evening Luxe",
        price: 8999,
        originalPrice: 16800,
        discount: "-47%",
        image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776155837/bbb1d088d656d6ce9c496fd9aad95769-removebg-preview_cnc65f.png",
        color: "#50c878",
        colors: ["#50c878"],
        fabric: "Satin",
        rating: 4.8,
        ratingCount: "210",
        delivery: "Friday, April 15"
    },
    {
        id: "WCT_09",
        title: "Mustard Yellow Ribbed Top",
        brand: "Urban Basics",
        price: 1100,
        originalPrice: 1999,
        discount: "-45%",
        image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776155835/f857a5c56c887094c7f1d073dda5046a-removebg-preview_qazuvn.png",
        color: "#ffdb58",
        colors: ["#ffdb58"],
        fabric: "Cotton",
        rating: 4.2,
        ratingCount: "760",
        delivery: "Wednesday, April 13"
    },
    {
        id: "WCT_10",
        title: "Crimson Red Wrap Crop Top",
        brand: "Bold Moves",
        price: 1750,
        originalPrice: 3200,
        discount: "-45%",
        image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776155835/c0f551a3bc66b6b8109c39bfc201a67b-removebg-preview_uqx2f5.png",
        color: "#dc143c",
        colors: ["#dc143c"],
        fabric: "Rayon",
        rating: 4.6,
        ratingCount: "445",
        delivery: "Tomorrow, 11 AM"
    },
    {
        id: "WCT_11",
        title: "Sky Blue Square Neck Top",
        brand: "Daily Fresh",
        price: 1250,
        originalPrice: 2200,
        discount: "-43%",
        image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776155835/a5472a1f9e786e5fd9c60a5a7d1d0957-removebg-preview_lqf4mo.png",
        color: "#87ceeb",
        colors: ["#87ceeb"],
        fabric: "Cotton",
        rating: 4.4,
        ratingCount: "612",
        delivery: "Saturday, April 16"
    },
    {
        id: "WCT_12",
        title: "Chocolate Brown Leather Look Top",
        brand: "Edgy Style",
        price: 9499,
        originalPrice: 18999,
        discount: "-50%",
        image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776155831/78a839e7f5d80bc52f89ae1592fe4086-removebg-preview_pfh16a.png",
        color: "#d2691e",
        colors: ["#d2691e"],
        fabric: "Faux Leather",
        rating: 4.9,
        ratingCount: "128",
        delivery: "Monday, April 18"
    },
    {
        id: "WCT_13",
        title: "Olive Green Sleeveless Crop",
        brand: "Military Mood",
        price: 1199,
        originalPrice: 2199,
        discount: "-45%",
        image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776155832/ae09ea78bf6f964c90898d14ffffc01c-removebg-preview_lmknyk.png",
        color: "#556b2f",
        colors: ["#556b2f"],
        fabric: "Cotton",
        rating: 4.3,
        ratingCount: "334",
        delivery: "Thursday, April 14"
    },
    {
        id: "WCT_14",
        title: "Peacock Blue Halter Neck Top",
        brand: "Vibrant Vibes",
        price: 1550,
        originalPrice: 2900,
        discount: "-47%",
        image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776155833/2f97c15bc32af2cf458399e020542836-removebg-preview_ignokv.png",
        color: "#008080",
        colors: ["#008080"],
        fabric: "Silk",
        rating: 4.7,
        ratingCount: "478",
        delivery: "Friday, April 15"
    },
    {
        id: "WCT_15",
        title: "Sand Beige Turtleneck Crop",
        brand: "Neutral Palette",
        price: 1350,
        originalPrice: 2500,
        discount: "-46%",
        image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776155833/7a48360095eb4071bb462e15b6e3ba4d-removebg-preview_i6wbsv.png",
        color: "#f5f5dc",
        colors: ["#f5f5dc"],
        fabric: "Jersey",
        rating: 4.4,
        ratingCount: "892",
        delivery: "Wednesday, April 13"
    },
    {
        id: "WCT_16",
        title: "Teal Blue Keyhole Crop Top",
        brand: "Elegant Cuts",
        price: 1800,
        originalPrice: 3500,
        discount: "-49%",
        image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776155832/aa10b61a11530d969057f8ba911affa1-removebg-preview_zfdnqu.png",
        color: "#008080",
        colors: ["#008080"],
        fabric: "Chiffon",
        rating: 4.6,
        ratingCount: "340",
        delivery: "Tomorrow, 11 AM"
    },
    {
        id: "WCT_17",
        title: "Nude Pink Sequin Crop Top",
        brand: "Glitz & Glam",
        price: 2100,
        originalPrice: 4200,
        discount: "-50%",
        image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776155832/832e39e5d264ee624652c1f8bb29f2e3-removebg-preview_ddywrn.png",
        color: "#ffc0cb",
        colors: ["#ffc0cb"],
        fabric: "Sequin",
        rating: 4.5,
        ratingCount: "112",
        delivery: "Saturday, April 16"
    },
    {
        id: "WCT_18",
        title: "Slate Grey Ribbed Crew Neck",
        brand: "Minimalist",
        price: 1050,
        originalPrice: 1800,
        discount: "-42%",
        image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776155837/4f632b069a01dbe3ebd61d669b6e9d5d-removebg-preview_pvwtan.png",
        color: "#708090",
        colors: ["#708090"],
        fabric: "Cotton",
        rating: 4.8,
        ratingCount: "560",
        delivery: "Monday, April 18"
    },
    {
        id: "WCT_19",
        title: "Mint Green Eyelet Detail Top",
        brand: "Spring Collection",
        price: 1499,
        originalPrice: 2800,
        discount: "-46%",
        image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776155832/045800bd32dda628fc6f4f2504497b38-removebg-preview_zdf6z8.png",
        color: "#98ff98",
        colors: ["#98ff98"],
        fabric: "Cotton",
        rating: 4.4,
        ratingCount: "245",
        delivery: "Thursday, April 14"
    },
    {
        id: "WCT_20",
        title: "Dark Indigo Denim Crop Top",
        brand: "Street Style",
        price: 1850,
        originalPrice: 3600,
        discount: "-49%",
        image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776155838/ff79e19e54b82606581d313b05b41a36-removebg-preview_wgzzld.png",
        color: "#000080",
        colors: ["#000080"],
        fabric: "Denim",
        rating: 4.7,
        ratingCount: "650",
        delivery: "Friday, April 15"
    }
];

function WesternCroptops() {
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
                            <h1 style={{ margin: 0, fontSize: '1.5rem', fontWeight: '600', color: 'var(--text-main)' }}></h1>
                        </div>

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
                                <WishlistHeart item={{ 
                                    id: product.id, 
                                    title: product.title, 
                                    image: product.image, 
                                    brand: product.brand, 
                                    price: product.price 
                                }} />
                                <img src={product.image} alt={product.title} className="card-image" />
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

                                    <button 
                                        className="buying-options-btn" 
                                        onClick={() => handleAddToCart({ 
                                            id: product.id, 
                                            name: product.title, 
                                            price: product.price, 
                                            image: product.image, 
                                            color: product.color, 
                                            size: "Free Size" 
                                        })}
                                    >
                                        Add to Cart
                                    </button>
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
                    <Link to="/western-croptops">Western Croptops</Link>
                    <Link to="/blazers">Blazers</Link>
                    <Link to="/maxiskirts">Maxi Skirts</Link>
                    <Link to="/formals">Formals</Link>
                    <Link to="/koreanwear">Korean Dresses</Link>
                </nav>
            </div>
        </div>
    );
}

export default WesternCroptops;
