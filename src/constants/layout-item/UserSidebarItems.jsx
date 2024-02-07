import { UnorderedListOutlined, UserOutlined } from "@ant-design/icons";
import Link from "next/link";

export const UserSidebarItems = () => {
  const defaultSidebarItems = [
    {
      label: <Link href="/user-profile/view-profile">Account </Link>,
      key: "account",
      icon: <UserOutlined />,
    },
    {
      label: <Link href="/user-history">History</Link>,
      key: "history",
      icon: <UnorderedListOutlined />,
    },
  ];
  return defaultSidebarItems;
};
