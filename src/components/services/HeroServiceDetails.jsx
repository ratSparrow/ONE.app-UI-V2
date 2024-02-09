/* eslint-disable react/prop-types */

import "../../pages/css/ServiceDetails.css";
import { Breadcrumb, Typography } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import Link from "react-router-dom";

const HeroServiceDetails = ({ detailsService }) => {
  return (
    <div className="mainContainer">
      <img
        className="contentImage"
        src={detailsService?.images}
        alt={detailsService?.title}
      />
      <div className="headerContent">
        <Breadcrumb
          items={[
            {
              title: (
                <Link to="/">
                  <Typography
                    style={{ color: "blueviolet", fontFamily: "serif" }}
                  >
                    <HomeOutlined />
                  </Typography>
                </Link>
              ),
            },
            {
              title: (
                <Typography
                  style={{
                    color: "#FFFFFF",
                    fontFamily: "serif",
                    fontWeight: 800,
                  }}
                >
                  Service Details
                </Typography>
              ),
            },
            {
              title: (
                <Typography
                  style={{
                    color: "#FFFFFF",
                    fontFamily: "serif",
                    fontWeight: 800,
                  }}
                >{`${detailsService?.name}`}</Typography>
              ),
            },
          ]}
        />
        <h4 style={{ color: "#FFFFFF", fontFamily: "serif", marginTop: 10 }}>
          {detailsService?.name}
        </h4>
      </div>
    </div>
  );
};

export default HeroServiceDetails;
