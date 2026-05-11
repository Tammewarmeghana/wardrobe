import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './gownsaree.css';
import './sidebar.css';
import WishlistHeart from '../components/WishlistHeart';
import { useShop } from '../context/ShopContext';
import useProductFilter from '../hooks/useProductFilter';
import FilterPanel from '../components/Filters/FilterPanel';
import ProductCard from '../components/ProductCard';

const products = [
    {
        id: "CT_01",
        title: "Flowy layered peplum crop top with a soft silhouette. Perfect for casual outings and brunch looks.",
        brand: "Brown Layered Peplum Crop Top – Feminine Casual Wear",
        price: 14999,
        originalPrice: 35999,
        discount: "-58%",
        image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776155831/78a839e7f5d80bc52f89ae1592fe4086-removebg-preview_pfh16a.png",
        color: "#e5ccce",
        colors: ["#e5ccce", "#bb9b9f", "#2F2A26"],
        fabric: "Georgette",
        rating: 4,
        ratingCount: "1,245",
        delivery: "Thursday, April 14"
    },
    {
        id: "CT_02",
        title: "Sleek and edgy black corset-style crop top. Enhances the figure for a bold, modern party look.",
        brand: "Midnight Black Corset Crop Top – Edgy Party Style",
        price: 18499,
        originalPrice: 30999,
        discount: "-40%",
        image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776155831/9bdc0d1645c754d924ca60d62a034f78-removebg-preview_s0i3t7.png",
        color: "#a37272",
        colors: ["#a37272", "#5d675b"],
        fabric: "Silk Blend",
        rating: 5,
        ratingCount: "892",
        delivery: "Friday, April 15"
    },
    {
        id: "CT_03",
        title: "Soft pastel blue crop top with delicate ruffles. Adds a touch of charm and elegance to your wardrobe.",
        brand: "Sky Blue Ruffled Crop Top – Charming Daywear",
        price: 24999,
        originalPrice: 31500,
        discount: "-20%",
        image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776155830/6902d131f4a9b6c0e04739eb3b4a24f0-removebg-preview_nttewj.png",
        color: "#2F2A26",
        colors: ["#2F2A26"],
        fabric: "Chiffon",
        rating: 4,
        ratingCount: "340",
        delivery: "Wednesday, April 13"
    },
    {
        id: "CT_04",
        title: "Sophisticated satin tie-front crop top in ivory. A versatile piece that transitions from day to night.",
        brand: "Ivory Satin Tie-Front Crop Top – Elegant Versatility",
        price: 21000,
        originalPrice: 60000,
        discount: "-65%",
        image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776155830/08a3f898124b611e3b2e59779df545b7-removebg-preview_q5kgyk.png",
        color: "#c93b4a",
        colors: ["#c93b4a", "#0b2b4e", "#b08a5d"],
        fabric: "Silk",
        rating: 5,
        ratingCount: "2,109",
        delivery: "Tomorrow, 11 AM"
    },
    {
        id: "CT_05",
        title: "Earthy olive green knit crop top. Comfortable and chic for a laid-back, stylish everyday look.",
        brand: "Olive Green Ribbed Knit Crop Top – Cozy Chic",
        price: 38500,
        originalPrice: 42800,
        discount: "-10%",
        image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776155830/0609b55be5573489116e10f1359c5d01-removebg-preview_e77mge.png",
        color: "#d1bfae",
        colors: ["#d1bfae", "#e8e8e8"],
        fabric: "Net",
        rating: 4,
        ratingCount: "112",
        delivery: "April 20"
    },
    {
        id: "CT_06",
        title: "Radiant mustard yellow off-shoulder crop top. Vibrant and fun, ideal for sunny vacations and outings.",
        brand: "Mustard Yellow Off-Shoulder Crop Top – Vibrant Vacation Wear",
        price: 19500,
        originalPrice: 22940,
        discount: "-15%",
        image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776155830/0034a7818e77864f7ea0e93235697669-removebg-preview_f4p77d.png",
        color: "#bb9b9f",
        colors: ["#bb9b9f"],
        fabric: "Georgette",
        rating: 4,
        ratingCount: "85",
        delivery: "Saturday, April 16"
    },
    {
        id: "CT_07",
        title: "Rich burgundy velvet crop top with subtle shimmer. Luxuriously soft and perfect for festive evenings.",
        brand: "Burgundy Velvet Shimmer Crop Top – Festive Luxury",
        price: 16200,
        originalPrice: 21600,
        discount: "-25%",
        image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776155830/0273c38210134a66395b03f0b2f65a19-removebg-preview_m8ooyg.png",
        color: "#5d675b",
        colors: ["#5d675b", "#a37272"],
        fabric: "Silk Blend",
        rating: 5,
        ratingCount: "430",
        delivery: "Monday, April 18"
    },
    {
        id: "CT_08",
        title: "Clean and minimalist white linen crop top. Breathable and timeless for a fresh, understated style.",
        brand: "White Linen Minimalist Crop Top – Breathable Style",
        price: 12499,
        originalPrice: 24998,
        discount: "-50%",
        image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776155830/7db922b972e39174128f6155e7631317-removebg-preview_pghp6r.png",
        color: "#2F2A26",
        colors: ["#2F2A26", "#e5ccce"],
        fabric: "Chiffon",
        rating: 4,
        ratingCount: "612",
        delivery: "Thursday, April 14"
    },
    {
        id: "CT_09",
        title: "Modern slate grey structured crop top. Architectural design for a high-fashion, professional-to-party look.",
        brand: "Slate Grey Structured Crop Top – High-Fashion Architecture",
        price: 28000,
        originalPrice: 40000,
        discount: "-30%",
        image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776155829/97968bc504629479bdfa8917812bc852-removebg-preview_mquqes.png",
        color: "#0b2b4e",
        colors: ["#0b2b4e"],
        fabric: "Silk",
        rating: 5,
        ratingCount: "190",
        delivery: "Friday, April 15"
    },
    {
        id: "CT_10",
        title: "Soft blush pink lace crop top. Intricate lace detailing for a romantic and feminine aesthetic.",
        brand: "Blush Pink Lace Romantic Crop Top – Feminine Grace",
        price: 36100,
        originalPrice: 38000,
        discount: "-5%",
        image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776155829/66994792671239c09c314a51e605e55e-removebg-preview_un6pno.png",
        color: "#d1bfae",
        colors: ["#d1bfae"],
        fabric: "Net",
        rating: 4,
        ratingCount: "56",
        delivery: "April 20"
    },
    {
        id: "CT_11",
        title: "Deep emerald green wrap-style crop top. Sophisticated design that flatters all silhouettes beautifully.",
        brand: "Emerald Green Wrap Crop Top – Flattering Sophistication",
        price: 18000,
        originalPrice: 20000,
        discount: "-10%",
        image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776155829/49c631e84d471583d86552a4666d92ec-removebg-preview_v5at5g.png",
        color: "#e5ccce",
        colors: ["#e5ccce"],
        fabric: "Georgette",
        rating: 5,
        ratingCount: "140",
        delivery: "Tomorrow, 11 AM"
    },
    {
        id: "CT_12",
        title: "Vibrant coral smocked crop top with puffed sleeves. Playful and trendy for summer adventures.",
        brand: "Coral Smocked Puff-Sleeve Crop Top – Summer Playfulness",
        price: 12500,
        originalPrice: 15625,
        discount: "-20%",
        image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776155829/2180c42289c09c48b70ee1c172346765-removebg-preview_n97onv.png",
        color: "#a37272",
        colors: ["#a37272"],
        fabric: "Silk Blend",
        rating: 4,
        ratingCount: "245",
        delivery: "Saturday, April 16"
    },
    {
        id: "CT_13",
        title: "Classic black and white striped crop top. Versatile and chic, perfect for nautical or urban looks.",
        brand: "Nautical Striped Classic Crop Top – Urban Versatility",
        price: 21000,
        originalPrice: 24700,
        discount: "-15%",
        image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776155828/341f3e7924da97034b07ca6ef0099450-removebg-preview_gawc8s.png",
        color: "#2F2A26",
        colors: ["#2F2A26"],
        fabric: "Chiffon",
        rating: 5,
        ratingCount: "88",
        delivery: "Monday, April 18"
    },
    {
        id: "CT_14",
        title: "Sun-kissed orange halter-neck crop top. Bold and bright, perfect for making a statement at beach parties.",
        brand: "Orange Halter-Neck Statement Crop Top – Bold Beachwear",
        price: 14000,
        originalPrice: 28000,
        discount: "-50%",
        image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776155828/292d3b2361665e7146592237061d3615-removebg-preview_clicj1.png",
        color: "#c93b4a",
        colors: ["#c93b4a", "#0b2b4e"],
        fabric: "Silk",
        rating: 4,
        ratingCount: "421",
        delivery: "Thursday, April 14"
    },
    {
        id: "CT_15",
        title: "Elegant champagne silk camisole crop top. Luxuriously smooth and perfect for layering or wearing alone.",
        brand: "Champagne Silk Camisole Crop Top – Minimalist Luxury",
        price: 45000,
        originalPrice: 47360,
        discount: "-5%",
        image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776155828/996e493397d9a1f2da84a9235e1657c9-removebg-preview_v3c1m2.png",
        color: "#d1bfae",
        colors: ["#d1bfae"],
        fabric: "Net",
        rating: 5,
        ratingCount: "19",
        delivery: "Friday, April 15"
    },
    {
        id: "CT_16",
        title: "Soft lavender eyelet embroidery crop top. Delicate and airy, perfect for a garden party or picnic.",
        brand: "Lavender Eyelet Embroidery Crop Top – Delicate Picnic Style",
        price: 13300,
        originalPrice: 19000,
        discount: "-30%",
        image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776155828/8674d81615d6c8e3a241ba1619889311-removebg-preview_p33kno.png",
        color: "#bb9b9f",
        colors: ["#bb9b9f"],
        fabric: "Georgette",
        rating: 4,
        ratingCount: "112",
        delivery: "Tomorrow, 11 AM"
    },
    {
        id: "CT_17",
        title: "Edgy charcoal grey faux leather crop top. Adds a rebellious touch to your evening ensemble.",
        brand: "Charcoal Grey Faux Leather Crop Top – Rebel Edge",
        price: 15400,
        originalPrice: 28000,
        discount: "-45%",
        image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776155827/29c426372d8a520e5138139599dae13c-removebg-preview_n9819s.png",
        color: "#5d675b",
        colors: ["#5d675b"],
        fabric: "Silk Blend",
        rating: 5,
        ratingCount: "478",
        delivery: "Saturday, April 16"
    },
    {
        id: "CT_18",
        title: "Timeless black mock-neck crop top. A sleek and essential piece for layering or modern minimalist styling.",
        brand: "Black Mock-Neck Essential Crop Top – Sleek Layering",
        price: 18000,
        originalPrice: 20000,
        discount: "-10%",
        image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776155827/2efdacd20796bd93f386a12f25013b0c-removebg-preview_wovxov.png",
        color: "#2F2A26",
        colors: ["#2F2A26"],
        fabric: "Chiffon",
        rating: 4,
        ratingCount: "334",
        delivery: "Monday, April 18"
    },
    {
        id: "CT_19",
        title: "Bohemian-inspired floral print crop top in sunset hues. Relaxed and artistic for a free-spirited look.",
        brand: "Floral Print Bohemian Crop Top – Artistic Spirit",
        price: 21000,
        originalPrice: 35000,
        discount: "-40%",
        image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776155827/b02248858bf63c665502951100354cca-removebg-preview_vux66k.png",
        color: "#0b2b4e",
        colors: ["#0b2b4e"],
        fabric: "Silk",
        rating: 5,
        ratingCount: "650",
        delivery: "Thursday, April 14"
    },
    {
        id: "CT_20",
        title: "Chic cream-colored tie-front crop top with delicate embroidery. Feminine and sophisticated for special occasions.",
        brand: "Cream Tie-Front Embroidered Crop Top – Sophisticated Grace",
        price: 30800,
        originalPrice: 35000,
        discount: "-12%",
        image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1776155826/3daffafb40cdf1b35ee6620aefada65b-removebg-preview_q6g9o1.png",
        color: "#d1bfae",
        colors: ["#d1bfae", "#bb9b9f"],
        fabric: "Net",
        rating: 5,
        ratingCount: "93",
        delivery: "Friday, April 15"
    }
];

function Croptops() {
    const { addToCart } = useShop();
    const [addedToast, setAddedToast] = useState(null);

    const handleAddToCart = (product) => { 
        addToCart({ 
            id: product.id, 
            name: product.brand, 
            price: product.price, 
            image: product.image, 
            color: product.color, 
            size: "Free Size",
            quantity: product.quantity || 1
        }); 
        setAddedToast(product.brand);
        setTimeout(() => setAddedToast(null), 3000);
    };

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const navigate = useNavigate();

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const { filteredProducts, activeFilters, toggleFilter, clearFilters, sortBy, setSortBy } = useProductFilter(products);

    return (
        <div className="gownsaree-wrapper gown-saree-page-container">
            {addedToast && (
                <div className="cart-toast">
                    Added <strong>{addedToast}</strong> to cart!
                </div>
            )}
            <div className="page-container" style={{ overflowX: 'hidden' }}>
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
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map(product => (
                            <ProductCard 
                                key={product.id} 
                                product={product} 
                                onAddToCart={handleAddToCart} 
                            />
                        ))
                    ) : (
                        <div className="no-results" style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '100px 0' }}>
                            <p>No products match your selected filters.</p>
                            <button className="clear-filters-btn" onClick={clearFilters}>Clear All Filters</button>
                        </div>
                    )}
                </div>
            </div>

            <div className={`sidebar-overlay ${isSidebarOpen ? 'active' : ''}`} onClick={toggleSidebar}></div>
            <div className={`sidebar-panel ${isSidebarOpen ? 'active' : ''}`}>
                <div className="sidebar-header">
                    <h3 className="sidebar-title">Menu</h3>
                    <button className="close-btn" onClick={toggleSidebar}>&times;</button>
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

export default Croptops;
