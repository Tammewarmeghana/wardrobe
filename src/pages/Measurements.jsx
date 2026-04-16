import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './measurements.css';

function Measurements() {
    const navigate = useNavigate();
    
    // Check local storage for initial state
    const getInitialState = () => {
        const savedData = localStorage.getItem('measurementData');
        if (savedData) {
            return JSON.parse(savedData);
        }
        return {
            chest: '',
            waist: '',
            hips: '',
            shoulder: '',
            sleeveLength: '',
            armLength: '',
            neck: '',
            inseam: '',
            height: '',
            notes: '',
            customization: ''
        };
    };

    const [formData, setFormData] = useState(getInitialState());
    const [imagePreview, setImagePreview] = useState(localStorage.getItem('measurementImage') || null);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    // Save to local storage on change
    useEffect(() => {
        localStorage.setItem('measurementData', JSON.stringify(formData));
        if (imagePreview) {
            localStorage.setItem('measurementImage', imagePreview);
        } else {
            localStorage.removeItem('measurementImage');
        }
    }, [formData, imagePreview]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        // Basic numbers only validation for specific fields
        if (name !== 'notes' && name !== 'customization' && value !== '' && !/^\d*\.?\d*$/.test(value)) {
            return;
        }
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        
        // Clear error when user types
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: null }));
        }
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
                setErrors(prev => ({ ...prev, image: null }));
            };
            reader.readAsDataURL(file);
        } else {
            setErrors(prev => ({ ...prev, image: 'Please upload a valid JPG or PNG image.' }));
        }
    };

    const handleRemoveImage = () => {
        setImagePreview(null);
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.chest) newErrors.chest = 'Chest measurement is required';
        if (!formData.waist) newErrors.waist = 'Waist measurement is required';
        if (!formData.hips) newErrors.hips = 'Hips measurement is required';
        if (!formData.customization || formData.customization.trim() === '') {
            newErrors.customization = 'Customization description is required';
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (validateForm()) {
            setIsSubmitting(true);
            
            // Simulate processing 
            setTimeout(() => {
                setIsSubmitting(false);
                setShowSuccess(true);
                
                // Keep data in local storage as requested
                setTimeout(() => {
                    navigate('/fullpage'); 
                }, 3000);
            }, 1000);
        }
    };

    return (
        <div className="measurement-wrapper">
            <div className="measurement-card">
                <div className="measurement-header">
                    <h1>Custom Measurements</h1>
                    <p>Provide your exact dimensions for a perfect tailor-made fit.</p>
                </div>
                
                <form className="measurement-form" onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-group">
                            <label>Chest (inches) <span>*</span></label>
                            <input 
                                type="text"
                                name="chest"
                                value={formData.chest}
                                onChange={handleChange}
                                placeholder="e.g. 34"
                            />
                            {errors.chest && <span className="error-message">{errors.chest}</span>}
                        </div>
                        <div className="form-group">
                            <label>Waist (inches) <span>*</span></label>
                            <input 
                                type="text"
                                name="waist"
                                value={formData.waist}
                                onChange={handleChange}
                                placeholder="e.g. 28"
                            />
                            {errors.waist && <span className="error-message">{errors.waist}</span>}
                        </div>
                        <div className="form-group">
                            <label>Hips (inches) <span>*</span></label>
                            <input 
                                type="text"
                                name="hips"
                                value={formData.hips}
                                onChange={handleChange}
                                placeholder="e.g. 38"
                            />
                            {errors.hips && <span className="error-message">{errors.hips}</span>}
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label>Shoulder (inches)</label>
                            <input type="text" name="shoulder" value={formData.shoulder} onChange={handleChange} placeholder="e.g. 15" />
                        </div>
                        <div className="form-group">
                            <label>Sleeve Length (inches)</label>
                            <input type="text" name="sleeveLength" value={formData.sleeveLength} onChange={handleChange} placeholder="e.g. 22" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label>Arm Length (inches)</label>
                            <input type="text" name="armLength" value={formData.armLength} onChange={handleChange} placeholder="e.g. 24" />
                        </div>
                        <div className="form-group">
                            <label>Neck (inches)</label>
                            <input type="text" name="neck" value={formData.neck} onChange={handleChange} placeholder="e.g. 14" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label>Inseam (inches)</label>
                            <input type="text" name="inseam" value={formData.inseam} onChange={handleChange} placeholder="e.g. 30" />
                        </div>
                        <div className="form-group">
                            <label>Overall Height (inches)</label>
                            <input type="text" name="height" value={formData.height} onChange={handleChange} placeholder="e.g. 64" />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Additional Notes</label>
                        <textarea 
                            name="notes"
                            value={formData.notes}
                            onChange={handleChange}
                            placeholder="Please include any specific fitting preferences or details..."
                        ></textarea>
                    </div>

                    <div className="image-upload-section">
                        {!imagePreview ? (
                            <label className="upload-label">
                                <div className="upload-icon">📷</div>
                                <span>Upload Reference Image (JPG/PNG)</span>
                                <input type="file" accept="image/png, image/jpeg" className="file-input" onChange={handleImageChange} />
                            </label>
                        ) : (
                            <div className="image-preview-container">
                                <img src={imagePreview} alt="Reference Preview" className="image-preview" />
                                <button type="button" onClick={handleRemoveImage} className="change-image-btn">Remove Image</button>
                            </div>
                        )}
                        {errors.image && <span className="error-message">{errors.image}</span>}
                    </div>

                    <div className="form-group">
                        <label>Describe Your Customization <span>*</span></label>
                        <textarea 
                            name="customization"
                            value={formData.customization}
                            onChange={handleChange}
                            placeholder="Describe how you want your outfit to be customized (fit, style, fabric, sleeve type, length, etc.)"
                        ></textarea>
                        {errors.customization && <span className="error-message">{errors.customization}</span>}
                    </div>

                    <button type="submit" className="submit-btn" disabled={isSubmitting}>
                        {isSubmitting ? 'Submitting...' : 'Submit Measurements'}
                    </button>
                </form>

                {showSuccess && (
                    <div className="success-overlay">
                        <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                        <h2>Success!</h2>
                        <p>Your measurements have been securely saved.</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Measurements;
