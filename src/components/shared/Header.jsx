import { Link, useNavigate } from "react-router-dom";
import { authKey, role } from "../../constants/common/authKey";
import { ExportOutlined, UserOutlined } from "@ant-design/icons";
import {
  getUserInfo,
  removeUserInfo,
  removeUserRoleInfo,
} from "../../services/auth.service";
import { Avatar, Button } from "antd";
import logo from "../../assets/logo/logo1.png"

const Header = () => {
  const loggedInUser = getUserInfo();
  const navigate = useNavigate();

  // console.log(loggedInUser);
  const handleLogout = () => {
    removeUserInfo(authKey);
    removeUserRoleInfo(role);
    navigate("/sign-in");
  };
  return (
    <div style={{ backgroundColor: "#7E45EF" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          height: "64px",
          width: "100%",
          margin: "0 auto",
          maxWidth: "1100px",
        }}
      >
        <div>
          <Link to="/">
            <img style={{width:"100px"}} src={logo} alt="" />
          </Link>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link
            style={{ fontSize: 16, color: "white", paddingRight: "8px" }}
            to="/services"
          >
            All Services
          </Link>
          {loggedInUser ? (
            <div style={{ paddingRight: "8px" }}>
              <Button onClick={() => handleLogout()} danger type="text">
                <span style={{ marginRight: "8px" }}>
                  <ExportOutlined />
                </span>{" "}
                Logout
              </Button>
            </div>
          ) : (
            <>
              {" "}
              <Link
                style={{ fontSize: 16, color: "white", paddingRight: "8px" }}
                to="/sign-up"
              >
                Sign Up
              </Link>
              <Link
                style={{ fontSize: 16, color: "white", paddingRight: "8px" }}
                to="/sign-in"
              >
                Sign In
              </Link>
            </>
          )}
          <div>
            {loggedInUser === "user" ? (
              <Link to="/user-profile">
                <Avatar size="large" icon={<UserOutlined />} />
              </Link>
            ) : (
              <Link to="/admin">
                <Avatar size="large" icon={<UserOutlined />} />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
