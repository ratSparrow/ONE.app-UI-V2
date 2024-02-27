/* eslint-disable no-unused-vars */
import { Spin } from "antd";
import HeroCarousel from "../../ui/carousel/HeroCarousel";
import Services from "../../components/home/services/HomeServiceCard";
import SubService from "../../components/home/sub-services/HomeServiceModal";
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
import ServiceOrder from "../../components/home/static/ServiceOrder";
import HomeServiceModal from "../../components/home/sub-services/HomeServiceModal";
import { useGetAllServicesQuery } from "../../redux/slice/api/servicesApi";
import Loading from "../../ui/common/Loading";
import HomeServiceCard from "../../components/home/services/HomeServiceCard";

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: services, isLoading } = useGetAllServicesQuery();

  if (isLoading) {
    return <Loading />;
  }

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
      <HeroCarousel />
      <HomeServiceCard showModal={showModal} />
      <HomeServiceModal
        services={services}
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
      <ServiceOrder />
      <AllSubServices />
      <ChooseUs />
      <AllEvents />
      <CallUs />
      <UpcomingService />
      <AllBlogs />
      <Feedback />
    </div>
  );
}
