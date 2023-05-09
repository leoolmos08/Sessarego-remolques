import BotonWhatsapp from "../BotonWhatsapp";
import React from "react";

//hacer un map a futuro
export default function DetalleVehiculo() {
  return (
    <div className="sm:pt-24 pt-7 pb-10 sm:pl-10 h-auto min-h-[900px]">
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-gray-900">
          NOMBRE VEHICULO
        </h3>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-3 max-sm:py-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Marca
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              IVECO
            </dd>
          </div>
          <div className="px-4 py-3 max-sm:py-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Modelo
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              CURSOR
            </dd>
          </div>
          <div className="px-4 py-3 max-sm:py-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Tipo
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              Tractor
            </dd>
          </div>
          <div className="px-4 py-3 max-sm:py-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Kilómetros
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              80.000 KM
            </dd>
          </div>
          <div className="px-4 py-3 max-sm:py-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Combustible
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              GNC
            </dd>
          </div>
          <div className="px-4 py-3 max-sm:py-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Año</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              2022
            </dd>
          </div>
          <div className="px-4 py-3 max-sm:py-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Transmisión
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              AUTOMÁTICO
            </dd>
          </div>
          <div className="px-4 py-3 max-sm:py-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Descripción
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 max-w-[200px] max-sm:max-w-[350px] ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              minus a consequatur consequuntur voluptatum possimus sequi,
              officiis nobis repellat libero explicabo eius omnis totam quasi
              dignissimos ad! Natus, cum sunt!
            </dd>
          </div>
        </dl>
      </div>
      <BotonWhatsapp />
    </div>
  );
}
