import { Alert, Col, Row, Spin, Typography } from "antd";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useUserLoginMutation } from "../../redux/slice/api/userApi";
import { storeUserInfo, storeUserRole } from "../../services/auth.service";
import { FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "../css/SignUp.css";
import { ADMIN, USER } from "../../constants/common/user-constant";
import toast from "react-hot-toast";

const { Text } = Typography;

const SignIn = () => {
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const [userLogin] = useUserLoginMutation();

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const res = await userLogin(data);

      if (res.data.statusCode === 200) {
        const { accessToken, role } = res.data.data;

        storeUserInfo(accessToken);
        storeUserRole(role);
        setSuccessMessage(res.data.message);
        console.log(res);
        toast.success(res.data.message);

        if (role === USER) {
          navigate("/user/profile");
        } else if (role === ADMIN) {
          navigate("/admin");
        } else {
          navigate("/super-admin");
        }

        setLoading(false);
        return <Alert message={res.message} type="success" />;
      }
    } catch (error) {
      console.log(error);
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
                    borderRadius: "8px",
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
                      Email
                    </label>
                    <input
                      {...register("email", {
                        required: "Email Address is required",
                      })}
                      placeholder="Enter Email "
                      style={{
                        marginBottom: 14,
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
                        marginBottom: 14,
                        width: "100%",
                        height: "24px",
                        borderRadius: "4px",
                      }}
                      type="password"
                      className="customInput"
                    />
                    {errors.exampleRequired && <span>Password Required</span>}

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

                    {errorMessage ? (
                      <Text
                        style={{
                          padding: "8px 0",
                          display: "block",
                          fontWeight: "700",
                          fontSize: "24px",
                        }}
                        type="danger"
                      >
                        {errorMessage}
                      </Text>
                    ) : (
                      <Text
                        style={{
                          padding: "8px 0",
                          display: "block",
                          fontWeight: "700",
                          fontSize: "24px",
                        }}
                        type="success"
                      >
                        {successMessage}
                      </Text>
                    )}
                    <Link style={{ textDecoration: "none" }} to="/sign-up">
                      <Typography className="formText">
                        Not Have an Account? Sign Up
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

export default SignIn;
