/* eslint-disable react/prop-types */
import { useState } from "react";
import { format } from "date-fns";
import "../../pages/css/ServiceDetails.css"
import { Button, Card, Col, Row, Typography } from "antd";
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  RightOutlined,
} from "@ant-design/icons";
import SubServiceModal from "../modal/SubServiceModal";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slice/features/cart/cartSlice";
import toast from "react-hot-toast";
import { addToDb } from "../../services/fakedb";

const DetailsComponent = ({ detailsService, packages }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const originalDateStr = detailsService.createdAt;
  const date = new Date(originalDateStr);
  const dispatch = useDispatch();

  const formattedDate = format(date, "yyyy-MM-dd");

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleAddToCart = (item) => {
    console.log("handleAddToCart",item);
    dispatch(addToCart(item));
    addToDb(item._id);
    toast.success("Added Product to the cart");
  };
  return (
    <div
      className="mainDetails"
      style={{ padding: "0 16px", marginTop: "32px" }}
    >
      <Row gutter={16} style={{ padding: "24px 0px" }} justify="space-between">
        <Col className="gutter-row" span={12}>
          <Typography
            style={{
              fontFamily: "serif",
              color: "blueviolet",
              fontSize: 32,
              paddingBottom: 4,
              marginTop: 16,
              fontWeight: 600,
            }}
          >
            {detailsService.name}
          </Typography>
          {/* END Title */}
          <Typography
            style={{
              fontFamily: "serif",
              fontWeight: 400,
              fontSize: 18,
              paddingBottom: 16,
              color: "blueviolet",
              marginBottom: 16,
            }}
          >
            Category by {detailsService.serviceId.name}
          </Typography>{" "}
          {/* END Category */}
          <Typography style={{ fontFamily: "serif", paddingBottom: 8 }}>
            <span
              style={{
                boxShadow:
                  "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
                padding: 10,
                borderRadius: 6,
                color: "blueviolet",
              }}
            >
              Warranty {detailsService.warrantyHour} years
            </span>
            <span
              style={{
                boxShadow:
                  "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
                padding: 10,
                borderRadius: 6,
                marginLeft: 4,
                color: "blueviolet",
              }}
            >
              No Discount
            </span>
          </Typography>
          {/* END Warranty and Discount  */}
          <Typography style={{ fontFamily: "serif", marginTop: "16px" }}>
            <span
              style={{
                boxShadow:
                  "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
                padding: 10,
                borderRadius: 6,
                color: "blueviolet",
              }}
            >
              Total Rating {detailsService.totalRating}
            </span>
            <span
              style={{
                boxShadow:
                  "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
                padding: 10,
                borderRadius: 6,
                color: "blueviolet",
                marginLeft: 4,
              }}
            >
              Since {formattedDate}
            </span>
          </Typography>
          {/* END Warranty and Discount  */}
        </Col>
        <Col className="gutter-row" span={12}>
          <Card
            style={{
              maxWidth: 400,
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              marginTop: "24px",
            }}
          >
            {packages?.data?.map((item) => (
              <div style={{}} key={item._id}>
                <Button
                  style={{ width: "100%" }}
                  onClick={showModal}
                  className="cardModalBtn"
                >
                  <span style={{ color: "blueviolet" }}>
                    {item.name.slice(0, 25)}..
                  </span>
                  <span style={{ color: "blueviolet", fontWeight: 700 }}>
                    <RightOutlined />
                  </span>
                </Button>
                <SubServiceModal
                  isModalOpen={isModalOpen}
                  handleOk={handleOk}
                  handleCancel={handleCancel}
                  packages={packages}
                  handleAddToCart={handleAddToCart}
                />
              </div>
            ))}
          </Card>
        </Col>
      </Row>
      <Row gutter={16} style={{ padding: "20px 0px" }}>
        <Col className="gutter-row" span={12}>
          <div>
            <span
              style={{
                backgroundColor: "blueviolet",
                padding: 10,
                borderRadius: 6,
                display: "inline-block",
                color: "white",
                fontFamily: "serif",
                fontSize: 16,
                marginTop: 24,
                marginBottom: "-16px",
              }}
            >
              Description
            </span>
            <Typography
              style={{
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                padding: 12,
                borderRadius: 8,
              }}
            >
              <br />
              <span
                style={{
                  fontFamily: "serif",
                }}
              >
                {detailsService.description}
              </span>
            </Typography>
          </div>
          {/* END Description  */}
        </Col>
        <Col className="gutter-row" span={12}>
          <div>
            <span
              style={{
                backgroundColor: "blueviolet",
                padding: 10,
                borderRadius: 6,
                display: "inline-block",
                color: "white",
                fontFamily: "serif",
                fontSize: 16,
                marginTop: 24,
                marginBottom: "-18px",
              }}
            >
              Features
            </span>
            <Typography
              style={{
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                padding: 12,
                borderRadius: 8,
              }}
            >
              <br />

              {detailsService.features.map((feature, index) => (
                <span
                  style={{ display: "block", fontFamily: "serif" }}
                  key={index}
                >
                  <CheckCircleOutlined
                    style={{ color: "blueviolet", marginRight: 8 }}
                  />
                  {feature}
                </span>
              ))}
            </Typography>
          </div>
          {/* END Features  */}
        </Col>
      </Row>
      <Row gutter={16} style={{ padding: "20px 0px" }}>
        <Col className="gutter-row" span={12}>
          <div>
            <span
              style={{
                backgroundColor: "blueviolet",
                padding: 10,
                borderRadius: 6,
                display: "inline-block",
                color: "white",
                fontFamily: "serif",
                fontSize: 16,
                marginTop: 24,
                marginBottom: "-18px",
              }}
            >
              Included
            </span>
            <Typography
              style={{
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                padding: 12,
                borderRadius: 8,
              }}
            >
              <br />

              {detailsService.includedOption.map((feature, index) => (
                <span
                  style={{ display: "block", fontFamily: "serif" }}
                  key={index}
                >
                  <CheckCircleOutlined
                    style={{ color: "blueviolet", marginRight: 8 }}
                  />
                  {feature}
                </span>
              ))}
            </Typography>
          </div>{" "}
          {/* END Included  */}
        </Col>
        <Col className="gutter-row" span={12}>
          <div>
            <span
              style={{
                backgroundColor: "blueviolet",
                padding: 10,
                borderRadius: 6,
                display: "inline-block",
                color: "white",
                fontFamily: "serif",
                fontSize: 16,
                marginTop: 24,
                marginBottom: "-18px",
              }}
            >
              Excluded
            </span>
            <Typography
              style={{
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                padding: 12,
                borderRadius: 8,
              }}
            >
              <br />

              {detailsService.excludedOption.map((feature, index) => (
                <span
                  style={{ display: "block", fontFamily: "serif" }}
                  key={index}
                >
                  <CloseCircleOutlined
                    style={{ color: "blueviolet", marginRight: 8 }}
                  />

                  {feature}
                </span>
              ))}
            </Typography>
          </div>{" "}
          {/* END Excluded Part  */}
        </Col>
      </Row>
      <div>
        <span
          style={{
            backgroundColor: "blueviolet",
            padding: 10,
            borderRadius: 6,
            display: "inline-block",
            color: "white",
            fontFamily: "serif",
            fontSize: 16,
            marginTop: 24,
            marginBottom: "-18px",
          }}
        >
          Terms And Conditions
        </span>
        <div
          style={{
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            padding: 12,
            borderRadius: 8,
          }}
        >
          <br />

          {detailsService.termsCondition.map((feature, index) => (
            <Typography key={index}>
              <span
                style={{
                  fontSize: 18,
                  fontWeight: 600,
                  color: "blueviolet",
                  fontFamily: "serif",
                }}
              >
                {feature?.title}:{" "}
              </span>
              <span
                style={{
                  fontSize: 15,
                  fontWeight: 400,

                  fontFamily: "serif",
                }}
              >
                {feature?.details}
              </span>
            </Typography>
          ))}
        </div>
      </div>{" "}
      {/* END Terms and condition  */}
    </div>
  );
};

export default DetailsComponent;
