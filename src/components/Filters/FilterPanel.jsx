import React, { useState } from 'react';
import './filters.css';

const FilterPanel = ({ products, activeFilters, toggleFilter, clearFilters }) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const brands = [...new Set(products.map(p => p.brand))];
  const colors = [...new Set(products.flatMap(p => p.colors))];
  const fabrics = [...new Set(products.map(p => p.fabric))];

  const priceRanges = [
    { label: 'Under ₹5,000', min: 0, max: 5000 },
    { label: '₹5,000 - ₹15,000', min: 5000, max: 15000 },
    { label: '₹15,000 - ₹30,000', min: 15000, max: 30000 },
    { label: 'Above ₹30,000', min: 30000, max: 1000000 },
  ];

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <div className="filter-system">
      <div className="filter-row">
        {/* Price Filter */}
        <div className="filter-group">
          <div className={`filter-pill ${activeFilters.price ? 'active' : ''}`} onClick={() => toggleDropdown('price')}>
            Price <ChevronDown />
          </div>
          {openDropdown === 'price' && (
            <div className="filter-dropdown">
              {priceRanges.map(range => (
                <label key={range.label} className="filter-option">
                  <input 
                    type="checkbox" 
                    checked={activeFilters.price?.label === range.label}
                    onChange={() => toggleFilter('price', activeFilters.price?.label === range.label ? null : range)}
                  />
                  {range.label}
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Rating Filter */}
        <div className="filter-group">
          <div className={`filter-pill ${activeFilters.rating ? 'active' : ''}`} onClick={() => toggleDropdown('rating')}>
            4 stars & up <ChevronDown />
          </div>
          {openDropdown === 'rating' && (
            <div className="filter-dropdown">
              <label className="filter-option">
                <input 
                  type="checkbox" 
                  checked={activeFilters.rating === 4}
                  onChange={() => toggleFilter('rating', 4)}
                />
                4 Stars & Up
              </label>
            </div>
          )}
        </div>


        {/* Fabric Filter */}
        <div className="filter-group">
          <div className={`filter-pill ${activeFilters.fabrics.length > 0 ? 'active' : ''}`} onClick={() => toggleDropdown('fabric')}>
            Fabric <ChevronDown />
          </div>
          {openDropdown === 'fabric' && (
            <div className="filter-dropdown">
              {fabrics.map(fabric => (
                <label key={fabric} className="filter-option">
                  <input 
                    type="checkbox" 
                    checked={activeFilters.fabrics.includes(fabric)}
                    onChange={() => toggleFilter('fabrics', fabric)}
                  />
                  {fabric}
                </label>
              ))}
            </div>
          )}
        </div>

        {(activeFilters.price || activeFilters.rating || activeFilters.brands.length > 0 || activeFilters.colors.length > 0 || activeFilters.fabrics.length > 0) && (
          <button className="clear-filters-btn" onClick={clearFilters}>Clear All</button>
        )}
      </div>
    </div>
  );
};

const ChevronDown = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M6 9l6 6 6-6" />
  </svg>
);

export default FilterPanel;
