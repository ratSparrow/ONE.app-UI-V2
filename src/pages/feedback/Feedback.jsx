import React from "react";
import { Layout, Row, Col, Card, Typography, Avatar, Rate, Button } from "antd";
import { useGetAllFeedbackQuery } from "../../redux/slice/api/feedbackApi";
import Loading from "../../ui/common/Loading";
import { Link } from "react-router-dom";

const { Title, Paragraph, Text } = Typography;


const FeedbackSection = () => {
  const { data:feedbacks, isLoading } = useGetAllFeedbackQuery();

  console.log(feedbacks)

  return (
  <>
    {
      isLoading === true ? <Loading/>:
      <Layout style={{  padding: "40px 0" }}>
      <div style={{ maxWidth: "1200px", margin: "auto", padding: "0 20px" }}>
        <Title level={2} style={{ textAlign: "center", marginBottom: "40px" }}>
          Customer Feedback
        </Title>
  
        <Row gutter={[24, 24]}>
          {feedbacks?.data.map((feedback, index) => (
            <Col xs={24} sm={12} lg={8} key={index}>
              <Card
                hoverable
                style={{
                  borderRadius: "8px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
                  <Avatar src={feedback.profileImg} size={50} />
                  <div style={{ marginLeft: "15px" }}>
                    <Title level={4} style={{ marginBottom: 0 }}>{feedback.firstName} {feedback.lastName}</Title>
                    <Rate disabled defaultValue={feedback.rating} style={{ fontSize: "14px" }} />
                  </div>
                </div>
                <Paragraph ellipsis={{ rows: 3 }}>{feedback.comment}</Paragraph>

                <Button type="link">
                  <Link to={`/feedback/details/${feedback._id}`}>Read More</Link>
                </Button>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </Layout>
    }
  
  </>
  );
}

export default FeedbackSection;
