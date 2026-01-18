import { useState, useEffect } from 'react';
import './Pricing.css';

const Pricing = () => {
    const [size, setSize] = useState(5);
    const [color, setColor] = useState('bw');
    const [price, setPrice] = useState(0);

    useEffect(() => {
        // Base price $50
        // $10 per cm
        // 1.5x for Color
        let calcPrice = 50 + (size * 10);
        if (color === 'color') {
            calcPrice = calcPrice * 1.5;
        }
        setPrice(Math.round(calcPrice));
    }, [size, color]);

    return (
        <section id="pricing" className="pricing">
            <div className="container">
                <div className="section-header">
                    <h2>Estimate Your Tattoo</h2>
                    <p>Transparent pricing based on size and complexity.</p>
                </div>

                <div className="pricing-grid">
                    <div className="pricing-calculator">
                        <h3>Pricing Calculator</h3>

                        <div className="form-group">
                            <label htmlFor="size">Size (cm) - Approx: {size}cm</label>
                            <input
                                type="range"
                                id="size"
                                min="1"
                                max="50"
                                value={size}
                                onChange={(e) => setSize(parseInt(e.target.value))}
                            />
                            <div className="size-visual">
                                <div
                                    className="size-box"
                                    style={{ width: `${size * 5}px`, height: `${size * 5}px` }}
                                ></div>
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Style</label>
                            <div className="radio-group">
                                <label className={`radio-option ${color === 'bw' ? 'active' : ''}`}>
                                    <input
                                        type="radio"
                                        name="color"
                                        value="bw"
                                        checked={color === 'bw'}
                                        onChange={() => setColor('bw')}
                                    />
                                    Black & Grey
                                </label>
                                <label className={`radio-option ${color === 'color' ? 'active' : ''}`}>
                                    <input
                                        type="radio"
                                        name="color"
                                        value="color"
                                        checked={color === 'color'}
                                        onChange={() => setColor('color')}
                                    />
                                    Full Color
                                </label>
                            </div>
                        </div>

                        <div className="estimated-price">
                            <span>Estimated Price</span>
                            <div className="price-value">${price}</div>
                        </div>
                    </div>

                    <div id="booking" className="booking-form">
                        <h3>Book Session</h3>
                        <p>Ready to get inked? Secure your spot with a deposit.</p>
                        <form onSubmit={(e) => e.preventDefault()}>
                            <div className="input-group">
                                <input type="text" placeholder="Full Name" required />
                            </div>
                            <div className="input-group">
                                <input type="email" placeholder="Email Address" required />
                            </div>
                            <div className="input-group">
                                <input type="tel" placeholder="Phone Number" required />
                            </div>
                            <div className="input-group">
                                <select>
                                    <option value="">Placement</option>
                                    <option value="arm">Arm</option>
                                    <option value="leg">Leg</option>
                                    <option value="back">Back</option>
                                    <option value="chest">Chest</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <button type="submit" className="btn btn-primary full-width">
                                Book for ${price}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
