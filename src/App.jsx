// import React from "react";
// // import reactLogo from "./assets/react.svg";
// // import viteLogo from "/vite.svg";
// // import "./style.css";
// import LandingPage from "./components/Home/landing";
// function App() {
//   return (
//     <div>
//       <LandingPage />
//     </div>
//   );
// }

// export default App;

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingPage from "./components/Landing/landing";
import Signin from "./components/Landing/signin";
import Signup from "./components/Landing/signup";
import ConfigureLanding from "./components/Configure/configure-landing";
import ConfigureSocial from "./components/Configure/configure-social";
import SearchPage from "./components/Search/search";
import Insights from "./components/Search/insights";
import NotificationPage from "./components/Search/notification";
import DashboardPage from "./components/Search/dashboard";
import MentionPage from "./components/Search/mention";
import AlertPage from "./components/Search/alert";
import Filter from "./components/Search/filter";
import "bootstrap/dist/css/bootstrap.min.css";
import Profile from "./components/Search/profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "signin",
    element: <Signin />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
  {
    path: "configure-landing",
    element: <ConfigureLanding />,
  },
  {
    path: "configure-social",
    element: <ConfigureSocial />,
  },
  {
    path: "search",
    element: <SearchPage />,
  },
  {
    path: "insights",
    element: <Insights />,
  },
  {
    path: "notification",
    element: <NotificationPage />,
  },
  {
    path: "Dashboard",
    element: <DashboardPage />,
  },
  { path: "Filter", element: <Filter /> },
  {
    path: "Mentions",
    element: <MentionPage />,
  },

  {
    path: "Alert",
    element: <AlertPage />,
  },

  {
    path: "profile",
    element: <Profile />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
