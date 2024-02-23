import { Breadcrumb, Spin } from "antd";
import { useGetUserProfileQuery } from "../../redux/slice/api/userApi";
import { Link } from "react-router-dom";
import { HomeOutlined } from "@ant-design/icons";
import Profile from "../../components/user/Profile";

const SuperAdminProfile = () => {
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
                <Link to="/">
                  <HomeOutlined />
                </Link>
              ),
            },
            {
              title: "Admin",
            },
            {
              title: <Link to="/admin/view-profile">Account</Link>,
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

export default SuperAdminProfile;
