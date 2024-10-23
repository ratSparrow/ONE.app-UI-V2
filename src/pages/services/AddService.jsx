import { Alert, Breadcrumb, Button, Col, Row, Typography } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAddServicesMutation } from "../../redux/slice/api/servicesApi";
import { HomeOutlined } from "@ant-design/icons";
import CustomForm from "../../components/forms/CustomForm";
import CustomInput from "../../components/forms/CustomInput";
const { Title } = Typography;

const AddService = () => {
  const [addServices] = useAddServicesMutation();
  const [message, setMessage] = useState("");
  const onSubmit = async (data) => {
    try {
      const res = await addServices(data);
      console.log(res);
      setMessage(res.data.message);
    } catch (error) {
      console.log(error);
    }
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
              title: <Link to="/services/view">View Services</Link>,
            },
            {
              title: <Link to="/services/add">Add Services</Link>,
            },
          ]}
        />
      </div>

      <Title level={3} style={{ margin: 32 }}>
        Add New Service 
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

        {message && (
          <Alert style={{ margin: 16 }} message={message} type="success" />
        )}
      </div>
    </div>
  );
};

export default AddService;
