import React from 'react';
import { useNavigate } from 'react-router-dom';
import FashionCard from './FashionCard';

const IndoWesternSection = ({ title, items }) => {
  const navigate = useNavigate();

  return (
    <section className="container">
      <div className="header" style={{ position: 'relative' }}>
        <button 
          onClick={() => navigate(-1)} 
          style={{ 
            position: 'absolute', 
            left: '20px', 
            top: '50%', 
            transform: 'translateY(-50%)',
            background: 'none',
            border: 'none',
            fontSize: '1.5rem',
            color: 'var(--text-dark)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          &#8592;
        </button>
        <h2 className="main-title">{title}</h2>
      </div>
      <div className="grid-container">
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
      </div>
    </section>
  );
};

export default IndoWesternSection;
