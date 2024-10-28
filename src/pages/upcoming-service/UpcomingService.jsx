import React from "react";
import { Layout, Row, Col, Card, Typography, Button } from "antd";
import { useGetAllUpcomingServiceQuery } from "../../redux/slice/api/upcomingServiceApi";
import { Link } from "react-router-dom";

const { Title, Text, Paragraph } = Typography;




const UpcomingService = () => {
  const { data, isLoading } = useGetAllUpcomingServiceQuery();

  const upcomingServices = data?.data;
  console.log(upcomingServices);
  return (
    <>
      {isLoading ? (
        <Spin
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        />
      ) : (
        <Layout style={{ padding: "40px 0" }}>
    <div style={{ maxWidth: "1200px", margin: "auto", padding: "0 20px" }}>
      <Title level={2} style={{ textAlign: "center", marginBottom: "40px" }}>
        Upcoming Services
      </Title>

      <Row gutter={[24, 24]}>
        {upcomingServices.map((service, index) => (
          <Col xs={24} sm={12} lg={8} key={index}>
            <Card
              hoverable
              cover={
                <img
                  alt={service.name}
                  src={service.image}
                  style={{ height: "200px", objectFit: "cover" }}
                />
              }
              style={{ borderRadius: "8px", height:"400px" }}
            >
              <Title level={4}>{service.name}</Title>
              <Text type="secondary">Launching on: {service.createdAt.slice(0, 10)}</Text>
              <Paragraph ellipsis={{ rows: 2 }} style={{ margin: "10px 0" }}>
                {service.description}
              </Paragraph>
             <Link to={`/upcoming-service/details/${service._id}`}>
             <Button type="link" style={{ alignSelf: "flex-end", marginTop: "auto" }}>Learn More</Button>
             </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  </Layout>
      )}
    </>
  );
};

export default UpcomingService;
