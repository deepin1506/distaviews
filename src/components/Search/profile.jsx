import React from "react";
import "./_profile.scss";

import Profileimg from "../../img/dashborad/Profile-img.png";
import Usericonimg from "../../img/dashborad/user-icon.png";
import "bootstrap/dist/css/bootstrap.min.css";

const Profile = () => {
  return (
    // Profile start
    <div class="d-flex">
      {/* <!-- Nav tabs --> */}
      <div class="profile-left-section">
        <ul class="nav flex-column nav-pills" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              class="nav-link active"
              id="profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#profile"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected="true"
            >
              <svg
                width="13"
                height="14"
                viewBox="0 0 13 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.516945 10.8687C1.83225 9.12799 3.9041 8 6.23818 8C8.57226 8 10.6441 9.12799 11.9594 10.8687C11.9654 10.8766 11.9713 10.8845 11.9773 10.8924C12.0904 11.042 12.2117 11.2024 12.2983 11.3571C12.4032 11.5443 12.481 11.7609 12.4762 12.0244C12.4723 12.2362 12.4081 12.4344 12.3302 12.5909C12.2523 12.7475 12.1328 12.9182 11.9662 13.0489C11.744 13.2233 11.502 13.285 11.2871 13.3108C11.0985 13.3334 10.8751 13.3334 10.6504 13.3333C10.6403 13.3333 10.6302 13.3333 10.62 13.3333H1.85634C1.84621 13.3333 1.83609 13.3333 1.82596 13.3333C1.6013 13.3334 1.37784 13.3334 1.18928 13.3108C0.974353 13.285 0.732414 13.2233 0.510198 13.0489C0.343568 12.9182 0.224083 12.7475 0.146166 12.5909C0.0682486 12.4344 0.00408519 12.2362 0.00021228 12.0244C-0.00460572 11.7609 0.0731332 11.5443 0.178023 11.3571C0.264681 11.2024 0.385943 11.042 0.499035 10.8924C0.50503 10.8845 0.511003 10.8766 0.516945 10.8687Z"
                  fill="#E8ECEF"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.57152 3.66667C2.57152 1.64162 4.21314 0 6.23818 0C8.26323 0 9.90485 1.64162 9.90485 3.66667C9.90485 5.69171 8.26323 7.33333 6.23818 7.33333C4.21314 7.33333 2.57152 5.69171 2.57152 3.66667Z"
                  fill="#E8ECEF"
                />
              </svg>
              Edit Profile
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="password-tab"
              data-bs-toggle="tab"
              data-bs-target="#password"
              type="button"
              role="tab"
              aria-controls="password"
              aria-selected="false"
              tabindex="-1"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.893 1.33301H4.10829C3.75687 1.333 3.45368 1.33299 3.20397 1.35339C2.9404 1.37492 2.67826 1.42247 2.42601 1.551C2.04968 1.74274 1.74372 2.0487 1.55197 2.42503C1.42344 2.67728 1.3759 2.93943 1.35437 3.20299C1.33396 3.4527 1.33397 3.75587 1.33398 4.10729V11.892C1.33397 12.2435 1.33396 12.5467 1.35437 12.7964C1.3759 13.0599 1.42344 13.3221 1.55197 13.5743C1.74372 13.9506 2.04968 14.2566 2.42601 14.4484C2.67826 14.5769 2.9404 14.6244 3.20397 14.646C3.45368 14.6664 3.75685 14.6664 4.10828 14.6663H11.893C12.2445 14.6664 12.5476 14.6664 12.7973 14.646C13.0609 14.6244 13.323 14.5769 13.5753 14.4484C13.9516 14.2566 14.2576 13.9506 14.4493 13.5743C14.5779 13.3221 14.6254 13.0599 14.6469 12.7964C14.6673 12.5466 14.6673 12.2435 14.6673 11.8921V4.1073C14.6673 3.75587 14.6673 3.4527 14.6469 3.20299C14.6254 2.93943 14.5779 2.67728 14.4493 2.42503C14.2576 2.0487 13.9516 1.74274 13.5753 1.551C13.323 1.42247 13.0609 1.37492 12.7973 1.35339C12.5476 1.33299 12.2444 1.333 11.893 1.33301ZM9.15503 8.79613L9.76666 10.631C9.84566 10.868 9.88516 10.9865 9.86147 11.0809C9.84074 11.1634 9.7892 11.2349 9.71743 11.2807C9.63543 11.333 9.51052 11.333 9.26069 11.333H6.74061C6.49079 11.333 6.36587 11.333 6.28388 11.2807C6.2121 11.2349 6.16056 11.1634 6.13983 11.0809C6.11615 10.9865 6.15565 10.868 6.23465 10.631L6.84628 8.79613C6.8933 8.65505 6.91682 8.5845 6.9156 8.52679C6.91431 8.46609 6.9062 8.43428 6.87825 8.38039C6.85167 8.32914 6.78062 8.26303 6.63852 8.1308C6.24611 7.76564 6.00065 7.24466 6.00065 6.66634C6.00065 5.56177 6.89608 4.66634 8.00065 4.66634C9.10522 4.66634 10.0007 5.56177 10.0007 6.66634C10.0007 7.24466 9.7552 7.76564 9.36278 8.1308C9.22068 8.26303 9.14963 8.32915 9.12306 8.38039C9.09511 8.43428 9.08699 8.4661 9.0857 8.52679C9.08448 8.5845 9.108 8.65505 9.15503 8.79613Z"
                  fill="#E8ECEF"
                />
              </svg>
              Password
            </button>
          </li>

          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="Notification-tab"
              data-bs-toggle="tab"
              data-bs-target="#Notification"
              type="button"
              role="tab"
              aria-controls="Notification"
              aria-selected="false"
              tabindex="-1"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.73677 13.5592C5.98041 13.2831 6.4017 13.2569 6.67775 13.5005C7.03072 13.812 7.4928 14.0003 8.00048 14.0003C8.50815 14.0003 8.97023 13.812 9.3232 13.5005C9.59925 13.2569 10.0205 13.2831 10.2642 13.5592C10.5078 13.8352 10.4816 14.2565 10.2055 14.5002C9.61831 15.0184 8.84539 15.3337 8.00048 15.3337C7.15556 15.3337 6.38264 15.0184 5.79544 14.5002C5.51939 14.2565 5.49312 13.8352 5.73677 13.5592Z"
                  fill="#E8ECEF"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.70064 2.03383C5.57581 1.15866 6.7628 0.666992 8.00048 0.666992C9.23815 0.666992 10.4251 1.15866 11.3003 2.03383C12.1755 2.909 12.6671 4.09598 12.6671 5.33366C12.6671 7.27544 13.1551 8.5629 13.6667 9.38506L13.6747 9.39778C13.9128 9.78057 14.1011 10.0832 14.2281 10.3034C14.2917 10.4138 14.3497 10.5201 14.3926 10.6146C14.414 10.6618 14.4379 10.7196 14.4567 10.7825C14.4722 10.8347 14.5018 10.9461 14.4907 11.0818C14.4832 11.173 14.4647 11.3289 14.3752 11.4899C14.2858 11.6508 14.1633 11.749 14.0898 11.8035C13.9229 11.9273 13.7313 11.9556 13.6674 11.965L13.6644 11.9654C13.5661 11.98 13.4546 11.9872 13.3421 11.9916C13.1186 12.0003 12.8092 12.0003 12.4244 12.0003H3.57657C3.19176 12.0003 2.88233 12.0003 2.65883 11.9916C2.54632 11.9872 2.43481 11.98 2.33653 11.9654L2.33358 11.965C2.26963 11.9556 2.07801 11.9273 1.91115 11.8035C1.83765 11.749 1.71517 11.6508 1.62573 11.4899C1.5363 11.3289 1.5177 11.173 1.51024 11.0818C1.49915 10.9461 1.52875 10.8347 1.54428 10.7825C1.56301 10.7196 1.58697 10.6618 1.60839 10.6146C1.6513 10.5201 1.70926 10.4138 1.77287 10.3034C1.89982 10.0832 2.08814 9.78052 2.32636 9.39769L2.33422 9.38506C2.84581 8.5629 3.33381 7.27544 3.33381 5.33366C3.33381 4.09598 3.82547 2.909 4.70064 2.03383Z"
                  fill="#E8ECEF"
                />
              </svg>
              Notification
            </button>
          </li>

          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="Alert-tab"
              data-bs-toggle="tab"
              data-bs-target="#Alert"
              type="button"
              role="tab"
              aria-controls="Alert"
              aria-selected="false"
              tabindex="-1"
            >
              <svg
                width="15"
                height="13"
                viewBox="0 0 15 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.9999 11.0286C14.9956 10.7549 14.9211 10.4868 14.7838 10.2502L8.8635 0.760621C8.39884 0.00782372 7.41187 -0.225665 6.65905 0.239C6.44857 0.368966 6.27102 0.545854 6.14039 0.755884L0.210549 10.2612C-0.227584 11.0297 0.0401621 12.0079 0.808608 12.4462C1.04309 12.5799 1.30753 12.6521 1.57739 12.6563H13.4233C14.308 12.6421 15.0139 11.9133 14.9998 11.0286L14.9999 11.0286ZM7.58748 10.5809C7.56006 10.5842 7.53241 10.5858 7.50487 10.5856C7.1425 10.5835 6.85054 10.2881 6.85262 9.92581C6.8545 9.59527 7.10187 9.31774 7.42999 9.27806C7.78971 9.23456 8.11669 9.49097 8.1602 9.85069C8.2036 10.2104 7.94718 10.5374 7.58748 10.5809ZM8.132 5.53838H8.13255L7.94421 7.70427C7.93617 7.90813 7.89145 8.10882 7.81248 8.29694C7.71831 8.4812 7.49263 8.55423 7.30837 8.46006C7.24063 8.42536 7.18501 8.37095 7.14889 8.30388C7.07355 8.10915 7.02928 7.90384 7.01771 7.69536L6.87685 5.59137C6.84931 5.16798 6.70492 4.48381 7.02818 4.13985C7.27423 3.8753 7.85688 3.82981 8.03352 4.19646C8.18463 4.62721 8.21856 5.09021 8.132 5.53838Z"
                  fill="#E8ECEF"
                />
              </svg>
              Alert
            </button>
          </li>

          <li class="nav-item" role="presentation">
            <a href="signin.html" class="nav-link">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_89_601)">
                  <path
                    d="M0.893908 9.8165C0.809122 9.48373 0.766729 9.31735 0.821294 9.13881C0.864838 8.99633 0.985302 8.84132 1.11262 8.76395C1.27216 8.66699 1.46953 8.66699 1.86428 8.66699L9.05779 8.66699L7.5292 10.1956C7.26885 10.4559 7.26885 10.878 7.5292 11.1384C7.78955 11.3987 8.21166 11.3987 8.47201 11.1384L11.1387 8.47173C11.399 8.21138 11.399 7.78927 11.1387 7.52892L8.47201 4.86225C8.21166 4.6019 7.78955 4.6019 7.5292 4.86225C7.26885 5.1226 7.26885 5.54471 7.5292 5.80506L9.05779 7.33366L1.86428 7.33366C1.46953 7.33366 1.27216 7.33366 1.11262 7.2367C0.985302 7.15933 0.864838 7.00432 0.821294 6.86184C0.766729 6.6833 0.809122 6.51692 0.893908 6.18415C1.702 3.01253 4.57739 0.666992 8.0006 0.666992C12.0507 0.666992 15.3339 3.95024 15.3339 8.00032C15.3339 12.0504 12.0507 15.3337 8.0006 15.3337C4.57739 15.3337 1.702 12.9881 0.893908 9.8165Z"
                    fill="#E8ECEF"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_89_601">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              Logout
            </a>
          </li>

          <li class="nav-item delete-account-link" role="presentation">
            <button
              class="nav-link"
              id="deleteaccount-tab"
              data-bs-toggle="tab"
              data-bs-target="#deleteaccount"
              type="button"
              role="tab"
              aria-controls="deleteaccount"
              aria-selected="false"
              tabindex="-1"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 4L4 12M4 4L12 12"
                  stroke="#D84C10"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Delete Account
            </button>
          </li>
        </ul>
      </div>

      <div class="profile-right-section">
        {/* <!-- Tab panes --> */}
        <div class="tab-content ml-60" id="v-pills-tabContent">
          <div
            class="tab-pane active show"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <div class="f-20 text-white mb-30">Edit profile</div>
            <div class="form-label modal-label">Avatar</div>
            <div class="profile-detail mb-24">
              <div class="profile-image">
                <div class="profile-img">
                  <img src={Profileimg} alt="Profile-img" />
                </div>
              </div>
              <div class="profile-upload">
                <label
                  class="position-relative cursor-pointer mb-2"
                  htmlFor="UploadImage"
                >
                  <input type="file" class="upload-input" />
                  <button
                    class="btn form-bgray-btn mb-16 position-relative"
                    id="UploadImage"
                  >
                    Upload new image
                  </button>
                </label>

                <div class="f-13 f-gray fw-600">
                  At least 800x800 px recommended
                </div>
                <div class="f-13 f-gray fw-600">
                  JPG or PNG and GIF is allowed
                </div>
              </div>
            </div>

            <div>
              <form action="" class="custom-form-gray">
                <div class="modal-input-group mb-24">
                  <label htmlFor="Name" class="form-label modal-label">
                    Name
                  </label>
                  <span class="position-relative">
                    <input
                      type="text"
                      class="form-control modal-input"
                      id="Name"
                      placeholder="Name"
                    />
                    <span class="modal-input-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24">
                        <path d="M2.264 19.81c2.506-2.658 5.933-4.314 9.728-4.314s7.222 1.656 9.728 4.314a1 1 0 0 1-.728 1.686h-18a1 1 0 0 1-.728-1.686zM6.492 7.996a5.5 5.5 0 1 1 11 0 5.5 5.5 0 1 1-11 0z"></path>
                      </svg>
                    </span>
                    <span class="text-danger f-14 fw-600">
                      Please Enter your Name.
                    </span>
                  </span>
                </div>

                <div class="modal-input-group mb-24">
                  <label htmlFor="Location" class="form-label modal-label">
                    Location
                  </label>
                  <span class="position-relative">
                    <input
                      type="text"
                      class="form-control modal-input"
                      id="Location"
                      placeholder="Location"
                    />
                    <span class="modal-input-icon">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M2.5 8.33301C2.5 4.19087 5.85786 0.833008 10 0.833008C14.1421 0.833008 17.5 4.19087 17.5 8.33301C17.5 10.9322 16.0468 12.8042 14.5595 14.3534C14.2006 14.7271 13.8304 15.0912 13.4726 15.4431L13.4261 15.4888C13.0506 15.8581 12.6895 16.2143 12.3493 16.5728C11.6654 17.2935 11.107 17.9824 10.7454 18.7057C10.6042 18.988 10.3156 19.1663 10 19.1663C9.68436 19.1663 9.3958 18.988 9.25464 18.7057C8.89299 17.9824 8.33459 17.2935 7.65071 16.5728C7.31051 16.2143 6.94936 15.8581 6.57385 15.4888L6.52733 15.443C6.16952 15.0911 5.79942 14.7271 5.44054 14.3534C3.95322 12.8042 2.5 10.9322 2.5 8.33301ZM12.5 7.91634C12.5 9.29705 11.3807 10.4163 10 10.4163C8.61929 10.4163 7.5 9.29705 7.5 7.91634C7.5 6.53563 8.61929 5.41634 10 5.41634C11.3807 5.41634 12.5 6.53563 12.5 7.91634Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                  </span>
                </div>

                <div class="modal-input-group mb-40">
                  <label htmlFor="Bio" class="form-label modal-label">
                    Bio
                  </label>
                  <span class="position-relative">
                    <textarea
                      type="text"
                      class="form-control modal-input"
                      rows="3"
                      id="Bio"
                      placeholder="short bio"
                    ></textarea>
                    <span class="modal-input-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24">
                        <path d="M22.707 2.777a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L18 6.07l3.293-3.293a1 1 0 0 1 1.414 0zM6.758 13.484h4.483l2.011.044c.562.046 1.079.144 1.564.392a4 4 0 0 1 1.748 1.748c.247.485.346 1.002.392 1.564.044.541.044 1.206.044 2.011l-.01.851a1.51 1.51 0 0 1-.153.571 1.5 1.5 0 0 1-.656.656 1.51 1.51 0 0 1-.571.153c-.125.01-.268.01-.387.01-4.149-.001-8.298-.001-12.446 0-.119 0-.261 0-.387-.01a1.51 1.51 0 0 1-.571-.153 1.5 1.5 0 0 1-.656-.656c-.111-.218-.141-.426-.153-.571-.023-.282-.01-.569-.01-.851 0-.805 0-1.469.044-2.011.046-.562.144-1.079.392-1.564a4 4 0 0 1 1.748-1.748c.485-.247 1.002-.346 1.564-.392.541-.044 1.206-.044 2.011-.044zM4.5 6.984a4.5 4.5 0 0 1 9 0 4.5 4.5 0 0 1-9 0z"></path>
                      </svg>
                    </span>
                  </span>
                </div>

                <div>
                  <button class="btn btn-green b-radius-10px w-100">
                    Save changes
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div
            class="tab-pane"
            id="password"
            role="tabpanel"
            aria-labelledby="password-tab"
          >
            <div class="f-20 text-white mb-30">Password</div>
            <div>
              <form action="" class="custom-form-gray">
                <div class="modal-input-group mb-24">
                  <label htmlFor="OldPassword" class="form-label modal-label">
                    Old
                  </label>
                  <span class="position-relative">
                    <input
                      type="password"
                      class="form-control modal-input"
                      id="OldPassword"
                      placeholder="Old Password"
                    />
                    <span class="modal-input-icon">
                      <svg
                        width="15"
                        height="17"
                        viewBox="0 0 15 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M2.5 5C2.5 2.23858 4.73858 0 7.5 0C10.2614 0 12.5 2.23858 12.5 5V5.9586C12.7355 6.01021 12.9615 6.08536 13.18 6.19665C13.8072 6.51622 14.3171 7.02616 14.6367 7.65337C14.8428 8.05781 14.9249 8.4884 14.9632 8.95681C15 9.4078 15 9.96143 15 10.6322V11.8678C15 12.5386 15 13.0922 14.9632 13.5432C14.9249 14.0116 14.8428 14.4422 14.6367 14.8466C14.3171 15.4738 13.8072 15.9838 13.18 16.3034C12.7755 16.5094 12.3449 16.5916 11.8765 16.6298C11.4255 16.6667 10.8719 16.6667 10.2011 16.6667H4.79894C4.12812 16.6667 3.57448 16.6667 3.12348 16.6298C2.65507 16.5916 2.22448 16.5094 1.82003 16.3034C1.19283 15.9838 0.682891 15.4738 0.363313 14.8466C0.157237 14.4422 0.0751004 14.0116 0.0368294 13.5432C-1.79497e-05 13.0922 -9.68447e-06 12.5386 3.28679e-07 11.8678V10.6322C-9.68447e-06 9.96144 -1.79497e-05 9.4078 0.0368294 8.95681C0.0751004 8.4884 0.157237 8.05781 0.363313 7.65337C0.682891 7.02616 1.19283 6.51622 1.82003 6.19665C2.03845 6.08536 2.26449 6.01021 2.5 5.9586V5ZM10.8333 5V5.83469H4.16667V5C4.16667 3.15905 5.65905 1.66667 7.5 1.66667C9.34095 1.66667 10.8333 3.15905 10.8333 5ZM8.33333 10.4167C8.33333 9.95643 7.96024 9.58333 7.5 9.58333C7.03976 9.58333 6.66667 9.95643 6.66667 10.4167V12.0833C6.66667 12.5436 7.03976 12.9167 7.5 12.9167C7.96024 12.9167 8.33333 12.5436 8.33333 12.0833V10.4167Z"
                          fill="#6C7275"
                          fill-opacity="0.5"
                        />
                      </svg>
                    </span>
                    <span class="password-icon">
                      <svg
                        width="19"
                        height="10"
                        viewBox="0 0 19 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.8409 4.62219C15.7772 1.55525 12.5837 0 9.34871 0C8.06674 0 6.78113 0.24792 5.52761 0.736829C4.53388 1.12446 3.55866 1.66339 2.6293 2.33862C1.05171 3.4847 0.151815 4.62441 0.114327 4.67236C-0.0381088 4.86695 -0.0381088 5.13307 0.114327 5.32764C0.151836 5.3756 1.05136 6.5153 2.62881 7.66138C3.55848 8.33674 4.5334 8.87585 5.52713 9.26317C6.78086 9.75207 8.06643 10 9.34875 10C12.5834 10 15.777 8.44479 18.841 5.37781C19.053 5.16642 19.0532 4.83462 18.8409 4.62219ZM8.0079 1.7777C8.67725 1.64664 9.32499 2.08863 9.45464 2.7652C9.58447 3.4418 9.14704 4.09655 8.47771 4.22778C7.80835 4.35884 7.16061 3.91685 7.03096 3.24028C6.90097 2.56368 7.33857 1.90875 8.0079 1.7777ZM9.3488 8.89868C7.29899 8.89868 5.28637 8.19527 3.36687 6.80781C2.39814 6.10768 1.698 5.39926 1.33505 5.0002C1.69335 4.60582 2.38135 3.90969 3.34013 3.21302C4.20148 2.58734 5.398 1.8834 6.83444 1.46719C5.9092 2.35652 5.43838 3.68929 5.69922 5.05042C6.106 7.17191 8.13746 8.55865 10.2364 8.14714C12.3352 7.73596 13.7069 5.68251 13.3 3.56085C13.1527 2.79215 12.792 2.12025 12.2921 1.59514C14.0771 2.19227 15.8544 3.3302 17.6049 5.00038C14.8936 7.58759 12.1181 8.89868 9.3488 8.89868Z"
                          fill="#999999"
                        />
                      </svg>
                    </span>
                  </span>
                </div>

                <div class="modal-input-group mb-24">
                  <label htmlFor="NewPassword" class="form-label modal-label">
                    New
                  </label>
                  <span class="position-relative">
                    <input
                      type="password"
                      class="form-control modal-input"
                      id="NewPassword"
                      placeholder="New Password"
                    />
                    <span class="modal-input-icon">
                      <svg
                        width="15"
                        height="17"
                        viewBox="0 0 15 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M2.5 5C2.5 2.23858 4.73858 0 7.5 0C10.2614 0 12.5 2.23858 12.5 5V5.9586C12.7355 6.01021 12.9615 6.08536 13.18 6.19665C13.8072 6.51622 14.3171 7.02616 14.6367 7.65337C14.8428 8.05781 14.9249 8.4884 14.9632 8.95681C15 9.4078 15 9.96143 15 10.6322V11.8678C15 12.5386 15 13.0922 14.9632 13.5432C14.9249 14.0116 14.8428 14.4422 14.6367 14.8466C14.3171 15.4738 13.8072 15.9838 13.18 16.3034C12.7755 16.5094 12.3449 16.5916 11.8765 16.6298C11.4255 16.6667 10.8719 16.6667 10.2011 16.6667H4.79894C4.12812 16.6667 3.57448 16.6667 3.12348 16.6298C2.65507 16.5916 2.22448 16.5094 1.82003 16.3034C1.19283 15.9838 0.682891 15.4738 0.363313 14.8466C0.157237 14.4422 0.0751004 14.0116 0.0368294 13.5432C-1.79497e-05 13.0922 -9.68447e-06 12.5386 3.28679e-07 11.8678V10.6322C-9.68447e-06 9.96144 -1.79497e-05 9.4078 0.0368294 8.95681C0.0751004 8.4884 0.157237 8.05781 0.363313 7.65337C0.682891 7.02616 1.19283 6.51622 1.82003 6.19665C2.03845 6.08536 2.26449 6.01021 2.5 5.9586V5ZM10.8333 5V5.83469H4.16667V5C4.16667 3.15905 5.65905 1.66667 7.5 1.66667C9.34095 1.66667 10.8333 3.15905 10.8333 5ZM8.33333 10.4167C8.33333 9.95643 7.96024 9.58333 7.5 9.58333C7.03976 9.58333 6.66667 9.95643 6.66667 10.4167V12.0833C6.66667 12.5436 7.03976 12.9167 7.5 12.9167C7.96024 12.9167 8.33333 12.5436 8.33333 12.0833V10.4167Z"
                          fill="#6C7275"
                          fill-opacity="0.5"
                        />
                      </svg>
                    </span>
                    <span class="password-icon">
                      <svg
                        width="19"
                        height="10"
                        viewBox="0 0 19 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.8409 4.62219C15.7772 1.55525 12.5837 0 9.34871 0C8.06674 0 6.78113 0.24792 5.52761 0.736829C4.53388 1.12446 3.55866 1.66339 2.6293 2.33862C1.05171 3.4847 0.151815 4.62441 0.114327 4.67236C-0.0381088 4.86695 -0.0381088 5.13307 0.114327 5.32764C0.151836 5.3756 1.05136 6.5153 2.62881 7.66138C3.55848 8.33674 4.5334 8.87585 5.52713 9.26317C6.78086 9.75207 8.06643 10 9.34875 10C12.5834 10 15.777 8.44479 18.841 5.37781C19.053 5.16642 19.0532 4.83462 18.8409 4.62219ZM8.0079 1.7777C8.67725 1.64664 9.32499 2.08863 9.45464 2.7652C9.58447 3.4418 9.14704 4.09655 8.47771 4.22778C7.80835 4.35884 7.16061 3.91685 7.03096 3.24028C6.90097 2.56368 7.33857 1.90875 8.0079 1.7777ZM9.3488 8.89868C7.29899 8.89868 5.28637 8.19527 3.36687 6.80781C2.39814 6.10768 1.698 5.39926 1.33505 5.0002C1.69335 4.60582 2.38135 3.90969 3.34013 3.21302C4.20148 2.58734 5.398 1.8834 6.83444 1.46719C5.9092 2.35652 5.43838 3.68929 5.69922 5.05042C6.106 7.17191 8.13746 8.55865 10.2364 8.14714C12.3352 7.73596 13.7069 5.68251 13.3 3.56085C13.1527 2.79215 12.792 2.12025 12.2921 1.59514C14.0771 2.19227 15.8544 3.3302 17.6049 5.00038C14.8936 7.58759 12.1181 8.89868 9.3488 8.89868Z"
                          fill="#999999"
                        />
                      </svg>
                    </span>
                  </span>
                </div>

                <div class="modal-input-group mb-40">
                  <label
                    htmlFor="ConfirmPassword"
                    class="form-label modal-label"
                  >
                    Confirm
                  </label>
                  <span class="position-relative">
                    <input
                      type="password"
                      class="form-control modal-input"
                      id="ConfirmPassword"
                      placeholder="Confirm Password"
                    />
                    <span class="modal-input-icon">
                      <svg
                        width="15"
                        height="17"
                        viewBox="0 0 15 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M2.5 5C2.5 2.23858 4.73858 0 7.5 0C10.2614 0 12.5 2.23858 12.5 5V5.9586C12.7355 6.01021 12.9615 6.08536 13.18 6.19665C13.8072 6.51622 14.3171 7.02616 14.6367 7.65337C14.8428 8.05781 14.9249 8.4884 14.9632 8.95681C15 9.4078 15 9.96143 15 10.6322V11.8678C15 12.5386 15 13.0922 14.9632 13.5432C14.9249 14.0116 14.8428 14.4422 14.6367 14.8466C14.3171 15.4738 13.8072 15.9838 13.18 16.3034C12.7755 16.5094 12.3449 16.5916 11.8765 16.6298C11.4255 16.6667 10.8719 16.6667 10.2011 16.6667H4.79894C4.12812 16.6667 3.57448 16.6667 3.12348 16.6298C2.65507 16.5916 2.22448 16.5094 1.82003 16.3034C1.19283 15.9838 0.682891 15.4738 0.363313 14.8466C0.157237 14.4422 0.0751004 14.0116 0.0368294 13.5432C-1.79497e-05 13.0922 -9.68447e-06 12.5386 3.28679e-07 11.8678V10.6322C-9.68447e-06 9.96144 -1.79497e-05 9.4078 0.0368294 8.95681C0.0751004 8.4884 0.157237 8.05781 0.363313 7.65337C0.682891 7.02616 1.19283 6.51622 1.82003 6.19665C2.03845 6.08536 2.26449 6.01021 2.5 5.9586V5ZM10.8333 5V5.83469H4.16667V5C4.16667 3.15905 5.65905 1.66667 7.5 1.66667C9.34095 1.66667 10.8333 3.15905 10.8333 5ZM8.33333 10.4167C8.33333 9.95643 7.96024 9.58333 7.5 9.58333C7.03976 9.58333 6.66667 9.95643 6.66667 10.4167V12.0833C6.66667 12.5436 7.03976 12.9167 7.5 12.9167C7.96024 12.9167 8.33333 12.5436 8.33333 12.0833V10.4167Z"
                          fill="#6C7275"
                          fill-opacity="0.5"
                        />
                      </svg>
                    </span>
                    <span class="password-icon">
                      <svg
                        width="19"
                        height="10"
                        viewBox="0 0 19 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.8409 4.62219C15.7772 1.55525 12.5837 0 9.34871 0C8.06674 0 6.78113 0.24792 5.52761 0.736829C4.53388 1.12446 3.55866 1.66339 2.6293 2.33862C1.05171 3.4847 0.151815 4.62441 0.114327 4.67236C-0.0381088 4.86695 -0.0381088 5.13307 0.114327 5.32764C0.151836 5.3756 1.05136 6.5153 2.62881 7.66138C3.55848 8.33674 4.5334 8.87585 5.52713 9.26317C6.78086 9.75207 8.06643 10 9.34875 10C12.5834 10 15.777 8.44479 18.841 5.37781C19.053 5.16642 19.0532 4.83462 18.8409 4.62219ZM8.0079 1.7777C8.67725 1.64664 9.32499 2.08863 9.45464 2.7652C9.58447 3.4418 9.14704 4.09655 8.47771 4.22778C7.80835 4.35884 7.16061 3.91685 7.03096 3.24028C6.90097 2.56368 7.33857 1.90875 8.0079 1.7777ZM9.3488 8.89868C7.29899 8.89868 5.28637 8.19527 3.36687 6.80781C2.39814 6.10768 1.698 5.39926 1.33505 5.0002C1.69335 4.60582 2.38135 3.90969 3.34013 3.21302C4.20148 2.58734 5.398 1.8834 6.83444 1.46719C5.9092 2.35652 5.43838 3.68929 5.69922 5.05042C6.106 7.17191 8.13746 8.55865 10.2364 8.14714C12.3352 7.73596 13.7069 5.68251 13.3 3.56085C13.1527 2.79215 12.792 2.12025 12.2921 1.59514C14.0771 2.19227 15.8544 3.3302 17.6049 5.00038C14.8936 7.58759 12.1181 8.89868 9.3488 8.89868Z"
                          fill="#999999"
                        />
                      </svg>
                    </span>
                  </span>
                </div>
                <div>
                  <button class="btn btn-green b-radius-10px w-100">
                    Save changes
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div
            class="tab-pane"
            id="Notification"
            role="tabpanel"
            aria-labelledby="Notification-tab"
          >
            <div class="d-flex align-items-center justify-content-between mb-30">
              <div class="f-20 text-white">Notifications</div>
              <div class="form-check form-switch">
                <input
                  class="form-check-input cursor-pointer"
                  type="checkbox"
                  role="switch"
                />
              </div>
            </div>

            <div class="f-16 text-white fw-600 mb-20">
              Notifications settings
            </div>
            <div class="notificaion-content mb-16">
              <div class="noti-item d-flex align-items-top justify-content-between mb-3">
                <label class="f-14 text-white" htmlFor="NewNotification">
                  New notifications
                </label>
                <input
                  class="form-check-input custom-checkbox cursor-pointer"
                  type="checkbox"
                  value=""
                  id="NewNotification"
                  checked
                />
              </div>
            </div>

            <div class="notificaion-content mb-16">
              <div class="noti-item d-flex align-items-top justify-content-between mb-3">
                <label class="f-14 text-white" htmlFor="InviteNotification">
                  Someone invite you to new chat
                </label>
                <input
                  class="form-check-input custom-checkbox cursor-pointer"
                  type="checkbox"
                  value=""
                  id="InviteNotification"
                  checked
                />
              </div>
            </div>

            <div class="notificaion-content mb-16">
              <div class="noti-item d-flex align-items-top justify-content-between mb-3">
                <label class="f-14 text-white" htmlFor="MentionedNotification">
                  Mentioned
                </label>
                <input
                  class="form-check-input custom-checkbox cursor-pointer"
                  type="checkbox"
                  value=""
                  id="MentionedNotification"
                />
              </div>
            </div>
          </div>

          <div
            class="tab-pane"
            id="Alert"
            role="tabpanel"
            aria-labelledby="Alert-tab"
          >
            <div>
              <div class="notification-item mb-26">
                <div class="notification-detail">
                  <div class="notification-image">
                    <img src={Usericonimg} alt="User-Image" />
                  </div>
                  <div class="notification-text f-14 f-lightwhite fw-600">
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making.
                  </div>
                </div>
                <div class="notification-time f-10 f-lightwhite fw-600">
                  12:00 PM
                </div>
              </div>

              <div class="notification-item mb-26">
                <div class="notification-detail">
                  <div class="notification-image">
                    <img src={Usericonimg} alt="User-Image" />
                  </div>
                  <div class="notification-text f-14 f-lightwhite fw-600">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </div>
                </div>
                <div class="notification-time f-10 f-lightwhite fw-600">
                  Yesterday
                </div>
              </div>

              <div class="notification-item mb-26">
                <div class="notification-detail">
                  <div class="notification-image">
                    <img src={Usericonimg} alt="User-Image" />
                  </div>
                  <div class="notification-text f-14 f-lightwhite fw-600">
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of.
                  </div>
                </div>
                <div class="notification-time f-10 f-lightwhite fw-600">
                  23 Mar
                </div>
              </div>
            </div>
          </div>

          <div
            class="tab-pane"
            id="deleteaccount"
            role="tabpanel"
            aria-labelledby="deleteaccount-tab"
          >
            <div class="f-20 text-white mb-30">Delete Account</div>

            <div class="sub-heading mb-32">We’re sorry to see you go</div>
            <p class="small-text f-gray mb-24">
              Warning: Deleting your account will permanently remove all of your
              data and cannot be undone. This includes your profile, chats,
              comments, and any other information associated with your account.
              Are you sure you want to proceed with deleting your account?
            </p>

            <div class="profile-detail">
              <div>
                <form action="" class="custom-form-gray">
                  <div class="modal-input-group mb-24">
                    <label
                      htmlFor="AccountPassword"
                      class="form-label modal-label"
                    >
                      Your Password
                    </label>
                    <span class="position-relative">
                      <input
                        type="password"
                        class="form-control modal-input"
                        id="AccountPassword"
                        placeholder="Enter your password"
                      />
                      <span class="modal-input-icon">
                        <svg
                          width="15"
                          height="17"
                          viewBox="0 0 15 17"
                          fill="none"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M2.5 5C2.5 2.23858 4.73858 0 7.5 0C10.2614 0 12.5 2.23858 12.5 5V5.9586C12.7355 6.01021 12.9615 6.08536 13.18 6.19665C13.8072 6.51622 14.3171 7.02616 14.6367 7.65337C14.8428 8.05781 14.9249 8.4884 14.9632 8.95681C15 9.4078 15 9.96143 15 10.6322V11.8678C15 12.5386 15 13.0922 14.9632 13.5432C14.9249 14.0116 14.8428 14.4422 14.6367 14.8466C14.3171 15.4738 13.8072 15.9838 13.18 16.3034C12.7755 16.5094 12.3449 16.5916 11.8765 16.6298C11.4255 16.6667 10.8719 16.6667 10.2011 16.6667H4.79894C4.12812 16.6667 3.57448 16.6667 3.12348 16.6298C2.65507 16.5916 2.22448 16.5094 1.82003 16.3034C1.19283 15.9838 0.682891 15.4738 0.363313 14.8466C0.157237 14.4422 0.0751004 14.0116 0.0368294 13.5432C-1.79497e-05 13.0922 -9.68447e-06 12.5386 3.28679e-07 11.8678V10.6322C-9.68447e-06 9.96144 -1.79497e-05 9.4078 0.0368294 8.95681C0.0751004 8.4884 0.157237 8.05781 0.363313 7.65337C0.682891 7.02616 1.19283 6.51622 1.82003 6.19665C2.03845 6.08536 2.26449 6.01021 2.5 5.9586V5ZM10.8333 5V5.83469H4.16667V5C4.16667 3.15905 5.65905 1.66667 7.5 1.66667C9.34095 1.66667 10.8333 3.15905 10.8333 5ZM8.33333 10.4167C8.33333 9.95643 7.96024 9.58333 7.5 9.58333C7.03976 9.58333 6.66667 9.95643 6.66667 10.4167V12.0833C6.66667 12.5436 7.03976 12.9167 7.5 12.9167C7.96024 12.9167 8.33333 12.5436 8.33333 12.0833V10.4167Z"
                            fill="#6C7275"
                            fill-opacity="0.5"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </div>

                  <div>
                    <button class="btn btn-red b-radius-10px w-100" disabled="">
                      Delete Account
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
