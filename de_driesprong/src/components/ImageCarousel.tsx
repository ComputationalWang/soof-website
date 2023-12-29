import { useState, useEffect } from 'react';
import { dagingsmoor, spring_roll } from '../assets';
import { advertisement_text } from '../constants';
import styles from '../style';

const ImageCarousel = () => {
  const images = [
    {
      src: {dagingsmoor}.dagingsmoor,
      caption: `${advertisement_text.content}`,
    },
    {
      src: {spring_roll}.spring_roll,
      caption: 'Caption 2',
    }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Automatically go to the next image
      nextImage();
    }, 8000); // Change the interval as needed (in milliseconds)

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div style={{ position: 'relative', textAlign: 'center' }}>
      <button style={{ position: 'absolute', left: 0 }} onClick={prevImage}>&lt;</button>
      <img src={images[currentImageIndex].src} alt={`Image ${currentImageIndex + 1}`} />
      <p>{images[currentImageIndex].caption}</p>
      <button style={{ position: 'absolute', right: 0 }} onClick={nextImage}>&gt;</button>
    </div>
    
  );
};

export default ImageCarousel;