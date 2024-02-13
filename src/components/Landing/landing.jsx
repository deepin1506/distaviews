import React from "react";

import "./landing.scss";
import Banner from "../../img/landing/banner.svg";
import Header from "./header";
import Footer from "./footer";

const LandingPage = () => {
  return (
    <div className="main-content bg-blacks">
      <div className="landing-bg">
        {/* Header start */}
        <Header />
        {/* Header end */}

        {/* Content start */}
        <div className="landing-banner-section">
          <div className="container">
            <div className="row align-items-center pt-28">
              <div className="col-xl-6 col-lg-6 col-md-12 col-12">
                <div className="landing-detail-section">
                  <h1 className="f-46 mb-62 f-lightwhite">
                    Create winning posts in seconds with AI
                  </h1>
                  <p className="mb-96">DistaViews makes it easy.</p>
                  <div className="d-flex align-items-center btn-wrapper flex-wrap">
                    <button className="btn btn-green">Join for free</button>
                    <button className="btn btn-black landing-play">
                      <svg
                        width="12"
                        height="14"
                        viewBox="0 0 12 14"
                        style={{ fill: "#000000" }}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.5751 6.47637C11.2212 6.86498 11.2212 7.80169 10.5751 8.19029L1.51538 13.6389C0.848873 14.0397 -6.36422e-07 13.5596 -6.02426e-07 12.7819L-1.26098e-07 1.88478C-9.21008e-08 1.10702 0.848875 0.626974 1.51538 1.02782L10.5751 6.47637Z"
                          style={{ fill: "#1EA71B" }}
                        />
                      </svg>
                    </button>
                    <a href="javascript:void(0);">Watch how it works</a>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12 col-12 pari">
                <div className="banner-right-img">
                  <img src={Banner} alt="banner-image" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Content end */}
      </div>
      {/* footer start */}
      <Footer />
      {/* footer end */}
    </div>
  );
};

export default LandingPage;
