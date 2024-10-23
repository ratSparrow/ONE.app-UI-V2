import { Breadcrumb, Button, Table } from "antd";
import { useGetAllServicesQuery } from "../../redux/slice/api/servicesApi";
import { Link } from "react-router-dom";
import { HomeOutlined } from "@ant-design/icons";
import { ServiceTableItem } from "../../constants/services/ServiceTableItem";
import Loading from "../../ui/common/Loading";

const ViewServices = () => {
  const { data, isLoading } = useGetAllServicesQuery();
  console.log(data?.data);
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
              title: "Services",
            },
            {
              title: <Link href="view-service">View Users</Link>,
            },
          ]}
        />
      </div>
      <div style={{ margin: "4px 32px" }}>
        <Button type="primary">
          <Link href="/services/add-service">Add Service</Link>
        </Button>
      </div>

      {isLoading === true ? <Loading /> : <Table
        style={{ maxWidth: 800, margin: "0 auto" }}
        columns={ServiceTableItem()}
        dataSource={data?.data}
      />}

    </div>
  );
};

export default ViewServices;
