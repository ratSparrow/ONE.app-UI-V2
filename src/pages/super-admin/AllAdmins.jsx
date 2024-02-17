import { Breadcrumb, Button, Spin, Table } from "antd";
import { useGetAllAdminQuery } from "../../redux/slice/api/adminApi";
import { Link } from "react-router-dom";
import { HomeOutlined } from "@ant-design/icons";
import AdminTableItem from "../../constants/admin/AdminTableItem";


const ViewAdmins = () => {
  const { data, isLoading } = useGetAllAdminQuery();
  console.log(data);
  return (
    <div>
      <div style={{ margin: 32 }}>
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
              title: "Super Admin",
            },
            {
              title: <Link to="/super-admin/view-admin">View Admins</Link>,
            },
          ]}
        />
      </div>
      <div style={{ margin: "4px 32px" }}>
        <Button type="primary">
          <Link to="/super-admin/create-admin">Create Admin</Link>
        </Button>
      </div>

      {isLoading && (
        <Spin
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        />
      )}
      <Table
        style={{ maxWidth: 800, margin: "0 auto" }}
        columns={AdminTableItem()}
        dataSource={data?.data}
      />
    </div>
  );
};

export default ViewAdmins;


