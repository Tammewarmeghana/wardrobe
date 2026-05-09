import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const FashionCard = ({ index, title, image, backgroundColor, layoutType, link }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (link) {
      if (link.startsWith('/')) {
        navigate(link);
      } else {
        window.location.href = link;
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const renderContent = () => {
    switch (String(layoutType)) {
      case '1':
        return (
          <div className="panel-content">
            <h3 className="serif-title" style={{ position: 'absolute', top: '40%', left: '20px', transform: 'translateY(-50%)', whiteSpace: 'pre-line', zIndex: 2 }}>{title}</h3>
            {image && <div className="image-box" style={{ backgroundImage: `url(${image})`, position: 'absolute', right: '-10px', bottom: '0', width: '85%', height: '70%', backgroundSize: 'contain', backgroundPosition: 'right bottom', zIndex: 1 }}></div>}
          </div>
        );
      case '2':
        return (
          <>
            <div className="top-half flex-col-center" style={{ height: '30%' }}>
              <h3 className="serif-title txt-center" style={{ whiteSpace: 'pre-line', zIndex: 2, position: 'relative' }}>{title}</h3>
            </div>
            {image && <div className="bottom-half image-box full-width" style={{ height: '70%', backgroundSize: 'contain', backgroundPosition: 'center bottom', backgroundImage: `url(${image})`, zIndex: 1, position: 'relative' }}></div>}
          </>
        );
      case '3':
        return (
          <>
            <div className="overlay-left-box" style={{ zIndex: 2 }}>
              <h3 className="serif-title vertical-text" style={{ whiteSpace: 'pre-line' }}>{title}</h3>
            </div>
            {image && <div className="full-bg-image" style={{ width: '80%', backgroundImage: `url(${image})`, backgroundSize: 'contain', backgroundPosition: 'center bottom', zIndex: 1 }}></div>}
          </>
        );
      case '4':
        return (
          <>
            {image && <div className="left-image full-height-img" style={{ width: '65%', backgroundImage: `url(${image})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'contain', margin: '15px 0', zIndex: 1 }}></div>}
            <div className="right-text flex-col-center" style={{ width: '35%', zIndex: 2, position: 'relative' }}>
              <h3 className="serif-title" style={{ whiteSpace: 'pre-line' }}>{title}</h3>
            </div>
          </>
        );
      case '5':
        return (
          <>
            <div style={{ position: 'absolute', top: '50%', left: '20px', transform: 'translateY(-50%)', zIndex: 2 }}>
              <h3 className="serif-title" style={{ whiteSpace: 'pre-line' }}>{title}</h3>
            </div>
            {image && <div className="image-box full-width" style={{ position: 'absolute', right: 0, bottom: 0, height: '70%', backgroundImage: `url(${image})`, backgroundSize: 'contain', backgroundPosition: 'right bottom', zIndex: 1 }}></div>}
          </>
        );
      case '6':
        return (
          <>
            {image && <div className="left-image full-height-img" style={{ width: '75%', backgroundImage: `url(${image})`, backgroundPosition: 'center bottom', backgroundRepeat: 'no-repeat', backgroundSize: 'contain', zIndex: 1 }}></div>}
            <div className="right-bottom-text">
              <h3 className="serif-title" style={{ whiteSpace: 'pre-line' }}>{title}</h3>
            </div>
          </>
        );
      case '7':
        return (
          <>
            <div className="absolute-top-left" style={{ zIndex: 2 }}>
              <h3 className="serif-title" style={{ whiteSpace: 'pre-line' }}>{title}</h3>
            </div>
            {image && <div className="image-box full-width" style={{ position: 'absolute', bottom: 0, height: '65%', backgroundImage: `url(${image})`, backgroundSize: 'contain', backgroundPosition: 'center bottom', zIndex: 1 }}></div>}
          </>
        );
      case '8':
        return (
          <>
            <div className="full-width" style={{ position: 'absolute', top: '20px', left: '0', textAlign: 'center', zIndex: 2 }}>
              <h3 className="serif-title" style={{ whiteSpace: 'pre-line', color: 'var(--text-dark)', textShadow: '0 0 10px white' }}>{title}</h3>
            </div>
            {image && <div className="image-box full-width" style={{ position: 'absolute', bottom: 0, height: '75%', backgroundImage: `url(${image})`, backgroundSize: 'contain', backgroundPosition: 'center bottom', zIndex: 1 }}></div>}
          </>
        );
      default:
        return (
          <div className="panel-content flex-col-center" style={{ padding: '20px', height: '100%', zIndex: 2, position: 'relative' }}>
            <h3 className="serif-title txt-center" style={{ whiteSpace: 'pre-line' }}>{title}</h3>
            {image && <div className="image-box full-width" style={{ flexGrow: 1, backgroundImage: `url(${image})`, zIndex: 1, backgroundSize: 'contain' }}></div>}
          </div>
        );
    }
  };

  const getPanelClass = () => {
    const typeStr = String(layoutType);
    let extraClasses = '';
    if (typeStr === '2') extraClasses += ' flex-col';
    if (typeStr === '4' || typeStr === '6') extraClasses += ' flex-row';
    if (typeStr === '8') extraClasses += ' flex-col-center';
    return `panel panel-0${typeStr}${extraClasses}`;
  };

  return (
    <motion.div 
      className={getPanelClass()}
      onClick={handleClick}
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      whileHover={{ 
        y: -15, 
        scale: 1.02,
        transition: { duration: 0.4, ease: "easeOut" }
      }}
      style={{ 
        backgroundColor: backgroundColor || 'var(--cream)', 
        cursor: link ? 'pointer' : 'default',
        transformOrigin: 'center bottom'
      }}
    >
      <div className="panel-number">{index}</div>
      {renderContent()}
    </motion.div>
  );
};

export default FashionCard;
