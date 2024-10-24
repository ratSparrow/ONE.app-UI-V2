import React from 'react'

import { Avatar, Breadcrumb, Button, Table, Typography } from "antd";

import { Link } from "react-router-dom";
import { HomeOutlined,  } from "@ant-design/icons";
import Loading from '../../ui/common/Loading';
import { useGetReviewQuery } from '../../redux/slice/api/reviewApi';


const { Title } = Typography;

const ViewReview = () => {
    const {data,isLoading}= useGetReviewQuery()
    console.log(data)
  return (
    <div style={{ margin: 32 }}>
      <div style={{ margin: 32 }}>
        <Breadcrumb
          items={[
            {
              title: (
                <Link to="/">
                  <HomeOutlined />
                </Link>
              ),
            },
            {
              title: <Link to="/admin">Admin</Link>,
            },
            {
              title: <Link to="/faq/view">View Review</Link>,
            },

          ]}
        />
      </div>
      <Title level={3} style={{ margin: 32 }}>
        Review Management
      </Title>
      {
        isLoading === true ?
          <Loading /> :
          <div className="table-container">
            <table className="custom-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Query</th>
                  <th>Reply</th>
                  <th>Created At</th>
                  <th>Action</th>

                </tr>
              </thead>
              <tbody>
                {data?.data.map((record, i) => (
                  <tr key={record._id}>
                    <td>{i + 1}</td>
                    
                    <td>{record.query}</td>
                    <td>{record.reply}</td>
                    <td>{record.createdAt.slice(0, 10)} </td>
                    <td>
                      <Button type='link' style={{ marginRight: 10 }}><Link to="">Edit</Link> </Button>
                      <Button type='primary' color='danger' variant='filled'>Delete</Button>
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>
      }
    </div>
  )
}

export default ViewReview
