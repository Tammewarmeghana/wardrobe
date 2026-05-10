import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './gownsaree.css';
import './sidebar.css';
import WishlistHeart from '../components/WishlistHeart';
import { useShop } from '../context/ShopContext';
import useProductFilter from '../hooks/useProductFilter';
import FilterPanel from '../components/Filters/FilterPanel';

const products = [
    {
        id: "BL_01",
        title: "Premium Pre-Draped Saree Gown in Soft Georgette with Embellished Belt",
        brand: "Maison d'Élégance",
        price: 14999,
        originalPrice: 35999,
        discount: "-58%",
        image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776337772/bdebd16d5e636cfa0787b443844985bb-removebg-preview_vw2ujj.png",
        color: "#e5ccce",
        colors: ["#e5ccce", "#bb9b9f", "#2F2A26"],
        fabric: "Georgette",
        rating: 4,
        ratingCount: "1,245",
        delivery: "Thursday, April 14"
    },
    {
        id: "BL_02",
        title: "Modern Indo-Western Fusion Saree with Attached Pallu",
        brand: "Queen's Wardrobe",
        price: 18499,
        originalPrice: 30999,
        discount: "-40%",
        image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776337772/b162d982f2a6d714e6c43604bd722a86-removebg-preview_qewsrz.png",
        color: "#a37272",
        colors: ["#a37272", "#5d675b"],
        fabric: "Silk Blend",
        rating: 5,
        ratingCount: "892",
        delivery: "Friday, April 15"
    },
    {
        id: "BL_03",
        title: "Cocktail Saree Gown with Cape Sleeves",
        brand: "Western Elegance",
        price: 24999,
        originalPrice: 31500,
        discount: "-20%",
        image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776337772/c5972a2bf46290ad07f7bd9541ff5531-removebg-preview_myufy8.png",
        color: "#2F2A26",
        colors: ["#2F2A26"],
        fabric: "Chiffon",
        rating: 4,
        ratingCount: "340",
        delivery: "Wednesday, April 13"
    },
    {
        id: "BL_04",
        title: "Heritage Silk Trim Saree Gown for Wedding Receptions",
        brand: "Maison d'Élégance",
        price: 21000,
        originalPrice: 60000,
        discount: "-65%",
        image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776337771/0174efd56e5280d145f4fda772e5c6a5-removebg-preview_z6krpd.png",
        color: "#c93b4a",
        colors: ["#c93b4a", "#0b2b4e", "#b08a5d"],
        fabric: "Silk",
        rating: 5,
        ratingCount: "2,109",
        delivery: "Tomorrow, 11 AM"
    },
    {
        id: "BL_05",
        title: "Custom-Fit Sequined Saree Dress",
        brand: "Queen's Bespoke",
        price: 38500,
        originalPrice: 42800,
        discount: "-10%",
        image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776337771/365b14d8ed35d08f7daacfaa12d07198-removebg-preview_p3id9s.png",
        color: "#d1bfae",
        colors: ["#d1bfae", "#e8e8e8"],
        fabric: "Net",
        rating: 4,
        ratingCount: "112",
        delivery: "April 20"
    },
    {
        id: "BL_06",
        title: "Embroidered Pastel Saree Gown with Dupatta",
        brand: "Maison d'Élégance",
        price: 19500,
        originalPrice: 22940,
        discount: "-15%",
        image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776337771/ad794edddb7154fe7f78b7f53e6647e9-removebg-preview_vbzh2s.png",
        color: "#bb9b9f",
        colors: ["#bb9b9f"],
        fabric: "Georgette",
        rating: 4,
        ratingCount: "85",
        delivery: "Saturday, April 16"
    },
    {
        id: "BL_07",
        title: "Olive Green Sequin Trim Saree",
        brand: "Queen's Wardrobe",
        price: 16200,
        originalPrice: 21600,
        discount: "-25%",
        image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776337771/a6f32e09496a57273cf65996e5bbafb1-removebg-preview_phddrz.png",
        color: "#5d675b",
        colors: ["#5d675b", "#a37272"],
        fabric: "Silk Blend",
        rating: 5,
        ratingCount: "430",
        delivery: "Monday, April 18"
    },
    {
        id: "BL_08",
        title: "Midnight Black Chiffon Saree Gown",
        brand: "Western Elegance",
        price: 12499,
        originalPrice: 24998,
        discount: "-50%",
        image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776337770/35c84f9af7e6a2f8a8ad528a32e34ad9-removebg-preview_gnq2tv.png",
        color: "#2F2A26",
        colors: ["#2F2A26", "#e5ccce"],
        fabric: "Chiffon",
        rating: 4,
        ratingCount: "612",
        delivery: "Thursday, April 14"
    },
    {
        id: "BL_09",
        title: "Royal Navy Blue Designer Saree with Floral Appliques",
        brand: "Maison d'Élégance",
        price: 28000,
        originalPrice: 40000,
        discount: "-30%",
        image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776337770/10ddca224fac9a9be5a49c55dd476c8d-removebg-preview_zzew3g.png",
        color: "#0b2b4e",
        colors: ["#0b2b4e"],
        fabric: "Silk",
        rating: 5,
        ratingCount: "190",
        delivery: "Friday, April 15"
    },
    {
        id: "BL_10",
        title: "Nude Beige Premium Drape",
        brand: "Queen's Bespoke",
        price: 36100,
        originalPrice: 38000,
        discount: "-5%",
        image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776337769/8dbce4ec24fd66a5c465543390251f1d-removebg-preview_xhxke8.png",
        color: "#d1bfae",
        colors: ["#d1bfae"],
        fabric: "Net",
        rating: 4,
        ratingCount: "56",
        delivery: "April 20"
    },
    {
        id: "BL_11",
        title: "Draped Georgette Saree Gown in Rose Pink",
        brand: "Maison d'Élégance",
        price: 18000,
        originalPrice: 20000,
        discount: "-10%",
        image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776337770/93ac7673ca951a8a86394d702d9bcae9-removebg-preview_ammxho.png",
        color: "#e5ccce",
        colors: ["#e5ccce"],
        fabric: "Georgette",
        rating: 5,
        ratingCount: "140",
        delivery: "Tomorrow, 11 AM"
    },
    {
        id: "BL_12",
        title: "Pleated Indo-Western Saree with Matching Clutch",
        brand: "Queen's Wardrobe",
        price: 12500,
        originalPrice: 15625,
        discount: "-20%",
        image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776337769/202976425c40200edcc7570ac87d628b-removebg-preview_aiwukd.png",
        color: "#a37272",
        colors: ["#a37272"],
        fabric: "Silk Blend",
        rating: 4,
        ratingCount: "245",
        delivery: "Saturday, April 16"
    },
    {
        id: "BL_13",
        title: "Minimalist Evening Gown Saree",
        brand: "Western Elegance",
        price: 21000,
        originalPrice: 24700,
        discount: "-15%",
        image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776337769/58991af7b854b9eb3c4d306d8a9fb282-removebg-preview_b6jabe.png",
        color: "#2F2A26",
        colors: ["#2F2A26"],
        fabric: "Chiffon",
        rating: 5,
        ratingCount: "88",
        delivery: "Monday, April 18"
    },
    {
        id: "BL_14",
        title: "Handloom Silk Saree Gown for Receptions",
        brand: "Heritage Silks",
        price: 14000,
        originalPrice: 28000,
        discount: "-50%",
        image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776337768/8bb143717ed013d8c75d95eb13562d8a-removebg-preview_wokx39.png",
        color: "#c93b4a",
        colors: ["#c93b4a", "#0b2b4e"],
        fabric: "Silk",
        rating: 4,
        ratingCount: "421",
        delivery: "Thursday, April 14"
    },
    {
        id: "BL_15",
        title: "Signature Embellished Custom Saree",
        brand: "Queen's Bespoke",
        price: 45000,
        originalPrice: 47360,
        discount: "-5%",
        image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776337768/7f1239a2dabb5bfc4594dd4b389b6a45-removebg-preview_t9rycz.png",
        color: "#d1bfae",
        colors: ["#d1bfae"],
        fabric: "Net",
        rating: 5,
        ratingCount: "19",
        delivery: "Friday, April 15"
    },
    {
        id: "BL_16",
        title: "Peach Pastel Georgette Gown Saree",
        brand: "Maison d'Élégance",
        price: 13300,
        originalPrice: 19000,
        discount: "-30%",
        image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776337768/696ca602f0ec60775d03438f01d63709-removebg-preview_fiebq5.png",
        color: "#bb9b9f",
        colors: ["#bb9b9f"],
        fabric: "Georgette",
        rating: 4,
        ratingCount: "112",
        delivery: "Tomorrow, 11 AM"
    },
    {
        id: "BL_17",
        title: "Festive Green Pre-Stitched Gown",
        brand: "Queen's Wardrobe",
        price: 15400,
        originalPrice: 28000,
        discount: "-45%",
        image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776337768/550c00737738cc26e06327058a014351-removebg-preview_drkc30.png",
        color: "#5d675b",
        colors: ["#5d675b"],
        fabric: "Silk Blend",
        rating: 5,
        ratingCount: "478",
        delivery: "Saturday, April 16"
    },
    {
        id: "BL_18",
        title: "Classic Black Contemporary Wrap Saree",
        brand: "Western Elegance",
        price: 18000,
        originalPrice: 20000,
        discount: "-10%",
        image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776337768/5c1415414431991852aaa6cd84baddc4-removebg-preview_o49siv.png",
        color: "#2F2A26",
        colors: ["#2F2A26"],
        fabric: "Chiffon",
        rating: 4,
        ratingCount: "334",
        delivery: "Monday, April 18"
    },
    {
        id: "BL_19",
        title: "Rich Indigo Occasion Wear Layout Saree",
        brand: "Heritage Silks",
        price: 21000,
        originalPrice: 35000,
        discount: "-40%",
        image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776337767/7a0918b5d451cac922eaafd050e2e6d2-removebg-preview_mr3l1v.png",
        color: "#0b2b4e",
        colors: ["#0b2b4e"],
        fabric: "Silk",
        rating: 5,
        ratingCount: "650",
        delivery: "Thursday, April 14"
    },
    {
        id: "BL_20",
        title: "Taupe High-Society Event Saree",
        brand: "Queen's Bespoke",
        price: 30800,
        originalPrice: 35000,
        discount: "-12%",
        image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776337767/1d40d4c876a697a59f1b973c27ba1b72-removebg-preview_pksrdz.png",
        color: "#d1bfae",
        colors: ["#d1bfae", "#bb9b9f"],
        fabric: "Net",
        rating: 5,
        ratingCount: "93",
        delivery: "Friday, April 15"
    }
];

function BridalLehenga() {
    const { addToCart } = useShop();
    const handleAddToCart = (item) => { 
        addToCart({ 
            id: item.id, 
            name: item.title, 
            price: item.price, 
            image: item.image, 
            color: item.color, 
            size: "Free Size" 
        }); 
    };

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const navigate = useNavigate();

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    const { filteredProducts, activeFilters, toggleFilter, clearFilters, sortBy, setSortBy } = useProductFilter(products);

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
                </div>

                <FilterPanel
                    products={products}
                    activeFilters={activeFilters}
                    toggleFilter={toggleFilter}
                    clearFilters={clearFilters}
                    sortBy={sortBy}
                    setSortBy={setSortBy}
                />

                <div className="product-grid">
                    {filteredProducts.map((product) => (
                        <div key={product.id} className="product-card" style={{ position: "relative" }}>
                            <WishlistHeart item={{ id: product.id, title: product.title, image: product.image, brand: product.brand, price: product.price }} />
                            <img src={product.image} alt={product.title} className="card-image" style={{ backgroundColor: product.id === "BL_01" || product.id === "BL_04" || product.id === "BL_06" || product.id === "BL_09" || product.id === "BL_11" || product.id === "BL_14" || product.id === "BL_16" || product.id === "BL_19" ? '#fceceb' : (product.id === "BL_05" || product.id === "BL_10" || product.id === "BL_15" || product.id === "BL_20" ? '#e5e0dc' : 'transparent') }} />
                            <div className="card-content">
                                <div className="swatches">
                                    {product.colors.map(color => (
                                        <div key={color} className="swatch" style={{ backgroundColor: color }}></div>
                                    ))}
                                </div>
                                <h3 className="brand-name">{product.brand}</h3>
                                <p className="product-title">{product.title}</p>
                                <div className="rating-block">
                                    <span className="stars">{'★'.repeat(product.rating)}{'☆'.repeat(5 - product.rating)}</span>
                                    <span className="rating-count">{product.ratingCount}</span>
                                </div>
                                <div className="pricing-block">
                                    <span className="discount">{product.discount}</span>
                                    <span className="price"><span>₹</span>{product.price.toLocaleString()}</span>
                                    <span className="original-price">₹{product.originalPrice.toLocaleString()}</span>
                                </div>
                                <p className="delivery-info">Get it by <span>{product.delivery}</span><br />FREE Delivery</p>
                                <button className="buying-options-btn" onClick={() => handleAddToCart(product)}>Add to Cart</button>
                            </div>
                        </div>
                    ))}
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

export default BridalLehenga;
