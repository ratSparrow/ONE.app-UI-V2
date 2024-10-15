
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
import toast from "react-hot-toast";
import { FaUser } from "react-icons/fa";

const { Text } = Typography;

const SignUp = () => {
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
    
    const signUpData = {
      name:{
        firstName:data.firstName,
        lastName:data.lastName
      },
      email:data.email,
      password:data.password,
      phoneNumber:data.phoneNumber
    }
    const loginData = {
      email:data.email,
      password:data.password,
    }
    console.log(signUpData)

    try {
      const res = await userSignUp(signUpData);

      if (res.data.statusCode === 200) {
        const res = await userLogin(loginData);
        console.log(res.data.statusCode);
        if (res.data.statusCode === 200) {
          const { accessToken, role, email } = res.data.data;
          storeUserInfo(accessToken, role, email);
          setSuccessMessage(res.message);
          toast("User created successfully");
          if (accessToken) {
            <Navigate to="/user/profile" state={{ from: location }} replace />;
            console.log("object");
            console.log(accessToken)
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

                  <h2 style={{ fontSize: "96px", textAlign: "center" }}>
                    <FaUser style={{ border: "2px solid #6E58D8", color: "#6E58D8", borderRadius: "54px", padding: "16px" }} />
                  </h2>


                  <form onSubmit={handleSubmit(onSubmit)}>
                  <label
                      style={{
                        fontSize: 14,
                        fontWeight: 600,
                        color: "#6E58D8",
                      }}
                    >
                      First Name
                    </label>
                    <input
                      {...register("firstName", {
                        required: "First Name is required",
                      })}
                      placeholder="Enter First Name "
                      style={{
                        marginBottom: 14,
                        width: "100%",
                        height: "24px",
                        borderRadius: "4px",
                      }}
                      type="text"
                      className="customInput"
                    />
                    <label
                      style={{
                        fontSize: 14,
                        fontWeight: 600,
                        color: "#6E58D8",
                      }}
                    >
                      Last Name
                    </label>
                    <input
                      {...register("lastName", {
                        required: "Last Name is required",
                      })}
                      placeholder="Enter Last Name "
                      style={{
                        marginBottom: 14,
                        width: "100%",
                        height: "24px",
                        borderRadius: "4px",
                      }}
                      type="text"
                      className="customInput"
                    />
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

export default SignUp;
