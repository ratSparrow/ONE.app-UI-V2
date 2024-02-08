/* eslint-disable react/prop-types */
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Col, Row, Typography } from "antd";
import { Link } from "react-router-dom";

const Profile = ({ user, route }) => {
  return (
    <div
      style={{
        margin: 32,
        border: "1px solid #d9d9d9",
        borderRadius: "5px",
      }}
    >
      <div
        style={{
          padding: 8,
        }}
      >
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col
            className="gutter-row"
            span={12}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div>
              {user?.profileImg ? (
                <div style={{ padding: 16 }}>
                  <img
                    style={{ width: 150, borderRadius: "75px" }}
                    src={user?.profileImg}
                    alt=""
                  />
                </div>
              ) : (
                <Avatar size={84} icon={<UserOutlined />} />
              )}
            </div>
            <Button style={{ margin: "0 16px", width: 100 }} type="primary">
              <Link to={route}>Edit Profile</Link>
            </Button>
          </Col>
          <Col className="gutter-row" span={12}>
            <div style={{ marginTop: 30 }}>
              <Typography style={{ fontSize: 24, fontFamily: "serif" }}>
                {user?.name?.firstName} {user?.name?.lastName} <br />
                <span>role as {user?.role}</span>
              </Typography>
              <Typography style={{ fontSize: 24, fontFamily: "serif" }}>
                Contact:
              </Typography>
              <Typography style={{ fontSize: 20, fontFamily: "serif" }}>
                +88 {user?.phoneNumber}
              </Typography>
              <Typography style={{ fontSize: 20, fontFamily: "serif" }}>
                {user?.address}
              </Typography>
              <Typography style={{ fontSize: 20, fontFamily: "serif" }}>
                {user?.email}
              </Typography>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Profile;
