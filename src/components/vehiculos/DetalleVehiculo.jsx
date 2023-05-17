import BotonWhatsapp from "../BotonWhatsapp";
import React from "react";

//hacer un map a futuro
export default function DetalleVehiculo({ vehicle }) {
  return (
    <div className="sm:pt-24 pt-7 pb-10 sm:pl-10 h-auto min-h-[900px]">
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-gray-900">
          {vehicle.title}
        </h3>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-3 max-sm:py-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Marca
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {vehicle.marca}
            </dd>
          </div>
          <div className="px-4 py-3 max-sm:py-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Modelo
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {vehicle.modelo}
            </dd>
          </div>
          <div className="px-4 py-3 max-sm:py-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Tipo
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {vehicle.tipo}
            </dd>
          </div>
          <div className="px-4 py-3 max-sm:py-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Kilómetros
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {vehicle.kilometros} KM
            </dd>
          </div>
          <div className="px-4 py-3 max-sm:py-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Combustible
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {vehicle.combustible}
            </dd>
          </div>
          <div className="px-4 py-3 max-sm:py-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Año</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {vehicle.year}
            </dd>
          </div>
          <div className="px-4 py-3 max-sm:py-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Transmisión
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {vehicle.transmision}
            </dd>
          </div>
          <div className="px-4 py-3 max-sm:py-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Descripción
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 max-w-[200px] max-sm:max-w-[350px] ">
              {vehicle.description}
            </dd>
          </div>
        </dl>
      </div>
      <BotonWhatsapp />
    </div>
  );
}
