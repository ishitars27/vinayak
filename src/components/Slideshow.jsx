import React, { useState, useEffect } from "react";
import "../styles/slideshow.css"
const images = [
    "/bullet1.jpg",
    "/bullet2.jpg",
    "/bullet3.jpg",
    "/bullet4.jpg",
    "/bullet5.jpg",
    "/bullet6.jpg",
    "/bullet7.jpg",
    "/bullet8.jpg",
    "/bullet9.jpg",
    "/bullet10.jpg",
    "/bullet11.jpg",
    "/bullet12.jpg"
];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="slideshow">
      <img src={images[currentIndex]} alt="Slideshow" className="slideshow-image" />
    </div>
  );
};

export default Slideshow;
