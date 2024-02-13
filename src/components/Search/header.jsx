import React, { useEffect, useState } from "react";
import Logo from "../../img/logo.png";
import DashUpper from "../../img/dashborad/uper-img.png";
import "./dashboardheader.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "./headersearch.scss";
const Header = () => {
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setIsHeaderFixed(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`dashboard-header ${isHeaderFixed ? "fixed-header" : ""}`}
    >
      <div className="d-header-wrapper">
        <div className="sidebar-btn" id="DashSidebar">
          <a>
            <svg height="20px" width="20px" viewBox="0 0 448 512" fill="#fff">
              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"></path>
            </svg>
          </a>
        </div>
        <div className="logo-wrapper">
          <img src={Logo} alt="logo" />
        </div>
        <div className="d-header-right d-flex align-items-center">
          <div className="notification">
            <a className="position-relative" href="notification">
              <span className="bell-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M21 18.0233C21 18.5113 20.6043 18.907 20.1163 18.907H3.88372C3.39565 18.907 3 18.5113 3 18.0233C3 17.5352 3.39566 17.1395 3.88372 17.1395H3.9V10.9809C3.9 6.57288 7.527 3 12 3C16.473 3 20.1 6.57288 20.1 10.9809V17.1395H20.1163C20.6043 17.1395 21 17.5352 21 18.0233ZM5.7 17.1395H18.3V10.9809C18.3 7.5494 15.4794 4.76744 12 4.76744C8.5206 4.76744 5.7 7.5494 5.7 10.9809V17.1395ZM9.97604 20.7558C9.73121 20.2608 10.1977 19.7907 10.75 19.7907H13.25C13.8023 19.7907 14.2688 20.2608 14.024 20.7558C13.9155 20.9751 13.7699 21.1773 13.591 21.3529C13.169 21.7672 12.5967 22 12 22C11.4033 22 10.831 21.7672 10.409 21.3529C10.2301 21.1773 10.0845 20.9751 9.97604 20.7558Z"
                    fill="#9A9A9A"
                  ></path>
                </svg>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                  9
                </span>
              </span>
            </a>
          </div>

          <div className="account-details ml-40">
            <a
              className="d-flex align-items-center gap-1 gap-sm-2"
              href="profile"
              data-bs-toggle="modal"
              data-bs-target="#ProfileModal"
            >
              <div className="user-image">
                <img
                  className="rounded img-fluid h-100"
                  src={DashUpper}
                  alt="user-img"
                />
              </div>
              <span className="dropdown-icon">
                <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
                  <path
                    d="M7.41992 7.37079L13.0699 1.71079C13.1637 1.61783 13.238 1.50723 13.2888 1.38537C13.3396 1.26351 13.3657 1.1328 13.3657 1.00079C13.3657 0.868781 13.3396 0.738075 13.2888 0.616216C13.238 0.494356 13.1637 0.383755 13.0699 0.290792C12.8826 0.104542 12.6291 -3.21984e-08 12.3649 -4.37463e-08C12.1007 -5.52942e-08 11.8473 0.104541 11.6599 0.290792L6.65992 5.24079L1.70992 0.290792C1.52256 0.104541 1.26911 -5.2876e-07 1.00492 -5.40308e-07C0.740739 -5.51856e-07 0.487288 0.104541 0.299925 0.290792C0.205437 0.383407 0.130266 0.493852 0.0787697 0.615727C0.0272731 0.737602 0.000474892 0.868485 -7.44303e-05 1.00079C0.00047488 1.1331 0.0272731 1.26398 0.0787696 1.38586C0.130266 1.50773 0.205437 1.61818 0.299925 1.71079L5.94992 7.37079C6.04357 7.4723 6.15722 7.55331 6.28372 7.60871C6.41022 7.66412 6.54682 7.69272 6.68492 7.69272C6.82303 7.69272 6.95963 7.66412 7.08613 7.60871C7.21263 7.55331 7.32628 7.4723 7.41992 7.37079Z"
                    fill="#1EA71B"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
