/* eslint-disable react-hooks/rules-of-hooks */
import SuperAdminLayout from "@/components/Layout/SuperAdminLayout";
import Profile from "@/components/Profile/Profile";
import { useGetUserProfileQuery } from "@/redux/slice/api/userApi";
import { storeUserInfo } from "@/services/auth.service";
import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb, Spin } from "antd";
import Link from "next/link";
import React, { useEffect } from "react";

const SuperAdminPage = () => {
  const { data, isLoading } = useGetUserProfileQuery();
  if (isLoading) {
    return <Spin />;
  }

  const route = `/super-admin/update`;
  const user = data?.data;
  console.log(user);
  if (user) {
    localStorage.setItem("role", user.role);
  }

  return (
    <div>
      <div style={{ padding: "20px 32px" }}>
        <Breadcrumb
          items={[
            {
              title: (
                <Link href="/">
                  <HomeOutlined />
                </Link>
              ),
            },
            {
              title: "Admin",
            },
            {
              title: <Link href="/admin/view-profile">Account</Link>,
            },
          ]}
        />
      </div>
      {isLoading ? (
        <Spin
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        />
      ) : (
        <Profile key={user?._id} user={user} route={route} />
      )}
    </div>
  );
};

export default SuperAdminPage;


