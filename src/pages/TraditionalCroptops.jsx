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
        id: "TCT_01",
        title: "Banarasi Silk Brocade Crop Top",
        brand: "Heritage Weaves",
        price: 2499,
        originalPrice: 4999,
        discount: "-50%",
        image: "https://res.cloudinary.com/dodmxncwc/image/upload/v1777872086/3bd5674bd3f41a89e0ff56c93f584eb0-removebg-preview_zn08n9.png",
        imageStyle: {
            objectPosition: "top"
        },
        color: "#ffd700",
        colors: ["#ffd700"],
        fabric: "Silk",
        rating: 4.5,
        ratingCount: "1,245",
        delivery: "Thursday, April 14"
    },
    {
        id: "TCT_02",
        title: "Embroidered Zardosi Velvet Top",
        brand: "Royal Atelier",
        price: 8599,
        originalPrice: 16500,
        discount: "-45%",
        image: "https://res.cloudinary.com/dodmxncwc/image/upload/v1777872208/4fda9e8541e9d49f4174ac477636d8f2-removebg-preview_c3ff8j.png",
        color: "#800000",
        colors: ["#800000"],
        fabric: "Velvet",
        rating: 5,
        ratingCount: "892",
        delivery: "Friday, April 15"
    },
    {
        id: "TCT_03",
        title: "Phulkari Work Ethnic Crop Top",
        brand: "Punjab Roots",
        price: 1899,
        originalPrice: 3200,
        discount: "-41%",
        image: "https://res.cloudinary.com/dodmxncwc/image/upload/v1777872208/a5d8e5ee07d3e54aec768d534e9fafc9-removebg-preview_d7nbbq.png",
        color: "#ff4500",
        colors: ["#ff4500"],
        fabric: "Cotton",
        rating: 4.7
        ,
        ratingCount: "340",
        delivery: "Wednesday, April 13"
    },
    {
        id: "TCT_04",
        title: "Chanderi Silk Hand-Painted Top",
        brand: "Artisan Hub",
        price: 2100,
        originalPrice: 4200,
        discount: "-50%",
        image: "https://res.cloudinary.com/dodmxncwc/image/upload/v1777872208/c82c856a275517017f094e43e6120606-removebg-preview_awyfzb.png",
        color: "#f0e68c",
        colors: ["#f0e68c"],
        fabric: "Silk",
        rating: 4.3,
        ratingCount: "2,109",
        delivery: "Tomorrow, 11 AM"
    },
    {
        id: "TCT_05",
        title: "Mirror Work Kutchi Crop Top",
        brand: "Desert Blooms",
        price: 1550,
        originalPrice: 2800,
        discount: "-45%",
        image: "https://res.cloudinary.com/dodmxncwc/image/upload/v1777872208/7465e041ea638cd938cf108fdf59c9a0-removebg-preview_k99u28.png",
        color: "#ff69b4",
        colors: ["#ff69b4"],
        fabric: "Cotton",
        rating: 4,
        ratingCount: "112",
        delivery: "Saturday, April 16"
    },
    {
        id: "TCT_06",
        title: "Lucknowi Chikankari Georgette Top",
        brand: "Nawab Style",
        price: 1950,
        originalPrice: 3500,
        discount: "-44%",
        image: "https://res.cloudinary.com/dodmxncwc/image/upload/v1777872208/af27f073f3c4f8725744f243280f1148-removebg-preview_sobnud.png",
        color: "#e0ffff",
        colors: ["#e0ffff"],
        fabric: "Georgette",
        rating: 4.3,
        ratingCount: "85",
        delivery: "Monday, April 18"
    },
    {
        id: "TCT_07",
        title: "Kanjivaram Silk Patterned Top",
        brand: "Southern Grace",
        price: 9800,
        originalPrice: 18200,
        discount: "-46%",
        image: "https://res.cloudinary.com/dodmxncwc/image/upload/v1777872208/50b23b564d9370c9de5a60ed745883a3-removebg-preview_rkwohu.png",
        color: "#ff00ff",
        colors: ["#ff00ff"],
        fabric: "Silk",
        rating: 4.8,
        ratingCount: "430",
        delivery: "Thursday, April 14"
    },
    {
        id: "TCT_08",
        title: "Ajrakh Print Cotton Crop Top",
        brand: "Indie Crafts",
        price: 1250,
        originalPrice: 2400,
        discount: "-48%",
        image: "https://res.cloudinary.com/dodmxncwc/image/upload/v1777872209/1ee8fda76416b7f0f83c846359dfed4e-removebg-preview_nfeslb.png",
        color: "#8b4513",
        colors: ["#8b4513"],
        fabric: "Cotton",
        rating: 4.1,
        ratingCount: "612",
        delivery: "Friday, April 15"
    },
    {
        id: "TCT_09",
        title: "Bandhani Tie-Dye Silk Top",
        brand: "Gujrat Glimpse",
        price: 1750,
        originalPrice: 3200,
        discount: "-45%",
        image: "https://res.cloudinary.com/dodmxncwc/image/upload/v1777872211/acbc1b6dc53a4cf13f09fb8476030e55-removebg-preview_hndx7p.png",
        color: "#ff1493",
        colors: ["#ff1493"],
        fabric: "Silk",
        rating: 4.6,
        ratingCount: "190",
        delivery: "Wednesday, April 13"
    },
    {
        id: "TCT_10",
        title: "Ikat Patterned Handloom Top",
        brand: "Weave Story",
        price: 1400,
        originalPrice: 2600,
        discount: "-46%",
        image: "https://res.cloudinary.com/dodmxncwc/image/upload/v1777872212/a995837b5e8c47d511f81e8bce199794-removebg-preview_rkd7i4.png",
        color: "#4682b4",
        colors: ["#4682b4"],
        fabric: "Cotton",
        rating: 4.3,
        ratingCount: "56",
        delivery: "Tomorrow, 11 AM"
    },
    {
        id: "TCT_11",
        title: "Golden Gotta Patti Chiffon Top",
        brand: "Ethnic Shine",
        price: 2200,
        originalPrice: 4000,
        discount: "-45%",
        image: "https://res.cloudinary.com/dodmxncwc/image/upload/v1777872213/b29e1a16757dfb6807a2291d373ecde4-removebg-preview_lobgi2.png  ",
        color: "#daa520",
        colors: ["#daa520"],
        fabric: "Chiffon",
        rating: 4.7,
        ratingCount: "140",
        delivery: "Saturday, April 16"
    },
    {
        id: "TCT_12",
        title: "Pochampally Silk Ethnic Top",
        brand: "Loom Art",
        price: 12600,
        originalPrice: 24800,
        discount: "-49%",
        image: "https://res.cloudinary.com/dodmxncwc/image/upload/v1777872209/2385b7d7aaadc4144aa75cb8460d1b8f-removebg-preview_d4hu0p.png",
        color: "#2e8b57",
        colors: ["#2e8b57"],
        fabric: "Silk",
        rating: 4.5,
        ratingCount: "245",
        delivery: "Monday, April 18"
    },
    {
        id: "TCT_13",
        title: "Raw Silk Plain Festive Top",
        brand: "Pure Threads",
        price: 1900,
        originalPrice: 3500,
        discount: "-46%",
        image: "https://res.cloudinary.com/dodmxncwc/image/upload/v1777872211/e62da7f63d623784e00201e8448d7968-removebg-preview_g0ppul.png",
        color: "#cd5c5c",
        colors: ["#cd5c5c"],
        fabric: "Silk",
        rating: 4.4,
        ratingCount: "88",
        delivery: "Thursday, April 14"
    },
    {
        id: "TCT_14",
        title: "Pattu Silk Traditional Top",
        brand: "Heritage Silks",
        price: 3200,
        originalPrice: 5800,
        discount: "-45%",
        image: "https://res.cloudinary.com/dodmxncwc/image/upload/v1777872501/078259c456f8d5b0027d774d5aa7d954-removebg-preview_bqhsin.png",
        color: "#9400d3",
        colors: ["#9400d3"],
        fabric: "Silk",
        rating: 4.9,
        ratingCount: "421",
        delivery: "Friday, April 15"
    },
    {
        id: "TCT_15",
        title: "Sequinned Net Party Top",
        brand: "Glamour India",
        price: 1850,
        originalPrice: 3400,
        discount: "-46%",
        image: "https://res.cloudinary.com/dodmxncwc/image/upload/v1777872212/d89b82b615e60be9ec9ba3ca7c968990-removebg-preview_kboyem.png",
        color: "#c0c0c0",
        colors: ["#c0c0c0"],
        fabric: "Net",
        rating: 4.2,
        ratingCount: "19",
        delivery: "Wednesday, April 13"
    },
    {
        id: "TCT_16",
        title: "Floral Printed Organza Top",
        brand: "Bloom Boutique",
        price: 1650,
        originalPrice: 2999,
        discount: "-45%",
        image: "https://res.cloudinary.com/dodmxncwc/image/upload/v1777872500/b5cd7c39d56d7bb748f48b9f2f70f59a-removebg-preview_vmz4i7.png",
        color: "#ffc0cb",
        colors: ["#ffc0cb"],
        fabric: "Organza",
        rating: 4.5,
        ratingCount: "112",
        delivery: "Tomorrow, 11 AM"
    },
    {
        id: "TCT_17",
        title: "Hand-Embroidered Cotton Top",
        brand: "Desi Roots",
        price: 1100,
        originalPrice: 1999,
        discount: "-45%",
        image: "https://res.cloudinary.com/dodmxncwc/image/upload/v1777872211/3d5e0e84c1c6e81f2dfeeff97529d353-removebg-preview_gv4olq.png",
        color: "#008080",
        colors: ["#008080"],
        fabric: "Cotton",
        rating: 4.4,
        ratingCount: "478",
        delivery: "Saturday, April 16"
    },
    {
        id: "TCT_18",
        title: "Mughal Art Print Satin Top",
        brand: "Royal Heritage",
        price: 2300,
        originalPrice: 4200,
        discount: "-45%",
        image: "https://res.cloudinary.com/dodmxncwc/image/upload/v1777872206/24a9c8e8aa3b54b7c4e078d4ae0b5a77-removebg-preview_h40wxa.png",
        color: "#4b0082",
        colors: ["#4b0082"],
        fabric: "Satin",
        rating: 4.6,
        ratingCount: "334",
        delivery: "Monday, April 18"
    },
    {
        id: "TCT_19",
        title: "Tussar Silk Textured Top",
        brand: "Silk Road",
        price: 2100,
        originalPrice: 3800,
        discount: "-45%",
        image: "https://res.cloudinary.com/dodmxncwc/image/upload/v1777872210/78bfc1d078c947d45ba1b92fd355ad03-removebg-preview_cnlkyo.png",
        color: "#d2b48c",
        colors: ["#d2b48c"],
        fabric: "Silk",
        rating: 4.5,
        ratingCount: "650",
        delivery: "Thursday, April 14"
    },
    {
        id: "TCT_20",
        title: "Gota Work Festive Crop Top",
        brand: "Jaipur Jewels",
        price: 1999,
        originalPrice: 3500,
        discount: "-43%",
        image: "https://res.cloudinary.com/dodmxncwc/image/upload/v1777872213/6a36d8a2df6bb58394ff804899ac20cf-removebg-preview_fb500i.png",
        color: "#dc143c",
        colors: ["#dc143c"],
        fabric: "Cotton",
        rating: 4.7,
        ratingCount: "93",
        delivery: "Friday, April 15"
    }
];

function TraditionalCroptops() {
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
                                <WishlistHeart item={{ id: product.id, title: product.title, image: product.image, brand: product.brand, price: product.price }} />
                                {/* <img src={product.image} alt={product.title} className="card-image" /> */}
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    style={{
                                        width: "100%",
                                        height: "280px",
                                        objectFit: "contain",   // default fix
                                        objectPosition: "top",  // prevents head cut
                                        padding: "10px",
                                        ...product.imageStyle   // overrides per image
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
                    <Link to="/sarees">Sarees</Link>
                    <Link to="/lehengas">Lehengas</Link>
                    <Link to="/traditional-croptops">Traditional Croptops</Link>
                    <Link to="/kurthisets">Kurthi Sets</Link>
                    <Link to="/anarkalis">Anarkalis</Link>
                    <Link to="/gagracholi">Gagra Choli</Link>
                    <Link to="/salwarkamis">Salwar Kamiz</Link>
                    <Link to="/indiangowns">Indian Gowns</Link>
                </nav>
            </div>
        </div>
    );
}

export default TraditionalCroptops;
