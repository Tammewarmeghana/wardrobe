import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingBag, FiCheckCircle } from 'react-icons/fi';
import './ordersuccess.css';

const OrderSuccess = () => {
  return (
    <div className="order-success-container">
      <div className="order-success-card">
        {/* Top Gradient Section */}
        <div className="order-success-header">
          <div className="success-icon-container">
            <FiShoppingBag className="success-bag-icon" />
            <div className="success-check-badge">
              <FiCheckCircle />
            </div>
          </div>
          <h1>THANK YOU</h1>
          <p className="sub-heading">FOR YOUR PURCHASE</p>
        </div>

        {/* Order Content */}
        <div className="order-success-body">
          <div className="order-confirmation-message">
            <h2>Order placed, thanks.</h2>
            <p>We've sent a confirmation email to you with the order details and tracking info.</p>
          </div>

          {/* Shipping Info Card */}
          <div className="shipping-info-card">
            <div className="shipping-details">
              <h3>Shipping to Guest</h3>
              <p className="delivery-date">Estimated delivery: <strong>Oct 24 - Oct 28</strong></p>
            </div>
            <div className="product-preview-small">
              {/* Using a placeholder image matching the styling context */}
              <img src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Product thumbnail" />
            </div>
          </div>

          <div className="thank-you-message">
            <p>Thank you for shopping with Queen's Wardrobe! Your order is being processed and will be shipped soon. We hope you'll love your new outfit.</p>
          </div>

          <div className="action-buttons">
            <Link to="/home" className="go-website-btn">Go to our website</Link>
          </div>
        </div>

        {/* Footer/Promotional Section */}
        <div className="order-success-footer">
          <p className="help-text">Need help? <Link to="/contact">Contact Support</Link></p>
          
          <div className="promo-banner">
            <p>Get 10% off your next purchase! Use code: <strong>QUEEN10</strong></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
