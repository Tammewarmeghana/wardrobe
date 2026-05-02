import { useState, useMemo } from 'react';

export const useProductFilter = (initialProducts) => {
  const [activeFilters, setActiveFilters] = useState({
    price: null, // { min: number, max: number }
    rating: null, // number (e.g. 4 for 4+)
    brands: [],
    colors: [],
    fabrics: []
  });

  const filteredProducts = useMemo(() => {
    return initialProducts.filter(product => {
      // Price Filter
      if (activeFilters.price) {
        if (product.price < activeFilters.price.min || product.price > activeFilters.price.max) return false;
      }

      // Rating Filter
      if (activeFilters.rating) {
        if (product.rating < activeFilters.rating) return false;
      }

      // Brand Filter
      if (activeFilters.brands.length > 0) {
        if (!activeFilters.brands.includes(product.brand)) return false;
      }

      // Color Filter
      if (activeFilters.colors.length > 0) {
        if (!product.colors.some(c => activeFilters.colors.includes(c))) return false;
      }

      // Fabric Filter
      if (activeFilters.fabrics.length > 0) {
        if (!activeFilters.fabrics.includes(product.fabric)) return false;
      }

      return true;
    });
  }, [initialProducts, activeFilters]);

  const toggleFilter = (type, value) => {
    setActiveFilters(prev => {
      const current = prev[type];
      if (Array.isArray(current)) {
        const index = current.indexOf(value);
        if (index > -1) {
          return { ...prev, [type]: current.filter(v => v !== value) };
        } else {
          return { ...prev, [type]: [...current, value] };
        }
      } else {
        // Toggle single value filters (null if same value, else set value)
        return { ...prev, [type]: prev[type] === value ? null : value };
      }
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
  };

  return {
    filteredProducts,
    activeFilters,
    toggleFilter,
    clearFilters
  };
};
