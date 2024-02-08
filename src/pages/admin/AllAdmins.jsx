import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb, Spin } from "antd";
import { Link } from "react-router-dom";
import Loading from "../../ui/common/Loading";
import { useGetUserProfileQuery } from "../../redux/slice/api/userApi";


const AdminPage = () => {
  const { data, isLoading } = useGetUserProfileQuery();
  if (isLoading) {
    return <Loading />;
  }

  const route = `/admin/update-admin-profile`;
  const user = data?.data;
  console.log(user);
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

export default AdminPage;

AdminPage.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
