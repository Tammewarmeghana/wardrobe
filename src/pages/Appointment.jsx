import React, { useState, useEffect } from 'react';
import './appointment.css';
import { useNavigate } from 'react-router-dom';
import SuccessCard from '../components/SuccessCard/SuccessCard';

const Appointment = () => {
    const navigate = useNavigate();
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [step, setStep] = useState(1);
    const [isBooked, setIsBooked] = useState(false);
    const [error, setError] = useState('');
    
    const [formData, setFormData] = useState({
        category: '',
        service: '',
        location: '',
        employee: '',
        date: '',
        time: ''
    });

    const handleNext = () => {
        if (!formData.category || !formData.service || !formData.location) {
            setError('Please select category, service, and location to proceed.');
            return;
        }
        setError('');
        setStep(2);
    };

    const handleBack = () => {
        setError('');
        setStep(1);
    };

    const handleSubmit = () => {
        if (!formData.date || !formData.time) {
            setError('Please select both a date and a time slot.');
            return;
        }
        setError('');
        setIsBooked(true);
    };

    const handleSuccessClose = () => {
        setIsBooked(false);
        navigate('/home');
    };

    // Calendar mock logic for May
    const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1);
    const timeSlots = ['09:00 AM', '10:00 AM', '11:00 AM', '01:00 PM', '02:00 PM', '03:00 PM'];

    return (
        <div className="appointment-page">
            <div className="appointment-card">
                <div className="appointment-left">
                    <img 
                        src="https://res.cloudinary.com/dodmxncwc/image/upload/v1775980865/fc5d48e17964a07b964b9d40e41047c5_a1ffmf.jpg" 
                        alt="Relaxing environment" 
                        className="appointment-img" 
                    />
                    <div className="appointment-overlay">
                        <h2>Let Your Body Rest Today</h2>
                    </div>
                </div>
                
                <div className="appointment-right">
                    {step === 1 && (
                        <div className="form-step">
                            <h3>Book Your Experience</h3>
                            
                            <div className="form-group">
                                <label>Service Category</label>
                                <select 
                                    value={formData.category} 
                                    onChange={e => setFormData({...formData, category: e.target.value})}
                                >
                                    <option value="">Select Category</option>
                                    <option value="bridal">Bridal Sessions</option>
                                    <option value="styling">Personal Styling</option>
                                    <option value="fitting">Costume Fitting</option>
                                    <option value="consultation">Fashion Consultation</option>
                                </select>
                            </div>
                            
                            <div className="form-group">
                                <label>Service</label>
                                <select 
                                    value={formData.service} 
                                    onChange={e => setFormData({...formData, service: e.target.value})}
                                >
                                    <option value="">Select Service</option>
                                    <option value="premium">Premium Suite (2 Hours)</option>
                                    <option value="standard">Standard Session (1 Hour)</option>
                                    <option value="express">Express Service (30 Mins)</option>
                                </select>
                            </div>
                            
                            <div className="form-group">
                                <label>Location</label>
                                <select 
                                    value={formData.location} 
                                    onChange={e => setFormData({...formData, location: e.target.value})}
                                >
                                    <option value="">Select Location</option>
                                    <option value="downtown">Downtown Boutique</option>
                                    <option value="uptown">Uptown Studio</option>
                                    <option value="virtual">Online Video Call</option>
                                </select>
                            </div>
                            
                            <div className="form-group">
                                <label>Employee</label>
                                <select 
                                    value={formData.employee} 
                                    onChange={e => setFormData({...formData, employee: e.target.value})}
                                >
                                    <option value="">Any Available Specialist</option>
                                    <option value="sarah">Sarah K. (Senior Stylist)</option>
                                    <option value="jessica">Jessica M. (Bridal Expert)</option>
                                    <option value="riya">Riya S. (Fashion Consultant)</option>
                                </select>
                            </div>
                            
                            {error && <p style={{ color: '#c93b4a', textAlign: 'center', marginBottom: '15px' }}>{error}</p>}
                            <button className="next-btn" onClick={handleNext}>Next</button>
                        </div>
                    )}
                    
                    {step === 2 && (
                        <div className="form-step">
                            <h3>Select Date & Time</h3>
                            
                            <div className="calendar-section">
                                <h4>May 2026</h4>
                                <div className="calendar-grid">
                                    {daysInMonth.map(day => (
                                        <button 
                                            key={day} 
                                            className={`calendar-day ${formData.date === day ? 'selected' : ''}`}
                                            onClick={() => setFormData({...formData, date: day})}
                                        >
                                            {day}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            
                            <div className="time-slots-section">
                                <h4>Available Time Slots</h4>
                                <div className="time-grid">
                                    {timeSlots.map(time => (
                                        <button 
                                            key={time} 
                                            className={`time-slot ${formData.time === time ? 'selected' : ''}`}
                                            onClick={() => setFormData({...formData, time: time})}
                                        >
                                            {time}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            
                            {error && <p style={{ color: '#c93b4a', textAlign: 'center', marginBottom: '15px' }}>{error}</p>}
                            <div className="bottom-buttons">
                                <button className="back-btn" onClick={handleBack}>Back</button>
                                <button className="next-btn" onClick={handleSubmit}>Confirm Booking</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            
            {isBooked && (
                <SuccessCard 
                    title="Appointment Booked Successfully"
                    description="Your appointment has been confirmed. We look forward to seeing you."
                    dateText={`May ${formData.date}, 2026`}
                    timeText={formData.time}
                    onClose={handleSuccessClose}
                />
            )}
        </div>
    );
};

export default Appointment;
