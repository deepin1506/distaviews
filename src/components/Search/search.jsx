import React, { useState } from "react";
import "./search.scss";
import Header from "./header";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./sidebar";
import Profile from "./profile";

const SearchPage = () => {
  const [activeTab, setActiveTab] = useState("quicksearch");

  // Function to handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  const renderTabContent = () => {
    if (activeTab === "quicksearch") {
      return (
        <div
          className="tab-pane fade show active"
          id="pills-quicksearch"
          role="tabpanel"
          aria-labelledby="pills-quicksearch-tab"
        >
          {/* Content for Quick Search tab */}
          {/* ... (your Quick Search content) ... */}
        </div>
      );
    } else if (activeTab === "savesearch") {
      return (
        <div
          className="tab-pane fade show active"
          id="pills-savesearch"
          role="tabpanel"
          aria-labelledby="pills-savesearch-tab"
        >
          <div className="text-center">
            <div className="total-savesearch mt-3 text-start f-20 fw-700">
              80 Saved Searches
            </div>

            <div className="mt-3 custom-tbl">
              <table id="SaveSearch" className="table text-start w-100">
                <thead>
                  <tr>
                    <th style={{ width: "20%" }}>Name</th>
                    <th style={{ width: "15%" }}>Team</th>
                    <th style={{ width: "35%" }}>Description</th>
                    <th style={{ width: "15%" }}>Last Modified</th>
                    <th style={{ width: "15%" }}>By user</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>distaviews social sentiments</td>
                    <td>by DistaViews</td>
                    <td>
                      Lorem Ipsum is simply dummy text of the printing and type
                    </td>
                    <td>Mon, May 01 2023</td>
                    <td>@435frsufhk234</td>
                  </tr>

                  <tr>
                    <td>Chicken</td>
                    <td>by DistaViews</td>
                    <td>
                      Lorem Ipsum is simply dummy text of the printing and type
                    </td>
                    <td>Mon, May 01 2023</td>
                    <td>@435frsufhk234</td>
                  </tr>

                  <tr>
                    <td>Sydney opera house</td>
                    <td>by DistaViews</td>
                    <td>
                      Lorem Ipsum is simply dummy text of the printing and type
                    </td>
                    <td>Mon, May 01 2023</td>
                    <td>@435frsufhk234</td>
                  </tr>

                  <tr>
                    <td>BBQ</td>
                    <td>by DistaViews</td>
                    <td>
                      Lorem Ipsum is simply dummy text of the printing and type
                    </td>
                    <td>Mon, May 01 2023</td>
                    <td>@435frsufhk234</td>
                  </tr>

                  <tr>
                    <td>Social media</td>
                    <td>by DistaViews</td>
                    <td>
                      Lorem Ipsum is simply dummy text of the printing and type
                    </td>
                    <td>Mon, May 01 2023</td>
                    <td>@435frsufhk234</td>
                  </tr>

                  <tr>
                    <td>Pet care</td>
                    <td>by DistaViews</td>
                    <td>
                      Lorem Ipsum is simply dummy text of the printing and type
                    </td>
                    <td>Mon, May 01 2023</td>
                    <td>@435frsufhk234</td>
                  </tr>

                  <tr>
                    <td>Willy Samosa</td>
                    <td>by DistaViews</td>
                    <td>
                      Lorem Ipsum is simply dummy text of the printing and type
                    </td>
                    <td>Mon, May 01 2023</td>
                    <td>@435frsufhk234</td>
                  </tr>

                  <tr>
                    <td>Cricket</td>
                    <td>by DistaViews</td>
                    <td>
                      Lorem Ipsum is simply dummy text of the printing and type
                    </td>
                    <td>Mon, May 01 2023</td>
                    <td>@435frsufhk234</td>
                  </tr>

                  <tr>
                    <td>India Times News</td>
                    <td>by DistaViews</td>
                    <td>
                      Lorem Ipsum is simply dummy text of the printing and type
                    </td>
                    <td>Mon, May 01 2023</td>
                    <td>@435frsufhk234</td>
                  </tr>

                  <tr>
                    <td>Playing games</td>
                    <td>by DistaViews</td>
                    <td>
                      Lorem Ipsum is simply dummy text of the printing and type
                    </td>
                    <td>Mon, May 01 2023</td>
                    <td>@435frsufhk234</td>
                  </tr>

                  <tr>
                    <td>Chicken</td>
                    <td>by DistaViews</td>
                    <td>
                      Lorem Ipsum is simply dummy text of the printing and type
                    </td>
                    <td>Mon, May 01 2023</td>
                    <td>@435frsufhk234</td>
                  </tr>

                  <tr>
                    <td>Sydney opera house</td>
                    <td>by DistaViews</td>
                    <td>
                      Lorem Ipsum is simply dummy text of the printing and type
                    </td>
                    <td>Mon, May 01 2023</td>
                    <td>@435frsufhk234</td>
                  </tr>

                  <tr>
                    <td>BBQ</td>
                    <td>by DistaViews</td>
                    <td>
                      Lorem Ipsum is simply dummy text of the printing and type
                    </td>
                    <td>Mon, May 01 2023</td>
                    <td>@435frsufhk234</td>
                  </tr>

                  <tr>
                    <td>Social media</td>
                    <td>by DistaViews</td>
                    <td>
                      Lorem Ipsum is simply dummy text of the printing and type
                    </td>
                    <td>Mon, May 01 2023</td>
                    <td>@435frsufhk234</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="main-content bg-blacks">
      {/* <!-- Header start --> */}
      <Header />
      {/* <!-- Header end --> */}

      <div className="dashboard-content">
        {/* sidebar starts */}
        <Sidebar />
        {/* sidebar endss */}
        <div className="dashboard-right-content flex-grow-1">
          <div className="title-card d-flex align-items-center justify-content-between flex-column flex-sm-row">
            <div className="f-20 fw-700 f-lightwhite s-title">Insights</div>
            <div className="search-tab">
              <ul
                className="nav nav-pills d-flex"
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link ${
                      activeTab === "quicksearch" ? "active" : ""
                    }`}
                    onClick={() => handleTabChange("quicksearch")}
                    id="pills-quicksearch-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-quicksearch"
                    type="button"
                    role="tab"
                    aria-controls="pills-quicksearch"
                    aria-selected="true"
                  >
                    Quick Search
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link ${
                      activeTab === "savesearch" ? "active" : ""
                    }`}
                    onClick={() => handleTabChange("savesearch")}
                    id="pills-savesearch-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-savesearch"
                    type="button"
                    role="tab"
                    aria-controls="pills-savesearch"
                    aria-selected="false"
                  >
                    Saved Searches
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="dashboard-inner-section">
            <div
              className="tab-content searchtab-content"
              id="pills-tabContent"
            >
              {renderTabContent()}
              <div
                className="tab-pane fade show active"
                id="pills-quicksearch"
                role="tabpanel"
                aria-labelledby="pills-quicksearch-tab"
              >
                <div className="quik-search-wrapper pt-90">
                  <h1 className="f-40 mb-96 text-center">
                    To get insights add name of your brand or search term
                  </h1>
                  <div className="search-input-wrapper">
                    <div className="flex-grow-1">
                      <span className="search-icon">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M23.663 21.9767L19.2137 17.56C20.9408 15.4049 21.7771 12.6695 21.5508 9.91628C21.3245 7.16303 20.0528 4.60118 17.997 2.75751C15.9412 0.913839 13.2578 -0.0715191 10.4983 0.00404582C7.73893 0.0796108 5.11331 1.21035 3.16137 3.16377C1.20944 5.11719 0.0795504 7.74481 0.00404275 10.5063C-0.0714649 13.2678 0.913145 15.9534 2.75542 18.0107C4.59769 20.068 7.15759 21.3407 9.90875 21.5672C12.6599 21.7937 15.3932 20.9567 17.5466 19.2283L21.96 23.645C22.0715 23.7575 22.2042 23.8468 22.3503 23.9077C22.4964 23.9686 22.6532 24 22.8115 24C22.9698 24 23.1266 23.9686 23.2727 23.9077C23.4189 23.8468 23.5515 23.7575 23.663 23.645C23.8792 23.4212 24 23.1221 24 22.8108C24 22.4996 23.8792 22.2005 23.663 21.9767ZM10.8186 19.2283C9.15827 19.2283 7.53518 18.7355 6.15463 17.8124C4.77408 16.8892 3.69807 15.5771 3.06267 14.0419C2.42727 12.5068 2.26102 10.8175 2.58495 9.18784C2.90887 7.55813 3.70842 6.06115 4.88248 4.88619C6.05654 3.71124 7.55239 2.91108 9.18086 2.58691C10.8093 2.26274 12.4973 2.42912 14.0313 3.065C15.5653 3.70088 16.8764 4.77771 17.7988 6.15931C18.7213 7.54091 19.2137 9.16523 19.2137 10.8269C19.2137 13.0551 18.3292 15.192 16.7548 16.7675C15.1804 18.3431 13.0451 19.2283 10.8186 19.2283Z"
                            fill="#F8F8F8"
                          />
                        </svg>
                      </span>
                      <input
                        className="search-input"
                        type="text"
                        placeholder="Search here...."
                      />
                    </div>
                    <button className="search-btn" type="submit">
                      search
                    </button>
                  </div>

                  {/* <!-- dropdopen open section --> */}
                  <div className="search-section">
                    <div className="search-dropdown mb-26">
                      <div className="start-example">
                        <div className="d-flex align-items-center justify-content-between">
                          <span>Or start with an example</span>
                          <span>
                            <svg
                              width="13"
                              height="15"
                              viewBox="0 0 13 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M11.8479 1.0611C11.7504 0.943747 11.6182 0.87793 11.4804 0.87793C11.3425 0.87793 11.2103 0.943743 11.1129 1.0611L6.5067 6.60732L1.90052 1.0611C1.76786 0.912149 1.58017 0.857253 1.40545 0.916227C1.23083 0.975342 1.09429 1.13973 1.04519 1.35C0.996218 1.5604 1.04181 1.78638 1.16552 1.94611L5.77169 7.49232L1.16552 13.0385C1.06224 13.1543 1.00251 13.3158 1.00008 13.4855C0.997545 13.6555 1.05245 13.8193 1.15233 13.9394C1.2521 14.0597 1.38814 14.1258 1.52927 14.1227C1.67028 14.1198 1.80438 14.0479 1.90052 13.9235L6.50669 8.37732L11.1129 13.9235C11.2455 14.0725 11.4332 14.1274 11.6079 14.0684C11.7826 14.0093 11.9191 13.8449 11.9682 13.6346C12.0172 13.4242 11.9716 13.1983 11.8479 13.0385L7.2417 7.49232L11.8479 1.94611C11.9453 1.82875 12 1.6696 12 1.50361C12 1.33762 11.9453 1.17846 11.8479 1.0611Z"
                                fill="#C3CAD9"
                                stroke="#C3CAD9"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>

                      <div className="s-dropdown-box custom-scrollbar">
                        <a href="insights" className="s-item">
                          Instagram
                        </a>
                        <a href="insights" className="s-item">
                          Story saver app
                        </a>
                        <a href="insights" className="s-item">
                          Instagram Story
                        </a>
                        <a href="insights" className="s-item">
                          Instagram Story saver
                        </a>
                        <a href="insights" className="s-item">
                          Instagram
                        </a>
                        <a href="insights" className="s-item">
                          Story saver app
                        </a>
                        <a href="insights" className="s-item">
                          Instagram Story
                        </a>
                        <a href="insights" className="s-item">
                          Instagram Story saver
                        </a>
                      </div>
                    </div>

                    <div className="recent-search-wrapper">
                      <div className="d-flex align-items-center justify-content-between mb-20">
                        <span>Recently saved searches</span>
                        <span className="f-green cursor-pointer">View all</span>
                      </div>
                      <div className="search-list">
                        <span className="searchlist-item">Narola Infotech</span>
                        <span className="searchlist-item">Technology</span>
                      </div>
                    </div>
                  </div>
                  {/* <!-- dropdown open section --> */}
                </div>
              </div>

              <div
                className="tab-pane fade"
                id="pills-savesearch"
                role="tabpanel"
                aria-labelledby="pills-savesearch-tab"
              >
                <div className="text-center">
                  <div className="total-savesearch mt-3 text-start f-20 fw-700">
                    80 Saved Searches
                  </div>

                  <div className="mt-3 custom-tbl">
                    <table id="SaveSearch" className="table text-start w-100">
                      <thead>
                        <tr>
                          <th style={{ width: "20%" }}>Name</th>
                          <th style={{ width: "15%" }}>Team</th>
                          <th style={{ width: "35%" }}>Description</th>
                          <th style={{ width: "15%" }}>Last Modified</th>
                          <th style={{ width: "15%" }}>By user</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>distaviews social sentiments</td>
                          <td>by DistaViews</td>
                          <td>
                            Lorem Ipsum is simply dummy text of the printing and
                            type
                          </td>
                          <td>Mon, May 01 2023</td>
                          <td>@435frsufhk234</td>
                        </tr>

                        <tr>
                          <td>Chicken</td>
                          <td>by DistaViews</td>
                          <td>
                            Lorem Ipsum is simply dummy text of the printing and
                            type
                          </td>
                          <td>Mon, May 01 2023</td>
                          <td>@435frsufhk234</td>
                        </tr>

                        <tr>
                          <td>Sydney opera house</td>
                          <td>by DistaViews</td>
                          <td>
                            Lorem Ipsum is simply dummy text of the printing and
                            type
                          </td>
                          <td>Mon, May 01 2023</td>
                          <td>@435frsufhk234</td>
                        </tr>

                        <tr>
                          <td>BBQ</td>
                          <td>by DistaViews</td>
                          <td>
                            Lorem Ipsum is simply dummy text of the printing and
                            type
                          </td>
                          <td>Mon, May 01 2023</td>
                          <td>@435frsufhk234</td>
                        </tr>

                        <tr>
                          <td>Social media</td>
                          <td>by DistaViews</td>
                          <td>
                            Lorem Ipsum is simply dummy text of the printing and
                            type
                          </td>
                          <td>Mon, May 01 2023</td>
                          <td>@435frsufhk234</td>
                        </tr>

                        <tr>
                          <td>Pet care</td>
                          <td>by DistaViews</td>
                          <td>
                            Lorem Ipsum is simply dummy text of the printing and
                            type
                          </td>
                          <td>Mon, May 01 2023</td>
                          <td>@435frsufhk234</td>
                        </tr>

                        <tr>
                          <td>Willy Samosa</td>
                          <td>by DistaViews</td>
                          <td>
                            Lorem Ipsum is simply dummy text of the printing and
                            type
                          </td>
                          <td>Mon, May 01 2023</td>
                          <td>@435frsufhk234</td>
                        </tr>

                        <tr>
                          <td>Cricket</td>
                          <td>by DistaViews</td>
                          <td>
                            Lorem Ipsum is simply dummy text of the printing and
                            type
                          </td>
                          <td>Mon, May 01 2023</td>
                          <td>@435frsufhk234</td>
                        </tr>

                        <tr>
                          <td>India Times News</td>
                          <td>by DistaViews</td>
                          <td>
                            Lorem Ipsum is simply dummy text of the printing and
                            type
                          </td>
                          <td>Mon, May 01 2023</td>
                          <td>@435frsufhk234</td>
                        </tr>

                        <tr>
                          <td>Playing games</td>
                          <td>by DistaViews</td>
                          <td>
                            Lorem Ipsum is simply dummy text of the printing and
                            type
                          </td>
                          <td>Mon, May 01 2023</td>
                          <td>@435frsufhk234</td>
                        </tr>

                        <tr>
                          <td>Chicken</td>
                          <td>by DistaViews</td>
                          <td>
                            Lorem Ipsum is simply dummy text of the printing and
                            type
                          </td>
                          <td>Mon, May 01 2023</td>
                          <td>@435frsufhk234</td>
                        </tr>

                        <tr>
                          <td>Sydney opera house</td>
                          <td>by DistaViews</td>
                          <td>
                            Lorem Ipsum is simply dummy text of the printing and
                            type
                          </td>
                          <td>Mon, May 01 2023</td>
                          <td>@435frsufhk234</td>
                        </tr>

                        <tr>
                          <td>BBQ</td>
                          <td>by DistaViews</td>
                          <td>
                            Lorem Ipsum is simply dummy text of the printing and
                            type
                          </td>
                          <td>Mon, May 01 2023</td>
                          <td>@435frsufhk234</td>
                        </tr>

                        <tr>
                          <td>Social media</td>
                          <td>by DistaViews</td>
                          <td>
                            Lorem Ipsum is simply dummy text of the printing and
                            type
                          </td>
                          <td>Mon, May 01 2023</td>
                          <td>@435frsufhk234</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
