import React from 'react'
import { useGetAllFaqQuery } from '../../redux/slice/api/faqApi'
import { Avatar, Breadcrumb, Button, Table, Typography } from "antd";

import { Link } from "react-router-dom";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import Loading from '../../ui/common/Loading';


const { Title } = Typography;

const ViewFaq = () => {
    const {data,isLoading}= useGetAllFaqQuery()
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
              title: <Link to="/faq/view">View Faq</Link>,
            },
            {
              title: <Link to="/faq/add">Add Faq</Link>,
            },
          ]}
        />
      </div>
      <Title level={3} style={{ margin: 32 }}>
        Frequently Asked Question Management
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

export default ViewFaq
