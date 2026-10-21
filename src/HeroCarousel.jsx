
import { useEffect, useState } from 'react';
import './HeroCarousel.css';

const slides = [
  {
    titleStart: 'Empower your ',
    highlight: 'Financial',
    titleEnd: ' Journey.',
    description:
      'Experience Professional Investment and Trading advisory across asset classes spanning Global Markets — using single platform.',
    image: '/images/financial-city.png',
  },
  {
    titleStart: 'Unlock ',
    highlight: 'strategic growth',
    titleEnd: ' in global markets.',
    description:
      'Gain personalized trading and investment advisory services designed to maximize returns, mitigate risks, and build long-term financial freedom.',
    image: '/images/golf-course.png',
  },
];

function HeroCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const previousSlide = () => {
    setActiveSlide((current) =>
      (current - 1 + slides.length) % slides.length
    );
  };

  const nextSlide = () => {
    setActiveSlide((current) => (current + 1) % slides.length);
  };

  return (
    <section className="hero-carousel">
      {slides.map((slide, index) => (
       <div
  key={slide.titleStart}
  className={`hero-slide ${activeSlide === index ? 'active' : ''}`}
  style={{
    backgroundImage: `url("${slide.image}")`,
    transform: `translateX(${(index - activeSlide) * 100}%)`,
  }}
  aria-hidden={activeSlide !== index}
>
          <div className="hero-content">
            <h1>
              {slide.titleStart}
              <span>{slide.highlight}</span>
              {slide.titleEnd}
            </h1>

            <p className="hero-description">{slide.description}</p>

            <div className="hero-buttons">
              <a className="hero-button primary" href="#signup">
                Open account
              </a>
              <a className="hero-button secondary" href="#about">
                Discover account
              </a>
            </div>

            <p className="hero-risk">
              <span>*</span>Investment and Trading in Financial Market/CFDs is
              subject to risk.
            </p>

            <div className="hero-features">
              <div className="hero-feature">
                <span className="hero-feature-icon">♙</span>
                <span>Enhanced Tools</span>
              </div>
              <div className="hero-feature">
                <span className="hero-feature-icon">▤</span>
                <span>Trading Guides</span>
              </div>
              <div className="hero-feature">
                <span className="hero-feature-icon">ϟ</span>
                <span>Fast execution</span>
              </div>
              <div className="hero-feature">
                <span className="hero-feature-icon">%</span>
                <span>0% Commission</span>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        className="hero-arrow hero-arrow-left"
        onClick={previousSlide}
        aria-label="Previous slide"
        type="button"
      >
        ‹
      </button>

      <button
        className="hero-arrow hero-arrow-right"
        onClick={nextSlide}
        aria-label="Next slide"
        type="button"
      >
        ›
      </button>

      <div className="hero-dots">
        {slides.map((slide, index) => (
          <button
            key={slide.titleStart}
            className={activeSlide === index ? 'active' : ''}
            onClick={() => setActiveSlide(index)}
            aria-label={`Show slide ${index + 1}`}
            aria-current={activeSlide === index ? 'true' : undefined}
            type="button"
          />
        ))}
      </div>
    </section>
  );
}

export default HeroCarousel;
