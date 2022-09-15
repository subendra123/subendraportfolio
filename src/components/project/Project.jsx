import React from "react";
import "./Project.css";
const Project = () => {
  return (
    <>
      <section className="projects project" id="projects">
        <h2 className="section__title"> Our Works</h2>
        <span className="section__subtitle">Recent projects</span>

        <div className="projects__container container grid">
          <div className="projects__content">
            <div className="project__img">
              <img src="images/work1.jpg" alt="" />
            </div>

            <div className="project__names">
              <h4>Shopazard Admin</h4>
            </div>

            <span className="projects__button">
            <a href="https://github.com/subendra123/adminpanel" target="_blank" >
            Demo
            </a>
              <i className="uil uil-arrow-right projects__button_icon"></i>
            </span>
          </div>

          <div className="projects__content">
            <div className="project__img">
              <img src="images/work2.jpg" alt="" />
            </div>

            <div className="project__names">
              <h4>Billing Apps</h4>
            </div>

            <span className="projects__button">
            <a href="https://github.com/subendra123/posbilling" target="_blank" >
            Demo
            </a>
              <i className="uil uil-arrow-right projects__button_icon"></i>
            </span>
          </div>

          <div className="projects__content">
            <div className="project__img">
              <img src="images/work3.jpg" alt="" />
            </div>

            <div className="project__names">
              <h4>Banking Apps</h4>
            </div>

            <span className="projects__button">
            <a href="https://bankingreact.firebaseapp.com/" target="_blank" >
            Demo
            </a>
              <i className="uil uil-arrow-right projects__button_icon"></i>
            </span>
          </div>

          <div className="projects__content">
            <div className="project__img">
              <img src="images/work4.jpg" alt="" />
            </div>

            <div className="project__names">
            <h4>Resume Project</h4>
            </div>

            <span className="projects__button">
            <a href="https://subendramandal.netlify.app" target="_blank" >
            Demo
            </a>
             
              <i className="uil uil-arrow-right projects__button_icon" target="_black"></i>
            </span>
          </div>

          <div className="projects__content">
            <div className="project__img">
              <img src="images/work5.jpg" alt="" />
            </div>

            <div className="project__names">
              <h4>Ecommerce React</h4>
            </div>

            <span className="projects__button">
            <a href="https://reactcontextecomm.netlify.app" target="_blank" >
            Demo
            </a>
              <i className="uil uil-arrow-right projects__button_icon"></i>
            </span>
          </div>

          <div className="projects__content">
            <div className="project__img">
              <img src="images/work1.jpg" alt="" />
            </div>

            <div className="project__names">
              <h4>Shopazard Admin</h4>
            </div>

            <span className="projects__button">
            <a href="https://shopazardwebsite.netlify.app" target="_blank" >
            Demo
            </a>
              <i className="uil uil-arrow-right projects__button_icon"></i>
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
