import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FiMenu, FiX, FiCamera, FiPhone } from 'react-icons/fi';
import SearchBar from './SearchBar';
import WishlistIcon from './WishlistIcon';
import CartIcon from './CartIcon';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const fileInputRef = useRef(null);

  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);

      if (window.innerWidth <= 900) {
        if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
          setIsHidden(true); // Scrolling down
        } else {
          setIsHidden(false); // Scrolling up
        }
      } else {
        setIsHidden(false); // Always visible on desktop
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    setScrolled(window.scrollY > 50);
    setIsMenuOpen(false); // Close mobile menu when user starts scrolling

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCameraClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log('Image selected for visual search:', file.name);
      navigate(`/search?visual=true&file=${encodeURIComponent(file.name)}`);
    }
  };

  // Show navbar ONLY on these specific premium pages
  const visibleRoutes = ['/fullpage', '/collection'];
  const isVisible = visibleRoutes.includes(location.pathname);
  
  if (!isVisible) return null;

  return (
    <nav className={`elegant-navbar ${scrolled ? 'scrolled' : ''} ${mounted ? 'navbar-visible' : ''}`}>
      <div className="hamburger-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <FiX /> : <FiMenu />}
      </div>

      <div className={`nav-left ${isMenuOpen ? 'mobile-open' : ''}`}>
        <Link 
          to="/fullpage" 
          className="nav-link-elegant anim-staggered"
          style={{ '--delay': '0.1s' }}
          onClick={() => setIsMenuOpen(false)}
        >
          HOME
        </Link>
        <Link 
          to="/collection" 
          className="nav-link-elegant anim-staggered"
          style={{ '--delay': '0.2s' }}
          onClick={() => setIsMenuOpen(false)}
        >
          COLLECTIONS
        </Link>
      </div>

      <div className="nav-center">
        <Link to="/fullpage" className="brand-logo anim-logo" onClick={() => setIsMenuOpen(false)}>
          Queen's Wardrobe
        </Link>
      </div>

      <div className="nav-right">
        <div className="search-wrapper anim-staggered" style={{ '--delay': '0.3s' }}>
          <SearchBar />
        </div>
        <div 
          className="icon-wrapper anim-staggered" 
          style={{ '--delay': '0.4s' }}
          title="Picture Search" 
          onClick={handleCameraClick}
        >
          <FiCamera />
        </div>
        <input 
          type="file" 
          accept="image/*" 
          capture="environment" 
          ref={fileInputRef} 
          style={{ display: 'none' }} 
          onChange={handleFileChange}
        />
        <Link 
          to="/contact" 
          className="icon-wrapper anim-staggered" 
          style={{ '--delay': '0.5s' }}
          title="Call Us"
        >
          <FiPhone />
        </Link>
        <div className="anim-staggered" style={{ '--delay': '0.6s' }}>
           <WishlistIcon />
        </div>
        <div className="anim-staggered" style={{ '--delay': '0.7s' }}>
           <CartIcon />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
