import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import HeroCarousel from '../components/HeroCarousel';
import './fullpage.css';

function Home() {
    const navigate = useNavigate();
    const bestsTrackRef = useRef(null);

    useEffect(() => {
        // Observer or other side effects if needed
    }, []);

    const scrollBests = (direction) => {
        if (bestsTrackRef.current) {
            const scrollAmount = 350;
            bestsTrackRef.current.scrollBy({
                left: direction * scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="fullpage-wrapper">

            {/* 2. Main Hero Carousel */}
            <HeroCarousel />



            {/* 3. Central Body: 24 Hrs Dispatch Element */}
            <section className="dispatch-banner">
                <div className="dispatch-content">
                    <div className="icon-fast">
                        <svg viewBox="0 0 24 24">
                            <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
                        </svg>
                    </div>
                    <h2>24 HRS DISPATCH</h2>
                    <p>Order today, we ship tomorrow. Experience ultra-fast global delivery.</p>
                </div>
            </section>

            {/* 4. Our Bests Carousel */}
            <section className="our-bests">
                <h2 className="section-title">Our Bests</h2>
                <div className="bests-carousel-wrapper">
                    <button className="bests-btn left" onClick={() => scrollBests(-1)}>&#10094;</button>
                    <div className="bests-track" id="bestsTrack" ref={bestsTrackRef}>
                        <div className="best-card">
                            <img src="https://res.cloudinary.com/dugksxwkr/image/upload/v1775980365/saree_l0txc4.jpg" alt="Best 1" />
                            <div className="card-title">Traditional Elegance</div>
                        </div>
                        <div className="best-card">
                            <img src="https://res.cloudinary.com/dugksxwkr/image/upload/v1775980444/saree_ziecsm.jpg" alt="Best 2" />
                            <div className="card-title">Modern Suit</div>
                        </div>
                        <div className="best-card">
                            <img src="https://res.cloudinary.com/dugksxwkr/image/upload/v1775980507/saree_fmzqwc.jpg" alt="Best 3" />
                            <div className="card-title">Indo-Western Cape</div>
                        </div>
                        <div className="best-card">
                            <img src="https://res.cloudinary.com/dugksxwkr/image/upload/v1775980699/saree_i8kbz2.jpg" alt="Best 4" />
                            <div className="card-title">Classic Pastel</div>
                        </div>
                        <div className="best-card">
                            <img src="https://res.cloudinary.com/dodmxncwc/image/upload/v1775981099/231af316c114125cc52cfbf9d18e1adf_revbea.jpg" alt="Best 5" />
                            <div className="card-title">Summer Collection</div>
                        </div>
                    </div>
                    <button className="bests-btn right" onClick={() => scrollBests(1)}>&#10095;</button>
                </div>
            </section>

            {/* 5. Small Logos Features Strip */}
            <section className="features-strip">
                <div className="feature-item">
                    <svg viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
                    </svg>
                    <span>Easy Return</span>
                </div>
                <div className="feature-item">
                    <svg viewBox="0 0 24 24">
                        <path d="M21 4h-2V2h-2v2h-4V2H9v2H7V2H5v2H3v16h18V4zm-2 14H5V6h14v12zm-6-4h-2v2h2v-2zm0-4h-2v2h2V10z" />
                    </svg>
                    <span>Costume Fitting</span>
                </div>
                <div className="feature-item">
                    <svg viewBox="0 0 24 24">
                        <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zm-8 7.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm6.5 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm-5-3.5h-5v-7h5v7zm4-4h2.5l1.96 2.5H17.5V8z" />
                    </svg>
                    <span>24 Hrs Delivery</span>
                </div>
                <div className="feature-item">
                    <svg viewBox="0 0 24 24">
                        <path d="M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm7 17H5V8h14v12zm-7-8c-1.66 0-3-1.34-3-3H9c0 1.66 1.34 3 3 3s3-1.34 3-3h-2c0 1.66-1.34 3-3 3z" />
                    </svg>
                    <span>Instant Instore Experience</span>
                </div>
            </section>



            {/* 8. Bridal Sessions */}
            <section className="bridal-sessions">
                <div className="bridal-graphic">
                    <img src="https://res.cloudinary.com/dodmxncwc/image/upload/v1775980865/fc5d48e17964a07b964b9d40e41047c5_a1ffmf.jpg" alt="Bridal" />
                </div>
                <div className="bridal-text">
                    <h2>Bridal Sessions</h2>
                    <p>Book an appointment to get free elite stylist advice and find your perfect wedding dress.</p>
                    <button onClick={() => navigate('/appointment')} className="btn-wipe">Book an Appointment</button>
                </div>
            </section>

            {/* 9. Hover Card with 3 Dress Designs */}
            <section className="hover-unveil-section">
                <h2 className="section-title">The Magic Selection</h2>
                <div className="magic-hover-card">
                    <div className="hidden-layer">
                        <div className="hidden-dress">
                            <img src="https://res.cloudinary.com/dodmxncwc/image/upload/v1775983267/indo_west_2nd_uedcam.jpg" alt="Dress 1" />
                            <div className="product-overlay">
                                <div className="product-content">
                                    <h3 className="product-title">Bridal Lehenga</h3>
                                    <p className="product-desc">Elegant Floral Bridal Set<br />Perfect for weddings & festive wear</p>
                                    <button className="product-btn" onClick={() => navigate('/bridal-lehenga')}>Shop Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="hidden-dress">
                            <img src="https://res.cloudinary.com/dodmxncwc/image/upload/v1775983219/indo_western_1st_n7tfl8.jpg" alt="Dress 2" />
                            <div className="product-overlay">
                                <div className="product-content">
                                    <h3 className="product-title">Gown</h3>
                                    <p className="product-desc">Transform Your Wardrobe<br />Upgrade your outfit without replacing it.<br />Our color kit lets you change the color of your dress seamlessly—simple, effective, and affordable.</p>
                                    <button className="product-btn">Shop Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="hidden-dress">
                            <img src="https://res.cloudinary.com/dodmxncwc/image/upload/v1775983262/indo_western_1st_gllva8.jpg" alt="Dress 3" />
                            <div className="product-overlay">
                                <div className="product-content">
                                    <h3 className="product-title">Traditional Lehenga</h3>
                                    <p className="product-desc">Classic Pink Lehenga<br />Rich embroidery for special occasions</p>
                                    <button className="product-btn" onClick={() => navigate('/lehengas')}>Shop Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 10. Customer Stories & Ratings */}
            <section className="customer-stories">
                <h2 className="section-title">Customer Stories</h2>
                <div className="stories-grid">
                    <div className="story-card">
                        <div className="stars">★★★★★</div>
                        <p>"The bridal session was a dream come true. Found the perfect lehenga!"</p>
                        <h4>- Priya M.</h4>
                    </div>
                    <div className="story-card">
                        <div className="stars">★★★★★</div>
                        <p>"Unbelievable 24-hr dispatch. The dress was gorgeous and fit perfectly."</p>
                        <h4>- Sarah K.</h4>
                    </div>
                    <div className="story-card">
                        <div className="stars">★★★★☆</div>
                        <p>"The video shopping experience felt so premium and helpful."</p>
                        <h4>- Ritu S.</h4>
                    </div>
                </div>
            </section>

            {/* 11. Footer with Multiple Elements */}
            <footer className="mega-footer">
                <div className="footer-columns">
                    <div className="ft-col">
                        <h3>Queen's Wardrobe</h3>
                        <p>The ultimate destination for luxury pastel fashion, connecting western modernity with traditional heritage.</p>
                    </div>
                    <div className="ft-col">
                        <h3>Our Speciality</h3>
                        <ul>
                            <li>Handcrafted Bridal</li>
                            <li>Indo-Western Fusion</li>
                            <li>Bespoke Tailoring</li>
                            <li>24/7 Live Styling</li>
                        </ul>
                    </div>
                    <div className="ft-col">
                        <h3>FAQs & Help</h3>
                        <ul>
                            <li><Link to="#">Shipping Policy</Link></li>
                            <li><Link to="#">Returns & Exchanges</Link></li>
                            <li><Link to="#">Track Order</Link></li>
                            <li><Link to="#">Contact Support</Link></li>
                        </ul>
                    </div>
                    <div className="ft-col">
                        <div className="social-image-grid">
                            <img src="https://res.cloudinary.com/dugksxwkr/image/upload/v1775986354/insta_qov4um.jpg" alt="Insta 1" />
                            <img src="https://res.cloudinary.com/dugksxwkr/image/upload/v1775986417/saree_rqrv97.jpg" alt="Insta 2" />
                            <img src="https://res.cloudinary.com/dugksxwkr/image/upload/v1775986486/sar_oyb3ww.jpg" alt="Insta 3" />
                            <img src="https://res.cloudinary.com/dugksxwkr/image/upload/v1775986552/saree_p5xuch.jpg" alt="Insta 4" />
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    &copy; 2026 Queen's Wardrobe. All Rights Reserved.
                </div>
            </footer>
        </div>
    );
}

export default Home;
