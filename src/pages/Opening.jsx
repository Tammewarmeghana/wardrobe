import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './opening.css';

function Opening() {
    const navigate = useNavigate();

    useEffect(() => {
        const wrapper = document.querySelector('.opening-page-wrapper');
        const ANIMATION_DURATION = 2000;
        const REDIRECT_DELAY = 4000; // Time to see the final frock state before redirect

        const timer = setTimeout(() => {
            wrapper?.classList.add('state-transformed');
        }, ANIMATION_DURATION);

        const redirectTimer = setTimeout(() => {
            wrapper?.classList.add('animate-out');
            setTimeout(() => {
                navigate('/fullpage');
            }, 1000);
        }, REDIRECT_DELAY);

        return () => {
            clearTimeout(timer);
            clearTimeout(redirectTimer);
            wrapper?.classList.remove('state-transformed');
        };
    }, [navigate]);

    return (
        <div className="opening-page-wrapper">
            
            {/* Top Right Navigation */}
            {/* <div className="opening-nav" style={{ justifyContent: 'flex-end', gap: '30px' }}>
                <Link to="/fullpage" className="nav-link">My Wardrobe</Link>
                <Link to="/login" className="nav-link nav-btn">Login</Link>
                <Link to="/signup" className="nav-link nav-btn">Sign Up</Link>
            </div> */}

            {/* Background glow elements for premium look */}
            <div className="bg-glow glow-1"></div>
            <div className="bg-glow glow-2"></div>

            <div className="scene-container">
                {/* Glassmorphic stage */}
                <div className="glass-stage" id="stage">

                    {/* Setup Frame: Machine + Fabric */}
                    <div className="state-container machine-state" id="machineContainer">

                        {/* The raw fabric laying under the machine */}
                        <svg viewBox="0 0 100 100" className="raw-fabric element-center">
                            {/* Flowy deep pink cloth */}
                            <path d="M 25 82 Q 50 78 75 82 Q 90 85 80 92 Q 50 96 20 92 Q 10 85 25 82 Z"
                                fill="url(#clothGrad)" />
                            <defs>
                                <linearGradient id="clothGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#ffcad4" />
                                    <stop offset="100%" stopColor="#b5838d" />
                                </linearGradient>
                            </defs>
                        </svg>

                        {/* Classic Vintage Sewing Machine */}
                        <img src="https://res.cloudinary.com/dugksxwkr/image/upload/v1775740106/Screenshot_2026-04-09_183210-removebg-preview_uezgns.png"
                            className="sewing-machine element-center" alt="Vintage Sewing Machine" style={{ objectFit: 'contain' }} />
                    </div>

                    {/* Resolution Frame: Frock */}
                    <div className="state-container frock-state" id="frockContainer">
                        <img src="https://res.cloudinary.com/dugksxwkr/image/upload/v1775813117/863cd3e1-a09c-4b16-85b1-6804e3708edc-removebg-preview_ikkskn.png"
                            className="frock element-center" alt="Elegant Dress Design" style={{ objectFit: 'contain' }} />
                    </div>

                </div>

                {/* Typography / Brand Name */}
                <div className="brand-container">
                    <h1 className="brand-name"> Queen's Wardrobe</h1>
                    {/* <p className="brand-subtitle">HAUTE COUTURE</p> */}
                </div>
            </div>
        </div>
    );
}

export default Opening;
