import React,{useState} from "react";
import "./Qualification.css";
const Qualification = () => {
    const [toggleState, setToggleStae] = useState(1);

    const toggleTab = (index) => {
      setToggleStae(index);
    };
  return (
    <>
      <section className="qualification section">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My Personal Journey</span>

        <div className="qualification__container container">
          <div className="qualification__tabs">
            <div className={
                toggleState === 1 ? "qualification__button qualification__active button_flex"
                :
                "qualification__button  button_flex"
            }
            onClick={() => toggleTab(1)}
            >
              <i className="uil uil-graduation-cap qualification__icon"></i>
              Education
            </div>

            <div className=
            {
                toggleState === 2 ? "qualification__button qualification__active button_flex"
                :
                "qualification__button  button_flex"
            }
            onClick={() => toggleTab(2)}
            >
              <i className="uil uil-briefcase-alt qualification__icon"></i>
              Experience
            </div>
          </div>
          <div className="qualification__sections">
            <div className={toggleState === 1 ? 
            "qualification__content qualification__content__active"
            : 
            "qualification__content"
            }>
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">BCA</h3>
                  <span className="qualification__subtitle">
                    RR college - Bangalore
                  </span>

                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i>2014 - 2017
                  
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              <div className="qualification__data">
                <div></div>

                <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Intermediate +2</h3>
                <span className="qualification__subtitle">
                  Royal Softech - Lahan
                </span>

                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2011 - 2013
                </div>
              </div>

             
            </div>

            <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">SLC</h3>
                  <span className="qualification__subtitle">
                    S.J.H .S. S - Sukhipur
                  </span>

                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i>2010 -2011
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              <div className="qualification__data">
                <div></div>

                <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Certification</h3>
                <span className="qualification__subtitle">
                  Biratnagar - s.m 
                </span>

                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2013 
                </div>
              </div>

             
            </div>

            </div>

            <div className={toggleState === 2 ? 
                "qualification__content qualification__content__active"
                : 
                "qualification__content"
                }>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">React Developer</h3>
                <span className="qualification__subtitle">
                  Casper  -bangalore
                </span>

                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>1.5 yr Exp
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>

            <div>
              <h3 className="qualification__title">Relationship Officer</h3>
              <span className="qualification__subtitle">
                Bangalore - Axis Secur
              </span>

              <div className="qualification__calender">
                <i className="uil uil-calendar-alt"></i>2017 - 2018
              </div>
            </div>

           
          </div>

          <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Backend Asst</h3>
                <span className="qualification__subtitle">
                  Kotak ltd - Bangalore
                </span>

                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2019 -2020
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>

            <div>
              <h3 className="qualification__title">DataEntry Operator</h3>
              <span className="qualification__subtitle">
                Yes Ltd - Bangalore
              </span>

              <div className="qualification__calender">
                <i className="uil uil-calendar-alt"></i>2020 
              </div>
            </div>

           
          </div>

          </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Qualification;
