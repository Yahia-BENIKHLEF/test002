import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser, faTimes } from '@fortawesome/free-solid-svg-icons';
import 'swiper/swiper-bundle.css';




const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [loginFormActive, setLoginFormActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const toggleLoginForm = () => {
    setLoginFormActive(!loginFormActive);
  };

  return (
    <header className="header">
      <div id="menu-btn" onClick={toggleMenu}>
        <FontAwesomeIcon icon={menuActive ? faTimes : faBars} />
      </div>

      <a href="/" className="logo">
        <span>Re</span>venge
      </a>

      <nav className={`navbar ${menuActive ? 'active' : ''}`}>
        <a href="#vehicules" id="no">nouveautés</a>
        <a href="#A">voitures</a>
        <a href="#services">services</a>
        <a href="#B">pièces</a>
        <a href="#recherche" id="co">recherche</a>
      </nav>

      <div id="login-btn" onClick={toggleLoginForm}>
        <button className="btn" id="con">connecter</button>
        <FontAwesomeIcon icon={faUser} />
      </div>

      {loginFormActive && (
        <div className="login-form-container active">
          <span className="fas fa-times" id="close-login-form" onClick={toggleLoginForm}></span>
          <form>
            <h3 id="conn">connection</h3>
            <input type="email" placeholder="email" className="box" required />
            <input type="password" placeholder="password" className="box" required />
            <input type="submit" value="connection" className="btn" />
            <p><a href="#creer-compte" id="cr">créer un compte</a></p>
            <p><a href="#mot-de-passe" id="cr">mot de passe oublié</a></p>
          </form>
        </div>
      )}
    </header>
  );
};
export default Header;

