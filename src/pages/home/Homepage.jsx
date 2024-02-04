import { Spin } from "antd";
import HeroCarousel from "../../ui/carousel/HeroCarousel";


export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data, isLoading: serviceLoading } = useGetAllServicesQuery();
  const { data: subService, isLoading: subServiceLoading } =
    useGetAllSubServicesQuery();
  const { data: events, isLoading: eventLoading } = useGetAllEventsQuery();
  if (serviceLoading && subServiceLoading) {
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
  const services = data;
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
      {serviceLoading | subServiceLoading | event ? (
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
          <Services services={services} showModal={showModal} />
          <SubCategoryService
            isModalOpen={isModalOpen}
            handleOk={handleOk}
            handleCancel={handleCancel}
            services={services}
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


