import { Link, useNavigate } from "react-router-dom";
import { authKey, role } from "../../constants/common/authKey";
import { ExportOutlined, UserOutlined } from "@ant-design/icons";
import {
  getUserInfo,
  removeUserInfo,
  removeUserRoleInfo,
} from "../../services/auth.service";
import { Avatar, Button } from "antd";

const Header = () => {
  const loggedInUser = getUserInfo();
  const navigate = useNavigate();

  console.log(loggedInUser);
  const handleLogout = () => {
    removeUserInfo(authKey);
    removeUserRoleInfo(role);
    navigate("/sign-in");
  };
  return (
    <div style={{ backgroundColor: "#6B5B95" }}>
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
            <div
              style={{
                fontFamily: "sans-serif",
                font: "icon",
                paddingLeft: "16px",
              }}
            >
              <span
                style={{
                  color: "tomato",
                  fontWeight: "700",
                  fontSize: "24px",
                  fontFamily: "Black Ops One, cursive",
                }}
              >
                ONE
              </span>
              <div
                style={{
                  fontSize: "24px",

                  display: "inline-block",
                  width: "4px",
                  height: "4px",
                  backgroundColor: "yellow",
                  borderRadius: "4px",
                }}
              ></div>
              <span
                style={{
                  font: "icon",
                  fontStyle: "italic",
                  color: "yellowgreen",
                  fontFamily: "Black Ops One, cursive",
                }}
              >
                app
              </span>
            </div>
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
