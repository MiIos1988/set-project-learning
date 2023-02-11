import App from "../App";
import LoginSectionComponent from "../components/loginSection/LoginSectionComponent";
import HomePageComponent from "../pages/HomePageComponent";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePageComponent />,
      },
      {
        path: "login",
        element: <LoginSectionComponent />,
      },
    ],
  },
];

export default routes;
