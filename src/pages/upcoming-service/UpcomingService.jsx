import { Card, Col, Row, Spin } from "antd";
import { useGetAllUpcomingServiceQuery } from "../../redux/slice/api/upcomingServiceApi";
import { Link } from "react-router-dom";

const UpcomingService = () => {
  const { data, isLoading } = useGetAllUpcomingServiceQuery();

  const upcomingServices = data?.data;
  // console.log(upcomingServices);
  return (
    <>
      {isLoading ? (
        <Spin
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        />
      ) : (
        <div
          style={{ maxWidth: "1200px", margin: "auto", padding: "44px 16px" }}
        >
          <h1
            style={{
              fontSize: "24px",
              color: "blueviolet",
              margin: "16px 0",
              paddingBottom: "16px",
            }}
          >
            <span style={{ borderBottom: "2px solid blueviolet" }}>
              Upcoming Services
            </span>
          </h1>
          <Row gutter={16}>
            {upcomingServices?.map((item) => (
              <Col key={item._id} xs={24} sm={8} md={8} lg={6}>
                <Link to={`/upcoming-service/${item._id}`}>
                  <Card
                    key={item._id}
                    hoverable
                    style={{
                      width: "100%",

                      minHeight: "40vh",
                      marginBottom: "8px",
                    }}
                    cover={
                      !item?.image ? (
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
                </Link>
              </Col>
            ))}
          </Row>
        </div>
      )}
    </>
  );
};

export default UpcomingService;
