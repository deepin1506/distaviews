import React from "react";
import Banner from "../../img/landing/configerbanner.svg";
import Facebook from "../../img/landing/facebook .svg";
import Instagram from "../../img/landing/instagram.svg";
import Twitter from "../../img/landing/twitter.svg";
import Linkedin from "../../img/landing/linkedin.svg";
import Youtube from "../../img/landing/youtube.svg";
import Header from "./header";
import "bootstrap/dist/css/bootstrap.min.css";

import "./configuresocial.scss";

const ConfigureSocial = () => {
  return (
    <div className="main-content bg-blacks">
      {/* <!-- Header start --> */}
      <Header />
      {/* <!-- Header end --> */}

      {/* <!-- Content start --> */}
      <div className="landing-banner-section configure-page">
        <div className="container">
          <div className="row align-items-center landing-form-height">
            <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-12 col-12">
              <div className="landing-detail-section pb-0">
                <div className="configure-left-img">
                  <img src={Banner} alt="banner-image" />
                </div>
              </div>
            </div>
            <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-12 col-12">
              <div className="configure-section text-start max-w-100">
                <div className="configure-text">
                  <h4 className="f-54 f-lightwhite mb-48">
                    Configure Social Media Accounts
                  </h4>
                  <p className="f-24 text-white mb-30">
                    You only need to add two social media accounts right now.
                    You can always add more later!
                  </p>
                  <p className="f-24 text-white mb-54">
                    Choose Social media network to add an account
                  </p>
                </div>
                <div className="social-wrapper">
                  <a href="search" className="social-btn">
                    <span className="social-icon">
                      <img src={Facebook} alt="icon" />
                    </span>
                    <span className="social-name">Facebook</span>
                  </a>

                  <a href="search" className="social-btn">
                    <span className="social-icon">
                      <img src={Instagram} alt="icon" />
                    </span>
                    <span className="social-name">Instagram</span>
                  </a>

                  <a href="search" className="social-btn">
                    <span className="social-icon">
                      <img src={Twitter} alt="icon" />
                    </span>
                    <span className="social-name">Twitter</span>
                  </a>

                  <a href="search" className="social-btn">
                    <span className="social-icon">
                      <img src={Linkedin} alt="icon" />
                    </span>
                    <span className="social-name">LinkedIn</span>
                  </a>

                  <a href="search" className="social-btn">
                    <span className="social-icon">
                      <img src={Youtube} alt="icon" />
                    </span>
                    <span className="social-name">YouTube</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Content end --> */}
    </div>
  );
};

export default ConfigureSocial;
