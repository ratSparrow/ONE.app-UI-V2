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
import AddEvent from "../pages/events/AddEvent";
import AllFaq from "../pages/faq/AllFaq";
import FaqDetails from "../pages/faq/FaqDetails";
import AddFaq from "../pages/faq/AddFaq";
import EditFaq from "../pages/faq/EditFaq";
import DeleteFaq from "../pages/faq/DeleteFaq";
import AddService from "../pages/services/AddService";
import DeleteService from "../pages/services/DeleteService";
import CallUs from "../pages/static/CallUs";
import ChooseUs from "../pages/static/ChooseUs";

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
        path:"/call-us",
        element:<CallUs/>
      },
      {
        path:"/choose-us",
        element:<ChooseUs/>
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
      {
        path:"/faq",
        element:<AllFaq/>
      },
      {
        path: "/faq/details/:id",
        element: <FaqDetails />,
      },
      {
        path:"/services",
        element:<AllService/>
      },
      {
        path:"/services/details/:id",
        element:<ServiceDetails/>
      }
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
        path: "/admin/event/add",
        element: <AddEvent />,
      },
      {
        path: "/admin/event/edit/:id",
        element: <EditEvent />,
      },
      {
        path: "/admin/event/delete/:id",
        element: <DeleteEvent />,
      },
      {
        path:"/admin/faq/add",
        element:<AddFaq/>
      },
      {
        path: "/admin/faq/edit/:id",
        element: <EditFaq />,
      },
      {
        path: "/admin/faq/delete/:id",
        element: <DeleteFaq />,
      },
      {
        path:"/admin/services/add",
        element:<AddService/>
      },
      {
        path:"/admin/services/edit/:id",
        element:<AddService/>
      },
      {
        path:"/admin/services/delete/:id",
        element:<DeleteService/>
      },
    ],
  },
]);
export default MainRoutes;
