import { Link, useNavigate } from "react-router-dom";
import { authKey, role } from "../../constants/common/authKey";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import "../../pages/css/Header.css"

import {
  getUserInfo,
  removeUserInfo,
  removeUserRoleInfo,
} from "../../services/auth.service";
import { Avatar, Button } from "antd";
import logo from "../../assets/logo/logo1.png"
import { getFromLocalStorage } from "../../helpers/utils/saveData";
import {  useState } from "react";

const Header = () => {
  const token = getFromLocalStorage(authKey)
  const [isClicked, setIsClicked] = useState(false);

  const loggedInUser = getUserInfo();
  const navigate = useNavigate();
  // console.log("token", token)

  // console.log(loggedInUser);
  const handleLogout = () => {
    setTimeout(() => {
      removeUserInfo(authKey);
      removeUserRoleInfo(role);
      sessionStorage.clear();
    }, 600);
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
          height: "40px",
          width: "100%",
          margin: "0 auto",
          maxWidth: "1100px",
        }}
      >
        <div>
          <Link to="/">
            <img style={{ width: "61px" }} src={logo} alt="" />
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
            style={{ fontSize: 16, color: "white", paddingRight: "16px" }}
            to="/services"
          >
            Services
          </Link>
          {loggedInUser ? (
            <div style={{ paddingRight: "16px" }}>
              <Button
                type="primary"
                danger
                icon={<LogoutOutlined />}
                onClick={handleLogout}
                className={`logout-button ${isClicked ? 'fade-out' : ''}`}
              >
                Logout
              </Button>
            </div>
          ) : (
            <>
              {" "}
              <Link
                style={{ fontSize: 16, color: "white", paddingRight: "16px" }}
                to="/sign-up"
              >
                Sign Up
              </Link>
              <Link
                style={{ fontSize: 16, color: "white", paddingRight: "16px" }}
                to="/sign-in"
              >
                Sign In
              </Link>
            </>
          )}
          {
            token && <div>
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
          }
        </div>
      </div>
    </div>
  );
};

export default Header;
