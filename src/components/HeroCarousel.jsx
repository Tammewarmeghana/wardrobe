import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import './HeroCarousel.css';

const slides = [
    {
        id: 1,
        image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1778302245/f0136f01-1638-4cbb-8696-3a4acee77248_dezgyc.png",
        mobileImage: "https://res.cloudinary.com/dugksxwkr/image/upload/v1778302679/7fc901eb-fc93-4eab-9407-8450f94439dd_rylc6c.png",
        heading: "Curated Womenswear Styles",
        subheading: "Modern Fits For Festive Moments",
        cta: "Explore Now",
        link: "/collection"
    },
    {
        id: 2,
        image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1778302359/563a0050-6dc6-49f4-86ca-c28de6253e83_ktkpfv.png",
        mobileImage: "https://res.cloudinary.com/dugksxwkr/image/upload/v1778302731/319206fa-9945-4af1-9564-b9444695bd51_ty1lle.png",
        heading: "Elegant Fusion Heritage",
        subheading: "Timeless silhouettes for the modern era",
        cta: "View Collection",
        link: "/collection"
    },
    {
        id: 3,
        image: "https://res.cloudinary.com/dugksxwkr/image/upload/v1778302405/e45bc356-4709-4f38-a75f-567d1e587d01_pxoo2p.png",
        mobileImage: "https://res.cloudinary.com/dugksxwkr/image/upload/v1778302822/d2d61fed-6ef3-47a0-aea1-4942b80a1d05_ggxg0z.png",
        heading: "Bespoke Luxury Couture",
        subheading: "Crafted for your most special occasions",
        cta: "Discover More",
        link: "/collection"
    }
];

// Premium Luxury Hero Carousel Component
const HeroCarousel = () => {
    return (
        <section className="hero-carousel-section">
            <Swiper
                modules={[Pagination, Autoplay, EffectFade]}
                spaceBetween={0}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ 
                    delay: 5000, 
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                }}
                loop={true}
                speed={1200}
                className="mySwiper"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        {({ isActive }) => (
                            <div className="hero-slide-container">
                                {/* Left Side: Image */}
                                <div className="hero-image-side">
                                    <picture>
                                        <source media="(max-width: 768px)" srcSet={slide.mobileImage} />
                                        <img src={slide.image} alt={slide.heading} />
                                    </picture>
                                </div>

                                {/* Right Side: Content */}
                                <div className="hero-content-side">
                                    <div className="hero-text-wrapper">
                                        <AnimatePresence mode="wait">
                                            {isActive && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 30 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -30 }}
                                                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                                                >
                                                    <span className="hero-subheading">{slide.subheading}</span>
                                                    <h2 className="hero-heading">{slide.heading}</h2>
                                                    <motion.a
                                                        href={slide.link}
                                                        className="hero-cta-btn"
                                                        whileHover={{ y: -3 }}
                                                        whileTap={{ scale: 0.95 }}
                                                    >
                                                        {slide.cta}
                                                    </motion.a>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>
                            </div>
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default HeroCarousel;
