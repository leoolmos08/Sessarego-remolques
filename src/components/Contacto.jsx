import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

import React from "react";

export default function Contacto() {
  // falta vista mobile
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-around items-center flex-grow h-screen min-h-[600px] bg-truck">
        <div className="p-10 bg-gray-100 rounded">
          <h1 className="font-sans text-2xl font-bold pb-15 inline">
            Datos de contacto
          </h1>
          <div className="mt-5">
            <div className="flex-row flex">
              <PhoneIcon className="w-6" color="#6b7280" />
              <div className="flex flex-col pl-3">
                <h3 className="inline text-sm font-light">Teléfono</h3>
                <h5 className="inline text-lg font-medium">351351351</h5>
              </div>
            </div>
            <div className="flex-row flex">
              <MapPinIcon className="w-6" color="#6b7280" />
              <div className="flex flex-col pl-3">
                <h3 className="inline text-sm font-light">Dirección</h3>
                <h5 className="inline text-lg font-medium">Ruta 19 km 33</h5>
              </div>
            </div>
            <div className="flex-row flex">
              <EnvelopeIcon className="w-6" color="#6b7280" />
              <div className="flex flex-col pl-3">
                <h3 className="inline text-sm font-light">Email</h3>
                <h5 className="inline text-lg font-medium">
                  sessarego@gmail.com
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="font-sans text-2xl font-bold pb-10 inline mb-10">
            Mapa
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.5515625210082!2d-64.14229542359058!3d-31.398926295408902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94329755e0a004db%3A0x3fc6634247b07f76!2sSessarego%20Remolques!5e0!3m2!1ses!2sar!4v1682358510532!5m2!1ses!2sar"
            className="w-[350px] h-[450px] sm:w-[600px]"
            allowfullscreen="false"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
}
