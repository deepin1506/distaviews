import React, { useEffect, useState } from "react";
import Logo from "../../img/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
const Header = () => {
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);

  useEffect(() => {
    // Add an event listener to handle scroll and update state
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setIsHeaderFixed(isScrolled);
    };

    // Attach the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <header className={`header ${isHeaderFixed ? "fixed-header" : ""}`}>
      <div className="header-main">
        <div className="header-left">
          <div className="logo-wrapper-main">
            <img src={Logo} alt="logo" />
          </div>
        </div>

        <div className="header-right">
          <div className="header-menu">
            <Link to="/signin" className="mobile-toogle-btn">
              {/* Use Link to navigate to "/signin" */}
              <svg height="20px" width="20px" viewBox="0 0 448 512" fill="#fff">
                <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
              </svg>
            </Link>

            <div className="header-menu-main">
              <div className="mobile-menu">
                <div className="text-end menu-close-btn">
                  <svg
                    height="20px"
                    width="20px"
                    fill="#fff"
                    viewBox="0 0 384 512"
                  >
                    <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                  </svg>
                </div>
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="javascript:void(0);">
                      Careers
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="javascript:void(0);">
                      Blog
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="javascript:void(0);">
                      About Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="header-buttons">
          <Link to="/signin" className="btn btn-black">
            {/* Use Link to navigate to "/signin" */}
            <span className="h-mobile-icon">
              <svg width="16px" height="16px" viewBox="0 0 448 512">
                <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
              </svg>
            </span>
            Sign In
          </Link>
          <Link to="/signup" className="btn btn-green ml-40">
            {/* Use Link to navigate to "/signup" */}
            <span className="h-mobile-icon">
              <svg width="18px" height="18px" viewBox="0 0 512 512">
                <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z" />
              </svg>
            </span>
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
};
export default Header;
