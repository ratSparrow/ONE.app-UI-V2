import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/home/Homepage";
import SignUp from "../pages/login/SignUp";
import SignIn from "../pages/login/SignIn";

import AdminLayout from "../layout/AdminLayout";
import AddUser from "../pages/users/AddUser";
import AllService from "../pages/services/AllServices";

import Admin from "../pages/admin/Admin";
import EditAdmin from "../pages/admin/EditAdmin";

import ServiceDetails from "../pages/services/ServiceDetails";
import AllBlogs from "../pages/blogs/AllBlogs";
import BlogDetails from "../pages/blogs/BlogDetails";
import AddNewBlog from "../pages/blogs/AddNewBlog";

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
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        path: "/all-service",
        element: <AllService />,
      },
      {
        path: "/details/:id",
        element: <ServiceDetails />,
      },
      {
        path: "/blog",
        element: <AllBlogs />,
      },
      {
        path: "/blog/:id",
        element: <BlogDetails />,
      },
    ],
  },
  {
    path: "/",
    element: <AdminLayout />,
    children: [
      {
        path: "/admin",
        element: <Admin />,
      },
      {
        path: "/admin/edit",
        element: <EditAdmin />,
      },
      {
        path: "/admin/user/add",
        element: <AddUser />,
      },
      {
        path: "/admin/blog/add",
        element: <AddNewBlog />,
      },
    ],
  },
]);
export default MainRoutes;
