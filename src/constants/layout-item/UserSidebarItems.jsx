import { UnorderedListOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";


export const UserSidebarItems = () => {
  const defaultSidebarItems = [
    {
      label: <Link to="/user-profile/view-profile">Account </Link>,
      key: "account",
      icon: <UserOutlined />,
    },
    {
      label: <Link to="/user-history">History</Link>,
      key: "history",
      icon: <UnorderedListOutlined />,
    },
  ];
  return defaultSidebarItems;
};
