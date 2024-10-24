import React, { useEffect, useState } from 'react';
import { Layout, Card, Avatar, Tabs, Row, Col, Button } from 'antd';
import { UserOutlined, SettingOutlined, EditOutlined } from '@ant-design/icons';
import '../../pages/css/Profile.css';
import Loading from '../../ui/common/Loading';
import { getFromLocalStorage } from '../../helpers/utils/saveData';
import { useGetUserProfileQuery } from '../../redux/slice/api/userApi';

const { Content } = Layout;
const { TabPane } = Tabs;

const Profile = () => {
  const { data, isLoading } = useGetUserProfileQuery();

  console.log(data)
  return (
    <>
      {
        isLoading === true ? <Loading /> :
          <Layout style={{ minHeight: '100vh', background: '#f0f2f5' }}>


            <Content style={{ padding: '50px' }}>
              <Row justify="center">
                <Col xs={24} md={16} lg={12}>
                  <Card className="profile-card" bordered={false}>
                    <Row justify="center">
                      <Avatar size={128} icon={<UserOutlined />} />
                    </Row>
                    <Row justify="center" style={{ marginTop: '20px' }}>
                      <h2> {data.data.name.firstName} {data.data.name.lastName}</h2>
                    </Row>
                    <Row justify="center">
                      <p style={{ color: '#888', textTransform: "capitalize", marginBottom: "8px" }}>{data?.data?.role}</p>
                    </Row>

                    <Row justify="center" gutter={16}>
                      <Col>
                        <Button type="primary" icon={<EditOutlined />}>
                          Edit Profile
                        </Button>
                      </Col>
                      <Col>
                        <Button icon={<SettingOutlined />}>Settings</Button>
                      </Col>
                    </Row>

                    <Tabs defaultActiveKey="1" style={{ marginTop: '30px' }}>
                      <TabPane tab="Profile Details" key="1">
                        <div className="tab-content">
                          <p><strong>Email:</strong> {data.data.email}</p>
                          <p><strong>Phone:</strong> {data.data.phoneNumber}</p>
                          <p><strong>Location:</strong> {data.data.address}</p>
                        </div>
                      </TabPane>
                      <TabPane tab="Activity" key="2">
                        <div className="tab-content">
                          <p>No recent activity.</p>
                        </div>
                      </TabPane>
                      <TabPane tab="Settings" key="3">
                        <div className="tab-content">
                          <p>Settings content goes here.</p>
                        </div>
                      </TabPane>
                    </Tabs>
                  </Card>
                </Col>
              </Row>
            </Content>

          </Layout>
      }
    </>
  );
};

export default Profile;
