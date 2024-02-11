const SubCategoryTableColumn = () => {
  const columns = [
    {
      title: "title",
      dataIndex: "title",
      key: "title",
    },

    {
      title: "Rating",
      dataIndex: "rating",
      key: "rating",
    },
    {
      title: "CreatedAt",
      dataIndex: "createdAt",
      key: "createdAt",
    },
  ];
  return columns;
};

export default SubCategoryTableColumn;
