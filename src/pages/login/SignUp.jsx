/* eslint-disable react-hooks/rules-of-hooks */
import { Alert, Col, Row, Spin, Typography } from "antd";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  useUserLoginMutation,
  useUserSignupMutation,
} from "../../redux/slice/api/userApi";
import { storeUserInfo } from "../../services/auth.service";
import { Link, Navigate } from "react-router-dom";
import "../css/SignUp.css";

const { Text } = Typography;

const signup = () => {
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [userSignUp] = useUserSignupMutation();
  const [userLogin] = useUserLoginMutation();

  const onSubmit = async (data) => {
    setLoading(true);

    try {
      const res = await userSignUp(data);
      if (res.data.statusCode === 200) {
        const res = await userLogin(data);
        if (res.data.statusCode === 200) {
          const { accessToken, role, email } = res.data.data;
          storeUserInfo(accessToken, role, email);
          setSuccessMessage(res.message);
          if (accessToken) {
            <Navigate to="/user-profile" state={{ from: location }} replace />;
          } else {
            <Navigate to="/login" state={{ from: location }} replace />;
          }

          setLoading(false);
          return <Alert message={res.message} type="success" />;
        }
      }
    } catch (error) {
      <Alert message={error.message} type="error" />;
      setErrorMessage(error.message);
      setLoading(false);
    }
  };

  return (
    <section>
      <Row justify="space-between">
        <Col className="gutter-row" span={12}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "100vh",
            }}
          >
            <img
              src="https://img.freepik.com/free-vector/global-data-security-personal-data-security-cyber-data-security-online-concept-illustration-internet-security-information-privacy-protection_1150-37336.jpg?size=626&ext=jpg&ga=GA1.1.255745393.1679070773&semt=sph"
              alt=""
            />
          </div>
        </Col>
        <Col className="gutter-row" span={12}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "100vh",
            }}
          >
            {loading ? (
              <Spin
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100vh",
                }}
              />
            ) : (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    maxWidth: 500,
                    margin: "auto",
                    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                    padding: "16px 20px",
                    borderRadius: 8,
                  }}
                >
                  <Typography
                    style={{
                      textAlign: "center",
                      fontSize: 20,
                      color: "#6E58D8",
                      fontWeight: 600,
                      paddingBottom: 16,
                    }}
                  >
                    <span style={{ borderBottom: "2px solid" }}> SIGN UP</span>
                  </Typography>

                  <form onSubmit={handleSubmit(onSubmit)}>
                    <label
                      style={{
                        fontSize: 14,
                        fontWeight: 600,
                        color: "#6E58D8",
                      }}
                    >
                      Email
                    </label>
                    <input
                      {...register("email", {
                        required: "Email Address is required",
                      })}
                      placeholder="Enter Email "
                      style={{
                        marginBottom: 12,
                        width: "100%",
                        height: "24px",
                        borderRadius: "4px",
                      }}
                      type="email"
                      className="customInput"
                    />
                    <label
                      style={{
                        fontSize: 14,
                        fontWeight: 600,
                        color: "#6E58D8",
                      }}
                    >
                      Password
                    </label>
                    <input
                      {...register("password", { required: true })}
                      placeholder="Enter Password"
                      style={{
                        marginBottom: 12,
                        width: "100%",
                        height: "24px",
                        borderRadius: "4px",
                      }}
                      type="password"
                      className="customInput"
                    />
                    {errors.exampleRequired && <span>Password Required</span>}
                    <label
                      style={{
                        fontSize: 14,
                        fontWeight: 600,
                        color: "#6E58D8",
                      }}
                    >
                      Phone{" "}
                    </label>
                    <input
                      {...register("phoneNumber")}
                      placeholder="Enter Phone Number"
                      style={{
                        marginBottom: 12,
                        width: "100%",
                        height: "24px",
                        borderRadius: "4px",
                      }}
                      type="text"
                      className="customInput"
                    />

                    {loading === true ? (
                      <Spin
                        style={{ padding: 8 }}
                        tip="Progressing"
                        size="small"
                      >
                        <div className="content" />
                      </Spin>
                    ) : (
                      <input
                        style={{
                          backgroundColor: "#059862",
                          border: "none",
                          color: "white",
                          padding: 8,
                          marginTop: 8,
                          marginBottom: 8,
                          fontSize: 14,
                          borderRadius: 6,
                          width: 100,
                        }}
                        className="formBtn"
                        type="submit"
                      />
                    )}
                    {errorMessage ? (
                      <Text
                        style={{ display: "inline-block", padding: "8px" }}
                        type="danger"
                      >
                        {errorMessage}
                      </Text>
                    ) : (
                      <Text
                        style={{ display: "inline-block", padding: "8px" }}
                        type="success"
                      >
                        {successMessage}
                      </Text>
                    )}
                    <Link style={{ textDecoration: "none" }} to="/login">
                      <Typography className="formText">
                        Already have an account? Sign In
                      </Typography>{" "}
                    </Link>
                  </form>
                </div>
              </div>
            )}
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default signup;
