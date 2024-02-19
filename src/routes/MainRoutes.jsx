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
import EditBlog from "../pages/blogs/EditBlog";
import DeleteBlog from "../pages/blogs/DeleteBlog";
import DeleteAdmin from "../pages/admin/DeleteAdmin";
import AllEvents from "../pages/events/AllEvents";
import EventDetails from "../pages/events/EventDetails";
import EditEvent from "../pages/events/EditEvent";
import DeleteEvent from "../pages/events/DeleteEvent";

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
        path: "/blog/details/:id",
        element: <BlogDetails />,
      },
      {
        path: "/event",
        element: <AllEvents />,
      },
      {
        path: "/event/details/:id",
        element: <EventDetails />,
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
        path: "/admin/edit/:id",
        element: <EditAdmin />,
      },
      {
        path: "/admin/delete/:id",
        element: <DeleteAdmin />,
      },
      {
        path: "/admin/user/add",
        element: <AddUser />,
      },
      {
        path: "/admin/blog/add",
        element: <AddNewBlog />,
      },
      {
        path: "/admin/blog/edit/:id",
        element: <EditBlog />,
      },
      {
        path: "/admin/blog/delete/:id",
        element: <DeleteBlog />,
      },
      {
        path: "/admin/event/edit/:id",
        element: <EditEvent />,
      },
      {
        path: "/admin/event/delete/:id",
        element: <DeleteEvent />,
      },
    ],
  },
]);
export default MainRoutes;
