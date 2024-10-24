import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/home/Homepage";
import SignUp from "../pages/login/SignUp";
import SignIn from '../pages/login/SignIn';
import AdminLayout from '../layout/AdminLayout';
import AllService from "../pages/services/AllServices";



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

import EditSuperAdmin from "../pages/super-admin/EditSuperAdmin";
import DeleteSuperAdmin from "../pages/super-admin/DeleteSuperAdmin";
import DeleteAdmin from "../pages/super-admin/DeleteAdmin";
import AllAdmins from "../pages/super-admin/AllAdmins";
import DeleteUser from "../pages/users/DeleteUser";
import EditUser from "../pages/users/EditUser";
import AllUsers from "../pages/users/AllUsers";

import CheckoutService from "../pages/checkout/CheckoutService";
import UserProfile from "../pages/users/User";
import EditAdmin from "../pages/admin/EditAdmin";
import AdminProfile from "../pages/admin/Admin";
import ViewServices from "../pages/services/ViewServices";
import ViewSubCategory from "../pages/sub-category/ViewSubCategory";
import AddSubCategory from "../pages/sub-category/AddSubCategory";
import ViewOrder from "../pages/order/ViewOrder";
import EditOrder from "../pages/order/EditOrder";
import DeleteOrder from "../pages/order/DeleteOrder";
import ViewFaq from "../pages/faq/ViewFaq";
import ViewBlogs from "../pages/blogs/ViewBlogs";
import ViewEvents from "../pages/events/ViewEvents";
import ViewUpcomingService from "../pages/upcoming-service/ViewUpcomingService";
import AddUpcomingService from "../pages/upcoming-service/AddUpcomingService";
import ViewFeedback from "../pages/feedback/ViewFeedback";

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
        path: "/call-us",
        element: <CallUs />,
      },
      {
        path: "/choose-us",
        element: <ChooseUs />,
      },
      {
        path: "/blog/all",
        element: <AllBlogs />,
      },
      {
        path: "/blog/details/:id",
        element: <BlogDetails />,
      },
      {
        path: "/event/all",
        element: <AllEvents />,
      },
      {
        path: "/event/details/:id",
        element: <EventDetails />,
      },
      {
        path: "/faq",
        element: <AllFaq />,
      },
      {
        path: "/faq/details/:id",
        element: <FaqDetails />,
      },
      {
        path: "/services",
        element: <AllService />,
      },
      {
        path: "/services/details/:id",
        element: <ServiceDetails />,
      },
      {
        path: "/user/edit/:id",
        element: <EditUser />,
      },
      {
        path: "/user/profile",
        element: <UserProfile />,
      },
      {
        path: "/checkout/:id",
        element: <CheckoutService />,
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
        path: "edit/:id",
        element: <EditAdmin />,
      },
      {
        path: "blog/view",
        element: <ViewBlogs />,
      },
      {
        path: "blog/add",
        element: <AddNewBlog />,
      },
      {
        path: "blog/edit/:id",
        element: <EditBlog />,
      },
      {
        path: "blog/delete/:id",
        element: <DeleteBlog />,
      },
      {
        path: "order/view",
        element: <ViewOrder />,
      },
      {
        path: "order/edit/:id",
        element: <EditOrder />,
      },
      {
        path: "order/delete/:id",
        element: <DeleteOrder />,
      },
      {
        path: "event/view",
        element: <ViewEvents />,
      },
      {
        path: "event/add",
        element: <AddEvent />,
      },
      {
        path: "event/edit/:id",
        element: <EditEvent />,
      },
      {
        path: "event/delete/:id",
        element: <DeleteEvent />,
      },
      {
        path: "faq/view",
        element: <ViewFaq />,
      },
      {
        path: "faq/add",
        element: <AddFaq />,
      },
      {
        path: "faq/edit/:id",
        element: <EditFaq />,
      },
      {
        path: "faq/delete/:id",
        element: <DeleteFaq />,
      },
      {
        path: "services/view",
        element: <ViewServices />,
      },
      {
        path: "services/add",
        element: <AddService />,
      },
      {
        path: "services/edit/:id",
        element: <AddService />,
      },
      {
        path: "services/delete/:id",
        element: <DeleteService />,
      },
      {
        path: "sub-services/view",
        element: <ViewSubCategory />,
      },
      {
        path: "sub-services/add",
        element: <AddSubCategory />,
      },
      {
        path: "sub-services/edit/:id",
        element: <AddService />,
      },
      {
        path: "sub-services/delete/:id",
        element: <DeleteService />,
      },
      {
        path: "packages/view",
        element: <AddService />,
      },
      {
        path: "packages/add",
        element: <AddService />,
      },
      {
        path: "packages/edit/:id",
        element: <AddService />,
      },
      {
        path: "packages/delete/:id",
        element: <DeleteService />,
      },
      {
        path: "feedback/all",
        element: <AddService />,
      },
      {
        path: "feedback/add",
        element: <AddService />,
      },
      {
        path: "feedback/edit/:id",
        element: <AddService />,
      },
      {
        path: "feedback/delete/:id",
        element: <DeleteService />,
      },
      {
        path: "review/view",
        element: <AddService />,
      },
      {
        path: "review/add",
        element: <AddService />,
      },
      {
        path: "review/edit/:id",
        element: <AddService />,
      },
      {
        path: "review/delete/:id",
        element: <DeleteService />,
      },
      {
        path: "user/delete/:id",
        element: <DeleteUser />,
      },
      {
        path: "user/view",
        element: <AllUsers />,
      },
      {
        path: "upcoming-service/view",
        element: <ViewUpcomingService />,
      },
      {
        path: "upcoming-service/add",
        element: <AddUpcomingService />,
      },
      {
        path: "feedback/view",
        element: <ViewFeedback />,
      },
    ],
  },
  {
    path: "/",
    element: <SuperAdminLayout />,
    children: [
      {
        path: "/super-admin",
        element: <SuperAdminProfile />,
      },
      {
        path: "/super-admin/edit/:id",
        element: <EditSuperAdmin />,
      },
      {
        path: "/super-admin/delete/:id",
        element: <DeleteSuperAdmin />,
      },
      {
        path: "/super-adminview",
        element: <AllAdmins />,
      },
      {
        path: "/super-admindelete/:id",
        element: <DeleteAdmin />,
      },
    ],
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
]);
export default MainRoutes;
