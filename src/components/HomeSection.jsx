import React from 'react';
import 'swiper/swiper-bundle.css';





const HomeSection = () => {
  return (
    <section className="home" id="home">
      <h1 className="home-parallax">
        <span className="bien" id="hello">Bienvenue Chez</span>
        <span> Audi</span>
      </h1>
      <img className="home-parallax1" src="imag.png" alt="Audi Car" />
    </section>
  );
};
export default HomeSection;
