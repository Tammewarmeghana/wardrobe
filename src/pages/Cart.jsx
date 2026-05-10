import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiLock, FiTrash2, FiLoader, FiCheck } from 'react-icons/fi';
import { FaCcMastercard } from 'react-icons/fa';
import { useShop } from '../context/ShopContext';
import './cart.css';

const Cart = () => {
  const { cartItems, setCartItems, shippingDetails, setShippingDetails, paymentMethod, setPaymentMethod } = useShop(); 
  const navigate = useNavigate();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [activeStep, setActiveStep] = useState(shippingDetails ? 3 : 2);
  
  // Form State
  const [loginDetails, setLoginDetails] = useState({
    name: 'Rajesh Kumar',
    phone: '+91 98765 43210'
  });
  const [isEditingLogin, setIsEditingLogin] = useState(false);

  const [formData, setFormData] = useState(shippingDetails || {
    firstName: 'Rajesh',
    lastName: 'Kumar',
    address: '123, MG Road, Indiranagar',
    apt: 'Apt 402, Block B',
    city: 'Bangalore, Karnataka',
    country: 'India',
    postalCode: '560038',
    deliveryType: 'Home'
  });
  
  // Payment Validation Error
  const [paymentError, setPaymentError] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
  const delivery = subtotal > 0 ? 15.00 : 0;
  const discount = subtotal > 0 ? 20.00 : 0;
  const total = subtotal > 0 ? Math.max(subtotal + delivery - discount, 0) : 0;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSaveShipping = () => {
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.address || !formData.city || !formData.postalCode) {
      alert("Please fill in all required shipping fields.");
      return;
    }
    setShippingDetails(formData);
    setActiveStep(3);
  };

  const handleCancelShipping = () => {
    // Reset to last saved details or empty
    if (shippingDetails) {
      setFormData(shippingDetails);
      setActiveStep(3);
    } else {
      setFormData({
        firstName: '', lastName: '', address: '', apt: '', city: '', country: 'United States', postalCode: '', deliveryType: 'Home'
      });
    }
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) return;
    if (!paymentMethod) {
      setPaymentError('Please select a payment method');
      return;
    }
    setIsCheckingOut(true);
    setTimeout(() => {
        setIsCheckingOut(false);
        const purchasedItems = [...cartItems];
        setCartItems([]);
        navigate('/order-success', { state: { purchasedItems } });
    }, 5000); 
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
      {/* Background abstract particles */}
      <div className="confetti-particle p1"></div>
      <div className="confetti-particle p2"></div>
      <div className="confetti-particle p3"></div>
      <div className="confetti-particle p4"></div>
      <div className="confetti-particle p5"></div>
      <div className="confetti-particle p6"></div>

      <div className="cart-header-container">
        <button className="back-arrow-btn" onClick={() => navigate(-1)} aria-label="Go back">
          <FiArrowLeft size={22} />
        </button>
        <div className="cart-breadcrumbs">
          <Link to="/fullpage" className="breadcrumb-link">Homepage</Link> / <span onClick={() => navigate('/collection')}>Clothing Categories</span> / <span className="current-page">My Shopping Cart</span>
        </div>
      </div>

      <div className="cart-layout">
        {/* Left Column */}
        <div className="cart-left-column">
          {/* Step 1: Login */}
          <div className={`checkout-step ${isEditingLogin ? 'active' : 'completed'}`}>
            <div className="step-header">
              <div className="step-title">
                <span className="step-number">1</span>
                <h3>LOGIN {!isEditingLogin && <FiCheck className="check-icon" size={18} />}</h3>
              </div>
              {!isEditingLogin && (
                <div className="step-summary">
                  <div className="user-details">
                    <span className="user-name">{loginDetails.name}</span>
                    <span className="user-phone">{loginDetails.phone}</span>
                  </div>
                  <button className="change-btn" onClick={(e) => { e.stopPropagation(); setIsEditingLogin(true); }}>CHANGE</button>
                </div>
              )}
            </div>
            
            {isEditingLogin && (
              <div className="step-content">
                <div className="address-form">
                  <div className="form-row">
                    <div className="input-group">
                      <label>Full Name *</label>
                      <input 
                        type="text" 
                        value={loginDetails.name} 
                        onChange={(e) => setLoginDetails({...loginDetails, name: e.target.value})} 
                      />
                    </div>
                    <div className="input-group">
                      <label>Phone Number *</label>
                      <input 
                        type="text" 
                        value={loginDetails.phone} 
                        onChange={(e) => setLoginDetails({...loginDetails, phone: e.target.value})} 
                      />
                    </div>
                  </div>
                  <div className="form-actions">
                    <button className="save-deliver-btn" onClick={() => setIsEditingLogin(false)}>Save Details</button>
                    <button className="cancel-btn" onClick={() => setIsEditingLogin(false)}>Cancel</button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Step 2: Shipping Address */}
          <div className={`checkout-step ${activeStep === 2 ? 'active' : activeStep > 2 ? 'completed' : 'pending'}`}>
            <div className="step-header">
              <div className="step-title">
                <span className="step-number">2</span>
                <h3>SHIPPING ADDRESS {activeStep > 2 && <FiCheck className="check-icon" size={18} />}</h3>
              </div>
              {activeStep > 2 && (
                <div className="step-summary">
                   <div style={{ fontSize: '13px', color: '#9c8a8e', textAlign: 'right' }}>
                     {shippingDetails?.address}<br/>{shippingDetails?.city}
                   </div>
                   <button className="change-btn" onClick={(e) => { e.stopPropagation(); setActiveStep(2); }}>CHANGE</button>
                </div>
              )}
            </div>
            
            {activeStep === 2 && (
            <div className="step-content">
              <div className="address-form">
                <div className="form-row">
                  <div className="input-group">
                    <label>First Name *</label>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} />
                  </div>
                  <div className="input-group">
                    <label>Last Name *</label>
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="input-group">
                    <label>Address *</label>
                    <input type="text" name="address" value={formData.address} onChange={handleInputChange} />
                  </div>
                  <div className="input-group">
                    <label>Apt, Suite *</label>
                    <input type="text" name="apt" value={formData.apt} onChange={handleInputChange} />
                  </div>
                </div>

                <div className="form-row">
                  <div className="input-group">
                    <label>City *</label>
                    <input type="text" name="city" value={formData.city} onChange={handleInputChange} />
                  </div>
                  <div className="input-group">
                    <label>Country *</label>
                    <select name="country" value={formData.country} onChange={handleInputChange}>
                      <option value="India">India</option>
                      <option value="United States">United States</option>
                      <option value="Canada">Canada</option>
                      <option value="United Kingdom">United Kingdom</option>
                    </select>
                  </div>
                </div>

                <div className="form-row half">
                  <div className="input-group">
                    <label>Postal Code *</label>
                    <input type="text" name="postalCode" value={formData.postalCode} onChange={handleInputChange} />
                  </div>
                </div>

                <div className="delivery-options">
                  <label className="radio-label">
                    <input type="radio" name="deliveryType" value="Home" checked={formData.deliveryType === 'Home'} onChange={handleInputChange} />
                    <span className={`radio-custom ${formData.deliveryType === 'Home' ? 'checked' : ''}`}></span>
                    <span className="radio-text">Home <span className="muted">( All Day Delivery )</span></span>
                  </label>
                  <label className="radio-label">
                    <input type="radio" name="deliveryType" value="Office" checked={formData.deliveryType === 'Office'} onChange={handleInputChange} />
                    <span className={`radio-custom ${formData.deliveryType === 'Office' ? 'checked' : ''}`}></span>
                    <span className="radio-text">Office <span className="muted">( Delivery Between 10 AM - 5 PM )</span></span>
                  </label>
                </div>

                <div className="form-actions">
                  <button className="save-deliver-btn" onClick={handleSaveShipping}>Save And Deliver Here</button>
                  <button className="cancel-btn" onClick={handleCancelShipping}>Cancel</button>
                </div>
              </div>
            </div>
            )}
          </div>

          {/* Step 3: Payment Method */}
          <div className={`checkout-step ${activeStep === 3 ? 'active' : 'pending'}`}>
            <div className="step-header">
              <div className="step-title">
                <span className="step-number">3</span>
                <h3>PAYMENT METHOD</h3>
              </div>
              
              {activeStep < 3 && (
                 <div style={{ fontSize: '12px', color: '#9c8a8e' }}>Complete shipping to view options</div>
              )}
            </div>

            {activeStep === 3 && (
              <div className="step-content" style={{ marginTop: '20px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '30px' }}>
                     <label className="radio-label">
                        <input type="radio" name="paymentType" value="Card" checked={paymentMethod === 'Card'} onChange={(e) => { setPaymentMethod(e.target.value); setPaymentError(''); }} />
                        <span className={`radio-custom ${paymentMethod === 'Card' ? 'checked' : ''}`}></span>
                        <span className="radio-text">Credit / Debit Card</span>
                      </label>
                      <label className="radio-label">
                        <input type="radio" name="paymentType" value="PayPal" checked={paymentMethod === 'PayPal'} onChange={(e) => { setPaymentMethod(e.target.value); setPaymentError(''); }} />
                        <span className={`radio-custom ${paymentMethod === 'PayPal' ? 'checked' : ''}`}></span>
                        <span className="radio-text">PayPal</span>
                      </label>
                      <label className="radio-label">
                        <input type="radio" name="paymentType" value="COD" checked={paymentMethod === 'COD'} onChange={(e) => { setPaymentMethod(e.target.value); setPaymentError(''); }} />
                        <span className={`radio-custom ${paymentMethod === 'COD' ? 'checked' : ''}`}></span>
                        <span className="radio-text">Cash on Delivery</span>
                      </label>
                      
                      {paymentError && <div style={{ color: '#c93b4a', fontSize: '13px', marginTop: '10px' }}>{paymentError}</div>}
                </div>

                <div className="summary-row" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <span style={{ fontSize: '14px', color: '#3b2824' }}>Shipping</span>
                    <span className="free-label" style={{ color: '#8c2a49', fontWeight: '600' }}>FREE!</span>
                </div>
                <div className="summary-row" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <span style={{ fontSize: '14px', color: '#3b2824' }}>Discount</span>
                    <span style={{ color: '#b05c75', fontWeight: '500' }}>-₹{discount.toFixed(2)}</span>
                </div>
                <div className="summary-row total-row" style={{ display: 'flex', justifyContent: 'space-between', marginTop: '15px', paddingTop: '15px', borderTop: '1px solid #f6e6ec', fontWeight: '700', fontSize: '18px', color: '#3b2824', marginBottom: '25px' }}>
                    <span>Total (incl. VAT)</span>
                    <span>₹{total.toFixed(2)}</span>
                </div>
                
                <button 
                  className="save-deliver-btn" 
                  style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', fontSize: '16px' }}
                  onClick={handleCheckout} 
                  disabled={isCheckingOut || cartItems.length === 0}
                >
                  {isCheckingOut ? <FiLoader className="lock-icon rotating" /> : <FiLock className="lock-icon" />} 
                  {isCheckingOut ? 'PROCESSING...' : 'CHECKOUT'}
                </button>
              </div>
            )}
          </div>

        </div>

        {/* Right Column */}
        <div className="cart-right-column">
          <div className="order-summary-card">
            <h2 className="order-title">Your Order</h2>
            
            {cartItems.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '40px 0', color: '#9c8a8e', fontSize: '14px' }}>
                    Your cart is currently empty. <br/> <br/>
                    <Link to="/collection" style={{ color: '#8c2a49', textDecoration: 'underline' }}>Browse Collections</Link>
                </div>
            ) : (
                <>
                <div className="order-items">
                  {cartItems.map((item, index) => (
                    <div key={item.id || index} className="order-item">
                      <div className="item-image-wrapper">
                        {item.image ? (
                          <img src={item.image} alt={item.name} />
                        ) : (
                          <div className="placeholder-image"></div>
                        )}
                      </div>
                      <div className="item-details">
                        <h4 className="item-name">{item.name}</h4>
                        <p className="item-variant">Size {item.size || 'Free'} <span className="variant-spacer"></span></p>
                        <p className="item-price-qty">
                          <strong>₹{(item.price || 0).toFixed(2)}</strong> <span className="item-qty">x {String(item.quantity || 1).padStart(2, '0')}</span>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="order-totals">
                  <div className="total-row">
                    <span className="total-label">Delivery</span>
                    <span className="total-value">₹{delivery.toFixed(2)} (Express)</span>
                  </div>
                  <div className="total-row discount-row">
                    <span className="total-label">Discount</span>
                    <span className="total-value">- ₹{discount.toFixed(2)}</span>
                  </div>
                </div>

                <div className="order-final-total">
                  <span className="final-label">Total</span>
                  <span className="final-amount">₹{total.toFixed(2)}</span>
                </div>
                </>
            )}
            
            {/* Abstract shape decoration on card */}
            <div className="card-decoration"></div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Cart;

