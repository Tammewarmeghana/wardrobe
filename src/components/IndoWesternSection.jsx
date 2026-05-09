import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import FashionCard from './FashionCard';

const IndoWesternSection = ({ title, items }) => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.4
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -30, letterSpacing: '0.1em', filter: 'blur(10px)' },
    visible: { 
      opacity: 1, 
      y: 0, 
      letterSpacing: '0.2em',
      filter: 'blur(0px)',
      transition: { duration: 1.5, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section className="luxury-collection-section">
      {/* Premium Background Elements */}
      <div className="luxury-bg-blob blob-1"></div>
      <div className="luxury-bg-blob blob-2"></div>
      
      <div className="container">
        <div className="header" style={{ position: 'relative', marginBottom: '30px' }}>
          <button 
            onClick={() => navigate(-1)} 
            style={{ 
              position: 'absolute', 
              left: '0', 
              top: '50%', 
              transform: 'translateY(-50%)',
              background: 'none',
              border: 'none',
              fontSize: '1.5rem',
              color: 'var(--text-dark)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              zIndex: 10
            }}
          >
            &#8592;
          </button>
          <motion.h2 
            className="main-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={titleVariants}
          >
            {title}
          </motion.h2>
        </div>

        <motion.div 
          className="grid-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
        >
          {items.map((item, i) => (
            <FashionCard 
              key={i}
              index={item.index}
              title={item.title}
              image={item.image}
              backgroundColor={item.backgroundColor}
              layoutType={item.layoutType}
              link={item.link}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default IndoWesternSection;
