import { Col, Row, Typography } from "antd";
import { Link } from "react-router-dom";

const contact = [
  {
    id: 1,
    label: "+880 1648886671",
  },
  {
    id: 2,
    label: "mrafiul.alam7@gmail.com",
  },
  {
    id: 3,
    label: "Corporate Address",
  },
  {
    id: 4,
    label: "House-7, Block-D, Section-2, Mirpur,Dhaka",
  },
];
const pages = [
  {
    id: 1,
    label: "Blog",
  },
  {
    id: 2,
    label: "Help",
  },
  {
    id: 3,
    label: "Feedback",
  },
  {
    id: 4,
    label: "Faq",
  },
  // {
  //   id: 5,
  //   label: "Privacy Policy",
  // },
  // {
  //   id: 6,
  //   label: "Terms & Conditions",
  // },
];

const helpItems = [
  {
    id: 1,
    label: "Term & Condition",
    path: "terms",
  },

  {
    id: 2,
    label: "Privacy Policy",
    path: "privacy",
  },
  {
    id: 3,
    label: "Refund and Return",
    path: "refund",
  },
  {
    id: 4,
    label: "About Us",
    path: "about",
  },
  {
    id: 5,
    label: "Contact Us",
    path: "contact",
  },
];

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#EBECEF", marginTop: 16 }}>
      <div
        style={{
          maxWidth: "1200px",

          padding: "60px 20px",
          margin: "0 auto",
        }}
      >
        <Row justify="center" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" span={6}>
            <h4 style={{ color: "#3749BB", fontSize: 24, paddingBottom: 8 }}>
              CONTACT
            </h4>
            <div>
              {contact.map((item) => (
                <Typography
                  style={{
                    fontSize: 16,
                    fontWeight: 500,
                    fontFamily: "serif",
                    padding: 3,
                  }}
                  key={item.id}
                >
                  {item.label}
                </Typography>
              ))}
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <h4 style={{ color: "#3749BB", fontSize: 24, paddingBottom: 8 }}>
              MORE PAGES
            </h4>
            <div>
              {pages.map((item) => (
                <Typography
                  style={{
                    fontSize: 16,
                    fontWeight: 500,
                    fontFamily: "serif",
                    padding: 3,
                  }}
                  key={item.id}
                >
                  <Link to={item.label}>{item.label}</Link>
                </Typography>
              ))}
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <h4 style={{ color: "#3749BB", fontSize: 24, paddingBottom: 8 }}>
              OTHERS
            </h4>
            <div>
              {helpItems.map((item) => (
                <Typography
                  style={{
                    fontSize: 16,
                    fontWeight: 500,
                    fontFamily: "serif",
                    padding: 3,
                  }}
                  key={item.id}
                >
                  <Link href={item.path}>{item.label}</Link>
                </Typography>
              ))}
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <h4 style={{ color: "#3749BB", fontSize: 24, paddingBottom: 8 }}>
              DOWNLOAD OUR APP
            </h4>
            <div>
              <Typography
                style={{
                  fontSize: 16,
                  fontWeight: 500,
                  fontFamily: "serif",
                  padding: 3,
                }}
              >
                Coming Soon..
              </Typography>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Footer;
