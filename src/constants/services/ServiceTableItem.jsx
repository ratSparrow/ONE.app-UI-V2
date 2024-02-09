export const ServiceTableItem = () => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },

    {
      title: "CreatedAt",
      dataIndex: "createdAt",
      key: "createdAt",
    },
  ];
  return columns;
};
