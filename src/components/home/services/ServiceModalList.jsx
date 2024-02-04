/* eslint-disable react/prop-types */
import { Card } from "antd";
import { Link } from "react-router-dom";

const ServiceModalList = ({ value }) => {
  console.log(value._id);
  return (
    <Link to={`/serviceDetails/${value._id}`}>
      <Card
        hoverable
        style={{
          width: 300,

          margin: "8px",
          padding: "-50px",
        }}
      >
        <h3>{value.name}</h3>
      </Card>
    </Link>
  );
};

export default ServiceModalList;
