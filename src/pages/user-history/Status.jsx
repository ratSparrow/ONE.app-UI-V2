import { useState } from "react";
import { useParams } from "react-router-dom";
import { useAddOrderMutation } from "../../redux/slice/api/orderApi";
import { Col, Row } from "antd";


const UserStatus = () => {
    const {id} = useParams()
  const [status, setStatus] = useState("pending");
  const [message, setMessage] = useState("");

  const orderId = id
  console.log(orderId);
  const [updateOrder] = useAddOrderMutation(orderId);
  const handleChange = (value) => {
    console.log(`selected ${value}`);
    setStatus(value);
  };
  const onSubmit = async () => {
    try {
      console.log(status);
      const mData = {
        status,
      };
      console.log(mData, orderId);
      const res = updateOrder({ orderId, mData });
      console.log(res);
      if (res.data.statusCode === 200) {
        setMessage(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
      <div>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" span={16}>
            <h2 style={{ margin: 16 }}>Update Order</h2>
            <Custom submitHandler={onSubmit}>
              <div
                style={{
                  border: "1px solid #d9d9d9",
                  borderRadius: "5px",
                  padding: 8,
                  marginTop: 16,
                }}
              >
                <h3 style={{ marginBottom: 10 }}>Status</h3>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                  <Col className="gutter-row" span={12}>
                    <Select
                      defaultValue="pending"
                      style={{
                        width: 180,
                      }}
                      onChange={handleChange}
                      options={[
                        {
                          value: "pending",
                          label: "Pending",
                        },
                        {
                          value: "canceled",
                          label: "Cancel",
                        },
                      ]}
                    />
                  </Col>
                </Row>
                <Button
                  style={{ marginTop: 8 }}
                  size="small"
                  htmlType="submit"
                  type="primary"
                >
                  Update
                </Button>
                {message && (
                  <Alert
                    style={{ margin: "16px 0" }}
                    message="Success Text"
                    type="success"
                  />
                )}
              </div>
            </Custom>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default UserStatus;

UserStatus.getLayout = function getLayout(page) {
  return <UserDashboardLayout>{page}</UserDashboardLayout>;
};
