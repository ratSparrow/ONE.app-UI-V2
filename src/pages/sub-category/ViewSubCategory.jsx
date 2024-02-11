import { Breadcrumb, Button, Spin, Table } from "antd";
import { useGetAllSubCategoryServiceQuery } from "../../redux/slice/api/subCategorySlice";
import { Link } from "react-router-dom";
import { HomeOutlined } from "@ant-design/icons";

const ViewSubCategory = () => {
  const { data, isLoading } = useGetAllSubCategoryServiceQuery();
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
              title: "Sub Category",
            },
            {
              title: <Link to="/sub-category/view">All Sub Category</Link>,
            },
          ]}
        />
      </div>
      <div style={{ margin: "4px 32px" }}>
        <Button type="primary">
          <Link to="/sub-category/add">Add Sub Category</Link>
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
        columns={SubCategoryServiceColumn()}
        dataSource={data?.data}
      />
    </div>
  );
};

export default ViewSubCategory;
