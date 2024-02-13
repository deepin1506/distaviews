import React, { useState } from "react";
import "./signinup.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./header";
const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setshowPassword] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const togglePasswordVisibility = () => {
    setshowPassword(!showPassword);
  };

  const validateForm = () => {
    let isValid = true;

    if (!username) {
      setUsernameError("Username or email is required");
      isValid = false;
    } else {
      setUsernameError("");
    }

    if (!password.trim()) {
      setPasswordError("Password is required");
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError("Password should be more than 6 ");
      isValid = false;
    }
    return isValid;
  };
  const FormSubmitHandler = (event) => {
    event.preventDefault();

    if (validateForm()) {
      console.log("Form Submitted:", { username, password });
      window.location.href = "configure-landing";
    } else {
      console.log("Form has errors");
    }
  };

  return (
    <div className="main-content bg-blacks">
      {/* <!-- Header start --> */}
      <Header />
      {/* <!-- Header end --> */}

      {/* <!-- Content start --> */}
      <div className="landing-banner-section">
        <div className="container">
          <div className="row align-items-center pt-28 landing-form-height">
            <div className="col-xl-6 col-lg-6 col-md-12 col-12">
              <div className="landing-detail-section">
                <h1 className="f-46 mb-48 f-lightwhite">
                  Create winning posts in seconds with AI
                </h1>
                <p className="mb-48">DistaViews makes it easy.</p>
                <div className="d-flex align-items-center btn-wrapper flex-wrap">
                  <button className="btn btn-green">Join for free</button>
                  <button className="btn btn-black landing-play">
                    <svg
                      width="12"
                      height="14"
                      viewBox="0 0 12 14"
                      style={{ fill: "none" }}
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
            <div className="col-xl-6 col-lg-6 col-md-12 col-12">
              <div className="landing-form-wrapper">
                <form className="login_form" onSubmit={FormSubmitHandler}>
                  <div className="f-40 mb-30 f-lightwhite">Sign in</div>
                  <div className="custom-input-group mb-30">
                    <label
                      htmlFor="LoginUsername"
                      className="form-label custom-label"
                    >
                      Username or Email
                    </label>
                    <span className="position-relative">
                      <input
                        type="text"
                        className="form-control custom-input"
                        id="LoginUsername"
                        placeholder="Username or email address"
                        value={username}
                        onChange={handleUsernameChange}
                      />
                    </span>
                    <div className="error-message">{usernameError}</div>
                  </div>
                  <div className="custom-input-group mb-30">
                    <label for="Password" className="form-label custom-label">
                      Password
                    </label>
                    <span className="position-relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        className="form-control custom-input"
                        id="Password"
                        placeholder="Password"
                        value={password}
                        onChange={handlePasswordChange}
                      />
                      <div className="error-message">{passwordError}</div>
                      <span
                        className="input-icon"
                        onClick={togglePasswordVisibility}
                      >
                        <svg
                          width="27"
                          height="14"
                          viewBox="0 0 27 14"
                          style={{ fill: "none" }}
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M26.774 6.47106C22.4202 2.17735 17.8821 0 13.285 0C11.4633 0 9.63634 0.347088 7.85502 1.03156C6.44288 1.57425 5.05704 2.32875 3.73637 3.27407C1.49454 4.87858 0.215737 6.47417 0.162464 6.54131C-0.0541547 6.81374 -0.0541547 7.1863 0.162464 7.4587C0.215766 7.52583 1.49404 9.12142 3.73568 10.7259C5.05679 11.6714 6.4422 12.4262 7.85434 12.9684C9.63596 13.6529 11.4628 14 13.2851 14C17.8817 14 22.42 11.8227 26.774 7.52893C27.0754 7.23299 27.0754 6.76834 26.7738 6.47094L26.774 6.47106ZM11.3796 2.48878C12.3308 2.3053 13.2513 2.92409 13.4355 3.87128C13.62 4.81852 12.9984 5.73517 12.0473 5.91889C11.0961 6.10237 10.1756 5.48358 9.99136 4.53639C9.80663 3.58915 10.4285 2.67225 11.3796 2.48878ZM13.2851 12.4582C10.3723 12.4582 7.51221 11.4734 4.7845 9.53094C3.40788 8.55075 2.41295 7.55897 1.89717 7.00028C2.40634 6.44815 3.38402 5.47357 4.7465 4.49822C5.97053 3.62228 7.67084 2.63676 9.7121 2.05406C8.39729 3.29913 7.72823 5.165 8.0989 7.07058C8.67694 10.0407 11.5638 11.9821 14.5465 11.406C17.529 10.8303 19.4783 7.95552 18.9 4.98518C18.6907 3.90901 18.1781 2.96835 17.4677 2.2332C20.0043 3.06918 22.5299 4.66228 25.0175 7.00053C21.1646 10.6226 17.2203 12.4579 13.2849 12.4579L13.2851 12.4582Z"
                            style={{ fill: "#999999" }}
                          />
                        </svg>
                      </span>
                    </span>
                  </div>

                  <button type="submit" className="btn landing-btn mb-30">
                    Continue
                  </button>

                  <div className="mb-30">
                    <p>Or continue with social media</p>

                    <div className="social-btn-group d-flex justify-content-center mb-30">
                      <a className="btn btn-google" href="javascript:void(0);">
                        <span>
                          <svg
                            width="21"
                            height="22"
                            viewBox="0 0 21 22"
                            style={{ fill: "none" }}
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#clip0_18_1914)">
                              <path
                                d="M20.8773 11.2441C20.8773 10.5202 20.8186 9.7923 20.6933 9.08008H10.6479V13.1812H16.4005C16.1618 14.5039 15.3948 15.674 14.2716 16.4175V19.0785H17.7036C19.7189 17.2236 20.8773 14.4843 20.8773 11.2441Z"
                                style={{ fill: "#4285F4" }}
                              />
                              <path
                                d="M10.6479 21.6493C13.5202 21.6493 15.9426 20.7062 17.7075 19.0782L14.2755 16.4172C13.3207 17.0668 12.088 17.4347 10.6518 17.4347C7.87338 17.4347 5.51759 15.5602 4.67232 13.04H1.1308V15.7832C2.93873 19.3796 6.62113 21.6493 10.6479 21.6493Z"
                                style={{ fill: "#34A853" }}
                              />
                              <path
                                d="M4.66843 13.0406C4.22231 11.7179 4.22231 10.2856 4.66843 8.96294V6.21973H1.13082C-0.379707 9.22904 -0.379707 12.7745 1.13082 15.7838L4.66843 13.0406Z"
                                style={{ fill: "#FBBC04" }}
                              />
                              <path
                                d="M10.6479 4.56395C12.1663 4.54047 13.6337 5.11181 14.7334 6.16057L17.774 3.11995C15.8486 1.31202 13.2933 0.318044 10.6479 0.349351C6.62113 0.349351 2.93873 2.61905 1.1308 6.21927L4.6684 8.96248C5.50976 6.43842 7.86947 4.56395 10.6479 4.56395Z"
                                style={{ fill: "#EA4335" }}
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_18_1914">
                                <rect
                                  width="20.8774"
                                  height="21.3"
                                  style={{ fill: "white" }}
                                  transform="translate(0 0.349609)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                        <span>Sign up via Google</span>
                      </a>
                      <a
                        className="btn btn-facebook"
                        href="javascript:void(0);"
                      >
                        <span>
                          <svg
                            width="20"
                            height="25"
                            viewBox="0 0 20 25"
                            style={{ fill: "none" }}
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.7038 13.0717C16.7161 12.1298 16.9664 11.2063 17.4313 10.387C17.8963 9.56776 18.5609 8.87939 19.3633 8.38591C18.8535 7.65776 18.181 7.05846 17.3992 6.6356C16.6173 6.21274 15.7477 5.97795 14.8593 5.94988C12.9628 5.7512 11.1251 7.08436 10.1588 7.08436C9.17443 7.08436 7.68662 5.96907 6.08592 6.00293C5.04998 6.03637 4.04036 6.3376 3.15547 6.87729C2.27057 7.41697 1.54058 8.17669 1.03662 9.08241C-1.14655 12.8618 0.482362 18.4168 2.57297 21.4726C3.61941 22.9683 4.84194 24.6389 6.44264 24.5802C8.00834 24.5148 8.59308 23.5812 10.4839 23.5812C12.3555 23.5812 12.9041 24.5802 14.5364 24.543C16.2173 24.5148 17.275 23.0394 18.2842 21.529C19.0365 20.4633 19.6156 19.2852 20 18.0386C19.0236 17.6258 18.1903 16.9347 17.6041 16.0514C17.0179 15.1681 16.7048 14.1318 16.7038 13.0717Z"
                              style={{ fill: "#E8ECEF" }}
                            />
                            <path
                              d="M13.6196 3.93965C14.5357 2.84021 14.9873 1.42696 14.8782 0C13.4784 0.146948 12.1854 0.816033 11.2569 1.87387C10.8031 2.39028 10.4554 2.99104 10.2339 3.64184C10.0123 4.29264 9.9211 4.98072 9.96553 5.66678C10.6656 5.674 11.3581 5.52232 11.991 5.22315C12.624 4.92399 13.1808 4.48515 13.6196 3.93965Z"
                              style={{ fill: "#E8ECEF" }}
                            />
                          </svg>
                        </span>
                        <span>Sign up via Apple</span>
                      </a>
                    </div>
                    <p>
                      By clicking the Continue button, you agree to the terms of
                      service and privacy policy.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Content end --> */}
    </div>
  );
};

export default Signin;
