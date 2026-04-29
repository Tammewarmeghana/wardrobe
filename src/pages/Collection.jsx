import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './collection.css';

function Collection() {
    useEffect(() => {
        const elements = document.querySelectorAll('.slide-up');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });

        elements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);



    return (
        <div className="collection-page-container">
            {/* Elegant Floral Decor Elements */}
            <div className="floral-corner top-left"></div>
            <div className="floral-corner top-right"></div>
            <div className="floral-corner bottom-left"></div>
            <div className="floral-corner bottom-right"></div>
            {/* Minimal Navigation Removed */}


            {/* Hero Header */}
            <header className="hero-header fade-in">
               <h1>Shop by Style</h1>
                <div className="divider"></div>
                <p>Fusion of modern and traditional styles.</p>
            </header>


            {/* Main Collections Showcase */}
            <main className="collections-container">


                {/* Indo Western */}
                <section className="collection-item animated-col slide-up">
                    <div className="image-wrapper animated-wrapper">
                        <div className="continuous-pan">
                            <img src="https://res.cloudinary.com/dodmxncwc/image/upload/v1775885562/INDO_WESTERN_collection_1_q1xrzt.jpg"
                                alt="Indo Western Style" className="indo-western-img" />
                        </div>
                    </div>
                    <div className="text-content box-rose-gold text-motion">
                        <span className="collection-num">01</span>
                        <h2>Indo Western</h2>
                        <div className="small-divider"></div>
                        <p>A harmonious blend of traditional Indian aesthetics and modern Western silhouettes. Intricate
                            embroidery meets contemporary draping, perfect for the modern muse seeking fusion elegance.</p>
                        <Link to="/indowestern" className="explore-btn">Shop Now</Link>
                    </div>
                </section>


                {/* Western */}
                <section className="collection-item reverse slide-up animated-col">
                    <div className="image-wrapper animated-wrapper">
                        <div className="continuous-pan">
                            <img src="https://res.cloudinary.com/dodmxncwc/image/upload/v1775884629/western_iqmuat.jpg"
                                alt="Western Style" />
                        </div>
                    </div>
                    <div className="text-content box-light-pink text-motion">
                        <span className="collection-num">02</span>
                        <h2>Western</h2>
                        <div className="small-divider"></div>
                        <p>Sophisticated evening wear, sharp tailoring, and minimal gowns. Clean lines designed for a global
                            appeal, reflecting power, grace, and timeless high-fashion sensibilities.</p>
                        <Link to="/western" className="explore-btn">Shop Now</Link>
                    </div>
                </section>


                {/* Traditional */}
                <section className="collection-item slide-up animated-col">
                    <div className="image-wrapper animated-wrapper">
                        <div className="continuous-pan">
                            <img src="https://res.cloudinary.com/dodmxncwc/image/upload/v1775827984/a58a309b-2a19-49a4-82fa-3ad68b470ebb_ey4nlr.png"
                                alt="Traditional Style" />
                        </div>
                    </div>
                    <div className="text-content box-red-wood text-motion">
                        <span className="collection-num">03</span>
                        <h2>Traditional</h2>
                        <div className="small-divider"></div>
                        <p>Rooted deeply in heritage. Unapologetically traditional pieces featuring master craftsmanship,
                            luxurious silks, and centuries-old weaving techniques preserved for the modern era.</p>
                        <Link to="/traditional" className="explore-btn">Shop Now</Link>
                    </div>
                </section>


                {/* Readymade */}
                <section className="collection-item reverse slide-up animated-col">
                    <div className="image-wrapper animated-wrapper">
                        <div className="continuous-pan">
                            <img src="https://res.cloudinary.com/dh31ipiad/image/upload/v1775828138/0f2edc65-1f94-4cff-ba1c-f45827f32236_ioidgl.png"
                                alt="Readymade Style" />
                        </div>
                    </div>
                    <div className="text-content box-cream text-motion">
                        <span className="collection-num">04</span>
                        <h2>Ready To Ship</h2>
                        <div className="small-divider"></div>
                        <p>Chic, ready-to-wear everyday luxury. Thoughtfully designed essentials that offer comfort and
                            versatility without ever compromising on our rigorous high-end fashion standards.</p>
                        <Link to="/readymade" className="explore-btn">Shop Now</Link>
                    </div>
                </section>


                {/* Customised Dresses */}
                <section className="collection-item slide-up animated-col">
                    <div className="image-wrapper animated-wrapper">
                        <div className="continuous-pan">
                            <img src="https://res.cloudinary.com/dodmxncwc/image/upload/v1775886477/resized_image_svojak.png"
                                alt="Customised Dresses" />
                        </div>
                    </div>
                    <div className="text-content box-taupe text-motion">
                        <span className="collection-num">05</span>
                        <h2>Customised Dresses</h2>
                        <div className="small-divider"></div>
                        <p>Tailor-made perfection. Our atelier works closely with you to bring your dream silhouettes to life,
                            offering unparalleled exclusivity, personalized details, and precise, made-to-measure tailoring.</p>
                        <Link to="/measurements" className="explore-btn">Discover More</Link>
                    </div>
                </section>


            </main>


            <footer className="elegant-footer">
                <div className="footer-divider"></div>
                <p>&copy; 2026 Queen's Wardrobe - All Rights Reserved.</p>
            </footer>
        </div>
    );
}

export default Collection;
