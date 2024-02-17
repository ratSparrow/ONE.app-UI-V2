import { Button } from "antd";


const AdminTableItem = () => {
  const columns = [
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "CreatedAt",
      dataIndex: "createdAt",
      key: "createdAt",
    },
    {
      title: "Action",
      render: function (data) {
        return (
          <Button onClick={() => console.log(data)} type="primary">
            Action
          </Button>
        );
      },
    },
  ];
  return columns;
};

export default AdminTableItem;
