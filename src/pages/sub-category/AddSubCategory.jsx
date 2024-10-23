import { Alert, Breadcrumb, Button, Col, Row, Spin, Typography } from "antd";
import { useGetAllSubServicesQuery } from "../../redux/slice/api/subServiceApi";
import { Link } from "react-router-dom";
import { HomeOutlined } from "@ant-design/icons";
import CustomForm from "../../components/forms/CustomForm";
import CustomSelectedField from "../../components/forms/CustomSelectField";
import CustomInput from "../../components/forms/CustomInput";
import { useState } from "react";
const { Title } = Typography

const AddSubCategory = () => {
  const { data, isLoading } = useGetAllSubServicesQuery();
  const [message, setMessage] = useState("");
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
  const onSubmit = async (data) => {
    console.log(data)
  };

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
              title: <Link to="/sub-services/view">View Sub Services</Link>,
            },
            {
              title: <Link to="/sub-services/add">Add Sub Services</Link>,
            },
          ]}
        />
      </div>

      <Title level={3} style={{ margin: 32 }}>
        Add New Sub Service
      </Title>
      <div style={{ margin: 32 }}>
        <CustomForm submitHandler={onSubmit}>
          <div
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "5px",
              padding: 8,
            }}
          >
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col className="gutter-row" span={8}>
                {" "}
                <CustomInput
                  name="name"
                  label="Service Name"
                  type="text"
                  size="small"
                  style={{ width: 64 }}
                />
              </Col>
              <Col className="gutter-row" span={8}>
                {" "}
                <CustomInput
                  name="image"
                  label="Image"
                  type="string"
                  size="small"
                  style={{ width: 64 }}
                />
              </Col>
              <Col className="gutter-row" span={8}>
                {" "}
                <CustomInput
                  name="image"
                  label="Image"
                  type="string"
                  size="small"
                  style={{ width: 64 }}
                />
              </Col>
              <Col className="gutter-row" span={8}>
                <CustomSelectedField
                 
                  size="small"
                  name="category"
                  options={options}
                  placeholder="Select Category"
                  style={{ width: 64 }}
                />
          
            </Col>

          </Row>
          <Button
            style={{ marginTop: 8 }}
            size="small"
            htmlType="submit"
            type="primary"
          >
            Create
          </Button>
      </div>
    </CustomForm>

      {
    message && (
      <Alert style={{ margin: 16 }} message={message} type="success" />
    )
  }
    </div >
  </div >
  );
};

export default AddSubCategory;
