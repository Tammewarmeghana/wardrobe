import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FiShoppingBag, FiCheckCircle, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { useShop } from '../context/ShopContext';
import './ordersuccess.css';

const OrderSuccess = () => {
  const { shippingDetails } = useShop();
  const location = useLocation();
  const navigate = useNavigate();

  const [purchasedItems, setPurchasedItems] = useState([]);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // If we received items from the navigation state, set them.
    if (location.state && location.state.purchasedItems) {
      setPurchasedItems(location.state.purchasedItems);
    }
  }, [location.state]);

  const subtotal = purchasedItems.reduce((sum, item) => sum + ((item.price || 0) * (item.quantity || 1)), 0);
  const delivery = subtotal > 0 ? 15.00 : 0;
  const discount = subtotal > 0 ? 20.00 : 0;
  const total = subtotal > 0 ? Math.max(subtotal + delivery - discount, 0) : 0;

  return (
    <div className="order-success-container">
      <div className="order-success-card">
        
        {/* Top Gradient Section */}
        <div className="order-success-header">
          <div className="brand-label">QUEEN'S WARDROBE</div>
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
            <p>Confirmation will be sent to your email.</p>
          </div>

          {/* Shipping Info Card */}
          <div className="shipping-info-wrapper">
             <div className="shipping-info-card">
                <div className="shipping-details">
                  <h3>Shipping to {shippingDetails?.firstName || 'Guest'}</h3>
                  <div className="delivery-timeframe">
                    <span className="estimated-label">Estimated delivery</span>
                    <p className="delivery-date">Tuesday, Dec 28</p>
                  </div>
                </div>
                <div className="product-preview-gallery">
                  {purchasedItems.length > 0 ? (
                    purchasedItems.map((item, idx) => (
                        <div className="gallery-img-wrapper" key={item.id || idx}>
                           <img 
                              src={item.image ? item.image : "https://images.unsplash.com/photo-1610030469983-98e550d6193c?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"} 
                              alt={`Item ${idx + 1}`} 
                           />
                           {item.quantity > 1 && <span className="item-qty-badge">{item.quantity}</span>}
                        </div>
                    ))
                  ) : (
                    <div className="gallery-img-wrapper">
                       <img src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="placeholder" />
                    </div>
                  )}
                </div>
             </div>
             
             <div className="review-orders-link">
               <button onClick={() => setShowDetails(!showDetails)} className="toggle-details-btn">
                 Review or edit your recent orders {showDetails ? <FiChevronUp /> : <FiChevronDown />}
               </button>
             </div>

             {/* Expandable Order Details */}
             {showDetails && (
               <div className="expanded-order-details">
                 <h4>Order Details</h4>
                 <div className="details-items-list">
                    {purchasedItems.map((item, idx) => (
                      <div className="detail-item-row" key={idx}>
                         <span>{item.name} x {item.quantity || 1}</span>
                         <span>${((item.price || 0) * (item.quantity || 1)).toFixed(2)}</span>
                      </div>
                    ))}
                 </div>
                 
                 <div className="details-cost-summary">
                    <div className="cost-row">
                      <span>Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="cost-row">
                      <span>Delivery</span>
                      <span>${delivery.toFixed(2)}</span>
                    </div>
                    <div className="cost-row discount">
                      <span>Discount</span>
                      <span>-${discount.toFixed(2)}</span>
                    </div>
                    <div className="cost-row total">
                      <span>Total Cost</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                 </div>

                 <div className="details-delivery-info">
                   <h4>Delivery Information</h4>
                   {shippingDetails ? (
                     <p>
                       <strong>{shippingDetails.firstName} {shippingDetails.lastName}</strong><br/>
                       {shippingDetails.address} {shippingDetails.apt && `, ${shippingDetails.apt}`}<br/>
                       {shippingDetails.city}, {shippingDetails.country} {shippingDetails.postalCode}<br/>
                       <strong>Phone:</strong> +806 - 445 - 4453 <span style={{fontSize:'11px', color:'#999'}}>(Profile Default)</span><br/>
                       <strong>Type:</strong> {shippingDetails.deliveryType} Delivery
                     </p>
                   ) : (
                     <p>Guest Address Pending <br/><strong>Phone:</strong> N/A</p>
                   )}
                 </div>
               </div>
             )}
          </div>

          <div className="thank-you-message">
            <p>Thank you for shopping with Queen's Wardrobe! Your order is being processed and will be shipped soon. We hope you'll love your new outfit.</p>
            
            <div className="action-buttons">
              <button onClick={() => navigate('/fullpage')} className="go-website-btn">Go to our website</button>
            </div>
          </div>

        </div>

        {/* Footer/Promotional Section */}
        <div className="order-success-footer">
          <p className="support-text">Anything amiss? Email us or call us at (610) 888-1111</p>
          
          <div className="promo-banner">
             <div className="promo-image">
                <img src="https://images.unsplash.com/photo-1513689454157-797746187515?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" alt="Gift Card" />
             </div>
             <div className="promo-text">
                <p><strong>Gift a Wardrobe upgrade!</strong></p>
                <p>Get 10% off your next purchase with code <strong>QUEEN10</strong> or send a digital gift card.</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
