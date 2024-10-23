import React from 'react';
import "../css/AllUser.css"
import { useGetAllUserQuery } from '../../redux/slice/api/userApi';
import { Link } from 'react-router-dom';
import { Avatar, Breadcrumb, Button, Typography } from 'antd';
import Loading from '../../ui/common/Loading';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
const { Title } = Typography;

const AllUsers = () => {

    const { data, isLoading } = useGetAllUserQuery();

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
                            title: <Link to="/user/view">View Users</Link>,
                        },
                    ]}
                />
            </div>
            <Title level={3} style={{ margin: 32 }}>
                User Management
            </Title>
            {
                isLoading === true ?
                    <Loading /> :
                    <div className="table-container">
                        <table className="custom-table">
                            <thead>
                                <tr>
                                    <th>Photo</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Contact</th>
                                    <th>Location</th>
                                    <th>Action</th>

                                </tr>
                            </thead>
                            <tbody>
                                {data?.data.map((record) => (
                                    <tr key={record._id}>
                                        <td>
                                            {
                                                record.profileImg ?
                                                    <img src={record.profileImg} alt="" /> :
                                                    <Avatar size="small" icon={<UserOutlined />} />}
                                        </td>
                                        <td>{record.name.firstName} {record.name.lastName}</td>
                                        <td>{record.email}</td>
                                        <td>{record.phoneNumber}</td>
                                        <td>{record.address}</td>
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
    );
};

export default AllUsers;
