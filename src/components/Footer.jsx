import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import 'swiper/swiper-bundle.css';




const Footer = () => {
  return (
    <section className="footer">
      <div className="box2-container">
        <div className="box2">
          <h3>liens rapides</h3>
          <a href="/home" className="lie"><FontAwesomeIcon icon={faArrowRight} /> accueil</a>
          <a href="/vehicules" className="lie"><FontAwesomeIcon icon={faArrowRight} /> nouveautés</a>
          <a href="/services" className="lie"><FontAwesomeIcon icon={faArrowRight} /> services</a>
          <a href="/models" className="lie"><FontAwesomeIcon icon={faArrowRight} /> modèles</a>
          <a href="/contact" className="lie"><FontAwesomeIcon icon={faArrowRight} /> contactez-Nous</a>
        </div>
        <div className="box2">
          <h3>contacts</h3>
          <a href=""><FontAwesomeIcon icon={faPhone} /> +213-21-964-365</a>
          <a href=""><FontAwesomeIcon icon={faPhone} /> +213-793-879-194</a>
          <a href=""><FontAwesomeIcon icon={faEnvelope} /> audi_dz@gmail.com</a>
          <a href=""><FontAwesomeIcon icon={faMapMarkerAlt} /> Chéraga, Alger, ALGERIE</a>
        </div>
      </div>
      <div className="share">
        <a href="https://facebook.com" className="fab fa-facebook-f"></a>
        <a href="https://twitter.com" className="fab fa-twitter"></a>
        <a href="https://instagram.com" className="fab fa-instagram"></a>
        <a href="https://youtube.com" className="fab fa-youtube"></a>
      </div>
    </section>
  );
};
export default Footer;
