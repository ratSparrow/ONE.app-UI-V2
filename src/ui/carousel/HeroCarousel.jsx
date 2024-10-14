/* eslint-disable no-unused-vars */
import {
  CarOutlined,
  EuroCircleOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import { Carousel } from "antd";

const extras = [
  {
    id: 1,
    svg: <SmileOutlined />,
    title: "FREE SHIPPING",
    description: "Free shipping on orders",
  },
  {
    id: 3,
    svg: <CarOutlined />,
    title: " SUPPORT 24/7",
    description: "Lorem ipsum dolor sit amet.",
  },
  {
    id: 4,
    svg: <EuroCircleOutlined />,
    title: "SECURE PAYMENT",
    description: "Lorem ipsum dolor sit amet.",
  },
];

const HeroCarousel = () => {
  return (
    <>
      <div>
        <Carousel autoplay>
          <div
            style={{
              borderRadius: "20px",
              border: "none",
            }}
          >
            <img
              src="https://img.freepik.com/free-photo/male-electrician-works-switchboard-with-electrical-connecting-cable_169016-15204.jpg?w=900&t=st=1697161011~exp=1697161611~hmac=c75381af99c608316f593eeba0fd25696dc13c74353eb134fdd08890e647d0f3"
              alt=""
              style={{
                width: "100%",
                opacity: ".9",
                height:"70vh"
              }}
            />
          </div>

          <div>
            <img
              src="https://img.freepik.com/free-photo/hvac-technician-working-capacitor-part-condensing-unit-male-worker-repairman-uniform-repairing-adjusting-conditioning-system-diagnosing-looking-technical-issues_155003-18256.jpg?w=900&t=st=1697162265~exp=1697162865~hmac=c6d9e2f9c4df81af8d6eac581c519ac1ef02493de66f2f87d8a7aa4c88935dad"
              alt=""
              style={{
                width: "100%",
               
                opacity: ".9",
                height:"70vh"
              }}
            />
          </div>

          <div>
            <img
              src="https://img.freepik.com/free-photo/worker-repairing-water-heater_23-2149334230.jpg?w=900&t=st=1697162385~exp=1697162985~hmac=44fda3f326930f23ccee99c0ce36cb4382ce97e46e944f00cd5bdd87fd5a0d19"
              alt=""
              style={{
                width: "100%",
               
                opacity: ".9",
                height:"70vh"
              }}
            />
          </div>

          <div>
            <img
              src="https://img.freepik.com/free-photo/full-shot-people-cleaning-office_23-2150454568.jpg?w=900&t=st=1697162446~exp=1697163046~hmac=93226a7a6f43853d676380b8f9bf2ed023f11f539b3f1390894b7f447c57b901"
              alt=""
              style={{
                width: "100%",
               
                opacity: ".9",
                height:"70vh"
              }}
            />
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default HeroCarousel;
