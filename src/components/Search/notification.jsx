import Header from "./header";
import React from "react";
import DashUserIcon from "../../img/dashborad/user-icon.png";
import "./notification.scss";
import Sidebar from "./sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import Profile from "./profile";

const NotificationPage = () => {
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
          <div className="notification-card">
            <div className="f-20 fw-700 f-lightwhite mb-20">Notifications</div>

            <div className="notification-item mb-26">
              <div className="notification-detail">
                <div className="notification-image">
                  <img src={DashUserIcon} alt="User-Image" />
                </div>
                <div className="notification-text f-15 f-lightwhite fw-600">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classNameical Latin
                  literature from 45 BC, making it over 2000 years old. Richard
                  McClintock Sydney College in Virginia, looked up one of the
                  more obscure Latin words, consectetur, from a Lorem Ipsum
                  passage, and going through the cites of the.
                </div>
              </div>
              <div className="notification-time f-15 f-lightwhite fw-600">
                02:00 PM
              </div>
            </div>

            <div className="notification-item mb-26">
              <div className="notification-detail">
                <div className="notification-image">
                  <img src={DashUserIcon} alt="User-Image" />
                </div>
                <div className="notification-text f-15 f-lightwhite fw-600">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
              </div>
              <div className="notification-time f-15 f-lightwhite fw-600">
                2d ago
              </div>
            </div>

            <div className="notification-item mb-26">
              <div className="notification-detail">
                <div className="notification-image">
                  <img src={DashUserIcon} alt="User-Image" />
                </div>
                <div className="notification-text f-15 f-lightwhite fw-600">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </div>
              </div>
              <div className="notification-time f-15 f-lightwhite fw-600">
                21 March
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NotificationPage;
