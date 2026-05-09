import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { motion } from 'framer-motion';
import './contact.css';

const Contact = () => {
    const navigate = useNavigate();

    const revealVariants = {
        hidden: { opacity: 0, y: 40, filter: 'blur(15px)' },
        visible: { 
            opacity: 1, 
            y: 0,
            filter: 'blur(0px)',
            transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
        }
    };

    return (
        <div>
            {/* Back Navigation */}
            <div style={{ padding: '30px 40px', position: 'fixed', top: 0, left: 0, zIndex: 100 }}>
                <button 
                    onClick={() => navigate(-1)} 
                    style={{ 
                        background: 'rgba(250, 246, 243, 0.8)', 
                        backdropFilter: 'blur(5px)',
                        border: 'none', 
                        cursor: 'pointer', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        width: '45px',
                        height: '45px',
                        borderRadius: '50%',
                        color: '#2F2A26',
                        boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
                        transition: 'transform 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    title="Go Back"
                >
                    <FiArrowLeft size={24} />
                </button>
            </div>

            <div className="contact-container">
                <motion.div 
                    className="contact-info"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                    variants={revealVariants}
                >
                    <h1>Get in Touch</h1>
                    <p>We would love to hear from you. For inquiries about our collections, bespoke tailoring, or appointments, please reach out using the form or the details below.</p>
                    <div className="info-blocks">
                        <div className="info-block">
                            <h3>Atelier</h3>
                            <p>15 Rue de La Mode<br />75001 Paris, France</p>
                        </div>
                        <div className="info-block">
                            <h3>Inquiries</h3>
                            <p>info@queenswardrobe.com<br />+91 98765 43210</p>
                        </div>
                    </div>
                </motion.div>
                <motion.div 
                    className="contact-form"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                    variants={revealVariants}
                >
                    <form action="#" method="POST">
                        <div className="form-group">
                            <label htmlFor="name">Full Name</label>
                            <input type="text" id="name" name="name" required placeholder="Jane Doe" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input type="email" id="email" name="email" required placeholder="jane@example.com" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <input type="text" id="subject" name="subject" required placeholder="Bespoke Tailoring Inquiry" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" rows="5" required placeholder="How can we help you today?"></textarea>
                        </div>
                        <button type="submit" className="submit-btn" onClick={(event) => { event.preventDefault(); alert('Message sent successfully!'); }}>Send Message</button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
