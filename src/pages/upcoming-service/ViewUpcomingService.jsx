import { Avatar, Breadcrumb, Button, Table, Typography } from "antd";

import { Link } from "react-router-dom";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";

import Loading from "../../ui/common/Loading";
import { useGetAllUpcomingServiceQuery } from "../../redux/slice/api/upcomingServiceApi";
const { Title } = Typography;

const ViewUpcomingService = () => {
  const { data, isLoading } = useGetAllUpcomingServiceQuery();
  console.log(data)

  return (
    <div style={{ margin: 32 }}>
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
              title: <Link to="/admin">Admin</Link>,
            },
            {
              title: <Link to="/upcoming-service/view">View Upcoming Services</Link>,
            },
            {
              title: <Link to="/upcoming-services/add">Add Upcoming Service</Link>,
            },
          ]}
        />
      </div>
      <Title level={3} style={{ margin: 32 }}>
        Service Management
      </Title>
      {
        isLoading === true ?
          <Loading /> :
          <div className="table-container">
            <table className="custom-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Photo</th>
                  <th>Name</th>
                  <th>Created At</th>
                  <th>Action</th>

                </tr>
              </thead>
              <tbody>
                {data?.data.map((record, i) => (
                  <tr key={record._id}>
                    <td>{i + 1}</td>
                    <td>
                      {
                        record.image ?
                          <img style={{ width: "60px", height: "60px", borderRadius: "30px" }} src={record.image} alt="" /> :
                          <Avatar size="small" icon={<UserOutlined />} />}
                    </td>
                    <td>{record.name}</td>
                    <td>{record.createdAt.slice(0, 10)} </td>
                    <td>
                      <Button type='link' style={{ marginRight: 10 }}><Link to="">Edit</Link> </Button>
                      <Button type='primary' color='danger' variant='filled'>Delete</Button>
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>
      }
    </div>
  );
};

export default ViewUpcomingService;
