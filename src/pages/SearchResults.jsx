import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import { mockProducts, mockVisualResults } from '../data/mockProducts';
import { allProducts } from '../data/allProducts';
import './gownsaree.css';

function SearchResults() {
  const { searchQuery } = useShop();
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const isVisualSearch = queryParams.get('visual') === 'true';
  const fileName = queryParams.get('file');

  const [results, setResults] = useState([]);

  useEffect(() => {
    if (isVisualSearch) {
      if (fileName) {
        // Generate pseudo-random subset of products based on filename to mock ML visual search predictability
        let seed = 0;
        for (let i = 0; i < fileName.length; i++) {
          seed += fileName.charCodeAt(i);
        }
        const startIndex = seed % mockProducts.length;
        const jump = (seed % 3) + 1; // jump by 1, 2 or 3 to mix up the order more
        
        const subset = [];
        for (let i = 0; i < 5; i++) {
          subset.push(mockProducts[(startIndex + (i * jump)) % mockProducts.length]);
        }
        setResults(subset);
      } else {
        setResults(mockVisualResults);
      }
    } else {
      const q = searchQuery.toLowerCase().trim();
      if (!q) {
        setResults(allProducts.slice(0, 20)); // Show top general items if empty query rather than all 460
        return;
      }
      const filtered = allProducts.filter(p => 
        p.title.toLowerCase().includes(q) || 
        p.brand.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      );
      setResults(filtered);
    }
  }, [searchQuery, isVisualSearch]);

  const headerTitle = isVisualSearch ? "Visually Similar Results" : `Search Results for "${searchQuery}"`;

  return (
    <div className="gownsaree-wrapper gown-saree-page-container">
        <div className="page-container" style={{overflowX: 'hidden'}}>
            <div className="page-header" style={{ paddingBottom: '30px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <button onClick={() => navigate(-1)} title="Go Back" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0', display: 'flex', alignItems: 'center', color: 'var(--text-main)' }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="19" y1="12" x2="5" y2="12"></line>
                            <polyline points="12 19 5 12 12 5"></polyline>
                        </svg>
                    </button>
                    <h2 style={{fontSize: '1.8rem', fontWeight: '400', fontFamily: 'var(--font-serif)'}}>{headerTitle}</h2>
                </div>
            </div>

            {results.length === 0 ? (
              <div style={{ padding: '40px', textAlign: 'center', fontSize: '1.2rem', color: '#666' }}>
                No styles found matching your search. Try "saree", "lehenga", or "kurti".
              </div>
            ) : (
                <div className="product-grid">
                    {results.map(product => (
                        <div key={product.id} className="product-card">
                            <img src={product.image} alt={product.title} className="card-image" style={{backgroundColor: '#fafafa', objectFit: 'contain'}}/>
                            <div className="card-content">
                                <h3 className="brand-name">{product.brand}</h3>
                                <p className="product-title">{product.title}</p>
                                
                                <div className="rating-block">
                                    <span className="stars">{'★'.repeat(Math.round(product.rating))}{'☆'.repeat(5-Math.round(product.rating))}</span>
                                    <span className="rating-count">{product.reviews}</span>
                                </div>
                                
                                <div className="pricing-block">
                                    <span className="discount">-{product.discount}</span>
                                    <span className="price"><span>₹</span>{product.price.toLocaleString('en-IN')}</span>
                                    <span className="original-price">₹{product.originalPrice.toLocaleString('en-IN')}</span>
                                </div>
                                <button className="buying-options-btn">View Details</button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    </div>
  );
}

export default SearchResults;
