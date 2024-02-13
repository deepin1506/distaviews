import React from "react";
import { useState } from "react";
import Header from "./header";
import DashMentions1 from "../../img/dashborad/mentions1.png";
import DashMentions2 from "../../img/dashborad/mentions2.png";
import DashMentions3 from "../../img/dashborad/mentions3.png";
import InsightChart from "../../img/insights/Buzz-Chart.png";
import InsightChart2 from "../../img/insights/Buzz-Chart2.png";
import InsightMoodChart from "../../img/insights/Mood-chart.png";
import InsightMoodChart2 from "../../img/insights/Mood-chart2.png";
import InsightVibes from "../../img/insights/Vibes.png";
import InsightHighlights from "../../img/insights/Highlights.png";
import InsightDemograghics2 from "../../img/insights/Demograghics2.png";
import "./insights.scss";
import Sidebar from "./sidebar";
import "bootstrap/dist/css/bootstrap.min.css";

const Insights = () => {
  const [showTitleCard, setShowTitleCard] = useState(false);

  const toggleTitleCard = () => {
    setShowTitleCard(!showTitleCard);
  };
  return (
    <div className="main-content bg-blacks">
      {/* <!-- Header start --> */}
      <Header />
      {/* <!-- Header end --> */}

      <div className="dashboard-content">
        {/* <!-- sidebar start --> */}
        <Sidebar />
        {/* <!-- sidebar end --> */}

        <div className="dashboard-right-content bg-img-none flex-grow-1">
          <div className="title-card d-flex align-items-center justify-content-between mb-20 flex-column flex-xxl-row">
            <div className="d-flex align-items-center flex-column flex-md-row gap-1 gap-md-3">
              <div className="f-20 fw-700 f-lightwhite s-title">Insights</div>
              <div className="keyword-dropdown mb-1 mb-md-0">
                <div className="dropdown custom-dropdown">
                  <a
                    className="d-flex align-items-center"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    onClick={toggleTitleCard}
                  >
                    <span className="me-1">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.8921 0.665039C15.7263 0.665039 17.3263 2.27254 17.3346 5.10671L17.3346 12.89C17.3346 15.7234 15.7263 17.3317 12.8921 17.3317L5.10964 17.3317C2.27547 17.3317 0.667969 15.7234 0.667969 12.89L0.667969 5.10671C0.667969 2.27254 2.27547 0.665039 5.10964 0.665039L12.8921 0.665039ZM9.41797 4.10671C9.1838 3.96504 8.90047 3.96504 8.6763 4.10671C8.45047 4.24754 8.3263 4.50671 8.35047 4.76504L8.35047 13.2567C8.39297 13.615 8.69214 13.8817 9.04214 13.8817C9.4013 13.8817 9.70047 13.615 9.7338 13.2567L9.7338 4.76504C9.76714 4.50671 9.64297 4.24754 9.41797 4.10671ZM5.5263 6.84004C5.3013 6.69837 5.01714 6.69837 4.79297 6.84004C4.56714 6.98171 4.44297 7.23921 4.46797 7.49837L4.46797 13.2567C4.50047 13.615 4.80047 13.8817 5.1588 13.8817C5.51797 13.8817 5.81714 13.615 5.85047 13.2567L5.85047 7.49837C5.8763 7.23921 5.75047 6.98171 5.5263 6.84004ZM13.2421 9.86504C13.018 9.72337 12.7346 9.72337 12.5013 9.86504C12.2755 10.0067 12.1513 10.2559 12.1846 10.5234L12.1846 13.2567C12.218 13.615 12.5171 13.8817 12.8763 13.8817C13.2263 13.8817 13.5255 13.615 13.568 13.2567L13.568 10.5234C13.5921 10.2559 13.468 10.0067 13.2421 9.86504Z"
                          fill="#9A9A9A"
                        />
                      </svg>
                    </span>
                    <span>Choose keywords</span>
                    <span className="ms-auto">
                      <svg
                        width="14"
                        height="8"
                        viewBox="0 0 14 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.41944 7.37079L13.0694 1.71079C13.1632 1.61783 13.2376 1.50723 13.2883 1.38537C13.3391 1.26351 13.3652 1.1328 13.3652 1.00079C13.3652 0.868781 13.3391 0.738075 13.2883 0.616216C13.2376 0.494356 13.1632 0.383755 13.0694 0.290792C12.8821 0.104542 12.6286 -3.21984e-08 12.3644 -4.37463e-08C12.1003 -5.52942e-08 11.8468 0.104541 11.6594 0.290792L6.65944 5.24079L1.70944 0.290792C1.52207 0.104541 1.26862 -5.2876e-07 1.00444 -5.40308e-07C0.740251 -5.51856e-07 0.486799 0.104541 0.299437 0.290792C0.204948 0.383407 0.129778 0.493852 0.0782814 0.615727C0.0267849 0.737602 -1.33894e-05 0.868485 -0.000562712 1.00079C-1.3401e-05 1.1331 0.0267848 1.26398 0.0782813 1.38586C0.129778 1.50773 0.204948 1.61818 0.299436 1.71079L5.94944 7.37079C6.04308 7.4723 6.15673 7.55331 6.28323 7.60871C6.40973 7.66412 6.54633 7.69272 6.68444 7.69272C6.82254 7.69272 6.95914 7.66412 7.08564 7.60871C7.21214 7.55331 7.32579 7.4723 7.41944 7.37079Z"
                          fill="#1EA71B"
                        />
                      </svg>
                    </span>
                  </a>

                  {showTitleCard && (
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuLink"
                    >
                      <li>
                        <a className="dropdown-item active" href="#">
                          Instagram
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Facebook
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          McDonald's
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Insights of social media
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          BBQ
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Seven Wonders
                        </a>
                      </li>
                    </ul>
                  )}
                </div>
              </div>
            </div>

            <div className="d-flex align-items-center flex-grow-1 justify-content-end pe-1 pe-lg-3 title-right flex-column flex-md-row gap-2 gap-md-3">
              <div className="insight-search">
                <span>
                  <input
                    className="insight-search-input"
                    type="text"
                    placeholder="Search anything..."
                  />
                </span>
                <span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.8034 12.8197L11.208 10.2433C12.2154 8.9862 12.7033 7.39056 12.5713 5.78449C12.4393 4.17843 11.6974 2.68402 10.4983 1.60855C9.29906 0.533073 7.7337 -0.0417195 6.12404 0.00236006C4.51437 0.0464396 2.98276 0.70604 1.84413 1.84553C0.705504 2.98503 0.0464044 4.5178 0.00235827 6.12869C-0.0416878 7.73957 0.532668 9.30612 1.60733 10.5062C2.68198 11.7063 4.17526 12.4488 5.7801 12.5809C7.38495 12.713 8.97938 12.2247 10.2355 11.2165L12.81 13.7929C12.8751 13.8585 12.9524 13.9106 13.0377 13.9462C13.1229 13.9817 13.2144 14 13.3067 14C13.3991 14 13.4905 13.9817 13.5758 13.9462C13.661 13.9106 13.7384 13.8585 13.8034 13.7929C13.9295 13.6624 14 13.4879 14 13.3063C14 13.1248 13.9295 12.9503 13.8034 12.8197ZM6.31088 11.2165C5.34233 11.2165 4.39552 10.9291 3.5902 10.3905C2.78488 9.85204 2.15721 9.08664 1.78656 8.19113C1.41591 7.29563 1.31893 6.31024 1.50789 5.35957C1.69684 4.40891 2.16324 3.53567 2.84811 2.85028C3.53298 2.16489 4.40556 1.69813 5.3555 1.50903C6.30545 1.31993 7.29009 1.41699 8.18491 1.78792C9.07974 2.15885 9.84456 2.787 10.3827 3.59293C10.9208 4.39886 11.208 5.34638 11.208 6.31567C11.208 7.61545 10.692 8.86199 9.77364 9.78107C8.85526 10.7001 7.60967 11.2165 6.31088 11.2165Z"
                      fill="#9A9A9A"
                    />
                  </svg>
                </span>
              </div>

              <div className="date-dropdown">
                <div className="dropdown custom-dropdown">
                  <a
                    className="d-flex align-items-center"
                    href="javascript:void(0);"
                    role="button"
                    id="dropdownMenuLink"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span className="me-2">
                      <svg
                        width="16"
                        height="18"
                        viewBox="0 0 16 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.0463 0.668947C11.4001 0.668116 11.6798 0.942979 11.6806 1.30946L11.6814 1.93415C13.977 2.11406 15.4934 3.67828 15.4958 6.07708L15.5049 13.0986C15.5082 15.7139 13.8651 17.3231 11.2314 17.3273L4.79812 17.3356C2.18088 17.3389 0.517235 15.6914 0.513944 13.0686L0.504888 6.12955C0.501603 3.71492 1.96449 2.15487 4.26003 1.94414L4.25921 1.31946C4.25838 0.952974 4.5299 0.677278 4.89192 0.677278C5.25394 0.676445 5.52546 0.951308 5.52628 1.31779L5.5271 1.90083L10.4144 1.89417L10.4136 1.31113C10.4127 0.944644 10.6842 0.669782 11.0463 0.668947ZM11.382 12.4955H11.3737C10.9953 12.5047 10.6916 12.822 10.6999 13.2052C10.7007 13.5883 11.0059 13.904 11.3844 13.9123C11.7703 13.9115 12.083 13.5941 12.0821 13.2027C12.0821 12.8112 11.7687 12.4955 11.382 12.4955ZM4.6023 12.4964C4.22383 12.513 3.92763 12.8304 3.92845 13.2135C3.94573 13.5966 4.25839 13.8965 4.63686 13.879C5.00793 13.8623 5.30331 13.545 5.28603 13.1619C5.2778 12.787 4.97255 12.4955 4.6023 12.4964ZM7.99213 12.4922C7.61365 12.5097 7.31828 12.8262 7.31828 13.2093C7.33556 13.5925 7.64821 13.8915 8.02669 13.8748C8.39693 13.8573 8.69313 13.5408 8.67585 13.1569C8.66763 12.7829 8.36238 12.4914 7.99213 12.4922ZM4.59819 9.49786C4.21971 9.51452 3.92434 9.83186 3.92516 10.215C3.94162 10.5981 4.25509 10.898 4.63357 10.8805C5.00382 10.8638 5.29919 10.5465 5.28191 10.1634C5.27369 9.78855 4.96926 9.49703 4.59819 9.49786ZM7.98884 9.46871C7.61036 9.48537 7.31416 9.80271 7.31499 10.1859C7.33144 10.569 7.64492 10.868 8.0234 10.8514C8.39364 10.8339 8.68902 10.5174 8.67256 10.1342C8.66351 9.7594 8.35909 9.46788 7.98884 9.46871ZM11.3787 9.47287C11.0002 9.4812 10.704 9.78938 10.7048 10.1725V10.1817C10.713 10.5648 11.0257 10.8555 11.405 10.8472C11.7752 10.838 12.0706 10.5207 12.0624 10.1375C12.0451 9.77106 11.7481 9.47204 11.3787 9.47287ZM10.416 3.17686L5.52875 3.18352L5.52957 3.85735C5.52957 4.21634 5.25888 4.49953 4.89686 4.49953C4.53484 4.50036 4.2625 4.21801 4.2625 3.85902L4.26168 3.21767C2.65727 3.37843 1.7695 4.32129 1.77196 6.12788L1.77279 6.38692L14.2296 6.37026V6.07874C14.1942 4.28797 13.2957 3.34844 11.6831 3.20851L11.6839 3.84986C11.6839 4.20801 11.405 4.49204 11.0512 4.49204C10.6892 4.49287 10.4168 4.20968 10.4168 3.85152L10.416 3.17686Z"
                          fill="#9A9A9A"
                        />
                      </svg>
                    </span>
                    <span>Last 30 days</span>
                    <span className="ms-auto">
                      <svg
                        width="14"
                        height="8"
                        viewBox="0 0 14 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.41944 7.37079L13.0694 1.71079C13.1632 1.61783 13.2376 1.50723 13.2883 1.38537C13.3391 1.26351 13.3652 1.1328 13.3652 1.00079C13.3652 0.868781 13.3391 0.738075 13.2883 0.616216C13.2376 0.494356 13.1632 0.383755 13.0694 0.290792C12.8821 0.104542 12.6286 -3.21984e-08 12.3644 -4.37463e-08C12.1003 -5.52942e-08 11.8468 0.104541 11.6594 0.290792L6.65944 5.24079L1.70944 0.290792C1.52207 0.104541 1.26862 -5.2876e-07 1.00444 -5.40308e-07C0.740251 -5.51856e-07 0.486799 0.104541 0.299437 0.290792C0.204948 0.383407 0.129778 0.493852 0.0782814 0.615727C0.0267849 0.737602 -1.33894e-05 0.868485 -0.000562712 1.00079C-1.3401e-05 1.1331 0.0267848 1.26398 0.0782813 1.38586C0.129778 1.50773 0.204948 1.61818 0.299436 1.71079L5.94944 7.37079C6.04308 7.4723 6.15673 7.55331 6.28323 7.60871C6.40973 7.66412 6.54633 7.69272 6.68444 7.69272C6.82254 7.69272 6.95914 7.66412 7.08564 7.60871C7.21214 7.55331 7.32579 7.4723 7.41944 7.37079Z"
                          fill="#1EA71B"
                        />
                      </svg>
                    </span>
                  </a>

                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuLink"
                  >
                    <li>
                      <a className="dropdown-item active" href="#">
                        Last 30 Days{" "}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Last 60 Days{" "}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Last 90 Days{" "}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Last 6 Months
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Last 1 Year{" "}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Custom Date Range
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <button
                className="btn btn-green b-radius-10px"
                data-bs-toggle="modal"
                data-bs-target="#SaveSearchModal"
              >
                {/* Save Search */}
              </button>
            </div>
          </div>

          <div className="dashboard-inner-section">
            <div className="gridview-3">
              {/* <!-- Filter start --> */}
              <div className="filter-close-section">
                <span>
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.6008 0H2.39944C1.07604 0 0 1.05304 0 2.34815C0 2.90811 0.205213 3.45205 0.57764 3.87613L6.18746 10.2809C6.39812 10.5221 6.51427 10.8291 6.51427 11.1447V17.1396C6.51427 17.7877 6.85089 18.3795 7.41544 18.7206C7.72262 18.9064 8.06795 19 8.41312 19C8.70303 19 8.99402 18.9342 9.26432 18.8024L11.4348 17.7399C12.083 17.4233 12.4857 16.7868 12.4857 16.0771V11.145C12.4857 10.8284 12.6019 10.5214 12.8125 10.2812L18.4224 3.87649C18.7948 3.45154 19 2.90847 19 2.34851C19 1.0534 17.924 0.000359577 16.6006 0.000359577L16.6008 0Z"
                      fill="#E8ECEF"
                    />
                  </svg>
                </span>
              </div>

              <div className="generated-filter">
                <div
                  className="d-flex align-items-center justify-content-between mb-2 mb-lg-3 me-3"
                  id="FilterTitle"
                >
                  <div className="f-20 f-lightwhite">Generated Filters</div>
                  <div className="filter-back-btn">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.321591 7.5835L5.98159 13.2335C6.07455 13.3272 6.18515 13.4016 6.30701 13.4524C6.42887 13.5032 6.55958 13.5293 6.69159 13.5293C6.8236 13.5293 6.95431 13.5032 7.07617 13.4524C7.19803 13.4016 7.30863 13.3272 7.40159 13.2335C7.58784 13.0461 7.69238 12.7927 7.69238 12.5285C7.69238 12.2643 7.58784 12.0109 7.40159 11.8235L2.45159 6.8235L7.40159 1.8735C7.58784 1.68614 7.69238 1.43268 7.69238 1.1685C7.69238 0.904313 7.58784 0.650862 7.40159 0.463499C7.30898 0.369011 7.19853 0.29384 7.07666 0.242344C6.95478 0.190847 6.8239 0.164049 6.69159 0.1635C6.55928 0.164049 6.4284 0.190847 6.30653 0.242344C6.18465 0.29384 6.07421 0.369011 5.98159 0.463499L0.321591 6.1135C0.220086 6.20714 0.139078 6.32079 0.0836703 6.44729C0.0282627 6.57379 -0.000341773 6.7104 -0.000341785 6.8485C-0.000341797 6.9866 0.0282627 7.1232 0.0836702 7.2497C0.139078 7.3762 0.220086 7.48986 0.321591 7.5835Z"
                        fill="#1EA71B"
                      />
                      <path
                        d="M6.48468 7.5835L12.1447 13.2335C12.2376 13.3272 12.3482 13.4016 12.4701 13.4524C12.592 13.5032 12.7227 13.5293 12.8547 13.5293C12.9867 13.5293 13.1174 13.5032 13.2393 13.4524C13.3611 13.4016 13.4717 13.3272 13.5647 13.2335C13.7509 13.0461 13.8555 12.7927 13.8555 12.5285C13.8555 12.2643 13.7509 12.0109 13.5647 11.8235L8.61468 6.8235L13.5647 1.8735C13.7509 1.68614 13.8555 1.43268 13.8555 1.1685C13.8555 0.904313 13.7509 0.650862 13.5647 0.463499C13.4721 0.369011 13.3616 0.29384 13.2397 0.242344C13.1179 0.190847 12.987 0.164049 12.8547 0.1635C12.7224 0.164049 12.5915 0.190847 12.4696 0.242344C12.3477 0.29384 12.2373 0.369011 12.1447 0.463499L6.48468 6.1135C6.38317 6.20714 6.30216 6.32079 6.24676 6.44729C6.19135 6.57379 6.16274 6.7104 6.16274 6.8485C6.16274 6.9866 6.19135 7.1232 6.24676 7.2497C6.30216 7.3762 6.38317 7.48986 6.48468 7.5835Z"
                        fill="#1EA71B"
                      />
                    </svg>
                  </div>
                </div>

                <div
                  className="mentions-card-wrapper insight-inner-section"
                  id="FilterSection"
                >
                  <div className="mb-30">
                    <a
                      className="f-14 fw-600 f-lightwhite d-block"
                      data-bs-toggle="collapse"
                      href="#keyword"
                      role="button"
                      aria-expanded="false"
                      aria-controls="keyword"
                    >
                      keywords
                      <span className="ms-2">
                        <svg
                          width="6"
                          height="13"
                          viewBox="0 0 6 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6 6.5L0.750001 12.1292L0.750001 0.870835L6 6.5Z"
                            fill="#1EA71B"
                          />
                        </svg>
                      </span>
                    </a>
                    <div className="collapse" id="keyword">
                      <div className="collapse-wrapper">
                        <input
                          type="text"
                          placeholder="Search Keyword"
                          className="px-3 py-2 w-100 modal-input"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mb-30">
                    <a
                      className="f-14 fw-600 f-lightwhite d-block"
                      data-bs-toggle="collapse"
                      href="#Platform"
                      role="button"
                      aria-expanded="false"
                      aria-controls="Platform"
                    >
                      Platform
                      <span className="ms-2">
                        <svg
                          width="6"
                          height="13"
                          viewBox="0 0 6 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6 6.5L0.750001 12.1292L0.750001 0.870835L6 6.5Z"
                            fill="#1EA71B"
                          />
                        </svg>
                      </span>
                    </a>
                    <div className="collapse" id="Platform">
                      <div className="collapse-wrapper">
                        <div className="form-check mb-20">
                          <input
                            className="form-check-input custom-checkbox"
                            type="checkbox"
                            value=""
                            id="TwitterCheckbox"
                          />
                          <label
                            className="form-check-label f-12 f-lightwhite"
                            for="TwitterCheckbox"
                          >
                            Twitter
                          </label>
                        </div>

                        <div className="form-check mb-20">
                          <input
                            className="form-check-input custom-checkbox"
                            type="checkbox"
                            value=""
                            id="FacebookCheckbox"
                          />
                          <label
                            className="form-check-label f-12 f-lightwhite"
                            for="FacebookCheckbox"
                          >
                            Facebook
                          </label>
                        </div>

                        <div className="form-check mb-20">
                          <input
                            className="form-check-input custom-checkbox"
                            type="checkbox"
                            value=""
                            id="InstagramCheckbox"
                          />
                          <label
                            className="form-check-label f-12 f-lightwhite"
                            for="InstagramCheckbox"
                          >
                            Instagram
                          </label>
                        </div>

                        <div className="form-check mb-20">
                          <input
                            className="form-check-input custom-checkbox"
                            type="checkbox"
                            value=""
                            id="TumblrCheckbox"
                          />
                          <label
                            className="form-check-label f-12 f-lightwhite"
                            for="TumblrCheckbox"
                          >
                            Tumblr
                          </label>
                        </div>

                        <div className="form-check mb-20">
                          <input
                            className="form-check-input custom-checkbox"
                            type="checkbox"
                            value=""
                            id="ForumsCheckbox"
                          />
                          <label
                            className="form-check-label f-12 f-lightwhite"
                            for="ForumsCheckbox"
                          >
                            Forums
                          </label>
                        </div>

                        <div className="form-check mb-20">
                          <input
                            className="form-check-input custom-checkbox"
                            type="checkbox"
                            value=""
                            id="YouTubeCheckbox"
                          />
                          <label
                            className="form-check-label f-12 f-lightwhite"
                            for="YouTubeCheckbox"
                          >
                            YouTube
                          </label>
                        </div>

                        <div className="form-check mb-20">
                          <input
                            className="form-check-input custom-checkbox"
                            type="checkbox"
                            value=""
                            id="RedditCheckbox"
                          />
                          <label
                            className="form-check-label f-12 f-lightwhite"
                            for="RedditCheckbox"
                          >
                            Reddit
                          </label>
                        </div>

                        <div className="form-check mb-20">
                          <input
                            className="form-check-input custom-checkbox"
                            type="checkbox"
                            value=""
                            id="NewsCheckbox"
                          />
                          <label
                            className="form-check-label f-12 f-lightwhite"
                            for="NewsCheckbox"
                          >
                            News
                          </label>
                        </div>

                        <div className="form-check mb-20">
                          <input
                            className="form-check-input custom-checkbox"
                            type="checkbox"
                            value=""
                            id="BlogsCheckbox"
                          />
                          <label
                            className="form-check-label f-12 f-lightwhite"
                            for="BlogsCheckbox"
                          >
                            Blogs
                          </label>
                        </div>

                        <div className="form-check mb-20">
                          <input
                            className="form-check-input custom-checkbox"
                            type="checkbox"
                            value=""
                            id="ReviewsCheckbox"
                          />
                          <label
                            className="form-check-label f-12 f-lightwhite"
                            for="ReviewsCheckbox"
                          >
                            Reviews
                          </label>
                        </div>

                        <div className="form-check mb-20">
                          <input
                            className="form-check-input custom-checkbox"
                            type="checkbox"
                            value=""
                            id="QQCheckbox"
                          />
                          <label
                            className="form-check-label f-12 f-lightwhite"
                            for="QQCheckbox"
                          >
                            QQ
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-30">
                    <a
                      className="f-14 fw-600 f-lightwhite d-block"
                      data-bs-toggle="collapse"
                      href="#Includetag"
                      role="button"
                      aria-expanded="false"
                      aria-controls="Includetag"
                    >
                      Include Tags
                      <span className="ms-2">
                        <svg
                          width="6"
                          height="13"
                          viewBox="0 0 6 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6 6.5L0.750001 12.1292L0.750001 0.870835L6 6.5Z"
                            fill="#1EA71B"
                          />
                        </svg>
                      </span>
                    </a>
                    <div className="collapse" id="Includetag">
                      <div className="collapse-wrapper">
                        <input
                          type="text"
                          placeholder="Search Tags"
                          className="px-3 py-2 w-100 modal-input"
                        />

                        <div className="include-tags-list">
                          <span className="include-tags-item">
                            <div className="d-flex align-items-center justify-content-between gap-2">
                              <span className="f-12 text-white">
                                Socialmedia
                              </span>
                              <span className="cancel-tag">
                                <svg
                                  width="9"
                                  height="9"
                                  viewBox="0 0 9 9"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M7.90319 1.09681C7.84116 1.03478 7.75705 1 7.66933 1C7.5816 1 7.49749 1.03478 7.43546 1.09681L4.50426 4.02801L1.57306 1.09681C1.48864 1.01808 1.3692 0.989072 1.25801 1.02024C1.14689 1.05148 1.06 1.13836 1.02876 1.24949C0.997593 1.36069 1.0266 1.48012 1.10533 1.56454L4.03653 4.49574L1.10533 7.42694C1.03961 7.48812 1.00159 7.57346 1.00005 7.66319C0.998438 7.753 1.03337 7.83957 1.09694 7.90306C1.16043 7.96663 1.247 8.00156 1.33681 7.99995C1.42654 7.99841 1.51188 7.96039 1.57306 7.89467L4.50426 4.96347L7.43546 7.89467C7.51988 7.9734 7.63932 8.00241 7.75051 7.97124C7.86163 7.94 7.94852 7.85312 7.97976 7.74199C8.01093 7.63079 7.98192 7.51136 7.90319 7.42694L4.97199 4.49574L7.90319 1.56454C7.96522 1.50251 8 1.4184 8 1.33067C8 1.24295 7.96521 1.15883 7.90319 1.09681Z"
                                    fill="white"
                                    stroke="white"
                                    stroke-width="0.5"
                                  />
                                </svg>
                              </span>
                            </div>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-30">
                    <a
                      className="f-14 fw-600 f-lightwhite d-block"
                      data-bs-toggle="collapse"
                      href="#IncludeLanguage"
                      role="button"
                      aria-expanded="false"
                      aria-controls="IncludeLanguage"
                    >
                      Include Language
                      <span className="ms-2">
                        <svg
                          width="6"
                          height="13"
                          viewBox="0 0 6 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6 6.5L0.750001 12.1292L0.750001 0.870835L6 6.5Z"
                            fill="#1EA71B"
                          />
                        </svg>
                      </span>
                    </a>
                    <div className="collapse" id="IncludeLanguage">
                      <div className="collapse-wrapper">
                        <input
                          type="text"
                          placeholder="Search Language"
                          className="px-3 py-2 w-100 modal-input"
                        />

                        <div className="include-tags-list">
                          <span className="include-tags-item">
                            <div className="d-flex align-items-center justify-content-between gap-2">
                              <span className="f-12 text-white">English</span>
                              <span className="cancel-tag">
                                <svg
                                  width="9"
                                  height="9"
                                  viewBox="0 0 9 9"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M7.90319 1.09681C7.84116 1.03478 7.75705 1 7.66933 1C7.5816 1 7.49749 1.03478 7.43546 1.09681L4.50426 4.02801L1.57306 1.09681C1.48864 1.01808 1.3692 0.989072 1.25801 1.02024C1.14689 1.05148 1.06 1.13836 1.02876 1.24949C0.997593 1.36069 1.0266 1.48012 1.10533 1.56454L4.03653 4.49574L1.10533 7.42694C1.03961 7.48812 1.00159 7.57346 1.00005 7.66319C0.998438 7.753 1.03337 7.83957 1.09694 7.90306C1.16043 7.96663 1.247 8.00156 1.33681 7.99995C1.42654 7.99841 1.51188 7.96039 1.57306 7.89467L4.50426 4.96347L7.43546 7.89467C7.51988 7.9734 7.63932 8.00241 7.75051 7.97124C7.86163 7.94 7.94852 7.85312 7.97976 7.74199C8.01093 7.63079 7.98192 7.51136 7.90319 7.42694L4.97199 4.49574L7.90319 1.56454C7.96522 1.50251 8 1.4184 8 1.33067C8 1.24295 7.96521 1.15883 7.90319 1.09681Z"
                                    fill="white"
                                    stroke="white"
                                    stroke-width="0.5"
                                  />
                                </svg>
                              </span>
                            </div>
                          </span>

                          <span className="include-tags-item">
                            <div className="d-flex align-items-center justify-content-between gap-2">
                              <span className="f-12 text-white">Spanish</span>
                              <span className="cancel-tag">
                                <svg
                                  width="9"
                                  height="9"
                                  viewBox="0 0 9 9"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M7.90319 1.09681C7.84116 1.03478 7.75705 1 7.66933 1C7.5816 1 7.49749 1.03478 7.43546 1.09681L4.50426 4.02801L1.57306 1.09681C1.48864 1.01808 1.3692 0.989072 1.25801 1.02024C1.14689 1.05148 1.06 1.13836 1.02876 1.24949C0.997593 1.36069 1.0266 1.48012 1.10533 1.56454L4.03653 4.49574L1.10533 7.42694C1.03961 7.48812 1.00159 7.57346 1.00005 7.66319C0.998438 7.753 1.03337 7.83957 1.09694 7.90306C1.16043 7.96663 1.247 8.00156 1.33681 7.99995C1.42654 7.99841 1.51188 7.96039 1.57306 7.89467L4.50426 4.96347L7.43546 7.89467C7.51988 7.9734 7.63932 8.00241 7.75051 7.97124C7.86163 7.94 7.94852 7.85312 7.97976 7.74199C8.01093 7.63079 7.98192 7.51136 7.90319 7.42694L4.97199 4.49574L7.90319 1.56454C7.96522 1.50251 8 1.4184 8 1.33067C8 1.24295 7.96521 1.15883 7.90319 1.09681Z"
                                    fill="white"
                                    stroke="white"
                                    stroke-width="0.5"
                                  />
                                </svg>
                              </span>
                            </div>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-30">
                    <a
                      className="f-14 fw-600 f-lightwhite d-block"
                      data-bs-toggle="collapse"
                      href="#IncludeLocation"
                      role="button"
                      aria-expanded="false"
                      aria-controls="IncludeLocation"
                    >
                      Include Location
                      <span className="ms-2">
                        <svg
                          width="6"
                          height="13"
                          viewBox="0 0 6 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6 6.5L0.750001 12.1292L0.750001 0.870835L6 6.5Z"
                            fill="#1EA71B"
                          />
                        </svg>
                      </span>
                    </a>
                    <div className="collapse" id="IncludeLocation">
                      <div className="collapse-wrapper">
                        <input
                          type="text"
                          placeholder="Search Location"
                          className="px-3 py-2 w-100 modal-input"
                        />

                        <div className="include-tags-list">
                          <span className="include-tags-item">
                            <div className="d-flex align-items-center justify-content-between gap-2">
                              <span className="f-12 text-white">India</span>
                              <span className="cancel-tag">
                                <svg
                                  width="9"
                                  height="9"
                                  viewBox="0 0 9 9"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M7.90319 1.09681C7.84116 1.03478 7.75705 1 7.66933 1C7.5816 1 7.49749 1.03478 7.43546 1.09681L4.50426 4.02801L1.57306 1.09681C1.48864 1.01808 1.3692 0.989072 1.25801 1.02024C1.14689 1.05148 1.06 1.13836 1.02876 1.24949C0.997593 1.36069 1.0266 1.48012 1.10533 1.56454L4.03653 4.49574L1.10533 7.42694C1.03961 7.48812 1.00159 7.57346 1.00005 7.66319C0.998438 7.753 1.03337 7.83957 1.09694 7.90306C1.16043 7.96663 1.247 8.00156 1.33681 7.99995C1.42654 7.99841 1.51188 7.96039 1.57306 7.89467L4.50426 4.96347L7.43546 7.89467C7.51988 7.9734 7.63932 8.00241 7.75051 7.97124C7.86163 7.94 7.94852 7.85312 7.97976 7.74199C8.01093 7.63079 7.98192 7.51136 7.90319 7.42694L4.97199 4.49574L7.90319 1.56454C7.96522 1.50251 8 1.4184 8 1.33067C8 1.24295 7.96521 1.15883 7.90319 1.09681Z"
                                    fill="white"
                                    stroke="white"
                                    stroke-width="0.5"
                                  />
                                </svg>
                              </span>
                            </div>
                          </span>

                          <span className="include-tags-item">
                            <div className="d-flex align-items-center justify-content-between gap-2">
                              <span className="f-12 text-white">France</span>
                              <span className="cancel-tag">
                                <svg
                                  width="9"
                                  height="9"
                                  viewBox="0 0 9 9"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M7.90319 1.09681C7.84116 1.03478 7.75705 1 7.66933 1C7.5816 1 7.49749 1.03478 7.43546 1.09681L4.50426 4.02801L1.57306 1.09681C1.48864 1.01808 1.3692 0.989072 1.25801 1.02024C1.14689 1.05148 1.06 1.13836 1.02876 1.24949C0.997593 1.36069 1.0266 1.48012 1.10533 1.56454L4.03653 4.49574L1.10533 7.42694C1.03961 7.48812 1.00159 7.57346 1.00005 7.66319C0.998438 7.753 1.03337 7.83957 1.09694 7.90306C1.16043 7.96663 1.247 8.00156 1.33681 7.99995C1.42654 7.99841 1.51188 7.96039 1.57306 7.89467L4.50426 4.96347L7.43546 7.89467C7.51988 7.9734 7.63932 8.00241 7.75051 7.97124C7.86163 7.94 7.94852 7.85312 7.97976 7.74199C8.01093 7.63079 7.98192 7.51136 7.90319 7.42694L4.97199 4.49574L7.90319 1.56454C7.96522 1.50251 8 1.4184 8 1.33067C8 1.24295 7.96521 1.15883 7.90319 1.09681Z"
                                    fill="white"
                                    stroke="white"
                                    stroke-width="0.5"
                                  />
                                </svg>
                              </span>
                            </div>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Filter end --> */}

              <div className="insights-section">
                <div className="f-20 f-lightwhite">Insights</div>
                <div>
                  <div className="insights-btn-wrapper">
                    <div className="insight-btn active">Buzz</div>

                    <div className="insight-btn">Mood</div>

                    <div className="insight-btn">Vibes</div>

                    <div className="insight-btn">Highlights</div>

                    <div className="insight-btn">Metrics</div>

                    <div className="insight-btn">Demograghics</div>
                  </div>
                </div>

                <div className="pe-1">
                  <div className="insight-inner-section">
                    <div className="insight-main-section">
                      <div className="f-20 f-lightwhite mb-20">Total Buzz</div>
                      <div className="f-32 f-lightwhite">8.2k</div>
                      <div className="insight-chart border-top pt-20 mt-20">
                        <div className="f-20 f-lightwhite mb-30">
                          Buzz volume over time
                        </div>
                        <div className="insight-chart-img">
                          <img src={InsightChart} alt="Chart" />
                        </div>
                      </div>
                    </div>

                    <div className="insight-main-section">
                      <div className="insight-chart border-top pt-20 mt-20">
                        <div className="f-20 f-lightwhite mb-30">
                          Buzz volume by day of the week and hour
                        </div>
                        <div className="insight-chart-img">
                          <img src={InsightChart2} alt="Chart" />
                        </div>
                      </div>
                    </div>

                    <div className="insight-main-section">
                      <div className="insight-chart">
                        <div className="f-20 f-lightwhite mb-30">
                          Mood Volume
                        </div>
                        <div className="insight-chart-img">
                          <img src={InsightMoodChart} alt="Chart" />
                        </div>
                      </div>
                    </div>

                    <div className="insight-main-section">
                      <div className="insight-chart border-top pt-20 mt-20">
                        <div className="f-20 f-lightwhite mb-30">
                          Mood Volume Over time
                        </div>
                        <div className="insight-chart-img">
                          <img src={InsightMoodChart2} alt="Chart" />
                        </div>
                      </div>
                    </div>

                    <div className="insight-main-section">
                      <div className="insight-chart">
                        <div className="f-20 f-lightwhite mb-30">Vibes</div>
                        <div className="insight-chart-img">
                          <img src={InsightVibes} alt="Chart" />
                        </div>
                      </div>
                    </div>

                    <div className="insight-main-section">
                      <div className="insight-chart">
                        <div className="f-20 f-lightwhite mb-30">
                          Highlights
                        </div>
                        <div className="insight-chart-img">
                          <img src={InsightHighlights} alt="Chart" />
                        </div>
                      </div>
                    </div>

                    <div className="insight-main-section">
                      <div className="f-20 f-lightwhite mb-30">
                        Top Shared URLS
                      </div>
                      <div>
                        <div className="table-responsive">
                          <table
                            className="table top-shared-url"
                            id="InsightSharedUrl"
                          >
                            <thead>
                              <tr>
                                <th>URLs</th>
                                <th>Mentions</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <span className="me-2">1.</span>
                                  <a href="insights" className="s-item">
                                    https://en.wikipedia.org/wiki/Google_Search
                                  </a>
                                </td>
                                <td>1.2k</td>
                              </tr>

                              <tr>
                                <td>
                                  <span className="me-2">2.</span>
                                  <a href="insights" className="s-item">
                                    https://nealschaffer.com/social-media-dashboards/
                                  </a>
                                </td>
                                <td>854</td>
                              </tr>

                              <tr>
                                <td>
                                  <span className="me-2">3.</span>
                                  <a href="insights" className="s-item">
                                    https://en.wikipedia.org/wiki/Google_Search
                                  </a>
                                </td>
                                <td>1.2k</td>
                              </tr>

                              <tr>
                                <td>
                                  <span className="me-2">4.</span>
                                  <a href="insights" className="s-item">
                                    https://nealschaffer.com/social-media-dashboards/
                                  </a>
                                </td>
                                <td>854</td>
                              </tr>

                              <tr>
                                <td>
                                  <span className="me-2">5.</span>
                                  <a href="insights" className="s-item">
                                    https://en.wikipedia.org/wiki/Google_Search
                                  </a>
                                </td>
                                <td>854</td>
                              </tr>

                              <tr>
                                <td>
                                  <span className="me-2">6.</span>
                                  <a href="insights" className="s-item">
                                    https://nealschaffer.com/social-media-dashboards/
                                  </a>
                                </td>
                                <td>1.2k</td>
                              </tr>

                              <tr>
                                <td>
                                  <span className="me-2">7.</span>
                                  <a href="insights" className="s-item">
                                    https://en.wikipedia.org/wiki/Google_Search
                                  </a>
                                </td>
                                <td>854</td>
                              </tr>

                              <tr>
                                <td>
                                  <span className="me-2">8.</span>
                                  <a href="insights" className="s-item">
                                    https://nealschaffer.com/social-media-dashboards/
                                  </a>
                                </td>
                                <td>1.2k</td>
                              </tr>

                              <tr>
                                <td>
                                  <span className="me-2">9.</span>
                                  <a href="insights" className="s-item">
                                    https://nealschaffer.com/social-media-dashboards/
                                  </a>
                                </td>
                                <td>854</td>
                              </tr>

                              <tr>
                                <td>
                                  <span className="me-2">10.</span>
                                  <a href="insights" className="s-item">
                                    https://nealschaffer.com/social-media-dashboards/
                                  </a>
                                </td>
                                <td>854</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>

                    <div className="insight-main-section">
                      <div className="border-top pt-20 mt-20">
                        <div className="f-20 f-lightwhite mb-30">
                          Top Authors
                        </div>
                        <div>
                          <div className="table-responsive author-table">
                            <table className="table" id="InsightAuthor">
                              <thead>
                                <tr>
                                  <th>URLs</th>
                                  <th>Site name</th>
                                  <th>Mentions</th>
                                  <th>% of top mentions</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <span className="me-2">1.</span>
                                    <span>Jonathan Cook</span>
                                  </td>
                                  <td>Any</td>
                                  <td>254</td>
                                  <td>
                                    <div className="progress">
                                      <div
                                        className="progress-bar"
                                        role="progressbar"
                                        style={{ width: "80%" }}
                                        aria-valuenow="80"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                      ></div>
                                    </div>
                                  </td>
                                </tr>

                                <tr>
                                  <td>
                                    <span className="me-2">2.</span>
                                    <span>William Patryck</span>
                                  </td>
                                  <td>Any</td>
                                  <td>2.5k</td>
                                  <td>
                                    <div className="progress">
                                      <div
                                        className="progress-bar"
                                        role="progressbar"
                                        style={{ width: "50%" }}
                                        aria-valuenow="50"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                      ></div>
                                    </div>
                                  </td>
                                </tr>

                                <tr>
                                  <td>
                                    <span className="me-2">3.</span>
                                    <span>Phil Alan</span>
                                  </td>
                                  <td>Any</td>
                                  <td>920</td>
                                  <td>
                                    <div className="progress">
                                      <div
                                        className="progress-bar"
                                        role="progressbar"
                                        style={{ width: "30%" }}
                                        aria-valuenow="30"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                      ></div>
                                    </div>
                                  </td>
                                </tr>

                                <tr>
                                  <td>
                                    <span className="me-2">4.</span>
                                    <span>Jonathan Cook</span>
                                  </td>
                                  <td>Any</td>
                                  <td>254</td>
                                  <td>
                                    <div className="progress">
                                      <div
                                        className="progress-bar"
                                        role="progressbar"
                                        style={{ width: "80%" }}
                                        aria-valuenow="80"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                      ></div>
                                    </div>
                                  </td>
                                </tr>

                                <tr>
                                  <td>
                                    <span className="me-2">5.</span>
                                    <span>William Patryck</span>
                                  </td>
                                  <td>Any</td>
                                  <td>2.5k</td>
                                  <td>
                                    <div className="progress">
                                      <div
                                        className="progress-bar"
                                        role="progressbar"
                                        style={{ width: "50%" }}
                                        aria-valuenow="50"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                      ></div>
                                    </div>
                                  </td>
                                </tr>

                                <tr>
                                  <td>
                                    <span className="me-2">6.</span>
                                    <span>Phil Alan</span>
                                  </td>
                                  <td>Any</td>
                                  <td>920</td>
                                  <td>
                                    <div className="progress">
                                      <div
                                        className="progress-bar"
                                        role="progressbar"
                                        style={{ width: "30%" }}
                                        aria-valuenow="30"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                      ></div>
                                    </div>
                                  </td>
                                </tr>

                                <tr>
                                  <td>
                                    <span className="me-2">7.</span>
                                    <span>Jonathan Cook</span>
                                  </td>
                                  <td>Any</td>
                                  <td>254</td>
                                  <td>
                                    <div className="progress">
                                      <div
                                        className="progress-bar"
                                        role="progressbar"
                                        style={{ width: "80%" }}
                                        aria-valuenow="80"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                      ></div>
                                    </div>
                                  </td>
                                </tr>

                                <tr>
                                  <td>
                                    <span className="me-2">8.</span>
                                    <span>William Patryck</span>
                                  </td>
                                  <td>Any</td>
                                  <td>2.5k</td>
                                  <td>
                                    <div className="progress">
                                      <div
                                        className="progress-bar"
                                        role="progressbar"
                                        style={{ width: "50%" }}
                                        aria-valuenow="50"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                      ></div>
                                    </div>
                                  </td>
                                </tr>

                                <tr>
                                  <td>
                                    <span className="me-2">9.</span>
                                    <span>Phil Alan</span>
                                  </td>
                                  <td>Any</td>
                                  <td>920</td>
                                  <td>
                                    <div className="progress">
                                      <div
                                        className="progress-bar"
                                        role="progressbar"
                                        style={{ width: "30%" }}
                                        aria-valuenow="30"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                      ></div>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="insight-main-section">
                      <div className="insight-chart">
                        <div className="f-20 f-lightwhite mb-30">
                          Diversity Gender Split
                        </div>
                        <div className="diversity-gender d-flex align-items-center justify-content-center gap-3 gap-md-5 pt-20">
                          <div className="diversity-gender-img">
                            <div className="mb-20">
                              <svg
                                width="187"
                                height="187"
                                viewBox="0 0 187 187"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <circle
                                  cx="93.5"
                                  cy="93.5"
                                  r="93.5"
                                  fill="#527051"
                                  fill-opacity="0.2"
                                />
                                <path
                                  d="M72.357 110.849C71.4868 114.019 73.8645 117.141 77.1416 117.141H82.7348V120.404C82.7348 129.322 82.7196 138.24 82.7348 147.158C82.7348 149.162 82.7196 151.167 82.9212 153.156C83.2008 156.015 84.7234 157.444 87.2247 157.491C89.804 157.537 91.3571 156.232 91.7927 153.42C92.0571 151.726 92.2273 149.987 92.2273 148.262C92.2739 138.893 92.2425 129.509 92.2587 120.141C92.2587 119.41 92.2121 118.665 92.3671 117.966C92.4289 117.639 92.9577 117.158 93.2059 117.205C93.2211 117.205 93.2525 117.205 93.2677 117.22C93.2828 117.22 93.3143 117.205 93.3294 117.205C93.5776 117.158 94.1065 117.656 94.1682 117.966C94.3232 118.665 94.2766 119.41 94.2766 120.141C94.2766 129.51 94.2614 138.894 94.308 148.262C94.3232 149.986 94.4793 151.711 94.7426 153.42C95.1772 156.233 96.7313 157.537 99.3106 157.491C101.812 157.444 103.335 156.03 103.614 153.156C103.816 151.167 103.785 149.163 103.801 147.158C103.816 138.24 103.801 129.322 103.801 120.404V117.141H109.394C112.672 117.141 115.065 114.018 114.178 110.849C110.559 97.7053 107.001 84.825 103.427 71.8691C103.209 71.0617 103.784 70.2218 104.623 70.1914C105.57 70.16 105.866 71.1863 106.161 72.1487C108.383 79.529 110.558 86.9393 112.779 94.3185C113.198 95.7014 113.447 97.3789 114.395 98.2959C115.405 99.2745 117.254 100.176 118.497 99.9117C119.585 99.6939 120.64 97.9382 121.123 96.6485C121.48 95.6851 121.061 94.3185 120.735 93.1989C118.14 84.3123 115.546 75.4258 112.827 66.5845C110.745 59.8111 105.944 56.4081 98.7663 56.4081H93.2664H87.7665C80.5889 56.4233 75.7729 59.8111 73.706 66.5845C70.987 75.4408 68.3926 84.3112 65.798 93.1989C65.4718 94.3173 65.0372 95.6687 65.41 96.6485C65.8912 97.9381 66.9479 99.6939 68.0359 99.9117C69.279 100.16 71.1279 99.2745 72.1378 98.2959C73.0698 97.379 73.3343 95.7014 73.7537 94.3185C75.9753 86.9382 78.1505 79.5279 80.3719 72.1487C80.6667 71.1852 80.9625 70.16 81.9097 70.1914C82.7485 70.2229 83.324 71.0617 83.1062 71.8691C79.5342 84.81 75.9924 97.7053 72.3566 110.849H72.357Z"
                                  fill="#1EA71B"
                                />
                                <path
                                  d="M102.9 41.6123C104.155 46.9238 100.866 52.2459 95.5547 53.4999C90.2443 54.7538 84.9223 51.4646 83.6683 46.1542C82.4144 40.8427 85.7024 35.5207 91.0139 34.2667C96.3243 33.0128 101.646 36.3008 102.9 41.6123Z"
                                  fill="#1EA71B"
                                />
                                <path
                                  d="M80.3114 37.0058C80.0318 37.021 79.7522 37.0524 79.4726 37.1142C79.3328 37.1456 79.193 37.1759 79.0532 37.2225C78.9134 37.254 78.7736 37.3006 78.6186 37.3623C78.0443 37.5639 77.484 37.875 76.9562 38.3258C76.6917 38.5436 76.4436 38.807 76.2257 39.0866C76.0079 39.3662 75.8215 39.6772 75.6514 39.9872C75.4964 40.2982 75.3718 40.593 75.2634 40.8877L75.1854 41.1056L75.1236 41.3234C75.1084 41.4014 75.0922 41.4632 75.0618 41.5412C75.0467 41.603 75.0304 41.681 75.0152 41.7428C74.9535 42.0072 74.8906 42.2706 74.844 42.5199C74.7974 42.768 74.7508 42.9859 74.7194 43.2037C74.6413 43.6231 74.5796 44.0111 74.5015 44.4153C74.3466 45.2075 74.1905 45.9845 74.0041 46.7302C73.9889 46.8234 73.9575 46.9166 73.9261 47.0098C73.8946 47.103 73.8795 47.1962 73.848 47.2894C73.8014 47.4758 73.7397 47.6622 73.6931 47.8486C73.5847 48.2214 73.4752 48.579 73.3517 48.9204C73.1035 49.6042 72.8239 50.2566 72.3882 50.8776C72.1704 51.1886 71.8908 51.4986 71.5646 51.7782C71.3933 51.918 71.2232 52.0578 71.0205 52.1824C70.819 52.307 70.6012 52.4306 70.3681 52.5552C70.586 52.7265 70.8341 52.8348 71.0823 52.9281C71.3467 53.0213 71.6263 53.083 71.906 53.1145C72.4652 53.1762 73.0558 53.1145 73.6302 52.9595C73.9098 52.8815 74.1894 52.7731 74.469 52.6484C74.7486 52.5238 74.9967 52.384 75.246 52.2139C75.7435 51.8877 76.1932 51.4997 76.5822 51.0792C76.7838 50.8776 76.9551 50.6598 77.1414 50.4268C77.3127 50.209 77.4677 49.976 77.6226 49.743C77.7624 49.51 77.9174 49.277 78.042 49.044C78.1667 48.811 78.2902 48.5628 78.3997 48.3298C78.8505 47.3512 79.1605 46.3411 79.3469 45.316C79.4401 44.8034 79.5181 44.2908 79.5484 43.7934C79.5636 43.5452 79.5799 43.3122 79.595 43.0944L79.6265 42.4886V41.9749C79.6416 41.8199 79.6416 41.6801 79.6579 41.5555C79.6893 41.3073 79.7045 41.1209 79.7977 40.8716C79.8909 40.6235 80.0459 40.359 80.2637 40.0794C80.3255 40.0176 80.3721 39.9396 80.4349 39.8778C80.4664 39.8464 80.4967 39.8161 80.5281 39.7695C80.5596 39.738 80.5899 39.6914 80.6213 39.6611C80.7611 39.5213 80.9009 39.3815 81.0559 39.2417C81.3821 38.9621 81.7397 38.6977 82.1277 38.4029C82.5157 38.1081 82.9351 37.8285 83.3394 37.4861C82.8419 37.2845 82.3445 37.1598 81.8319 37.0667C81.3832 37.0211 80.8555 36.9744 80.3114 37.0058Z"
                                  fill="#1EA71B"
                                />
                              </svg>
                            </div>
                            <div className="text-center">
                              <div className="f-40 f-whitelight fw-700 mb-1">
                                49%
                              </div>
                              <div className="f-20 f-whitelight fw-600">
                                1.2k
                              </div>
                            </div>
                          </div>
                          <div className="diversity-gender-img">
                            <div className="mb-20">
                              <svg
                                width="187"
                                height="187"
                                viewBox="0 0 187 187"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <circle
                                  cx="93.5"
                                  cy="93.5"
                                  r="93.5"
                                  fill="#527051"
                                  fill-opacity="0.2"
                                />
                                <path
                                  d="M82.5463 59.1404C86.3947 58.7994 90.2744 58.5818 94.1541 58.5504C98.0338 58.5818 101.913 58.7831 105.762 59.1404C113.428 59.8386 117.323 64.8516 117.323 72.4865C117.338 81.9843 117.338 91.4976 117.308 100.994C117.293 104.687 116.159 106.162 113.506 106.301C110.356 106.472 108.742 104.982 108.727 101.677C108.68 93.9487 108.712 86.2198 108.695 78.4917V76.5519C108.695 75.7292 107.951 75.0775 107.143 75.2172C106.414 75.3568 106.212 76.0702 106.227 77.1419C106.274 82.3878 106.242 87.6173 106.242 92.8621C106.242 111.873 106.242 130.883 106.227 149.894C106.227 150.871 106.242 151.865 106.01 152.796C105.358 155.527 103.325 157.219 100.78 157.312C98.1107 157.405 95.9544 155.76 95.2087 152.905C94.9294 151.803 94.8828 150.625 94.8828 149.476C94.8677 136.145 94.8828 122.83 94.8828 109.499V107.108C94.8828 106.658 94.6036 106.27 94.1695 106.131C93.7506 106.27 93.4561 106.674 93.4561 107.108V109.499C93.4561 122.829 93.4713 136.144 93.4561 149.476C93.4561 150.625 93.4096 151.803 93.1303 152.905C92.4007 155.761 90.228 157.405 87.5588 157.312C85.0138 157.219 82.9807 155.543 82.3292 152.796C82.1116 151.865 82.1116 150.856 82.1116 149.894C82.0965 130.883 82.0965 111.873 82.0965 92.8621C82.0965 87.6162 82.0651 82.3866 82.1116 77.1419C82.1268 76.055 81.9254 75.3416 81.1958 75.2172C80.3893 75.0624 79.6435 75.714 79.6435 76.5519V78.4917C79.6435 86.2198 79.6749 93.9487 79.6121 101.677C79.597 104.966 77.9667 106.456 74.8329 106.301C72.1634 106.162 71.0463 104.687 71.0311 100.994C70.9845 91.4962 70.9997 81.9829 71.0159 72.4865C70.9845 64.8516 74.8804 59.8384 82.5466 59.1404H82.5463Z"
                                  fill="#1EA71B"
                                />
                                <path
                                  d="M94.1548 56.2215C88.8939 56.2215 84.6418 51.9694 84.6418 46.7085C84.6418 43.1231 86.6282 39.9894 89.5618 38.3755C89.577 38.3603 89.6084 38.3441 89.6235 38.3289C89.918 38.1427 90.2438 37.9879 90.5545 37.8635C90.8024 37.7704 91.0665 37.6924 91.2992 37.6307C92.1988 37.3514 93.146 37.1966 94.1386 37.1966C94.34 37.1966 94.5261 37.1966 94.7286 37.2118C94.8065 37.2118 94.8682 37.1966 94.9462 37.1966C95.7375 37.1187 96.4985 37.0418 97.2432 36.9325C97.3363 36.9173 97.4294 36.9011 97.5225 36.886C97.6156 36.8708 97.7087 36.8546 97.8018 36.8394C97.988 36.808 98.1742 36.7777 98.3604 36.7463C98.7328 36.6846 99.09 36.6067 99.431 36.5287C100.129 36.3577 100.781 36.1563 101.433 35.784C101.758 35.5978 102.084 35.365 102.395 35.0858C102.55 34.9461 102.706 34.7751 102.845 34.6051C103 34.4189 103.124 34.2327 103.264 34C103.404 34.2327 103.497 34.4806 103.559 34.7448C103.62 35.0089 103.652 35.2882 103.652 35.5512C103.652 36.1098 103.543 36.6684 103.326 37.2118C103.218 37.4759 103.093 37.739 102.938 37.988C102.784 38.2359 102.628 38.4848 102.441 38.7013C102.084 39.1517 101.65 39.5392 101.215 39.8813C101.122 39.943 101.044 40.0057 100.951 40.0826C102.611 41.7897 103.651 44.1333 103.651 46.7086C103.668 51.9694 99.4007 56.2215 94.1548 56.2215Z"
                                  fill="#1EA71B"
                                />
                              </svg>
                            </div>
                            <div className="text-center">
                              <div className="f-40 f-whitelight fw-700 mb-1">
                                51%
                              </div>
                              <div className="f-20 f-whitelight fw-600">
                                980
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="insight-main-section">
                      <div className="insight-chart border-top pt-20 mt-20">
                        <div className="f-20 f-lightwhite mb-30">
                          Volume by Countries
                        </div>
                        <div className="insight-chart-img text-center">
                          <img
                            src={InsightDemograghics2}
                            alt="Chart"
                            style={{ maxWidth: "595px", margin: "auto" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- insites tabs end --> */}
              </div>

              {/* <!-- Mention start --> */}
              <div className="mentions-close-section">
                <span>
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.528 0.667969C17.805 0.667969 19.9993 2.96864 19.9993 6.39063L19.9993 14.2893C19.9993 17.7006 17.805 20.0013 14.528 20.0013L6.14702 20.0013C2.87002 20.0013 0.666016 17.7006 0.666016 14.2893L0.666016 6.39063C0.666016 2.96864 2.87002 0.667969 6.14702 0.667969L14.528 0.667969ZM14.3733 7.43463C14.0447 7.10597 13.5033 7.10597 13.1747 7.43463L9.18235 11.427L7.49068 9.7353C7.16201 9.40663 6.62068 9.40663 6.29202 9.7353C5.96335 10.064 5.96335 10.5956 6.29202 10.934L8.59268 13.225C8.75701 13.3893 8.96968 13.4666 9.18235 13.4666C9.40468 13.4666 9.61735 13.3893 9.78168 13.225L14.3733 8.6333C14.702 8.30463 14.702 7.77297 14.3733 7.43463Z"
                      fill="#E8ECEF"
                    />
                  </svg>
                </span>
              </div>

              <div className="mentions">
                <div className="d-flex align-items-center justify-content-between mb-2 mb-lg-4 me-3">
                  <div className="f-20 f-lightwhite">Mentions</div>
                  <div className="close-mention-btn">
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 13 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.8479 1.15213C11.7504 1.05466 11.6182 1 11.4804 1C11.3425 1 11.2103 1.05466 11.1129 1.15213L6.5067 5.7583L1.90052 1.15213C1.76786 1.02842 1.58017 0.982828 1.40545 1.03181C1.23083 1.0809 1.09429 1.21743 1.04519 1.39206C0.996218 1.5668 1.04181 1.75448 1.16552 1.88713L5.77169 6.49331L1.16552 11.0995C1.06224 11.1956 1.00251 11.3297 1.00008 11.4707C0.997545 11.6119 1.05245 11.7479 1.15233 11.8477C1.2521 11.9476 1.38814 12.0025 1.52927 11.9999C1.67028 11.9975 1.80438 11.9378 1.90052 11.8345L6.50669 7.22831L11.1129 11.8345C11.2455 11.9582 11.4332 12.0038 11.6079 11.9548C11.7826 11.9057 11.9191 11.7692 11.9682 11.5946C12.0172 11.4198 11.9716 11.2321 11.8479 11.0995L7.2417 6.49331L11.8479 1.88713C11.9453 1.78966 12 1.65749 12 1.51963C12 1.38177 11.9453 1.24959 11.8479 1.15213Z"
                        fill="#1EA71B"
                        stroke="#1EA71B"
                      />
                    </svg>
                  </div>
                </div>

                <div className="mentions-card-wrapper insight-inner-section">
                  <div className="mentions-card">
                    <div className="mentions-main-content">
                      <div className="d-flex align-items-center gap-3">
                        <div className="mention-img">
                          <img
                            className="rounded img-fluid h-100"
                            src={DashMentions1}
                            alt="img"
                          />
                        </div>
                        <span className="f-15 text-white fw-700">
                          Don Norman
                        </span>
                        <span className="f-15 f-gray">@wiljh23</span>
                      </div>
                      <div className="f-15 f-gray mention-time">23 Mar</div>
                    </div>
                    <div className="mention-description">
                      <div className="mention-text">
                        <p className="f-12 mb-1">
                          @Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book.
                        </p>
                        <a href="javascrip:void(0);">
                          https://facebook.com/don.norman.18/...
                        </a>
                        <a href="javascrip:void(0);">
                          https://facebook.com/don
                        </a>
                      </div>

                      <div className="sub-descri-text">
                        <div className="detail-lable d-flex align-items-center mb-2">
                          <div className="me-2">
                            <svg
                              width="12"
                              height="16"
                              viewBox="0 0 12 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                id="Vector"
                                d="M5.9999 0.000205731C2.69097 0.000205731 0 2.69121 0 6.00018V6.40008C0 7.78436 0.43645 9.13422 1.24685 10.2565L5.04221 15.5094C5.26426 15.8169 5.62077 16 6.00007 16C6.38204 16 6.7407 15.8105 6.95632 15.4954L10.8 9.87664C11.5812 8.73489 12 7.38343 12 5.99997C12 2.691 9.30903 0 6.0001 0L5.9999 0.000205731ZM5.9999 2.8001C7.7625 2.8001 9.1998 4.23756 9.1998 6.00018C9.1998 7.76266 7.7625 9.20011 5.9999 9.20011C4.2373 9.20011 2.8 7.76266 2.8 6.00018C2.8 4.23756 4.2373 2.8001 5.9999 2.8001Z"
                                fill="#1EA71B"
                              />
                            </svg>
                          </div>
                          <div className="f-13 text-white text-truncate">
                            United States
                          </div>
                        </div>

                        <div className="detail-lable d-flex align-items-center">
                          <div className="me-2">
                            <svg
                              width="15"
                              height="15"
                              viewBox="0 0 15 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M15 7.5C15 3.36001 11.64 0 7.5 0C3.36001 0 9.80604e-08 3.36029 9.80604e-08 7.5C9.80604e-08 11.64 3.36029 15 7.5 15C11.64 15 15 11.64 15 7.5ZM4.55554 12.6022C4.55016 12.5974 4.54512 12.5925 4.53985 12.5877C4.35055 12.2811 4.16356 11.9734 3.97985 11.6659C3.84221 11.5617 3.70445 11.4579 3.56647 11.3542C3.55956 11.3411 3.55265 11.3284 3.5453 11.3154C3.44967 10.9267 3.36609 10.5333 3.29458 10.137C2.98407 9.85774 2.67632 9.58223 2.3732 9.31243C2.27241 9.10821 2.1749 8.90467 2.08058 8.70262C2.08452 8.69878 2.08825 8.69505 2.09231 8.69133C2.13794 8.66928 2.18367 8.64745 2.22963 8.62519C2.32373 8.6514 2.41805 8.67761 2.51259 8.70361C2.51654 8.69988 2.5206 8.69593 2.52454 8.69187C2.71801 8.59887 2.91423 8.50279 3.11341 8.40431C3.32772 7.99443 3.55978 7.57308 3.80546 7.14279C3.75073 7.09881 3.696 7.05505 3.64127 7.0114H3.62767C3.44484 7.17361 3.26474 7.33342 3.08763 7.49026C2.88243 7.82312 2.68764 8.14876 2.50548 8.46572C2.27636 8.41286 2.04888 8.36043 1.82306 8.30866C1.59734 8.09402 1.3759 7.88377 1.16018 7.67847C1.14746 7.63679 1.17696 7.62922 1.17027 7.60674C1.20658 7.53973 1.24321 7.47216 1.28072 7.40449C1.2851 7.40449 1.2896 7.40449 1.29377 7.40471C1.39687 7.35371 1.50051 7.30217 1.60481 7.24974C1.61369 7.2538 1.62225 7.25797 1.63102 7.26213C1.71449 7.28286 1.79817 7.30425 1.88196 7.32542C2.01665 7.19501 2.1533 7.06197 2.29226 6.92717C2.21285 6.89405 2.13333 6.86147 2.05436 6.82901C1.82744 6.94329 1.60294 7.05505 1.38183 7.16341C1.13418 7.19927 0.888933 7.23338 0.646345 7.26673L0.640752 7.26903L0.664661 6.79775C0.828958 5.18165 1.55415 3.73031 2.64237 2.64232L2.84538 2.45806L3.76337 2.0549C3.87491 2.03143 3.987 2.0084 4.09942 1.98569C4.09548 2.03812 4.11971 2.06707 4.11763 2.10064C4.20296 2.17379 4.29037 2.24859 4.37998 2.32514C4.39358 2.31911 4.40696 2.31319 4.42078 2.30738C4.52673 2.21525 4.63257 2.12301 4.73819 2.03077C4.64749 1.99896 4.55788 1.96814 4.46905 1.93798C4.50787 1.87613 4.54659 1.81405 4.58585 1.75241C4.88055 1.55433 5.17404 1.35615 5.46523 1.15872C5.47346 1.1574 5.48158 1.15619 5.4898 1.15488C5.67614 1.15488 5.86424 1.15696 6.05399 1.16135C6.25327 1.46646 6.47239 1.78551 6.70723 2.11609C6.71052 2.12475 6.71392 2.13309 6.7171 2.14153C6.83106 2.30309 6.94874 2.46728 7.06992 2.63375C6.89488 2.74354 6.71918 2.85344 6.54302 2.96344C6.45912 3.04043 6.37555 3.11753 6.29143 3.19453C6.27026 3.26724 6.24931 3.33974 6.22858 3.41278C6.22397 3.41322 6.21959 3.41333 6.2152 3.41355C6.10278 3.41651 5.99036 3.41969 5.8785 3.42298C5.87905 3.4186 5.87948 3.41421 5.87992 3.40982C5.87674 3.03353 5.88135 2.6614 5.89418 2.29451C5.77277 2.16476 5.65454 2.03743 5.54035 1.91294C5.49253 1.96909 5.44471 2.02514 5.39667 2.08107C5.40128 2.10136 5.40589 2.12198 5.41071 2.14249C5.46654 2.34605 5.52708 2.55346 5.59212 2.76325C5.37386 2.80537 5.15582 2.84836 4.93887 2.89234C5.06654 2.97669 5.1965 3.06278 5.32878 3.15085C5.32012 3.27731 5.31266 3.40431 5.30597 3.53155C5.30531 3.53605 5.30487 3.54044 5.30421 3.54482C5.41663 3.60624 5.52982 3.66854 5.64409 3.73182C5.94701 3.75135 6.25247 3.7735 6.56 3.79829C6.78056 3.94547 7.00508 4.09574 7.23253 4.24884C7.31742 4.30566 7.40275 4.36302 7.48874 4.42071C7.42995 4.57546 7.37149 4.73032 7.31369 4.8853C7.38531 4.9624 7.45748 5.03995 7.53019 5.1176C7.71259 5.15094 7.89584 5.18483 8.07944 5.21927C8.08306 5.44016 8.08767 5.66182 8.09348 5.88358C7.95539 5.89937 7.8172 5.91505 7.679 5.93074H7.66452C7.49562 5.83894 7.32704 5.74758 7.15978 5.65742C7.01863 5.46867 6.87945 5.28133 6.74278 5.09576C6.73817 5.09598 6.73356 5.09598 6.72896 5.0962C6.5017 5.15806 6.27478 5.22003 6.04884 5.2821C5.98698 5.49894 5.92677 5.71587 5.86853 5.93226C5.7866 5.86075 5.70544 5.78946 5.6245 5.71883C5.68471 5.49388 5.7469 5.26895 5.81106 5.04399C5.70588 5.10706 5.60037 5.16979 5.4953 5.23242C5.36117 5.4771 5.22934 5.72071 5.09981 5.96307C5.01985 5.98731 4.94067 6.01188 4.86115 6.03623C4.86159 5.89705 4.86323 5.75797 4.86576 5.61903C4.81147 5.6029 4.7574 5.587 4.70332 5.57099C4.626 5.72092 4.54989 5.87018 4.47498 6.01902C4.18028 6.03997 3.88743 6.06113 3.59658 6.08274C3.60042 6.09579 3.60437 6.10851 3.60832 6.12156C3.65175 6.26392 3.69704 6.40705 3.74355 6.55084C3.75254 6.55512 3.76164 6.5595 3.77064 6.56367C3.98889 6.59109 4.20814 6.61939 4.42891 6.64812C4.62348 6.59262 4.81882 6.53647 5.01502 6.47966C5.02391 6.49304 5.03312 6.50642 5.04211 6.52002C5.18491 6.58593 5.32825 6.65251 5.47226 6.72029C5.4909 6.72467 5.50944 6.72906 5.5283 6.73345C5.68755 6.69111 5.84779 6.64856 6.00792 6.60578C6.1041 6.4394 6.20139 6.2718 6.29955 6.10413C6.56804 6.08131 6.83752 6.05883 7.10787 6.03646C7.11697 6.0551 7.12597 6.07353 7.13496 6.09239C7.41299 6.16829 7.69244 6.24561 7.9729 6.32359C8.11339 6.57332 8.25552 6.82382 8.39911 7.07522C8.63854 7.35051 8.8796 7.62744 9.12112 7.90459C9.07988 8.18526 9.03963 8.46558 9.0008 8.74526C8.78068 9.00376 8.56308 9.26073 8.34986 9.51463C8.10122 9.54249 7.85323 9.56936 7.60646 9.59513C7.31878 9.54084 7.03163 9.48546 6.74482 9.42974C6.62506 9.54106 6.50638 9.65085 6.38948 9.75987C6.38991 9.76448 6.39013 9.76887 6.39046 9.77347C6.34209 10.0815 6.29822 10.3868 6.25995 10.6888C6.2027 10.8421 6.14731 10.9939 6.09412 11.1445C6.16596 11.3442 6.23889 11.5434 6.31248 11.7423C6.25512 12.0698 6.20566 12.3918 6.16552 12.7077C6.02842 12.9658 5.90207 13.2164 5.78779 13.4582C5.78384 13.4576 5.77979 13.457 5.77584 13.4563C5.68568 13.4701 5.59619 13.4832 5.50746 13.4954C5.19344 13.1978 4.87516 12.8997 4.55547 12.6023L4.55554 12.6022ZM12.0075 12.6762L11.7956 12.4824C11.7302 12.2931 11.6636 12.1022 11.5952 11.9101C11.4465 11.6732 11.2945 11.4338 11.1396 11.1925C11.1495 11.0902 11.1592 10.9877 11.1691 10.885C11.6981 10.6305 12.2352 10.3697 12.7763 10.1057C12.9344 9.84052 13.0931 9.57433 13.2518 9.30847L14.1999 9.00697L14.0621 9.54241C13.7273 10.6179 13.1352 11.5803 12.3578 12.3577L12.0075 12.6762ZM2.88185 11.7718C2.88086 11.768 2.87955 11.764 2.87834 11.7601C2.76779 11.5718 2.65942 11.3836 2.55315 11.1955C2.56401 11.0764 2.57706 10.9558 2.59274 10.8341C2.7362 10.9446 2.87978 11.0557 3.02379 11.1674C3.02795 11.1681 3.03223 11.1686 3.0364 11.1693C3.14608 11.307 3.25652 11.4452 3.36785 11.584C3.37816 11.5932 3.38836 11.6028 3.39889 11.6123C3.40097 11.7917 3.40723 11.9686 3.41776 12.1433C3.23909 12.019 3.06053 11.8952 2.88187 11.7719L2.88185 11.7718ZM14.1698 5.87617L14.0497 5.68961C14.0494 5.68501 14.0494 5.6804 14.0492 5.67579C13.8608 5.51018 13.6715 5.34369 13.4818 5.17686C13.2175 5.13255 12.953 5.08901 12.6878 5.04558C12.636 4.90892 12.5841 4.77226 12.5318 4.6357C12.6677 4.51791 12.8025 4.4011 12.9355 4.28561C12.6774 4.23044 12.4189 4.17615 12.1604 4.12252C12.0279 3.96064 11.8956 3.79887 11.7639 3.6372C11.7589 3.62777 11.7538 3.61856 11.7491 3.60913L12.139 2.44327L12.3578 2.64223C13.1352 3.41963 13.7272 4.38203 14.0621 5.45753L14.1698 5.87617ZM11.4411 4.45771C11.4828 4.25623 11.5237 4.05564 11.5633 3.8559C11.5631 3.84658 11.5626 3.83714 11.5624 3.82771C11.687 3.93805 11.8123 4.04827 11.9379 4.15883C11.9524 4.16848 11.9667 4.17824 11.9811 4.18789C11.9713 4.29965 11.9612 4.41185 11.9507 4.52395C11.8113 4.56782 11.6712 4.61224 11.5308 4.6571C11.501 4.59063 11.471 4.52417 11.4411 4.45771ZM7.60433 4.33344C7.59995 4.32906 7.59556 4.32467 7.59106 4.32006C7.46197 4.19887 7.33431 4.07866 7.20806 3.95989C7.19973 3.93345 7.23844 3.91141 7.22715 3.87642C7.32147 3.69381 7.41623 3.51097 7.51098 3.32858C7.52063 3.31893 7.53072 3.30949 7.54037 3.29963C7.66189 3.25312 7.78353 3.20662 7.90473 3.16045C7.88751 3.28943 7.87051 3.41873 7.85373 3.54825C7.81458 3.67405 7.77542 3.80007 7.73638 3.92609C7.77498 4.07283 7.81436 4.22025 7.85461 4.36796C7.77114 4.35623 7.68779 4.34471 7.60432 4.33342L7.60433 4.33344ZM7.85846 3.71409C7.86339 3.70926 7.86822 3.70444 7.87304 3.69983C7.96298 3.65958 8.05269 3.61954 8.14208 3.57973C8.18738 3.68897 8.233 3.7992 8.27939 3.90953C8.26097 3.90997 8.24222 3.91041 8.22357 3.91096C8.15381 3.91743 8.08373 3.92423 8.01398 3.93135C7.96177 3.85853 7.91001 3.78603 7.85846 3.71409ZM10.6485 3.15352C10.6439 3.15352 10.6395 3.15352 10.6347 3.1533C10.5328 2.96817 10.4325 2.78414 10.3334 2.60108C9.83287 2.32546 9.34503 2.05961 8.87451 1.80801C8.87012 1.80801 8.86596 1.80823 8.86135 1.80845C8.846 1.60368 8.83196 1.40046 8.81923 1.19886C8.81945 1.19437 8.81989 1.18998 8.82 1.18559L8.69969 0.740315L8.88416 0.768611C9.55484 0.905926 10.1901 1.1412 10.7743 1.45881L11.0363 1.61817L11.2911 2.12443C11.3199 2.29629 11.3484 2.46925 11.3772 2.6431C11.2378 2.84436 11.0951 3.04814 10.9494 3.25356C10.849 3.22021 10.7486 3.18665 10.6485 3.15352ZM8.71712 2.89688C8.57201 2.83722 8.42778 2.77832 8.28478 2.72063C8.30408 2.64309 8.32657 2.5741 8.32547 2.48856C8.32569 2.48395 8.32613 2.47956 8.32635 2.47496C8.5423 2.47517 8.75837 2.47682 8.97519 2.48011C8.98879 2.58419 9.00239 2.6885 9.01686 2.79312C8.93033 2.83633 8.84357 2.87976 8.75627 2.92308C8.74333 2.91431 8.73028 2.90576 8.71712 2.89688Z"
                                fill="#1EA71B"
                              />
                            </svg>
                          </div>
                          <div className="f-13 text-white text-truncate">
                            English
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mentions-card">
                    <div className="mentions-main-content">
                      <div className="d-flex align-items-center gap-3">
                        <div className="mention-img">
                          <img
                            className="rounded img-fluid h-100"
                            src={DashMentions2}
                            alt="img"
                          />
                        </div>
                        <span className="f-15 text-white fw-700">
                          Willy johnson
                        </span>
                        <span className="f-15 f-gray">@wiljh23</span>
                      </div>
                      <div className="f-15 f-gray mention-time">23 Mar</div>
                    </div>
                    <div className="mention-description">
                      <div className="mention-text">
                        <p className="f-12 mb-1">
                          @Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book.
                        </p>
                        <a href="javascrip:void(0);">
                          https://facebook.com/don.norman.18/...
                        </a>
                        <a href="javascrip:void(0);">
                          https://facebook.com/don
                        </a>
                      </div>

                      <div className="sub-descri-text">
                        <div className="detail-lable d-flex align-items-center mb-2">
                          <div className="me-2">
                            <svg
                              width="12"
                              height="16"
                              viewBox="0 0 12 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                id="Vector"
                                d="M5.9999 0.000205731C2.69097 0.000205731 0 2.69121 0 6.00018V6.40008C0 7.78436 0.43645 9.13422 1.24685 10.2565L5.04221 15.5094C5.26426 15.8169 5.62077 16 6.00007 16C6.38204 16 6.7407 15.8105 6.95632 15.4954L10.8 9.87664C11.5812 8.73489 12 7.38343 12 5.99997C12 2.691 9.30903 0 6.0001 0L5.9999 0.000205731ZM5.9999 2.8001C7.7625 2.8001 9.1998 4.23756 9.1998 6.00018C9.1998 7.76266 7.7625 9.20011 5.9999 9.20011C4.2373 9.20011 2.8 7.76266 2.8 6.00018C2.8 4.23756 4.2373 2.8001 5.9999 2.8001Z"
                                fill="#1EA71B"
                              />
                            </svg>
                          </div>
                          <div className="f-13 text-white text-truncate">
                            United States
                          </div>
                        </div>

                        <div className="detail-lable d-flex align-items-center">
                          <div className="me-2">
                            <svg
                              width="15"
                              height="15"
                              viewBox="0 0 15 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M15 7.5C15 3.36001 11.64 0 7.5 0C3.36001 0 9.80604e-08 3.36029 9.80604e-08 7.5C9.80604e-08 11.64 3.36029 15 7.5 15C11.64 15 15 11.64 15 7.5ZM4.55554 12.6022C4.55016 12.5974 4.54512 12.5925 4.53985 12.5877C4.35055 12.2811 4.16356 11.9734 3.97985 11.6659C3.84221 11.5617 3.70445 11.4579 3.56647 11.3542C3.55956 11.3411 3.55265 11.3284 3.5453 11.3154C3.44967 10.9267 3.36609 10.5333 3.29458 10.137C2.98407 9.85774 2.67632 9.58223 2.3732 9.31243C2.27241 9.10821 2.1749 8.90467 2.08058 8.70262C2.08452 8.69878 2.08825 8.69505 2.09231 8.69133C2.13794 8.66928 2.18367 8.64745 2.22963 8.62519C2.32373 8.6514 2.41805 8.67761 2.51259 8.70361C2.51654 8.69988 2.5206 8.69593 2.52454 8.69187C2.71801 8.59887 2.91423 8.50279 3.11341 8.40431C3.32772 7.99443 3.55978 7.57308 3.80546 7.14279C3.75073 7.09881 3.696 7.05505 3.64127 7.0114H3.62767C3.44484 7.17361 3.26474 7.33342 3.08763 7.49026C2.88243 7.82312 2.68764 8.14876 2.50548 8.46572C2.27636 8.41286 2.04888 8.36043 1.82306 8.30866C1.59734 8.09402 1.3759 7.88377 1.16018 7.67847C1.14746 7.63679 1.17696 7.62922 1.17027 7.60674C1.20658 7.53973 1.24321 7.47216 1.28072 7.40449C1.2851 7.40449 1.2896 7.40449 1.29377 7.40471C1.39687 7.35371 1.50051 7.30217 1.60481 7.24974C1.61369 7.2538 1.62225 7.25797 1.63102 7.26213C1.71449 7.28286 1.79817 7.30425 1.88196 7.32542C2.01665 7.19501 2.1533 7.06197 2.29226 6.92717C2.21285 6.89405 2.13333 6.86147 2.05436 6.82901C1.82744 6.94329 1.60294 7.05505 1.38183 7.16341C1.13418 7.19927 0.888933 7.23338 0.646345 7.26673L0.640752 7.26903L0.664661 6.79775C0.828958 5.18165 1.55415 3.73031 2.64237 2.64232L2.84538 2.45806L3.76337 2.0549C3.87491 2.03143 3.987 2.0084 4.09942 1.98569C4.09548 2.03812 4.11971 2.06707 4.11763 2.10064C4.20296 2.17379 4.29037 2.24859 4.37998 2.32514C4.39358 2.31911 4.40696 2.31319 4.42078 2.30738C4.52673 2.21525 4.63257 2.12301 4.73819 2.03077C4.64749 1.99896 4.55788 1.96814 4.46905 1.93798C4.50787 1.87613 4.54659 1.81405 4.58585 1.75241C4.88055 1.55433 5.17404 1.35615 5.46523 1.15872C5.47346 1.1574 5.48158 1.15619 5.4898 1.15488C5.67614 1.15488 5.86424 1.15696 6.05399 1.16135C6.25327 1.46646 6.47239 1.78551 6.70723 2.11609C6.71052 2.12475 6.71392 2.13309 6.7171 2.14153C6.83106 2.30309 6.94874 2.46728 7.06992 2.63375C6.89488 2.74354 6.71918 2.85344 6.54302 2.96344C6.45912 3.04043 6.37555 3.11753 6.29143 3.19453C6.27026 3.26724 6.24931 3.33974 6.22858 3.41278C6.22397 3.41322 6.21959 3.41333 6.2152 3.41355C6.10278 3.41651 5.99036 3.41969 5.8785 3.42298C5.87905 3.4186 5.87948 3.41421 5.87992 3.40982C5.87674 3.03353 5.88135 2.6614 5.89418 2.29451C5.77277 2.16476 5.65454 2.03743 5.54035 1.91294C5.49253 1.96909 5.44471 2.02514 5.39667 2.08107C5.40128 2.10136 5.40589 2.12198 5.41071 2.14249C5.46654 2.34605 5.52708 2.55346 5.59212 2.76325C5.37386 2.80537 5.15582 2.84836 4.93887 2.89234C5.06654 2.97669 5.1965 3.06278 5.32878 3.15085C5.32012 3.27731 5.31266 3.40431 5.30597 3.53155C5.30531 3.53605 5.30487 3.54044 5.30421 3.54482C5.41663 3.60624 5.52982 3.66854 5.64409 3.73182C5.94701 3.75135 6.25247 3.7735 6.56 3.79829C6.78056 3.94547 7.00508 4.09574 7.23253 4.24884C7.31742 4.30566 7.40275 4.36302 7.48874 4.42071C7.42995 4.57546 7.37149 4.73032 7.31369 4.8853C7.38531 4.9624 7.45748 5.03995 7.53019 5.1176C7.71259 5.15094 7.89584 5.18483 8.07944 5.21927C8.08306 5.44016 8.08767 5.66182 8.09348 5.88358C7.95539 5.89937 7.8172 5.91505 7.679 5.93074H7.66452C7.49562 5.83894 7.32704 5.74758 7.15978 5.65742C7.01863 5.46867 6.87945 5.28133 6.74278 5.09576C6.73817 5.09598 6.73356 5.09598 6.72896 5.0962C6.5017 5.15806 6.27478 5.22003 6.04884 5.2821C5.98698 5.49894 5.92677 5.71587 5.86853 5.93226C5.7866 5.86075 5.70544 5.78946 5.6245 5.71883C5.68471 5.49388 5.7469 5.26895 5.81106 5.04399C5.70588 5.10706 5.60037 5.16979 5.4953 5.23242C5.36117 5.4771 5.22934 5.72071 5.09981 5.96307C5.01985 5.98731 4.94067 6.01188 4.86115 6.03623C4.86159 5.89705 4.86323 5.75797 4.86576 5.61903C4.81147 5.6029 4.7574 5.587 4.70332 5.57099C4.626 5.72092 4.54989 5.87018 4.47498 6.01902C4.18028 6.03997 3.88743 6.06113 3.59658 6.08274C3.60042 6.09579 3.60437 6.10851 3.60832 6.12156C3.65175 6.26392 3.69704 6.40705 3.74355 6.55084C3.75254 6.55512 3.76164 6.5595 3.77064 6.56367C3.98889 6.59109 4.20814 6.61939 4.42891 6.64812C4.62348 6.59262 4.81882 6.53647 5.01502 6.47966C5.02391 6.49304 5.03312 6.50642 5.04211 6.52002C5.18491 6.58593 5.32825 6.65251 5.47226 6.72029C5.4909 6.72467 5.50944 6.72906 5.5283 6.73345C5.68755 6.69111 5.84779 6.64856 6.00792 6.60578C6.1041 6.4394 6.20139 6.2718 6.29955 6.10413C6.56804 6.08131 6.83752 6.05883 7.10787 6.03646C7.11697 6.0551 7.12597 6.07353 7.13496 6.09239C7.41299 6.16829 7.69244 6.24561 7.9729 6.32359C8.11339 6.57332 8.25552 6.82382 8.39911 7.07522C8.63854 7.35051 8.8796 7.62744 9.12112 7.90459C9.07988 8.18526 9.03963 8.46558 9.0008 8.74526C8.78068 9.00376 8.56308 9.26073 8.34986 9.51463C8.10122 9.54249 7.85323 9.56936 7.60646 9.59513C7.31878 9.54084 7.03163 9.48546 6.74482 9.42974C6.62506 9.54106 6.50638 9.65085 6.38948 9.75987C6.38991 9.76448 6.39013 9.76887 6.39046 9.77347C6.34209 10.0815 6.29822 10.3868 6.25995 10.6888C6.2027 10.8421 6.14731 10.9939 6.09412 11.1445C6.16596 11.3442 6.23889 11.5434 6.31248 11.7423C6.25512 12.0698 6.20566 12.3918 6.16552 12.7077C6.02842 12.9658 5.90207 13.2164 5.78779 13.4582C5.78384 13.4576 5.77979 13.457 5.77584 13.4563C5.68568 13.4701 5.59619 13.4832 5.50746 13.4954C5.19344 13.1978 4.87516 12.8997 4.55547 12.6023L4.55554 12.6022ZM12.0075 12.6762L11.7956 12.4824C11.7302 12.2931 11.6636 12.1022 11.5952 11.9101C11.4465 11.6732 11.2945 11.4338 11.1396 11.1925C11.1495 11.0902 11.1592 10.9877 11.1691 10.885C11.6981 10.6305 12.2352 10.3697 12.7763 10.1057C12.9344 9.84052 13.0931 9.57433 13.2518 9.30847L14.1999 9.00697L14.0621 9.54241C13.7273 10.6179 13.1352 11.5803 12.3578 12.3577L12.0075 12.6762ZM2.88185 11.7718C2.88086 11.768 2.87955 11.764 2.87834 11.7601C2.76779 11.5718 2.65942 11.3836 2.55315 11.1955C2.56401 11.0764 2.57706 10.9558 2.59274 10.8341C2.7362 10.9446 2.87978 11.0557 3.02379 11.1674C3.02795 11.1681 3.03223 11.1686 3.0364 11.1693C3.14608 11.307 3.25652 11.4452 3.36785 11.584C3.37816 11.5932 3.38836 11.6028 3.39889 11.6123C3.40097 11.7917 3.40723 11.9686 3.41776 12.1433C3.23909 12.019 3.06053 11.8952 2.88187 11.7719L2.88185 11.7718ZM14.1698 5.87617L14.0497 5.68961C14.0494 5.68501 14.0494 5.6804 14.0492 5.67579C13.8608 5.51018 13.6715 5.34369 13.4818 5.17686C13.2175 5.13255 12.953 5.08901 12.6878 5.04558C12.636 4.90892 12.5841 4.77226 12.5318 4.6357C12.6677 4.51791 12.8025 4.4011 12.9355 4.28561C12.6774 4.23044 12.4189 4.17615 12.1604 4.12252C12.0279 3.96064 11.8956 3.79887 11.7639 3.6372C11.7589 3.62777 11.7538 3.61856 11.7491 3.60913L12.139 2.44327L12.3578 2.64223C13.1352 3.41963 13.7272 4.38203 14.0621 5.45753L14.1698 5.87617ZM11.4411 4.45771C11.4828 4.25623 11.5237 4.05564 11.5633 3.8559C11.5631 3.84658 11.5626 3.83714 11.5624 3.82771C11.687 3.93805 11.8123 4.04827 11.9379 4.15883C11.9524 4.16848 11.9667 4.17824 11.9811 4.18789C11.9713 4.29965 11.9612 4.41185 11.9507 4.52395C11.8113 4.56782 11.6712 4.61224 11.5308 4.6571C11.501 4.59063 11.471 4.52417 11.4411 4.45771ZM7.60433 4.33344C7.59995 4.32906 7.59556 4.32467 7.59106 4.32006C7.46197 4.19887 7.33431 4.07866 7.20806 3.95989C7.19973 3.93345 7.23844 3.91141 7.22715 3.87642C7.32147 3.69381 7.41623 3.51097 7.51098 3.32858C7.52063 3.31893 7.53072 3.30949 7.54037 3.29963C7.66189 3.25312 7.78353 3.20662 7.90473 3.16045C7.88751 3.28943 7.87051 3.41873 7.85373 3.54825C7.81458 3.67405 7.77542 3.80007 7.73638 3.92609C7.77498 4.07283 7.81436 4.22025 7.85461 4.36796C7.77114 4.35623 7.68779 4.34471 7.60432 4.33342L7.60433 4.33344ZM7.85846 3.71409C7.86339 3.70926 7.86822 3.70444 7.87304 3.69983C7.96298 3.65958 8.05269 3.61954 8.14208 3.57973C8.18738 3.68897 8.233 3.7992 8.27939 3.90953C8.26097 3.90997 8.24222 3.91041 8.22357 3.91096C8.15381 3.91743 8.08373 3.92423 8.01398 3.93135C7.96177 3.85853 7.91001 3.78603 7.85846 3.71409ZM10.6485 3.15352C10.6439 3.15352 10.6395 3.15352 10.6347 3.1533C10.5328 2.96817 10.4325 2.78414 10.3334 2.60108C9.83287 2.32546 9.34503 2.05961 8.87451 1.80801C8.87012 1.80801 8.86596 1.80823 8.86135 1.80845C8.846 1.60368 8.83196 1.40046 8.81923 1.19886C8.81945 1.19437 8.81989 1.18998 8.82 1.18559L8.69969 0.740315L8.88416 0.768611C9.55484 0.905926 10.1901 1.1412 10.7743 1.45881L11.0363 1.61817L11.2911 2.12443C11.3199 2.29629 11.3484 2.46925 11.3772 2.6431C11.2378 2.84436 11.0951 3.04814 10.9494 3.25356C10.849 3.22021 10.7486 3.18665 10.6485 3.15352ZM8.71712 2.89688C8.57201 2.83722 8.42778 2.77832 8.28478 2.72063C8.30408 2.64309 8.32657 2.5741 8.32547 2.48856C8.32569 2.48395 8.32613 2.47956 8.32635 2.47496C8.5423 2.47517 8.75837 2.47682 8.97519 2.48011C8.98879 2.58419 9.00239 2.6885 9.01686 2.79312C8.93033 2.83633 8.84357 2.87976 8.75627 2.92308C8.74333 2.91431 8.73028 2.90576 8.71712 2.89688Z"
                                fill="#1EA71B"
                              />
                            </svg>
                          </div>
                          <div className="f-13 text-white text-truncate">
                            English
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mentions-card">
                    <div className="mentions-main-content">
                      <div className="d-flex align-items-center gap-3">
                        <div className="mention-img">
                          <img
                            className="rounded img-fluid h-100"
                            src={DashMentions3}
                            alt="img"
                          />
                        </div>
                        <span className="f-15 text-white fw-700">
                          Lisa Haydan
                        </span>
                        <span className="f-15 f-gray">@lzhr233</span>
                      </div>
                      <div className="f-15 f-gray mention-time">23 Mar</div>
                    </div>
                    <div className="mention-description">
                      <div className="mention-text">
                        <p className="f-12 mb-1">
                          @Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book.
                        </p>
                        <a href="javascrip:void(0);">
                          https://facebook.com/don.norman.18/...
                        </a>
                        <a href="javascrip:void(0);">
                          https://facebook.com/don
                        </a>
                      </div>

                      <div className="sub-descri-text">
                        <div className="detail-lable d-flex align-items-center mb-2">
                          <div className="me-2">
                            <svg
                              width="12"
                              height="16"
                              viewBox="0 0 12 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                id="Vector"
                                d="M5.9999 0.000205731C2.69097 0.000205731 0 2.69121 0 6.00018V6.40008C0 7.78436 0.43645 9.13422 1.24685 10.2565L5.04221 15.5094C5.26426 15.8169 5.62077 16 6.00007 16C6.38204 16 6.7407 15.8105 6.95632 15.4954L10.8 9.87664C11.5812 8.73489 12 7.38343 12 5.99997C12 2.691 9.30903 0 6.0001 0L5.9999 0.000205731ZM5.9999 2.8001C7.7625 2.8001 9.1998 4.23756 9.1998 6.00018C9.1998 7.76266 7.7625 9.20011 5.9999 9.20011C4.2373 9.20011 2.8 7.76266 2.8 6.00018C2.8 4.23756 4.2373 2.8001 5.9999 2.8001Z"
                                fill="#1EA71B"
                              />
                            </svg>
                          </div>
                          <div className="f-13 text-white text-truncate">
                            United States
                          </div>
                        </div>

                        <div className="detail-lable d-flex align-items-center">
                          <div className="me-2">
                            <svg
                              width="15"
                              height="15"
                              viewBox="0 0 15 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M15 7.5C15 3.36001 11.64 0 7.5 0C3.36001 0 9.80604e-08 3.36029 9.80604e-08 7.5C9.80604e-08 11.64 3.36029 15 7.5 15C11.64 15 15 11.64 15 7.5ZM4.55554 12.6022C4.55016 12.5974 4.54512 12.5925 4.53985 12.5877C4.35055 12.2811 4.16356 11.9734 3.97985 11.6659C3.84221 11.5617 3.70445 11.4579 3.56647 11.3542C3.55956 11.3411 3.55265 11.3284 3.5453 11.3154C3.44967 10.9267 3.36609 10.5333 3.29458 10.137C2.98407 9.85774 2.67632 9.58223 2.3732 9.31243C2.27241 9.10821 2.1749 8.90467 2.08058 8.70262C2.08452 8.69878 2.08825 8.69505 2.09231 8.69133C2.13794 8.66928 2.18367 8.64745 2.22963 8.62519C2.32373 8.6514 2.41805 8.67761 2.51259 8.70361C2.51654 8.69988 2.5206 8.69593 2.52454 8.69187C2.71801 8.59887 2.91423 8.50279 3.11341 8.40431C3.32772 7.99443 3.55978 7.57308 3.80546 7.14279C3.75073 7.09881 3.696 7.05505 3.64127 7.0114H3.62767C3.44484 7.17361 3.26474 7.33342 3.08763 7.49026C2.88243 7.82312 2.68764 8.14876 2.50548 8.46572C2.27636 8.41286 2.04888 8.36043 1.82306 8.30866C1.59734 8.09402 1.3759 7.88377 1.16018 7.67847C1.14746 7.63679 1.17696 7.62922 1.17027 7.60674C1.20658 7.53973 1.24321 7.47216 1.28072 7.40449C1.2851 7.40449 1.2896 7.40449 1.29377 7.40471C1.39687 7.35371 1.50051 7.30217 1.60481 7.24974C1.61369 7.2538 1.62225 7.25797 1.63102 7.26213C1.71449 7.28286 1.79817 7.30425 1.88196 7.32542C2.01665 7.19501 2.1533 7.06197 2.29226 6.92717C2.21285 6.89405 2.13333 6.86147 2.05436 6.82901C1.82744 6.94329 1.60294 7.05505 1.38183 7.16341C1.13418 7.19927 0.888933 7.23338 0.646345 7.26673L0.640752 7.26903L0.664661 6.79775C0.828958 5.18165 1.55415 3.73031 2.64237 2.64232L2.84538 2.45806L3.76337 2.0549C3.87491 2.03143 3.987 2.0084 4.09942 1.98569C4.09548 2.03812 4.11971 2.06707 4.11763 2.10064C4.20296 2.17379 4.29037 2.24859 4.37998 2.32514C4.39358 2.31911 4.40696 2.31319 4.42078 2.30738C4.52673 2.21525 4.63257 2.12301 4.73819 2.03077C4.64749 1.99896 4.55788 1.96814 4.46905 1.93798C4.50787 1.87613 4.54659 1.81405 4.58585 1.75241C4.88055 1.55433 5.17404 1.35615 5.46523 1.15872C5.47346 1.1574 5.48158 1.15619 5.4898 1.15488C5.67614 1.15488 5.86424 1.15696 6.05399 1.16135C6.25327 1.46646 6.47239 1.78551 6.70723 2.11609C6.71052 2.12475 6.71392 2.13309 6.7171 2.14153C6.83106 2.30309 6.94874 2.46728 7.06992 2.63375C6.89488 2.74354 6.71918 2.85344 6.54302 2.96344C6.45912 3.04043 6.37555 3.11753 6.29143 3.19453C6.27026 3.26724 6.24931 3.33974 6.22858 3.41278C6.22397 3.41322 6.21959 3.41333 6.2152 3.41355C6.10278 3.41651 5.99036 3.41969 5.8785 3.42298C5.87905 3.4186 5.87948 3.41421 5.87992 3.40982C5.87674 3.03353 5.88135 2.6614 5.89418 2.29451C5.77277 2.16476 5.65454 2.03743 5.54035 1.91294C5.49253 1.96909 5.44471 2.02514 5.39667 2.08107C5.40128 2.10136 5.40589 2.12198 5.41071 2.14249C5.46654 2.34605 5.52708 2.55346 5.59212 2.76325C5.37386 2.80537 5.15582 2.84836 4.93887 2.89234C5.06654 2.97669 5.1965 3.06278 5.32878 3.15085C5.32012 3.27731 5.31266 3.40431 5.30597 3.53155C5.30531 3.53605 5.30487 3.54044 5.30421 3.54482C5.41663 3.60624 5.52982 3.66854 5.64409 3.73182C5.94701 3.75135 6.25247 3.7735 6.56 3.79829C6.78056 3.94547 7.00508 4.09574 7.23253 4.24884C7.31742 4.30566 7.40275 4.36302 7.48874 4.42071C7.42995 4.57546 7.37149 4.73032 7.31369 4.8853C7.38531 4.9624 7.45748 5.03995 7.53019 5.1176C7.71259 5.15094 7.89584 5.18483 8.07944 5.21927C8.08306 5.44016 8.08767 5.66182 8.09348 5.88358C7.95539 5.89937 7.8172 5.91505 7.679 5.93074H7.66452C7.49562 5.83894 7.32704 5.74758 7.15978 5.65742C7.01863 5.46867 6.87945 5.28133 6.74278 5.09576C6.73817 5.09598 6.73356 5.09598 6.72896 5.0962C6.5017 5.15806 6.27478 5.22003 6.04884 5.2821C5.98698 5.49894 5.92677 5.71587 5.86853 5.93226C5.7866 5.86075 5.70544 5.78946 5.6245 5.71883C5.68471 5.49388 5.7469 5.26895 5.81106 5.04399C5.70588 5.10706 5.60037 5.16979 5.4953 5.23242C5.36117 5.4771 5.22934 5.72071 5.09981 5.96307C5.01985 5.98731 4.94067 6.01188 4.86115 6.03623C4.86159 5.89705 4.86323 5.75797 4.86576 5.61903C4.81147 5.6029 4.7574 5.587 4.70332 5.57099C4.626 5.72092 4.54989 5.87018 4.47498 6.01902C4.18028 6.03997 3.88743 6.06113 3.59658 6.08274C3.60042 6.09579 3.60437 6.10851 3.60832 6.12156C3.65175 6.26392 3.69704 6.40705 3.74355 6.55084C3.75254 6.55512 3.76164 6.5595 3.77064 6.56367C3.98889 6.59109 4.20814 6.61939 4.42891 6.64812C4.62348 6.59262 4.81882 6.53647 5.01502 6.47966C5.02391 6.49304 5.03312 6.50642 5.04211 6.52002C5.18491 6.58593 5.32825 6.65251 5.47226 6.72029C5.4909 6.72467 5.50944 6.72906 5.5283 6.73345C5.68755 6.69111 5.84779 6.64856 6.00792 6.60578C6.1041 6.4394 6.20139 6.2718 6.29955 6.10413C6.56804 6.08131 6.83752 6.05883 7.10787 6.03646C7.11697 6.0551 7.12597 6.07353 7.13496 6.09239C7.41299 6.16829 7.69244 6.24561 7.9729 6.32359C8.11339 6.57332 8.25552 6.82382 8.39911 7.07522C8.63854 7.35051 8.8796 7.62744 9.12112 7.90459C9.07988 8.18526 9.03963 8.46558 9.0008 8.74526C8.78068 9.00376 8.56308 9.26073 8.34986 9.51463C8.10122 9.54249 7.85323 9.56936 7.60646 9.59513C7.31878 9.54084 7.03163 9.48546 6.74482 9.42974C6.62506 9.54106 6.50638 9.65085 6.38948 9.75987C6.38991 9.76448 6.39013 9.76887 6.39046 9.77347C6.34209 10.0815 6.29822 10.3868 6.25995 10.6888C6.2027 10.8421 6.14731 10.9939 6.09412 11.1445C6.16596 11.3442 6.23889 11.5434 6.31248 11.7423C6.25512 12.0698 6.20566 12.3918 6.16552 12.7077C6.02842 12.9658 5.90207 13.2164 5.78779 13.4582C5.78384 13.4576 5.77979 13.457 5.77584 13.4563C5.68568 13.4701 5.59619 13.4832 5.50746 13.4954C5.19344 13.1978 4.87516 12.8997 4.55547 12.6023L4.55554 12.6022ZM12.0075 12.6762L11.7956 12.4824C11.7302 12.2931 11.6636 12.1022 11.5952 11.9101C11.4465 11.6732 11.2945 11.4338 11.1396 11.1925C11.1495 11.0902 11.1592 10.9877 11.1691 10.885C11.6981 10.6305 12.2352 10.3697 12.7763 10.1057C12.9344 9.84052 13.0931 9.57433 13.2518 9.30847L14.1999 9.00697L14.0621 9.54241C13.7273 10.6179 13.1352 11.5803 12.3578 12.3577L12.0075 12.6762ZM2.88185 11.7718C2.88086 11.768 2.87955 11.764 2.87834 11.7601C2.76779 11.5718 2.65942 11.3836 2.55315 11.1955C2.56401 11.0764 2.57706 10.9558 2.59274 10.8341C2.7362 10.9446 2.87978 11.0557 3.02379 11.1674C3.02795 11.1681 3.03223 11.1686 3.0364 11.1693C3.14608 11.307 3.25652 11.4452 3.36785 11.584C3.37816 11.5932 3.38836 11.6028 3.39889 11.6123C3.40097 11.7917 3.40723 11.9686 3.41776 12.1433C3.23909 12.019 3.06053 11.8952 2.88187 11.7719L2.88185 11.7718ZM14.1698 5.87617L14.0497 5.68961C14.0494 5.68501 14.0494 5.6804 14.0492 5.67579C13.8608 5.51018 13.6715 5.34369 13.4818 5.17686C13.2175 5.13255 12.953 5.08901 12.6878 5.04558C12.636 4.90892 12.5841 4.77226 12.5318 4.6357C12.6677 4.51791 12.8025 4.4011 12.9355 4.28561C12.6774 4.23044 12.4189 4.17615 12.1604 4.12252C12.0279 3.96064 11.8956 3.79887 11.7639 3.6372C11.7589 3.62777 11.7538 3.61856 11.7491 3.60913L12.139 2.44327L12.3578 2.64223C13.1352 3.41963 13.7272 4.38203 14.0621 5.45753L14.1698 5.87617ZM11.4411 4.45771C11.4828 4.25623 11.5237 4.05564 11.5633 3.8559C11.5631 3.84658 11.5626 3.83714 11.5624 3.82771C11.687 3.93805 11.8123 4.04827 11.9379 4.15883C11.9524 4.16848 11.9667 4.17824 11.9811 4.18789C11.9713 4.29965 11.9612 4.41185 11.9507 4.52395C11.8113 4.56782 11.6712 4.61224 11.5308 4.6571C11.501 4.59063 11.471 4.52417 11.4411 4.45771ZM7.60433 4.33344C7.59995 4.32906 7.59556 4.32467 7.59106 4.32006C7.46197 4.19887 7.33431 4.07866 7.20806 3.95989C7.19973 3.93345 7.23844 3.91141 7.22715 3.87642C7.32147 3.69381 7.41623 3.51097 7.51098 3.32858C7.52063 3.31893 7.53072 3.30949 7.54037 3.29963C7.66189 3.25312 7.78353 3.20662 7.90473 3.16045C7.88751 3.28943 7.87051 3.41873 7.85373 3.54825C7.81458 3.67405 7.77542 3.80007 7.73638 3.92609C7.77498 4.07283 7.81436 4.22025 7.85461 4.36796C7.77114 4.35623 7.68779 4.34471 7.60432 4.33342L7.60433 4.33344ZM7.85846 3.71409C7.86339 3.70926 7.86822 3.70444 7.87304 3.69983C7.96298 3.65958 8.05269 3.61954 8.14208 3.57973C8.18738 3.68897 8.233 3.7992 8.27939 3.90953C8.26097 3.90997 8.24222 3.91041 8.22357 3.91096C8.15381 3.91743 8.08373 3.92423 8.01398 3.93135C7.96177 3.85853 7.91001 3.78603 7.85846 3.71409ZM10.6485 3.15352C10.6439 3.15352 10.6395 3.15352 10.6347 3.1533C10.5328 2.96817 10.4325 2.78414 10.3334 2.60108C9.83287 2.32546 9.34503 2.05961 8.87451 1.80801C8.87012 1.80801 8.86596 1.80823 8.86135 1.80845C8.846 1.60368 8.83196 1.40046 8.81923 1.19886C8.81945 1.19437 8.81989 1.18998 8.82 1.18559L8.69969 0.740315L8.88416 0.768611C9.55484 0.905926 10.1901 1.1412 10.7743 1.45881L11.0363 1.61817L11.2911 2.12443C11.3199 2.29629 11.3484 2.46925 11.3772 2.6431C11.2378 2.84436 11.0951 3.04814 10.9494 3.25356C10.849 3.22021 10.7486 3.18665 10.6485 3.15352ZM8.71712 2.89688C8.57201 2.83722 8.42778 2.77832 8.28478 2.72063C8.30408 2.64309 8.32657 2.5741 8.32547 2.48856C8.32569 2.48395 8.32613 2.47956 8.32635 2.47496C8.5423 2.47517 8.75837 2.47682 8.97519 2.48011C8.98879 2.58419 9.00239 2.6885 9.01686 2.79312C8.93033 2.83633 8.84357 2.87976 8.75627 2.92308C8.74333 2.91431 8.73028 2.90576 8.71712 2.89688Z"
                                fill="#1EA71B"
                              />
                            </svg>
                          </div>
                          <div className="f-13 text-white text-truncate">
                            English
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Mention end --> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Insights;
