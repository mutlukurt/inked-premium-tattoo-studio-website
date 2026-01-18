import './ArtistBio.css';
import artistImage from '../assets/artist.png';

const ArtistBio = () => {
    return (
        <section id="artist" className="artist-bio">
            <div className="container artist-content">
                <div className="artist-image">
                    <img src={artistImage} alt="Professional Tattoo Artist" />
                    <div className="experience-badge">
                        <span className="years">15+</span>
                        <span className="label">Years Exp.</span>
                    </div>
                </div>
                <div className="artist-info">
                    <h2>Meet The Artist</h2>
                    <h3>Alex "Ink" Vargo</h3>
                    <p>
                        With over 15 years of experience in the industry, Alex specializes in black & grey realism and intricate fine-line work.
                        His philosophy is simple: every tattoo is a collaboration, a piece of art that tells your unique story.
                    </p>
                    <p>
                        "I don't just ink skin; I craft legacies. Whether it's a full back piece or a delicate shoulder design,
                        perfection is the only standard I accept."
                    </p>
                    <div className="artist-specialties">
                        <span>Realism</span>
                        <span>Black & Grey</span>
                        <span>Fine Line</span>
                        <span>Japanese</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ArtistBio;
