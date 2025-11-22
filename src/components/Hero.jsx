import { useEffect, useState } from "react";

const rotatingWords = ["Delicate.", "Minimal.", "Aesthetic.", "Affordable."];

const images = [
  "/assets/images/Goldheartnecklace1.JPG",
  "/assets/images/Haloheartdoublelayerbracelet.JPG",
  "/assets/images/Cloverdoublechainnecklace.JPG",
  "/assets/images/Butterflyychainnecklace.JPG",
];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);

  // Rotate text every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Rotate images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const goToShop = () =>
    document
      .getElementById("necklaces")
      ?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="hero-container">
      {/* Sliding Text */}
      <h1 className="hero-title">{rotatingWords[wordIndex]}</h1>
      <p className="hero-subtext">
        Minimal fashion jewellery priced for students.
      </p>

      {/* Buttons */}
      <div className="hero-buttons">
        <button className="btn-accent" onClick={() => goToShop()}>
          Shop Now
        </button>
        <button className="btn-outline" onClick={() => goToShop()}>
          Browse All
        </button>
      </div>

      {/* Image Slider */}
      <div className="hero-slider">
        <img src={images[imageIndex]} alt="slider" className="hero-image" />
      </div>
    </section>
  );
}
