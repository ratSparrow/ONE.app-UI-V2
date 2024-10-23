import React from 'react';
import "../css/AllUser.css"
import { useGetAllUserQuery } from '../../redux/slice/api/userApi';
import { Link } from 'react-router-dom';
import { Avatar, Breadcrumb, Button, Typography } from 'antd';
import Loading from '../../ui/common/Loading';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import { useGetAllOrderQuery } from '../../redux/slice/api/orderApi';
const { Title } = Typography;

const ViewOrder = () => {

    const { data, isLoading } = useGetAllOrderQuery();
    console.log(data)

    const orderServiceId = data?.data.filter(order => order)
    console.log(orderServiceId)

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
                            title: <Link to="/order/view">View Orders</Link>,
                        },
                    ]}
                />
            </div>
            <Title level={3} style={{ margin: 32 }}>
                Order Management
            </Title>
            {
                isLoading === true ?
                    <Loading /> :
                    <div className="table-container">
                        <table className="custom-table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>User</th>
                                    <th>Order</th>
                                    <th>Contact</th>
                                    <th>Slot</th>
                                    <th>Location</th>
                                    <th>Status</th>
                                    <th>Date</th>
                                    {/* <th>Action</th> */}

                                </tr>
                            </thead>
                            <tbody>
                                {data?.data.map((record, index) => (
                                    <tr key={record._id}>
                                        <td>{index + 1}</td>
                                        <td>{record.user} </td>
                                        <td>{record.order.name}</td>
                                        <td>{record.phone}</td>
                                        <td>{record.slot}</td>
                                        <td>
                                            {record?.address.house ? record.address.house + ', ' : ''}
                                            {record?.address.road ? 'Road ' + record.address.road + ', ' : ''}
                                            {record?.address.block ? 'Block ' + record?.address.block + ', ' : ''}
                                            {record?.address.sector ? 'Sector ' + record.address.sector + ', ' : ''}
                                            {record.address.area || ''}
                                        </td>
                                        <td>{record.status}</td>
                                        <td>{record.createdAt.slice(0, 10)}</td>
                                        {/* <td>
                                            <Button type='link' style={{ marginRight: 10 }}><Link to="">Edit</Link> </Button>
                                            <Button type='primary' color='danger' variant='filled'>Delete</Button>
                                        </td> */}

                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
            }
        </div>
    );
};

export default ViewOrder;
