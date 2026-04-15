import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiLock, FiTrash2, FiLoader } from 'react-icons/fi';
import { FaCcMastercard } from 'react-icons/fa';
import { useShop } from '../context/ShopContext';
import './cart.css';

const Cart = () => {
  const { cartItems, updateCartQuantity, setCartItems } = useShop(); // Added setCartItems if available or we can just navigate
  const navigate = useNavigate();
  const [isCheckingOut, setIsCheckingOut] = React.useState(false);

  const handleQtyChange = (id, newQty) => {
    updateCartQuantity(id, parseInt(newQty));
  };

  const handleRemove = (id) => {
    updateCartQuantity(id, 0); // Setting to 0 removes the item based on ShopContext
  };

  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
  const discount = subtotal > 0 ? 50 : 0; // Hardcoded $50 discount from the design
  const total = subtotal > 0 ? subtotal - discount : 0;

  const totalItemsCount = cartItems.reduce((acc, item) => acc + (item.quantity || 1), 0);

  const handleCheckout = () => {
    if (cartItems.length === 0) return; // Prevent checkout of empty cart
    setIsCheckingOut(true);
    setTimeout(() => {
        setIsCheckingOut(false);
        navigate('/order-success');
    }, 5000); // 5 seconds loading
  };

  return (
    <>
    {isCheckingOut && (
        <div className="checkout-loading-overlay">
            <div className="checkout-loader"></div>
            <h2>Processing your order...</h2>
            <p>Please wait, do not close or refresh this page.</p>
        </div>
    )}
    <div className="cart-page-container">
      <div className="cart-card">
        {/* Pink Gradient Wave Header - Abstract Shape */}
        <div className="cart-header-wave">
          <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill="#fdf0f4" fillOpacity="1" d="M0,160L48,154.7C96,149,192,139,288,149.3C384,160,480,192,576,202.7C672,213,768,203,864,181.3C960,160,1056,128,1152,117.3C1248,107,1344,117,1392,122.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
          </svg>
        </div>

        <Link to="/collection" className="continue-shopping">
          <FiArrowLeft className="back-arrow" /> Continue shopping
        </Link>
        
        <div className="cart-content">
          <div className="cart-left-panel">
            <div className="cart-title-row">
              <h1 className="cart-title">Shopping cart</h1>
              <span className="cart-items-count">{totalItemsCount} items</span>
            </div>

            <div className="cart-items-list">
              {cartItems.length === 0 ? (
                <div style={{ padding: '40px 0', color: '#888', fontStyle: 'italic' }}>
                  Your cart is empty.
                </div>
              ) : (
                cartItems.map((item) => (
                  <div key={item.id} className="cart-item">
                    <img src={item.image} alt={item.name} className="item-thumbnail" />
                    <div className="item-details">
                      <div className="item-name">{item.name}</div>
                      <div className="item-meta">Color: {item.color} • Size: {item.size}</div>
                    </div>
                    <div className="item-qty">
                      <select 
                        value={item.quantity || 1} 
                        onChange={(e) => handleQtyChange(item.id, e.target.value)}
                      >
                        {[...Array(10)].map((_, i) => (
                          <option key={i + 1} value={i + 1}>Qty. {i + 1}</option>
                        ))}
                      </select>
                    </div>
                    <div className="item-price">
                      ${(item.price * (item.quantity || 1)).toFixed(2)}
                      <button 
                        style={{ background: 'none', border: 'none', color: '#ff4d4f', cursor: 'pointer', display: 'block', margin: '4px 0 0 auto', padding: 0 }}
                        onClick={() => handleRemove(item.id)}
                        title="Remove item"
                      >
                        <FiTrash2 size={14} />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="cart-right-panel">
            <div className="billing-section">
              <div className="info-block">
                <div className="info-header">
                  <h3>Jane Doe</h3>
                  <button className="edit-btn">Edit</button>
                </div>
                <p className="info-text">123 Fashion Street, Suite 404</p>
                <p className="info-text">New York, USA</p>
              </div>

              <div className="info-block">
                <div className="info-header">
                  <h3 className="section-label">Payment method</h3>
                </div>
                <div className="payment-method-row">
                  <div className="card-info">
                    <FaCcMastercard className="card-icon" />
                    <span>**** **** **** 5057</span>
                  </div>
                  <button className="edit-btn">Edit</button>
                </div>
              </div>

              <div className="discount-block">
                <h3 className="section-label">Do you have any discount code?</h3>
                <div className="discount-input-group">
                  <input type="text" placeholder="Enter discount code" />
                  <button className="apply-btn">APPLY</button>
                </div>
              </div>
            </div>

            <div className="summary-section">
              <div className="summary-row">
                <span>Subtotal ({totalItemsCount} items)</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Shipping</span>
                <span className="free-label">FREE!</span>
              </div>
              <div className="summary-row">
                <span>Discount</span>
                <span>-${discount.toFixed(2)}</span>
              </div>
              <div className="summary-row total-row">
                <span>Total (incl. VAT)</span>
                <span>${Math.max(total, 0).toFixed(2)}</span>
              </div>
              
              <button 
                className="checkout-btn" 
                onClick={handleCheckout} 
                disabled={isCheckingOut || cartItems.length === 0}
              >
                {isCheckingOut ? <FiLoader className="lock-icon rotating" /> : <FiLock className="lock-icon" />} 
                {isCheckingOut ? 'PROCESSING...' : 'CHECKOUT'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Cart;
