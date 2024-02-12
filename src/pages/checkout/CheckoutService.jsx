import { useState } from "react";
import { useParams } from "react-router-dom";
import { useAddOrderMutation } from "../../redux/slice/api/orderApi";
import { Button, Col, DatePicker, Row } from "antd";
import CustomForm from "../../components/forms/CustomForm";
import CustomSelectedField from "../../components/forms/CustomSelectField";
import CustomInput from "../../components/forms/CustomInput";

const CheckoutService = () => {
  const { id } = useParams();
  const orderedItemId = id;
  const [selectedDate, setSelectedDate] = useState("");
  const [addOrder] = useAddOrderMutation();

  const onChange = (date, dateString) => {
    setSelectedDate(dateString);
  };
  const onSubmit = async (data) => {
    const mData = {
      date: selectedDate,
      slot: data.slot,
      user: data.email,
      phone: data.phoneNumber,
      address: {
        house: data.address.house,
        road: data.address.road,
        block: data.address.block,
        sector: data.address.sector,
        area: data.address.sector,
      },
      order: orderedItemId,
      status: "pending",
    };
    try {
      const res = await addOrder(mData);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
      <div>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" span={16}>
            <h2 style={{ margin: 16 }}>Create Order</h2>
            <CustomForm submitHandler={onSubmit}>
              <div
                style={{
                  border: "1px solid #d9d9d9",
                  borderRadius: "5px",
                  padding: 8,
                }}
              >
                <h3 style={{ marginBottom: 10 }}>Schedule</h3>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                  <Col className="gutter-row" span={12}>
                    <DatePicker style={{ width: 200 }} onChange={onChange} />
                  </Col>

                  <Col className="gutter-row" span={12}>
                    {" "}
                    <CustomSelectedField
                      name="slot"
                      placeholder="Select a slot"
                    />
                  </Col>
                </Row>
              </div>
              <div
                style={{
                  border: "1px solid #d9d9d9",
                  borderRadius: "5px",
                  padding: 8,
                  marginTop: 16,
                }}
              >
                <h3 style={{ marginBottom: 10 }}>Contact Person</h3>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                  <Col className="gutter-row" span={12}>
                    {" "}
                    <CustomInput
                      name="email"
                      label="Email"
                      type="email"
                      size="small"
                      style={{ width: 64 }}
                    />
                  </Col>

                  <Col className="gutter-row" span={12}>
                    {" "}
                    <CustomInput
                      name="phoneNumber"
                      label="Phone"
                      type="text"
                      size="small"
                      style={{ width: 64 }}
                    />
                  </Col>
                </Row>
              </div>
              <div
                style={{
                  border: "1px solid #d9d9d9",
                  borderRadius: "5px",
                  padding: 8,
                  marginTop: 16,
                }}
              >
                <h3 style={{ marginBottom: 10 }}>Address</h3>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                  <Col className="gutter-row" span={12}>
                    {" "}
                    <CustomInput
                      name="address.house"
                      label="House No."
                      type="text"
                      size="small"
                      style={{ width: 64 }}
                    />
                  </Col>
                  <Col className="gutter-row" span={12}>
                    {" "}
                    <CustomInput
                      name="address.road"
                      label="Road No. /Name"
                      type="text"
                      size="small"
                      style={{ width: 64 }}
                    />
                  </Col>
                  <Col className="gutter-row" span={12}>
                    {" "}
                    <CustomInput
                      name="address.block"
                      label="Block"
                      type="text"
                      size="small"
                      style={{ width: 64 }}
                    />
                  </Col>
                  <Col className="gutter-row" span={12}>
                    {" "}
                    <CustomInput
                      name="address.sector"
                      label="Sector"
                      type="text"
                      size="small"
                      style={{ width: 64 }}
                    />
                  </Col>
                  <Col className="gutter-row" span={12}>
                    {" "}
                    <CustomInput
                      name="address.area"
                      label="Area"
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
                  Place Order
                </Button>
              </div>
            </CustomForm>
          </Col>
          <Col className="gutter-row" span={8}></Col>
        </Row>
      </div>
    </div>
  );
};

export default CheckoutService;
