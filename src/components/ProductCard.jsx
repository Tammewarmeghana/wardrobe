import React from 'react';
import WishlistHeart from './WishlistHeart';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="product-card" style={{ position: "relative" }}>
      <WishlistHeart item={{ 
        id: `${product.category}_${product.title}`, 
        title: product.title, 
        image: product.image, 
        brand: product.brand, 
        price: <><span>₹</span>{product.price.toLocaleString()}</> 
      }} />
      <img src={product.image} alt={product.title} className="card-image" />
      <div className="card-content">
        {product.colors && (
          <div className="swatches">
            {product.colors.map(color => (
              <div key={color} className="swatch" style={{ backgroundColor: color.toLowerCase() }}></div>
            ))}
          </div>
        )}
        <p className="product-title">{product.title}</p>
        <div className="rating-block">
          <span className="stars">{'★'.repeat(product.rating)}{'☆'.repeat(5 - product.rating)}</span>
          <span className="rating-count">{product.ratingCount.toLocaleString()}</span>
        </div>
        <div className="pricing-block">
          {product.originalPrice && (
            <span className="discount">-{Math.round((1 - product.price / product.originalPrice) * 100)}%</span>
          )}
          <span className="price"><span>₹</span>{product.price.toLocaleString()}</span>
          {product.originalPrice && (
            <span className="original-price">₹{product.originalPrice.toLocaleString()}</span>
          )}
        </div>
        <button className="buying-options-btn" onClick={() => onAddToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
