export const ServiceTableItem = () => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },

    {
      title: "Creation Date",
      dataIndex: "createdAt",
      key: "createdAt",
    },
  ];
  return columns;
};
