import React from 'react'
import CarouselComponent from './Carousel'
import DetalleVehiculo from './DetalleVehiculo'

export default function DetalleVehiculoContainer() {
  return (
    <div className='h-screen flex flex-col sm:flex-row justify-center'>
      <CarouselComponent />
      <DetalleVehiculo />
    </div>
  )
}
