import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/home/Homepage";
import SignUp from "../pages/login/SignUp";
import SignIn from "../pages/login/SignIn";
import AllService from "../pages/services/AllService";

const MainRoutes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <SignIn />,
      },
      {
        path: "/all-service",
        element: <AllService />,
      },
    ],
  },
]);
export default MainRoutes;
