import React from "react";
import { Layout, Card, Typography, Divider, Rate, Row, Col, Avatar } from "antd";
import { useGetSingleFeedbackQuery } from "../../redux/slice/api/feedbackApi";
import { useParams } from "react-router-dom";
import Loading from "../../ui/common/Loading";
import { UserOutlined } from "@ant-design/icons";

const { Title, Text, Paragraph } = Typography;
const { Content } = Layout;

const feedbackData = {
    user: "John Doe",
    date: "October 18, 2024",
    rating: 4,
    feedback: "The service was excellent! The team arrived on time and completed the cleaning efficiently. Highly recommended for anyone looking for quick and quality home cleaning services.",
    service: "Home Cleaning Service",
};

const FeedbackDetails = () => {
    const { id } = useParams()
    const { data: feedback, error, isLoading } = useGetSingleFeedbackQuery({ id });
    console.log(feedback)
    return (
        <>
            {
                isLoading === true ? <Loading /> :
                <Layout style={{ backgroundColor: "#f0f2f5", padding: "40px" }}>
                <Content style={{ maxWidth: "800px", margin: "auto" }}>
                  <Card
                    title={<Title level={3}>Feedback Details</Title>}
                    style={{
                      borderRadius: "8px",
                      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.15)",
                    }}
                  >
                    {/* User and Rating Section */}
                    <Row gutter={[16, 16]} align="middle">
                      <Col span={4}>
                        <Avatar
                          size={64}
                          src={feedback?.data.profileImg}
                          icon={<UserOutlined />}
                          alt={feedback?.data.firstName}
                        />
                      </Col>
                      <Col span={14}>
                        <Title level={4} style={{ margin: 0 }}>{feedback?.data.firstName} {feedback?.data.lastName}</Title>
                        <Text type="secondary">{feedbackData.date} | {feedback?.data.location}</Text>
                      </Col>
                      <Col span={6} style={{ textAlign: "right" }}>
                        <Rate value={feedbackData.rating} disabled />
                      </Col>
                    </Row>
            
                    <Divider />
            
                    {/* Service and Feedback Details */}
                    <Title level={4}>Service:</Title>
                    <Text>{feedbackData.service}</Text>
            
                    <Divider />
            
                    <Title level={4}>Feedback:</Title>
                    <Paragraph style={{ lineHeight: "1.8" }}>
                      {feedback?.data.comment}
                    </Paragraph>
                  </Card>
                </Content>
              </Layout>
            }


        </>
    );
}

export default FeedbackDetails;
