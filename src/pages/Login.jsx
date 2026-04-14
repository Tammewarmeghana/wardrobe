import React from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {
    const navigate = useNavigate();

    return (
        <div className="login-page-wrapper">
            <div className="background-container">
                <div className="split-layout">
                    <div className="left-panel">
                        {/* The 2nd image is set as background here via CSS */}
                    </div>
                    <div className="right-panel">
                        <div className="login-container">
                            <div className="login-header">
                                <h1>Queen <br /><span className="brand-accent">wardrobe</span></h1>
                                <p className="subtitle">to your personal wardrobe</p>
                            </div>

                            <div className="form-section">
                                <h2 className="form-title">Login</h2>
                                <p className="form-subtitle">Welcome back! Please enter your details.</p>
                                
                                <form className="login-form" onSubmit={(e) => { e.preventDefault(); navigate('/fullpage'); }}>
                                    <div className="input-group">
                                        <label>Email</label>
                                        <input type="email" placeholder="Enter your email" required />
                                    </div>
                                    <div className="input-group">
                                        <label>Password</label>
                                        <input type="password" placeholder="••••••••" required />
                                    </div>
                                    <a href="#" className="forgot-password">Forgot password?</a>
                                    
                                    <button type="submit" className="primary-btn" style={{ width: '100%' }}>SIGN IN</button>
                                </form>

                               
                                <div className="social-login">
                                    <button type="button" className="social-btn" onClick={() => navigate('/fullpage')}>
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" style={{ width: '18px', marginRight: '8px' }} />
                                        Google
                                    </button>
                                </div>

                                <p className="footer-text">
                                    Don't have an account? <a href="#" className="link-accent">Sign up for free</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
