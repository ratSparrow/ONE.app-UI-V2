import React, { useState } from 'react';
import { Table, Tag, Space, Button, Modal, Typography, Breadcrumb } from 'antd';
import { ExclamationCircleOutlined, HomeOutlined } from '@ant-design/icons';
import "../css/AllUser.css"
import { Link } from 'react-router-dom';

const { Title } = Typography;
const { confirm } = Modal;

const AllUser = () => {
    // Sample Data
    const [dataSource, setDataSource] = useState([
        {
            key: '1',
            name: 'Service One',
            description: 'This is a description of service one.',
            status: 'Active',

            email:"",
            photo: "",
            contact: "",
            address: ""
        },
        {
            key: '2',
            name: 'Service Two',
            description: 'This is a description of service two.',
            status: 'Inactive',
            email:"",
            photo: "",
            contact: "",
            address: ""
        },
        {
            key: '3',
            name: 'Service Three',
            description: 'This is a description of service three.',
            status: 'Active',

            email:"",
            photo: "",
            contact: "",
            address: ""
        },
    ]);

    // Columns Definition
    const columns = [
        {
            title: 'Photo',
            dataIndex: 'photo',
            key: 'name',
        },
        {
            title: 'User Name',
            dataIndex: 'name',
            key: 'photo',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Contact',
            dataIndex: 'contact',
            key: 'contact',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (status) => (
                <Tag color={status === 'Active' ? 'green' : 'red'}>
                    {status.toUpperCase()}
                </Tag>
            ),
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    <Button type="link">Edit</Button>
                    <Button
                        type="link"
                        danger
                        onClick={() => showDeleteConfirm(record)}
                    >
                        Delete
                    </Button>
                </Space>
            ),
        },
    ];

    // Delete Confirmation Modal
    const showDeleteConfirm = (record) => {
        confirm({
            title: 'Are you sure you want to delete this service?',
            icon: <ExclamationCircleOutlined />,
            content: `Service Name: ${record.name}`,
            onOk() {
                handleDelete(record.key);
            },
        });
    };

    // Delete Handler
    const handleDelete = (key) => {
        const newDataSource = dataSource.filter((item) => item.key !== key);
        setDataSource(newDataSource);
    };

    return (
        <div style={{ margin: 32 }}>
            <div style={{ padding: "20px 32px" }}>
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
                            title: <Link to="/user/view">User</Link>,
                        },
                    ]}
                />
            </div>
            {/* Title Section */}
            <Title level={3} style={{ marginBottom: 24 }}>
                User Management
            </Title>

            {/* Table Component */}
            <Table
                dataSource={dataSource}
                columns={columns}
                pagination={{ pageSize: 5 }}
                rowKey="key"
            />
        </div>
    );
};

export default AllUser;
