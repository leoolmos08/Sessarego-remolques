import CarouselComponent from "./Carousel";
import DetalleVehiculo from "./DetalleVehiculo";
import React from "react";

export default function DetalleVehiculoContainer() {
  return (
    <div className="flex flex-col sm:flex-row justify-center">
      <CarouselComponent />
      <DetalleVehiculo />
    </div>
  );
}
