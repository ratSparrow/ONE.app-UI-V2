/* eslint-disable react/prop-types */

import "../../pages/css/ServiceDetails.css";


const HeroServiceDetails = ({ detailsService }) => {
  return (
    <div className="mainContainer">
      <img
        className="contentImage"
        src={detailsService?.images}
        alt={detailsService?.title}
        style={{
          height:"60vh"
        }}
      />
    </div>
  );
};

export default HeroServiceDetails;

/*
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
                >{`${detailsService.name}`}</Typography>
              ),
            },
          ]}
        />
        <h4 style={{ color: "#FFFFFF", fontFamily: "serif", marginTop: 10 }}>
          {detailsService.name}
        </h4>
      </div>
*/