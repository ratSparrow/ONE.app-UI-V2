import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/home/Homepage";
import SignUp from "../pages/login/SignUp";
import SignIn from "../pages/login/SignIn";

import AdminLayout from "../layout/AdminLayout";

import AllService from "../pages/services/AllServices";

import EditAdmin from "../pages/admin/EditAdmin";

import ServiceDetails from "../pages/services/ServiceDetails";
import AllBlogs from "../pages/blogs/AllBlogs";
import BlogDetails from "../pages/blogs/BlogDetails";
import AddNewBlog from "../pages/blogs/AddNewBlog";
import EditBlog from "../pages/blogs/EditBlog";
import DeleteBlog from "../pages/blogs/DeleteBlog";

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
import SuperAdminLayout from "../layout/SuperAdminLayout";
import SuperAdminProfile from "../pages/super-admin/SuperAdmin";
import AdminProfile from "../pages/admin/Admin";
import EditSuperAdmin from "../pages/super-admin/EditSuperAdmin";
import DeleteSuperAdmin from "../pages/super-admin/DeleteSuperAdmin";
import DeleteAdmin from "../pages/super-admin/DeleteAdmin";
import AllAdmins from "../pages/super-admin/AllAdmins";
import DeleteUser from "../pages/users/DeleteUser";
import EditUser from "../pages/users/EditUser";
import AllUsers from "../pages/users/AllUsers";

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
        path: "/blog/view",
        element: <AllBlogs />,
      },
      {
        path: "/blog/details/:id",
        element: <BlogDetails />,
      },
      {
        path: "/event/view",
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
      },
      {
        path:"/user/edit/:id",
        element:<EditUser/>
      },
    ],
  },
  {
    path: "/",
    element: <AdminLayout />,
    children: [
      {
        path: "/admin",
        element: <AdminProfile />,
      },
      {
        path: "/admin/edit/:id",
        element: <EditAdmin />,
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
      {
        path:"/admin/user/delete/:id",
        element:<DeleteUser/>
      },
      {
        path:"/admin/user/view",
        element:<AllUsers/>
      },
    ],
  },
  {
    path:"/",
    element:<SuperAdminLayout/>,
    children:[
      {
        path:"/super-admin",
        element:<SuperAdminProfile/>
      },
      {
        path:"/super-admin/edit/:id",
        element:<EditSuperAdmin/>
      },
      {
        path:"/super-admin/delete/:id",
        element:<DeleteSuperAdmin/>
      },
      {
        path:"/super-admin/admin/view",
        element:<AllAdmins/>
      },
      {
        path:"/super-admin/admin/delete/:id",
        element:<DeleteAdmin/>
      },
    ]
  }
]);
export default MainRoutes;
