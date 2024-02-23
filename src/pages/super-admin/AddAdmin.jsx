import { Breadcrumb, Button, Col, Row, Typography } from "antd";
import { useAddAdminMutation } from "../../redux/slice/api/adminApi";
import { Link, Navigate } from "react-router-dom";
import { HomeOutlined } from "@ant-design/icons";
import CustomForm from "../../components/forms/CustomForm";
import CustomInput from "../../components/forms/CustomInput";

const AddAdmin = () => {
  const [addAdmin] = useAddAdminMutation();
  const onSubmit = async (data) => {
    try {
      console.log(data);
      const res = await addAdmin(data);
      console.log(res);
      if (res.data.statusCode === 200) {
        <Navigate
          to="/super-admin/view-admins"
          state={{ from: location }}
          replace
        />;
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div style={{ margin: 32 }}>
      <div>
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
              title: <Link to="/super-admin/create-admin">Create Admin</Link>,
            },
          ]}
        />
      </div>
      <div>
        <div>
          <Typography style={{ fontSize: 22, fontWeight: 700 }}>
            Create New Admin
          </Typography>
        </div>
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
                  name="name.firstName"
                  label="First Name"
                  type="text"
                  size="small"
                  style={{ width: 64 }}
                />
              </Col>
              <Col className="gutter-row" span={8}>
                {" "}
                <CustomInput
                  name="name.lastName"
                  label="Last Name"
                  type="text"
                  size="small"
                  style={{ width: 64 }}
                />
              </Col>
              <Col className="gutter-row" span={8}>
                {" "}
                <CustomInput
                  name="email"
                  label="Email"
                  type="email"
                  size="small"
                  style={{ width: 64 }}
                />
              </Col>
              <Col className="gutter-row" span={8}>
                {" "}
                <CustomInput
                  name="address"
                  label="Address"
                  type="text"
                  size="small"
                  style={{ width: 64 }}
                />
              </Col>
              <Col className="gutter-row" span={8}>
                {" "}
                <CustomInput
                  name="phoneNumber"
                  label="Phone"
                  type="text"
                  size="small"
                  style={{ width: 64 }}
                />
              </Col>
              <Col className="gutter-row" span={8}>
                {" "}
                <CustomInput
                  name="password"
                  label="Password"
                  type="password"
                  size="small"
                  style={{ width: 64 }}
                />
              </Col>
              <Col className="gutter-row" span={8}>
                {" "}
                <CustomInput
                  name="profileImg"
                  label="Image"
                  type="text"
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
      </div>
    </div>
  );
};

export default AddAdmin;
