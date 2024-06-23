/* eslint-disable react/prop-types */
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Col, Row, Typography } from "antd";
import { Link } from "react-router-dom";
import { useGetUserProfileQuery } from "../../redux/slice/api/userApi";
import Loading from "../../ui/common/Loading";

const Profile = () => {
  const { data, isLoading } = useGetUserProfileQuery();
  if (isLoading) {
    return <Loading />;
  }
  console.log(data?.data);
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
              {data?.data?.profileImg ? (
                <div style={{ padding: 16 }}>
                  <img
                    style={{ width: 150, borderRadius: "75px" }}
                    src={data?.data?.profileImg}
                    alt=""
                  />
                </div>
              ) : (
                <Avatar size={84} icon={<UserOutlined />} />
              )}
            </div>
            <Button style={{ margin: "16px 16px", width: 100 }} type="primary">
              <Link to="">Edit Profile</Link>
            </Button>
          </Col>
          <Col className="gutter-row" span={12}>
            <div style={{ marginTop: 30 }}>
              <Typography style={{ fontSize: 24, fontFamily: "serif" }}>
                {data?.data?.name?.firstName} {data?.data?.name?.lastName}
                <span>role as {data?.data?.role}</span>
              </Typography>
              <Typography style={{ fontSize: 24, fontFamily: "serif" }}>
                Contact: +88 {data?.data?.phoneNumber}
              </Typography>

              <Typography style={{ fontSize: 20, fontFamily: "serif" }}>
                {data?.data?.address}
              </Typography>
              <Typography style={{ fontSize: 20, fontFamily: "serif" }}>
                {data?.data?.email}
              </Typography>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Profile;
