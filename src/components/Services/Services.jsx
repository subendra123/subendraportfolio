import React from "react";
import { useState } from "react";
import "./Services.css";

const Services = () => {
  const [toggleState, setToggleStae] = useState(0);

  const toggleTab = (index) => {
    setToggleStae(index);
  };

  return (
    <section className="services service" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What i offer</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">
              Web <br /> Designing
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(1)}>
            View More
            <i className="uil uil-arrow-right services__button_icon"></i>
          </span>

          <div
            className={
              toggleState === 1
                ? "services__modal active_model"
                : "services__modal"
            }
          >
            <div className="services__modal_content">
              <i
                className="uil uil-times services_modal_close"
                onClick={() => toggleTab(0)}
              ></i>

              <h3 className="services__modal_title">Web Designing</h3>
              <p className="services__modal-descripton">
                Subendra Service with more than 3 years of experience.Providing quality
                work to clients and companies.
              </p><br/>

              <ul className="services__modal_services grid">
                <li className="services__modal_service">
                  <i className="uil uil-check-circle services__modal_icon"></i>
                  <p className="services__modal_info">
                    develope the user interface
                  </p>
                </li>

                <li className="services__modal_service">
                  <i className="uil uil-check-circle services__modal_icon"></i>
                  <p className="services__modal_info">Web page development.</p>
                </li>

                <li className="services__modal_service">
                  <i className="uil uil-check-circle services__modal_icon"></i>
                  <p className="services__modal_info">
                    I create ux element interactions.
                  </p>
                </li>

                <li className="services__modal_service">
                  <i className="uil uil-check-circle services__modal_icon"></i>
                  <p className="services__modal_info">
                    I position your company brand.
                  </p>
                </li>

                <li className="services__modal_service">
                  <i className="uil uil-check-circle services__modal_icon"></i>
                  <p className="services__modal_info">
                    Design and mockups of products for companies.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">
              UI / UX <br /> Engineer
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(2)}>
            View More
            <i className="uil uil-arrow-right services__button_icon"></i>
          </span>

          <div
            className={
              toggleState === 2
                ? "services__modal active_model"
                : "services__modal"
            }
          >
            <div className="services__modal_content">
              <i
                className="uil uil-times services_modal_close"
                onClick={() => toggleTab(0)}
              ></i>

              <h3 className="services__modal_title">UI Ux Designer</h3>
              <p className="services__modal_descripton">
                Service with more than 3 years of experience.Providing quality
                work to clients and companies.
              </p><br/>

              <ul className="services__modal_services grid">
                <li className="services__modal_service">
                  <i className="uil uil-check-circle services__modal_icon"></i>
                  <p className="services__modal_info">
                    develope the user interface
                  </p>
                </li>

                <li className="services__modal_service">
                  <i className="uil uil-check-circle services__modal_icon"></i>
                  <p className="services__modal_info">Web page development.</p>
                </li>

                <li className="services__modal_service">
                  <i className="uil uil-check-circle services__modal_icon"></i>
                  <p className="services__modal_info">
                    I create ux element interactions.
                  </p>
                </li>

                <li className="services__modal_service">
                  <i className="uil uil-check-circle services__modal_icon"></i>
                  <p className="services__modal_info">
                    I position your company brand.
                  </p>
                </li>

                <li className="services__modal_service">
                  <i className="uil uil-check-circle services__modal_icon"></i>
                  <p className="services__modal_info">
                    Design and mockups of products for companies.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">
              Branding  <br /> Designer
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(3)}>
            View More
            <i className="uil uil-arrow-right services__button_icon"></i>
          </span>

          <div
            className={
              toggleState === 3
                ? "services__modal active_model"
                : "services__modal"
            }
          >
            <div className="services__modal_content">
              <i
                className="uil uil-times services_modal_close"
                onClick={() => toggleTab(0)}
              ></i>

              <h3 className="services__modal_title">Branding Designer</h3>
              <p className="services__modal-descripton">
                Service with more than 3 years of experience.Providing quality
                work to clients and companies.
              </p><br/>

              <ul className="services__modal_services grid">
                <li className="services__modal_service">
                  <i className="uil uil-check-circle services__modal_icon"></i>
                  <p className="services__modal_info">
                    develope the user interface
                  </p>
                </li>

                <li className="services__modal_service">
                  <i className="uil uil-check-circle services__modal_icon"></i>
                  <p className="services__modal_info">Web page development.</p>
                </li>

                <li className="services__modal_service">
                  <i className="uil uil-check-circle services__modal_icon"></i>
                  <p className="services__modal_info">
                    I create ux element interactions.
                  </p>
                </li>

                <li className="services__modal_service">
                  <i className="uil uil-check-circle services__modal_icon"></i>
                  <p className="services__modal_info">
                    I position your company brand.
                  </p>
                </li>

                <li className="services__modal_service">
                  <i className="uil uil-check-circle services__modal_icon"></i>
                  <p className="services__modal_info">
                    Design and mockups of products for companies.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
