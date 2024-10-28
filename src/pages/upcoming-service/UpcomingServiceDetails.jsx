import React from "react";
import { Card, Typography, Row, Col, Tag, Divider, Button } from "antd";
import { ClockCircleOutlined, EnvironmentOutlined } from "@ant-design/icons";
import { useGetSingleUpcomingServiceQuery } from "../../redux/slice/api/upcomingServiceApi";
import { useParams } from "react-router-dom";
import Loading from "../../ui/common/Loading";

const { Title, Text } = Typography;

const upcomingService = {
    title: "House Cleaning Service",
    date: "November 25, 2024",
    time: "10:00 AM",
    location: "123 Elm Street, Springfield",
    status: "Confirmed",
    details: "This service includes a full house cleaning with special attention to carpets and windows.",
    contactInfo: "Contact us at +123456789",
};

const UpcomingServiceDetails = () => {
    const { id } = useParams()
    const { data: upcomingServices, error, isLoading } = useGetSingleUpcomingServiceQuery({ id });
    console.log(upcomingServices)
    return (
        <>
            {
                isLoading === true ? <Loading /> :
                    <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
                        <Card
                            style={{
                                borderRadius: "8px",
                                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.15)",
                            }}
                            cover={
                                <div
                                  style={{
                                    backgroundImage: `url(${upcomingServices?.data.image})`,
                                    height: "250px",
                                    backgroundSize: "cover",
                                    borderRadius: "8px",
                                  }}
                                ></div>
                              }

                      
                        >
                                                        
                                <Row justify="space-between">
                                    <Title level={3} style={{ margin: 0 }}>
                                        {upcomingServices?.data.name}
                                    </Title>
                                    <Tag color="green">{upcomingService.status}</Tag>
                                </Row>
                            
                        
                            <Row gutter={[16, 16]}>
                                {/* Date and Time */}
                                <Col span={12}>
                                    <Text>
                                        <ClockCircleOutlined /> {upcomingService.date} at {upcomingService.time}
                                    </Text>
                                </Col>

                                {/* Location */}
                                <Col span={12}>
                                    <Text>
                                        <EnvironmentOutlined /> {upcomingService.location}
                                    </Text>
                                </Col>
                            </Row>

                            <Divider />

                            {/* Service Details */}
                            <Title level={4}>Service Details</Title>
                            <Text>{upcomingServices?.data.description}</Text>

                            <Divider />

                            {/* Contact Information */}
                            <Text strong>Contact Information:</Text>
                            <Text style={{ display: "block", marginTop: "5px" }}>
                                {upcomingService.contactInfo}
                            </Text>

                            <Divider />

                            {/* Actions */}
                            <Button type="primary" style={{ marginRight: "10px" }}>
                                Reschedule
                            </Button>
                            <Button type="danger">Cancel Service</Button>
                        </Card>
                    </div>
            }
        </>
    );

}
export default UpcomingServiceDetails;
