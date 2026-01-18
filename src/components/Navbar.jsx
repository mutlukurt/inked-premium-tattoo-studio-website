import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    const toggleMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-content">
                <a href="#" className="logo">INKED</a>

                <div className={`hamburger ${mobileMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>

                <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
                    <li><a href="#artist" onClick={() => setMobileMenuOpen(false)}>Artist</a></li>
                    <li><a href="#portfolio" onClick={() => setMobileMenuOpen(false)}>Portfolio</a></li>
                    <li><a href="#pricing" onClick={() => setMobileMenuOpen(false)}>Pricing</a></li>
                    <li><a href="#booking" className="btn btn-primary" onClick={() => setMobileMenuOpen(false)}>Book Now</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
