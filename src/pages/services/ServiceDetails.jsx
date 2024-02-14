/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBaseUrl } from "../../helpers/config/envConfig";
import { useGetSingleSubCategoryServiceQuery } from "../../redux/slice/api/subCategorySlice";
import Loading from "../../ui/common/Loading";
import "../css/ServiceDetails.css";

import DetailsComponent from "../../components/services/DetailsComponent";
import HeroServiceDetails from "../../components/services/HeroServiceDetails";

const ServiceDetails = () => {
  const { id } = useParams();
  console.log("ServiceDetails", id);
  const [packages, setPackages] = useState([]);

  const [loading, setLoading] = useState(false);

  const url = `${getBaseUrl()}/api/v1/packages/subServiceId/${id}`;

  useEffect(() => {
    setLoading(true);
    if (id) {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setPackages(data);
          setLoading(false);
        });
    }
  }, [id]);

  const { data, isLoading } = useGetSingleSubCategoryServiceQuery(id);
  if (isLoading || loading) {
    return <Loading />;
  }

  const detailsService = data?.data;

  return (
    <div className="mainContainer">
      <HeroServiceDetails detailsService={detailsService} />
      <DetailsComponent detailsService={detailsService} packages={packages} />
    </div>
  );
};

export default ServiceDetails;
