import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h4>Inked Studio</h4>
                        <p>Premium specialized tattooing.</p>
                    </div>
                    <div className="footer-section">
                        <h4>Contact</h4>
                        <p>123 Ink Street, Art District</p>
                        <p>booking@inkedstudio.com</p>
                        <p>(555) 123-4567</p>
                    </div>
                    <div className="footer-section">
                        <h4>Hours</h4>
                        <p>Mon - Fri: 12pm - 8pm</p>
                        <p>Sat - Sun: Appointment Only</p>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2026 Mutlu Kurt. Licensed under MIT.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
