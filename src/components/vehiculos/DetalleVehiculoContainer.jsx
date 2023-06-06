import React, { useEffect, useState } from "react";

import CarouselComponent from "./Carousel";
import DetalleVehiculo from "./DetalleVehiculo";
import LoadingCarousel from "./LoadingCarousel";
import { getProductApi } from "../../api/product";
import { useParams } from "react-router-dom";

export default function DetalleVehiculoContainer() {
  const [vehicle, setVehicle] = useState(null);
  const { idVehicle } = useParams();

  useEffect(() => {
    (async () => {
      const response = await getProductApi(idVehicle);
      const {
        title,
        images,
        imagesUrl,
        price,
        marca,
        modelo,
        trucktype,
        kilometros,
        combustible,
        year,
        transmision,
        description,
      } = response;
      let item = {
        title,
        images,
        imagesUrl,
        price,
        marca,
        modelo,
        tipo: trucktype,
        kilometros,
        combustible,
        year,
        transmision,
        description,
      };
      setVehicle(item);
    })();
  }, [idVehicle]);
  return (
    <div className="flex flex-col sm:flex-row justify-center">
      {vehicle !== null ? (
        <>
          <CarouselComponent vehicle={vehicle} />
          <DetalleVehiculo vehicle={vehicle} />
        </>
      ) : (
        <LoadingCarousel />
      )}
    </div>
  );
}
