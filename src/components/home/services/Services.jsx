/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

import { Card, Col, Row, Spin } from "antd";
const { Meta } = Card;

const Services = ({ services, showModal }) => {
  return (
    <div style={{ maxWidth: "1200px", margin: "auto", padding: "44px 16px" }}>
      <h1
        style={{
          fontSize: "24px",
          color: "blueviolet",
          margin: "16px 0",
          paddingBottom: "16px",
        }}
      >
        <span style={{ borderBottom: "2px solid blueviolet" }}>
          Category Of Service We Provide
        </span>
      </h1>
      <Row gutter={16}>
        {services?.data?.map((service) => (
          <Col key={service._id} xs={24} sm={8} md={8} lg={6}>
            <button
              style={{ border: "none", backgroundColor: "#F5F5F5" }}
              onClick={showModal}
            >
              <Card
                key={service._id}
                hoverable
                style={{
                  maxidth: 240,
                  marginBottom: "8px",
                }}
                cover={
                  !service.image ? (
                    <Spin />
                  ) : (
                    <img
                      alt=""
                      src={service.image}
                      style={{ maxWidth: "400px", height: "170px" }}
                    />
                  )
                }
              >
                <Meta title={service.name} />
              </Card>
            </button>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Services;
