import React, { useEffect, useState } from "react";
import { Layout, Typography, Card, Button, Divider, List, Row, Col } from "antd";
import { CalendarOutlined, EnvironmentOutlined, ClockCircleOutlined } from "@ant-design/icons";
import { useParams } from "react-router-dom";
import { getBaseUrl } from "../../helpers/config/envConfig";
import Loading from "../../ui/common/Loading";
import { useGetSingleEventQuery } from "../../redux/slice/api/eventApi";

const { Content } = Layout;
const { Title, Text } = Typography;

const eventData = {
  title: "Home Service Discount Week",
  date: "November 25, 2024",
  location: "Downtown Convention Center",
  description: "Join us for an exclusive week of discounts on all home services! Enjoy up to 50% off, free consultations, and expert speaker sessions.",
  highlights: [
    "Up to 50% off services",
    "Free consultations",
    "Expert speaker sessions",
  ],
  imageUrl: "https://example.com/event-banner.jpg",
};

const EventDetails = () => {
    const { id } = useParams();

    const { data: events, error, isLoading } = useGetSingleEventQuery({ id });
    return (
        <>
            {
                isLoading === true ? <Loading></Loading> :
                <Layout style={{ background: "#f0f2f5", padding: "20px" }}>
          <Content style={{ maxWidth: "800px", margin: "auto" }}>
            
            {/* Banner Card */}
            <Card
              cover={
                <div
                  style={{
                    backgroundImage: `url(${events?.data?.image})`,
                    height: "250px",
                    backgroundSize: "cover",
                    borderRadius: "8px",
                  }}
                ></div>
              }
              style={{
                borderRadius: "8px",
                marginBottom: "20px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.15)",
              }}
            >
              <Title level={2}>{events?.data.name}</Title>
              <Row>
                <Col span={12}>
                  <Text>
                    <CalendarOutlined /> {eventData.date}
                  </Text>
                </Col>
                <Col span={12}>
                  <Text>
                    <EnvironmentOutlined /> {eventData.location}
                  </Text>
                </Col>
              </Row>
            </Card>
      
            {/* Event Description */}
            <Card style={{ marginBottom: "20px", borderRadius: "8px" }}>
              <Title level={4}>Event Overview</Title>
              <Text>{events?.data.description}</Text>
              <Divider />
              
              <Title level={5}>Highlights</Title>
              <List
                dataSource={eventData.highlights}
                renderItem={(highlight) => (
                  <List.Item>
                    <ClockCircleOutlined style={{ color: "#1890ff", marginRight: "8px" }} />
                    {highlight}
                  </List.Item>
                )}
              />
            </Card>
      
            {/* Countdown and Register Button */}
            <Card
              style={{
                textAlign: "center",
                borderRadius: "8px",
                backgroundColor: "#f4faff",
              }}
            >
              <Text style={{ fontSize: "1.1rem", color: "#ff4d4f", fontWeight: "bold" }}>
                Countdown: 5 days left until the event!
              </Text>
              <Divider />
              <Button type="primary" size="large" style={{ borderRadius: "20px" }}>
                Register Now
              </Button>
            </Card>
          </Content>
        </Layout>
            }
        </>
      );
}

export default EventDetails;
