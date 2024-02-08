import { Link, Navigate } from "react-router-dom";
import { useUserSignupMutation } from "../../redux/slice/api/userApi";
import { Breadcrumb, Button, Col, Row, Typography } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import CustomInput from "../../components/forms/CustomInput";
import CustomForm from "../../components/forms/CustomForm";

const AddUser = () => {
  const [userSignup] = useUserSignupMutation();
  const onSubmit = async (data) => {
    try {
      console.log(data);
      const res = await userSignup(data);
      console.log(res);
      if (res.data.statusCode === 200) {
        <Navigate to="/users/view-user" state={{ from: location }} replace />;
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
              title: "User",
            },
            {
              title: <Link href="/users/add-user">Add User</Link>,
            },
          ]}
        />
      </div>
      <div>
        <div>
          <Typography style={{ fontSize: 22, fontWeight: 700 }}>
            Create User
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

export default AddUser;
