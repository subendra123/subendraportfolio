import React, { useState } from "react";
import "./Header.css";


const Header = () => {
  const [Toggle, showMenu] = useState(false);

  window.addEventListener("scroll", function (){
    const header = document.querySelector(".header");

    // when the scroll is higher than 200px viewport height, add the scroll-header claas to a tag with the header tag
    

    if(this.scrollY >= 80) header.classList.add
    ("scroll-header");
    else header.classList.remove("scroll-header");
});


  return (
    <>
      <header className="header">
        <nav className="nav container">
          <a href="index.html" className="nav_logo">
            Subendra
          </a>
          <div className={Toggle ? 'nav_menu show_menu' : 'nav_menu' }>
            <ul className="nav_list grid">
              <li className="nav_item">
                <a href="#home" className="nav_link active_link">
                  <i className="uil uil-estate nav__icon"></i>Home
                </a>
              </li>

              <li className="nav_item">
                <a href="#about" className="nav_link">
                  <i className="uil uil-user nav__icon"></i>About
                </a>
              </li>
              <li className="nav_item">
                <a href="#skills" className="nav_link">
                  <i className="uil uil-file-alt nav__icon"></i>Skills
                </a>
              </li>
              <li className="nav_item">
                <a href="#services" className="nav_link">
                  <i className="uil uil-briefcase-alt nav__icon"></i>Services
                </a>
              </li>
              <li className="nav_item">
                <a href="#portfolio" className="nav_link">
                  <i className="uil uil-scenery nav__icon"></i>Porftolio
                </a>
              </li>
              <li className="nav_item">
              <a href="#projects" className="nav_link">
                <i className="uil uil-message nav__icon"></i>Projects
              </a>
            </li>
              <li className="nav_item">
              <a href="#contact" className="nav_link">
                <i className="uil uil-message nav__icon"></i>Contact
              </a>
            </li>
         </ul>
         <i class="uil uil-times nav_close"  onClick={() => showMenu(!Toggle)}></i>
          </div>
          <div className="nav_toggle" onClick={() => showMenu(!Toggle)}>
          <i class="uil uil-apps"></i>
          </div>
        </nav>
     
      </header>
    </>
  );
};

export default Header;
