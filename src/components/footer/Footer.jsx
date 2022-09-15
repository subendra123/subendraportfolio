import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <>
    <footer className="footer">
    <div className="footer__container container">
    <h1 className="footer__title">Subendra</h1>
   
   <ul className="footer__list">
        <li>
            <a href="#about" className="footer__link">About</a>
        </li>
        <li>
            <a href="#project" className="footer__link">Projects</a>
        </li>
        <li>
            <a href="#testimonials" className="footer__link">Testimonials</a>
        </li>
   </ul>

   <div className="footer__social">
   <a href="https://www.facebook.com/subendra.mandal/" target="_blank" className="footer__social__link">
   <i class="bx bxl-facebook"></i>
   </a>

   <a href="" target="_blank" className="footer__social__link">
   <i class="bx bxl-instagram"></i>
   </a>

   <a href="#" target="_blank" className="footer__social__link">
   <i class="bx bxl-twitter"></i>
   </a>
   <a href="https://github.com/subendra123" target="_blank" className="footer__social__link">
   <i class="bx bxl-github"></i>
   </a>

   </div>
   <span className='footer__copy'>&#169; Subendra. All rigths reserved</span>
    </div>
    </footer>
    </>
  )
}

export default Footer