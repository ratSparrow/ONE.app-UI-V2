/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

import { Card, Col, Row } from "antd";

import { useGetAllServicesQuery } from "../../../redux/slice/api/servicesApi";
import Loading from "../../../ui/common/Loading";
const { Meta } = Card;

const HomeServiceCard = ({ showModal }) => {
  const { data,isLoading } = useGetAllServicesQuery();
    
  if (isLoading) {
    return (
     <Loading/>
    );
  }
  return (
    <div style={{ maxWidth: "1200px", margin: "auto", padding: "44px 16px" }}>
      <h1
        className="animated-bottom"
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
      <Row  gutter={16}>
        {data?.data?.map((service) => (
          <Col  key={service._id} xs={24} sm={8} md={8} lg={6}>
            <button
              style={{ border: "none", backgroundColor: "#F5F5F5" }}
              onClick={showModal}
            >
              <Card
              className="animated-right"
                key={service._id}
                hoverable
                style={{
                  maxidth: 240,
                  marginBottom: "8px",
                }}
                cover={
                  <img
                    alt=""
                    src={service.image}
                    style={{ maxWidth: "400px", height: "170px" }}
                  />
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

export default HomeServiceCard;
