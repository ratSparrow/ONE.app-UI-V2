import {
  ContainerOutlined,
  DeploymentUnitOutlined,
  ExportOutlined,
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
      label: "Users",
      key: "users",
      icon: <UsergroupAddOutlined />,
      children: [
        {
          label: <Link href="/users/view-user">View </Link>,
          key: "view user",
          icon: <UserOutlined />,
        },
        {
          label: <Link href="/users/update-user">Update </Link>,
          key: "update user",
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
          label: <Link href="/services/view-service">View </Link>,
          key: "view service",
          icon: <StockOutlined />,
        },
        {
          label: <Link href="/services/update-service">Update </Link>,
          key: "update service",
          icon: <StockOutlined />,
        },
      ],
    },
    {
      label: "Sub Category",
      key: "sub-category",
      icon: <UnorderedListOutlined />,
      children: [
        {
          label: <Link href="/sub-category/view">View </Link>,
          key: "view sub-category",
          icon: <StockOutlined />,
        },
        {
          label: <Link href="/sub-category/update">Update </Link>,
          key: "update sub-category",
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
          label: <Link href="/faq/view-faq">View </Link>,
          key: "view faq",
          icon: <QuestionCircleOutlined />,
        },
        {
          label: <Link href="/faq/update-faq">Update</Link>,
          key: "update faq",
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
          label: <Link href="/blog/view-blog">View </Link>,
          key: "view blog",
          icon: <ContainerOutlined />,
        },
        {
          label: <Link href="/blog/update-blog">Update </Link>,
          key: "update blog",
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
          label: <Link href="/events/view-events">View </Link>,
          key: "view events",
          icon: <ContainerOutlined />,
        },
        {
          label: <Link href="/events/update-events">Update </Link>,
          key: "update events",
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
          label: <Link href="/upcoming-service/view">View </Link>,
          key: "view upcoming service",
          icon: <ContainerOutlined />,
        },
        {
          label: <Link href="/upcoming-service/update">Update </Link>,
          key: "update upcoming service",
          icon: <ContainerOutlined />,
        },
      ],
    },
  ];
  return defaultSidebarItems;
};
