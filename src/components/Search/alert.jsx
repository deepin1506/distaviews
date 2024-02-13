import React from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import Profile from "./profile";

const AlertPage = () => {
  return (
    <div class="main-content bg-blacks">
      {/* <!-- Header start --> */}
      <Header />
      {/* <!-- Header end --> */}

      <div class="dashboard-content">
        {/* <!-- sidebar start --> */}
        <Sidebar />
        {/* <!-- sidebar end --> */}

        <div class="dashboard-right-content bg-img-none flex-grow-1">
          <div class="title-card d-flex align-items-center justify-content-between mb-20 flex-column flex-xxl-row">
            <div class="d-flex align-items-center">
              <div class="f-20 fw-700 f-lightwhite s-title">Alerts</div>
            </div>

            <div class="d-flex align-items-center flex-grow-1 justify-content-end pe-1 pe-lg-3 title-right flex-column flex-md-row gap-2 gap-md-3">
              <div class="insight-search">
                <span>
                  <input
                    class="insight-search-input"
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

              <div class="date-dropdown">
                <div class="dropdown custom-dropdown">
                  <a
                    class="d-flex align-items-center"
                    href="javascript:void(0);"
                    role="button"
                    id="dropdownMenuLink"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span class="me-2">
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
                    <span class="ms-auto">
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

                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li>
                      <a class="dropdown-item active" href="#">
                        Last 30 Days{" "}
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Last 60 Days{" "}
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Last 90 Days{" "}
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Last 6 Months
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Last 1 Year{" "}
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Custom Date Range
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <button
                class="btn btn-green b-radius-10px"
                data-bs-toggle="modal"
                data-bs-target="#CreateAlertModal"
              >
                Create Alert
              </button>
            </div>
          </div>

          {/* <!-- Alert table start --> */}
          <div class="dashboard-inner-section">
            <div class="alert-table-wrapper text-center">
              <div class="data-scrollable mt-3 custom-tbl">
                <table id="AlertTable" class="table text-start">
                  <thead>
                    <tr>
                      <th style={{ width: "33%" }}>Recipients</th>
                      <th style={{ width: "33%" }}>Alert name</th>
                      <th style={{ width: "33%" }}>Created Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ width: "33%" }}>@435frsufhk234</td>
                      <td style={{ width: "33%" }}>Negative mentions</td>
                      <td style={{ width: "33%" }}>Mon, May 01 2023</td>
                    </tr>

                    <tr>
                      <td style={{ width: "33%" }}>@435frsufhk234</td>
                      <td style={{ width: "33%" }}>Positive Response</td>
                      <td style={{ width: "33%" }}>Mon, May 01 2023</td>
                    </tr>

                    <tr>
                      <td style={{ width: "33%" }}>@435frsufhk234</td>
                      <td style={{ width: "33%" }}>Negative mentions</td>
                      <td style={{ width: "33%" }}>Mon, May 01 2023</td>
                    </tr>

                    <tr>
                      <td style={{ width: "33%" }}>@435frsufhk234</td>
                      <td style={{ width: "33%" }}>@435frsufhk234</td>
                      <td style={{ width: "33%" }}>Mon, May 01 2023</td>
                    </tr>

                    <tr>
                      <td style={{ width: "33%" }}>@435frsufhk234</td>
                      <td style={{ width: "33%" }}>Negative mentions</td>
                      <td style={{ width: "33%" }}>Mon, May 01 2023</td>
                    </tr>

                    <tr>
                      <td style={{ width: "33%" }}>@435frsufhk234</td>
                      <td style={{ width: "33%" }}>@435frsufhk234</td>
                      <td style={{ width: "33%" }}>Mon, May 01 2023</td>
                    </tr>

                    <tr>
                      <td style={{ width: "33%" }}>@435frsufhk234</td>
                      <td style={{ width: "33%" }}>Negative mentions</td>
                      <td style={{ width: "33%" }}>Mon, May 01 2023</td>
                    </tr>

                    <tr>
                      <td style={{ width: "33%" }}>@435frsufhk234</td>
                      <td style={{ width: "33%" }}>Negative mentions</td>
                      <td style={{ width: "33%" }}>Mon, May 01 2023</td>
                    </tr>

                    <tr>
                      <td style={{ width: "33%" }}>@435frsufhk234</td>
                      <td style={{ width: "33%" }}>@435frsufhk234</td>
                      <td style={{ width: "33%" }}>Mon, May 01 2023</td>
                    </tr>

                    <tr>
                      <td style={{ width: "33%" }}>@435frsufhk234</td>
                      <td style={{ width: "33%" }}>Negative mentions</td>
                      <td style={{ width: "33%" }}>Mon, May 01 2023</td>
                    </tr>

                    <tr>
                      <td style={{ width: "33%" }}>@435frsufhk234</td>
                      <td style={{ width: "33%" }}>Negative mentions</td>
                      <td style={{ width: "33%" }}>Mon, May 01 2023</td>
                    </tr>

                    <tr>
                      <td style={{ width: "33%" }}>@435frsufhk234</td>
                      <td style={{ width: "33%" }}>Negative mentions</td>
                      <td style={{ width: "33%" }}>Mon, May 01 2023</td>
                    </tr>

                    <tr>
                      <td style={{ width: "33%" }}>@435frsufhk234</td>
                      <td style={{ width: "33%" }}>Negative mentions</td>
                      <td style={{ width: "33%" }}>Mon, May 01 2023</td>
                    </tr>

                    <tr>
                      <td style={{ width: "33%" }}>@435frsufhk234</td>
                      <td style={{ width: "33%" }}>Negative mentions</td>
                      <td style={{ width: "33%" }}>Mon, May 01 2023</td>
                    </tr>

                    <tr>
                      <td style={{ width: "33%" }}>@435frsufhk234</td>
                      <td style={{ width: "33%" }}>Negative mentions</td>
                      <td style={{ width: "33%" }}>Mon, May 01 2023</td>
                    </tr>

                    <tr>
                      <td style={{ width: "33%" }}>@435frsufhk234</td>
                      <td style={{ width: "33%" }}>Negative mentions</td>
                      <td style={{ width: "33%" }}>Mon, May 01 2023</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* <!-- Alert table end --> */}
        </div>
      </div>
    </div>
  );
};

export default AlertPage;
