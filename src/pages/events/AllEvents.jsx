/* eslint-disable react/prop-types */
import { Card, Col, Row, Spin } from "antd";
import { useGetAllEventsQuery } from "../../redux/slice/api/eventApi";

const AllEvents = () => {
  const { data, isLoading } = useGetAllEventsQuery();

  if (isLoading) {
    return (
      <Spin
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      />
    );
  }
  // console.log(event);
  return (
    <div style={{ maxWidth: "1200px", margin: "auto", padding: "44px 16px" }}>
      <h1
        style={{
          fontSize: "24px",
          color: "blueviolet",
          margin: "16px 0",
          paddingBottom: "16px",
        }}
      >
        <span style={{ borderBottom: "2px solid blueviolet" }}>
          Event We organised
        </span>
      </h1>
      <Row gutter={16}>
        {data?.data.map((item) => (
          <Col key={item._id} xs={24} sm={8} md={8} lg={6}>
            <Card
              key={item._id}
              hoverable
              style={{
                width: "100%",
                minHeight: "40vh",
                marginBottom: "8px",
              }}
              cover={
                !item.image ? (
                  <Spin />
                ) : (
                  <img
                    alt=""
                    src={item.image}
                    style={{ maxWidth: "400px", height: "170px" }}
                  />
                )
              }
            >
              <h4
                style={{
                  padding: 4,
                  fontWeight: 500,
                  fontSize: 18,
                }}
              >
                {item.name}
              </h4>
              <p
                style={{
                  marginTop: 8,
                  fontWeight: 400,
                  fontSize: 16,
                }}
              >
                {item.description}
              </p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default AllEvents;
