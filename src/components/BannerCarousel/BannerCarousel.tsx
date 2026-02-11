import { useEffect, useState } from 'react';
import './BannerCarousel.css';
import img1 from '../../assets/carousel/carou-777.webp';
import img2 from '../../assets/carousel/carou-arrow.webp';
import img3 from '../../assets/carousel/carou-clown.webp';
import img4 from '../../assets/carousel/carou-tiger.webp';
import img5 from '../../assets/carousel/carou-zues.webp';

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
];

const BannerCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);

        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % images.length);
        setFade(true);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="banner-carousel">
      <img
        src={images[currentIndex]}
        alt="Games Banner"
        className={`banner-image ${fade ? 'fade-in' : 'fade-out'}`}
      />

      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerCarousel;

