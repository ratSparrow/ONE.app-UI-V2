/* eslint-disable no-unused-vars */
import { Spin } from "antd";
import HeroCarousel from "../../ui/carousel/HeroCarousel";
import Services from "../../components/home/services/Services";
import SubService from "../../components/home/sub-services/SubServices";
import { useState } from "react";
import { useGetAllSubServicesQuery } from "../../redux/slice/api/subServiceApi";
import { useGetAllEventsQuery } from "../../redux/slice/api/eventApi";
import AllSubServices from "../../components/home/sub-services/AllSubService";
import ChooseUs from "../static/ChooseUs";
import AllEvents from "../events/AllEvents";
import CallUs from "../static/CallUs";
import UpcomingService from "../../components/home/upcoming-service/UpcomingService";
import AllBlogs from "../blogs/AllBlogs";
import Feedback from "../../components/home/feedback/Feedback";


export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data: subService, isLoading: subServiceLoading } =
    useGetAllSubServicesQuery();
  const { data: events, isLoading: eventLoading } = useGetAllEventsQuery();
  if (subServiceLoading) {
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

  const subServices = subService?.data;
  const event = events?.data;

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      {  subServiceLoading | event ? (
        <Spin
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        />
      ) : (
        <>
          <HeroCarousel />
          <Services  showModal={showModal} />
          <SubService
            isModalOpen={isModalOpen}
            handleOk={handleOk}
            handleCancel={handleCancel}
            
          />
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
          <img
            src="https://img.freepik.com/premium-photo/people-representing-diverse-professions-with-tools-holding-big-blank-banner-isolated-white-background_394555-662.jpg?w=1380"
            alt=""
            width="100%"
          />
          <AllSubServices subServices={subServices} />

          <ChooseUs />
          <AllEvents event={event} />
          <CallUs />
          <UpcomingService />
          <AllBlogs />
          <Feedback />
        </>
      )}
    </div>
  );
}


