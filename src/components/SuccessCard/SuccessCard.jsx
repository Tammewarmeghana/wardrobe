import React from 'react';
import './SuccessCard.css';

const SuccessCard = ({ 
  title = "Appointment Booked Successfully", 
  description = "Your appointment has been confirmed. We look forward to seeing you.",
  dateText,
  timeText,
  onClose,
  showOverlay = true
}) => {
  
  const CardContent = (
    <div className="success-card-container">
      <div className="success-icon-wrapper">
        <svg 
          className="success-icon" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      </div>
      
      <h2 className="success-title">{title}</h2>
      <p className="success-desc">{description}</p>
      
      {(dateText || timeText) && (
        <div className="success-details">
          {dateText && <div><strong>Date:</strong> {dateText}</div>}
          {timeText && <div style={{ marginTop: '8px' }}><strong>Time:</strong> {timeText}</div>}
        </div>
      )}

      {onClose && (
        <button className="success-button" onClick={onClose}>
          Continue
        </button>
      )}
    </div>
  );

  // If overlay is enabled, wrap the card inside a fixed overlay
  if (showOverlay) {
    return (
      <div className="success-card-overlay">
        {CardContent}
      </div>
    );
  }

  // Otherwise just render the card itself (for inline use in Thank You pages)
  return CardContent;
};

export default SuccessCard;
