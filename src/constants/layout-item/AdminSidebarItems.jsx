import {
  ContainerOutlined,
  DeploymentUnitOutlined,
  ExportOutlined,
  OrderedListOutlined,
  QuestionCircleOutlined,
  StockOutlined,
  UnorderedListOutlined,
  UserOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";

import { Link } from "react-router-dom";

export const AdminSidebarItems = () => {
  const defaultSidebarItems = [
    {
      label: <Link to="/admin">Account </Link>,
      key: "profile",
      icon: <UserOutlined />,
    },
    {
      label: "User",
      key: "user",
      icon: <UsergroupAddOutlined />,
      children: [
        {
          label: <Link to="user/view">View </Link>,
          key: "view user",
          icon: <UserOutlined />,
        },
      ],
    },
    {
      label: "Order",
      key: "order",
      icon: <OrderedListOutlined />,
      children: [
        {
          label: <Link to="order/view">View </Link>,
          key: "view order",
          icon: <UserOutlined />,
        },
      ],
    },
    {
      label: "Services",
      key: "services",
      icon: <UnorderedListOutlined />,
      children: [
        {
          label: <Link to="services/view">View </Link>,
          key: "view service",
          icon: <StockOutlined />,
        },
        {
          label: <Link to="services/add">Add </Link>,
          key: "add service",
          icon: <StockOutlined />,
        },

      ],
    },
    {
      label: "Sub Services",
      key: "sub-services",
      icon: <UnorderedListOutlined />,
      children: [
        {
          label: <Link to="sub-services/view">View </Link>,
          key: "view sub-services",
          icon: <StockOutlined />,
        },
        {
          label: <Link to="sub-services/add">Add </Link>,
          key: "add sub-services",
          icon: <StockOutlined />,
        },
      ],
    },
    {
      label: "Packages",
      key: "packages",
      icon: <UnorderedListOutlined />,
      children: [
        {
          label: <Link to="packages/view">View </Link>,
          key: "view packages",
          icon: <StockOutlined />,
        },
        {
          label: <Link to="packages/add">Add </Link>,
          key: "add packages",
          icon: <StockOutlined />,
        },
      ],
    },
    {
      label: "FAQ",
      key: "faq",
      icon: <ExportOutlined />,
      children: [
        {
          label: <Link to="faq/view">View </Link>,
          key: "view faq",
          icon: <QuestionCircleOutlined />,
        },
        {
          label: <Link to="faq/add">Add</Link>,
          key: "add faq",
          icon: <QuestionCircleOutlined />,
        },
      ],
    },
    {
      label: "Blog",
      key: "blog",
      icon: <DeploymentUnitOutlined />,
      children: [
        {
          label: <Link to="blog/view">View </Link>,
          key: "view blog",
          icon: <ContainerOutlined />,
        },
        {
          label: <Link to="blog/add">Add </Link>,
          key: "add blog",
          icon: <ContainerOutlined />,
        },
      ],
    },
    {
      label: "Events",
      key: "events",
      icon: <DeploymentUnitOutlined />,
      children: [
        {
          label: <Link to="event/view">View </Link>,
          key: "view events",
          icon: <ContainerOutlined />,
        },
        {
          label: <Link to="event/add">Add </Link>,
          key: "add events",
          icon: <ContainerOutlined />,
        },
      ],
    },
    {
      label: "Upcoming Service",
      key: "upcoming-service",
      icon: <DeploymentUnitOutlined />,
      children: [
        {
          label: <Link to="/upcoming-service/view">View </Link>,
          key: "view upcoming service",
          icon: <ContainerOutlined />,
        },
        {
          label: <Link to="/upcoming-service/add">Add </Link>,
          key: "update upcoming service",
          icon: <ContainerOutlined />,
        },
      ],
    },
    {
      label: "Feedback",
      key: "feedback",
      icon: <DeploymentUnitOutlined />,
      children: [
        {
          label: <Link to="feedback/view">View </Link>,
          key: "feedback service",
          icon: <ContainerOutlined />,
        },
        
      ],
    },
    {
      label: "Review",
      key: "review",
      icon: <DeploymentUnitOutlined />,
      children: [
        {
          label: <Link to="review/view">View </Link>,
          key: "review",
          icon: <ContainerOutlined />,
        },
        {
          label: <Link to="review/add">Add </Link>,
          key: "review",
          icon: <ContainerOutlined />,
        },
      ],
    },

  ];
  return defaultSidebarItems;
};
