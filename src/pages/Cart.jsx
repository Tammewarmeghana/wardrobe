import React from 'react';
import { Link } from 'react-router-dom';
import { FiCheck } from 'react-icons/fi';
import { useShop } from '../context/ShopContext';
import './cart.css';

const Cart = () => {
  const { cartItems } = useShop();

  // Prefer actual cart items, but fallback to mock data to exactly match the visual 
  // if the cart is empty or we want to showcase the design beautifully.
  const mockItems = [
    {
      id: 1,
      name: "Rose Gold Silk Top",
      size: "M",
      color: "Rose Gold",
      price: 89.00,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=200&q=80" 
    },
    {
      id: 2,
      name: "Pastel Sequins Cocktail Dress",
      size: "M",
      color: "Pink",
      price: 120.00,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1595777457583-95e059f581ce?auto=format&fit=crop&w=200&q=80"
    }
  ];

  const itemsToDisplay = cartItems && cartItems.length > 0 ? cartItems : mockItems;

  const subtotal = itemsToDisplay.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
  const delivery = 15.00;
  const discount = 20.00;
  // If actual cart is used, adjust total calculation based on mock
  const total = itemsToDisplay === mockItems ? 204.00 : (subtotal > 0 ? subtotal + delivery - discount : 0);

  return (
    <div className="cart-page-container">
      {/* Background abstract particles */}
      <div className="confetti-particle p1"></div>
      <div className="confetti-particle p2"></div>
      <div className="confetti-particle p3"></div>
      <div className="confetti-particle p4"></div>
      <div className="confetti-particle p5"></div>
      <div className="confetti-particle p6"></div>

      <div className="cart-breadcrumbs">
        <span>Homepage</span> / <span>Clothing Categories</span> / <span className="current-page">My Shopping Cart</span>
      </div>

      <div className="cart-layout">
        {/* Left Column */}
        <div className="cart-left-column">
          {/* Step 1: Login */}
          <div className="checkout-step completed">
            <div className="step-header">
              <div className="step-title">
                <span className="step-number">1</span>
                <h3>LOGIN <FiCheck className="check-icon" size={18} /></h3>
              </div>
              <div className="step-summary">
                <div className="user-details">
                  <span className="user-name">Michael Smith</span>
                  <span className="user-phone">+806 - 445 - 4453</span>
                </div>
                <button className="change-btn">CHANGE</button>
              </div>
            </div>
          </div>

          {/* Step 2: Shipping Address */}
          <div className="checkout-step active">
            <div className="step-header">
              <div className="step-title">
                <span className="step-number">2</span>
                <h3>SHIPPING ADDRESS</h3>
              </div>
            </div>
            
            <div className="step-content">
              <div className="address-form">
                <div className="form-row">
                  <div className="input-group">
                    <label>First Name *</label>
                    <input type="text" defaultValue="Michael" />
                  </div>
                  <div className="input-group">
                    <label>Last Name *</label>
                    <input type="text" defaultValue="Smith" />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="input-group">
                    <label>Address *</label>
                    <input type="text" defaultValue="234 HK , Avenue Lake city, Utah" />
                  </div>
                  <div className="input-group">
                    <label>Apt, Suite *</label>
                    <input type="text" defaultValue="23H - UN3" />
                  </div>
                </div>

                <div className="form-row">
                  <div className="input-group">
                    <label>City *</label>
                    <input type="text" defaultValue="Lake city, Utah" />
                  </div>
                  <div className="input-group">
                    <label>Country *</label>
                    <select defaultValue="United States">
                      <option value="United States">United States</option>
                      <option value="Canada">Canada</option>
                      <option value="United Kingdom">United Kingdom</option>
                    </select>
                  </div>
                </div>

                <div className="form-row half">
                  <div className="input-group">
                    <label>Postal Code *</label>
                    <input type="text" defaultValue="230104" />
                  </div>
                </div>

                <div className="delivery-options">
                  <label className="radio-label">
                    <input type="radio" name="delivery_type" />
                    <span className="radio-custom"></span>
                    <span className="radio-text">Home <span className="muted">( All Day Delivery )</span></span>
                  </label>
                  <label className="radio-label">
                    <input type="radio" name="delivery_type" defaultChecked />
                    <span className="radio-custom checked"></span>
                    <span className="radio-text">Office <span className="muted">( Delivery Between 10 AM - 5 PM )</span></span>
                  </label>
                </div>

                <div className="form-actions">
                  <button className="save-deliver-btn">Save And Deliver Here</button>
                  <button className="cancel-btn">Cancel</button>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3: Payment Method */}
          <div className="checkout-step pending">
            <div className="step-header">
              <div className="step-title">
                <span className="step-number">3</span>
                <h3>PAYMENT METHOD</h3>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column */}
        <div className="cart-right-column">
          <div className="order-summary-card">
            <h2 className="order-title">Your Order</h2>
            
            <div className="order-items">
              {itemsToDisplay.map((item, index) => (
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
                    <p className="item-variant">Size {item.size} <span className="variant-spacer"></span> Color {item.color}</p>
                    <p className="item-price-qty">
                      <strong>${item.price.toFixed(2)}</strong> <span className="item-qty">x {String(item.quantity).padStart(2, '0')}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="order-totals">
              <div className="total-row">
                <span className="total-label">Delivery</span>
                <span className="total-value">${delivery.toFixed(2)} (Express)</span>
              </div>
              <div className="total-row discount-row">
                <span className="total-label">Discount</span>
                <span className="total-value">- ${discount.toFixed(2)}</span>
              </div>
            </div>

            <div className="order-final-total">
              <span className="final-label">Total</span>
              <span className="final-amount">${total.toFixed(2)}</span>
            </div>
            
            {/* Abstract shape decoration on card */}
            <div className="card-decoration"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
