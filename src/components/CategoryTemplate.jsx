import React, { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../pages/gownsaree.css';
import '../pages/sidebar.css';
import { useShop } from '../context/ShopContext';
import { products } from '../data/products';
import { useProductFilter } from '../hooks/useProductFilter';
import FilterPanel from './Filters/FilterPanel';
import ProductCard from './ProductCard';
import { sidebarConfig } from '../data/sidebarConfig';

import CartIcon from './Navbar/CartIcon';
import WishlistIcon from './Navbar/WishlistIcon';

const CategoryTemplate = ({ category, sidebarType }) => {
    const { addToCart } = useShop();
    const [addedToast, setAddedToast] = useState(null);

    const handleAddToCart = (product) => { 
        addToCart({
            id: `${product.category}_${product.id}`, // Unique ID across categories
            name: product.title,
            price: product.price,
            image: product.image,
            color: product.colors?.[0] || 'Default',
            size: "Free Size"
        }); 
        setAddedToast(product.title);
        setTimeout(() => setAddedToast(null), 3000);
    };

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const navigate = useNavigate();

    const categoryProducts = useMemo(() => 
        products.filter(p => p.category === category), 
    [category]);

    const { filteredProducts, activeFilters, toggleFilter, clearFilters, sortBy, setSortBy } = useProductFilter(categoryProducts);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    const closeSidebar = () => setIsSidebarOpen(false);

    const navLinks = sidebarConfig[sidebarType] || [];

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
                    products={categoryProducts} 
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
                        <div className="no-results">
                            <p>No products match your selected filters.</p>
                            <button className="clear-filters-btn" onClick={clearFilters}>Clear All Filters</button>
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
                    {navLinks.map(link => (
                        <Link key={link.path} to={link.path} onClick={closeSidebar}>{link.label}</Link>
                    ))}
                </nav>
            </div>
        </div>
    );
};

export default CategoryTemplate;
