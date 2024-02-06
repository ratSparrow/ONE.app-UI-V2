import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/home/Homepage";
import SignUp from "../pages/login/SignUp";
import SignIn from "../pages/login/SignIn";
import AllService from "../pages/services/AllService";
import AdminLayout from "../layout/AdminLayout";
import AddUser from "../pages/users/AddUser";

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
  {
    path: "/",
    element: <AdminLayout />,
    children: [
      {
        path: "/admin/add-user",
        element: <AddUser />,
      },
    ],
  },
]);
export default MainRoutes;
