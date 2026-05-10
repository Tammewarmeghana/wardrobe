import { useState, useMemo } from 'react';

export const useProductFilter = (initialProducts) => {
  const [activeFilters, setActiveFilters] = useState({
    price: null, // { min: number, max: number }
    rating: null, // number (e.g. 4 for 4+)
    brands: [],
    colors: [],
    fabrics: []
  });
  const [sortBy, setSortBy] = useState(null); // 'price-low', 'price-high'

  const filteredProducts = useMemo(() => {
    if (!initialProducts || !Array.isArray(initialProducts)) return [];
    
    const filtered = initialProducts.filter(product => {
      // Price Filter
      if (activeFilters.price) {
        const price = Number(product.price);
        const min = Number(activeFilters.price.min);
        const max = Number(activeFilters.price.max);
        if (price < min || price > max) return false;
      }

      // Rating Filter
      if (activeFilters.rating) {
        const rating = Number(product.rating);
        const targetRating = Number(activeFilters.rating);
        if (rating < targetRating) return false;
      }

      // Brand Filter
      if (activeFilters.brands && activeFilters.brands.length > 0) {
        if (!activeFilters.brands.includes(product.brand)) return false;
      }

      // Color Filter
      if (activeFilters.colors && activeFilters.colors.length > 0) {
        if (!product.colors || !Array.isArray(product.colors) || !product.colors.some(c => activeFilters.colors.includes(c))) return false;
      }

      // Fabric Filter
      if (activeFilters.fabrics && activeFilters.fabrics.length > 0) {
        if (!activeFilters.fabrics.includes(product.fabric)) return false;
      }

      return true;
    });

    if (sortBy === 'price-low') {
      return [...filtered].sort((a, b) => Number(a.price) - Number(b.price));
    }
    if (sortBy === 'price-high') {
      return [...filtered].sort((a, b) => Number(b.price) - Number(a.price));
    }

    return filtered;
  }, [initialProducts, activeFilters, sortBy]);

  const toggleFilter = (type, value) => {
    setActiveFilters(prev => {
      const current = prev[type];
      
      // Handle Arrays (Brands, Colors, Fabrics)
      if (Array.isArray(current)) {
        const index = current.indexOf(value);
        if (index > -1) {
          return { ...prev, [type]: current.filter(v => v !== value) };
        } else {
          return { ...prev, [type]: [...current, value] };
        }
      } 
      
      // Handle Objects (Price range)
      if (typeof value === 'object' && value !== null && current !== null) {
        // Compare by label if it's a price range object
        if (value.label && current.label === value.label) {
          return { ...prev, [type]: null };
        }
      }

      // Handle primitives or setting new object
      return { ...prev, [type]: prev[type] === value ? null : value };
    });
  };

  const clearFilters = () => {
    setActiveFilters({
      price: null,
      rating: null,
      brands: [],
      colors: [],
      fabrics: []
    });
    setSortBy(null);
  };

  return {
    filteredProducts,
    activeFilters,
    toggleFilter,
    clearFilters,
    sortBy,
    setSortBy
  };
};

export default useProductFilter;
