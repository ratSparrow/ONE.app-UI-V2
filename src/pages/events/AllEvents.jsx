/* eslint-disable react/prop-types */
import React from "react";
import { Layout, Row, Col, Card, Typography, Button } from "antd";
import { useGetAllEventsQuery } from "../../redux/slice/api/eventApi";
import { Link } from "react-router-dom";
import Loading from "../../ui/common/Loading";


const { Title, Text, Paragraph } = Typography;

const events = [
  {
    title: "Home Maintenance Workshop",
    date: "October 25, 2024",
    description: "Join us for a workshop on essential home maintenance tips to keep your home in top condition.",
    imageUrl: "https://example.com/event1.jpg",
  },
  {
    title: "Discount Day on All Cleaning Services",
    date: "November 1, 2024",
    description: "Get 20% off on all cleaning services for one day only. Don’t miss out!",
    imageUrl: "https://example.com/event2.jpg",
  },
  {
    title: "Plumbing 101: Basics and Maintenance",
    date: "November 10, 2024",
    description: "A beginner’s guide to handling minor plumbing issues and when to call a professional.",
    imageUrl: "https://example.com/event3.jpg",
  },
];

const AllEvents = () => {
  const { data: events, isLoading } = useGetAllEventsQuery();

  console.log(events);
  return (
    <>
      {
        isLoading === true ? <Loading /> :
          <Layout style={{ padding: "40px 0" }}>
            <div style={{ maxWidth: "1200px", margin: "auto", padding: "0 20px" }}>
              <Title level={2} style={{ textAlign: "center", marginBottom: "40px" }}>
                Upcoming Events
              </Title>

              <Row gutter={[24, 24]}>
                {events?.data.map((event, index) => (
                  <Col xs={24} sm={12} lg={8} key={index}>
                    <Card
                      hoverable
                      cover={
                        <img
                          alt={event.name}
                          src={event.image}
                          style={{ height: "200px", objectFit: "cover" }}
                        />
                      }
                      style={{ borderRadius: "8px", height: "400px" }}
                    >
                      <Title level={4}>{event.name}</Title>
                      <Text type="secondary">{event.date}</Text>
                      <Paragraph ellipsis={{ rows: 2 }} style={{ margin: "10px 0" }}>
                        {event.description}
                      </Paragraph>
                      <Link to={`/event/details/${event._id}`}>
                        <Button type="link">Learn More</Button>
                      </Link>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          </Layout>
      }
    </>
  );
};

export default AllEvents;
