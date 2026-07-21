import { useState } from "react";

import slide1 from "../assets/hero1.jpg";


const slides = [
  {
    image: slide1,
    title: "KAVYA",
    subtitle: "CONSULATANCY SERVICES",
    desc: "Connecting Talent with the Right Opportunities.",
  },

];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((current + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  return (
    <section className="hero">
      <button className="arrow left" onClick={prevSlide}>
        &#10094;
      </button>

      <div className="hero-content">
        <div className="hero-text">
          <h1>{slides[current].title}</h1>

          <h2>{slides[current].subtitle}</h2>

          <p>{slides[current].desc}</p>

          <div className="buttons">
            <button className="apply">APPLY NOW</button>
            <button className="contact">CONTACT US</button>
          </div>
        </div>

        <div className="hero-image">
          <img src={slides[current].image} alt="Hero" />
        </div>
      </div>

      <button className="arrow right" onClick={nextSlide}>
        &#10095;
      </button>

      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={current === index ? "dot active" : "dot"}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </section>
  );
}