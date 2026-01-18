import './Hero.css';
import heroImage from '../assets/hero.png';

const Hero = () => {
    return (
        <section className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
            <div className="hero-overlay"></div>
            <div className="container hero-content">
                <h1>Art That Bleeds Soul</h1>
                <p>Premium Custom Tattooing by Master Artist</p>
                <div className="hero-buttons">
                    <a href="#portfolio" className="btn">View Work</a>
                    <a href="#booking" className="btn btn-primary">Book Session</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
