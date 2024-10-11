
const ServiceOrder = () => {
  return (
    <>
      <marquee >
        <h2
          style={{
            fontWeight: 600,
            color: "blueviolet",
            textAlign: "center",
            fontSize: 44,
          }}
        >
          <span
            style={{
              textTransform: "uppercase",
              padding: 0,
              margin: 0,
            }}
          >
            We Are Waiting For Your Order
          </span>
        </h2>
      </marquee>
     <div className="animated-top">
     <img
        src="https://img.freepik.com/premium-photo/people-representing-diverse-professions-with-tools-holding-big-blank-banner-isolated-white-background_394555-662.jpg?w=1380"
        alt=""
        width="100%"
      /> 
     </div>
    </>
  );
};

export default ServiceOrder;