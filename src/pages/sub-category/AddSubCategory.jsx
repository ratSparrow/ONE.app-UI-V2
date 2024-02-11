import { Breadcrumb, Col, Row, Spin } from "antd";
import { useGetAllSubServicesQuery } from "../../redux/slice/api/subServiceApi";
import { Link } from "react-router-dom";
import { HomeOutlined } from "@ant-design/icons";
import CustomForm from "../../components/forms/CustomForm";
import CustomSelectedField from "../../components/forms/CustomSelectField";

const AddSubCategory = () => {
  const { data, isLoading } = useGetAllSubServicesQuery();
  if (isLoading) {
    return (
      <Spin
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      />
    );
  }
  const options = data?.data;

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
              title: <Link to="/sub-category/add">Add Sub Category</Link>,
            },
          ]}
        />
      </div>
      <CustomForm>
        <div>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={24}>
              <CustomSelectedField
                lable="Category"
                size="small"
                name="category"
                options={options}
                placeholder="Select Category"
              />
            </Col>
          </Row>
        </div>
      </CustomForm>
    </div>
  );
};

export default AddSubCategory;
