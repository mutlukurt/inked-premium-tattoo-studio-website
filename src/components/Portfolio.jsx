import { useState } from 'react';
import './Portfolio.css';
import backImg from '../assets/portfolio-back.png';
import shoulderImg from '../assets/portfolio-shoulder.png';
import armImg from '../assets/portfolio-arm.png';
import legImg from '../assets/portfolio-leg.png';
import waistImg from '../assets/portfolio-waist.png';
import faceImg from '../assets/portfolio-face.png';
import chestImg from '../assets/portfolio-chest.png';
import handImg from '../assets/portfolio-hand.png';

const Portfolio = () => {
    const [filter, setFilter] = useState('all');

    const works = [
        { id: 1, category: 'back', img: backImg, title: 'Dragon Back Piece' },
        { id: 2, category: 'shoulder', img: shoulderImg, title: 'Floral Shoulder' },
        { id: 3, category: 'arm', img: armImg, title: 'Japanese Sleeve' },
        { id: 4, category: 'leg', img: legImg, title: 'Traditional Dagger' },
        { id: 5, category: 'waist', img: waistImg, title: 'Ornamental Mandala' },
        { id: 6, category: 'face', img: faceImg, title: 'Geometric Face Art' },
        { id: 7, category: 'chest', img: chestImg, title: 'Neo-Trad Wolf' },
        { id: 8, category: 'hand', img: handImg, title: 'Realistic Rose' },
    ];

    const filteredWorks = filter === 'all'
        ? works
        : works.filter(work => work.category === filter);

    return (
        <section id="portfolio" className="portfolio">
            <div className="container">
                <div className="section-header">
                    <h2>Our Work</h2>
                    <p>Masterpieces etched in skin.</p>
                </div>

                <div className="portfolio-filters">
                    <button
                        className={filter === 'all' ? 'active' : ''}
                        onClick={() => setFilter('all')}
                    >All</button>
                    <button
                        className={filter === 'back' ? 'active' : ''}
                        onClick={() => setFilter('back')}
                    >Back</button>
                    <button
                        className={filter === 'shoulder' ? 'active' : ''}
                        onClick={() => setFilter('shoulder')}
                    >Shoulder</button>
                    <button
                        className={filter === 'arm' ? 'active' : ''}
                        onClick={() => setFilter('arm')}
                    >Arm</button>
                    <button
                        className={filter === 'leg' ? 'active' : ''}
                        onClick={() => setFilter('leg')}
                    >Leg</button>
                    <button
                        className={filter === 'face' ? 'active' : ''}
                        onClick={() => setFilter('face')}
                    >Face</button>
                    <button
                        className={filter === 'waist' ? 'active' : ''}
                        onClick={() => setFilter('waist')}
                    >Waist</button>
                    <button
                        className={filter === 'chest' ? 'active' : ''}
                        onClick={() => setFilter('chest')}
                    >Chest</button>
                    <button
                        className={filter === 'hand' ? 'active' : ''}
                        onClick={() => setFilter('hand')}
                    >Hand</button>
                </div>

                <div className="portfolio-grid">
                    {filteredWorks.map(work => (
                        <div key={work.id} className="portfolio-item">
                            <img src={work.img} alt={work.title} />
                            <div className="portfolio-overlay">
                                <h3>{work.title}</h3>
                                <span>{work.category}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
