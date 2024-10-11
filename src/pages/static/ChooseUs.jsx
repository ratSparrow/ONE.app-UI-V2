import { Col, Row, Typography } from "antd";

const items = [
  {
    id: 1,
    title: "Ensuring Masks",
    icon: "https://www.paho.org/sites/default/files/styles/max_1500x1500/public/2020-02/mascarilla-1400x896.png?itok=m3jJoOZi",
  },
  {
    id: 2,
    title: "Support",
    icon: "https://w7.pngwing.com/pngs/681/98/png-transparent-telephone-call-customer-service-24-7-service-mobile-phones-24-7-logo-blue-telephone-call-text-thumbnail.png",
  },
  {
    id: 3,
    title: "Sanitizing Hands & Equipment",
    icon: "https://health.clevelandclinic.org/wp-content/uploads/sites/3/2020/05/sanitizingImmunity-1212006615-770x533-1.jpg",
  },
  {
    id: 4,
    title: "Ensuring Gloves",
    icon: "https://m.media-amazon.com/images/I/51ot4bKoziL._AC_UF1000,1000_QL80_.jpg",
  },
];

const ChooseUs = () => {
  return (
    <div
      style={{
        padding: "44px 0",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div
          style={{
            paddingLeft: "16px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "16px 0",
          }}
        >
          <div
            style={{
              display: "inline-block",
              border: "1px solid #C02B69",
              width: "34px",
            }}
          ></div>
          <Typography
            className="animated-top"
            style={{
              color: "#C02B69",
              display: "inline-block",
              marginLeft: "8px",
              marginRight: "8px",
              fontSize: "28px",
              fontWeight: 500,
            }}
          >
            {" "}
            WHY CHOOSE US
          </Typography>
          <div
            style={{
              display: "inline-block",
              border: "1px solid #C02B69",
              width: "34px",
            }}
          ></div>
        </div>
        <h3
          style={{
            textAlign: "center",
            margin: 0,
            color: "#8A38AB",
            paddingBottom: "16px",
            textTransform: "capitalize",
            fontSize: 20,
          }}
        >
          Because We provide proper assurance and solution <br /> of all
          problems in one platform
        </h3>
        <Row gutter={24} align="middle" justify="space-between">
          <Col lg={12}>
            {" "}
            <div style={{}}>
              {items.map((item) => (
                <div
                  key={item.id}
                  style={{
                    display: "flex",
                    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                    padding: 12,
                    borderRadius: 12,
                    alignItems: "center",
                    margin: "16px",
                  }}
                >
                  <img
                    src={item.icon}
                    alt=""
                    width={50}
                    height={45}
                    style={{
                      borderRadius: "44px",
                    }}
                  />
                  <Typography
                    style={{
                      fontSize: "16px",
                      paddingLeft: 16,
                      fontWeight: 600,
                      opacity: 1,
                    }}
                  >
                    {item.title}
                  </Typography>
                </div>
              ))}
            </div>
          </Col>
          <Col lg={12}>
            <img
              src="https://img.freepik.com/free-vector/organic-flat-customer-support-illustration_23-2148899134.jpg?w=1060&t=st=1697212499~exp=1697213099~hmac=623b2594777be445072175f1402c3f5f1f0f17aad7242212d8290cc60cb89bd3"
              alt=""
              style={{
                maxWidth: "100%",
                minHeight: "300px",

                borderRadius: "15px",
                margin: 16,
              }}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ChooseUs;
