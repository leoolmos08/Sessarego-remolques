import React from "react";

export default function BotonWhatsapp() {
  return (
    <a href="https://api.whatsapp.com/send?phone=543515609494&text=Hola%20Sessarego%20Remolques">
      <div className="mt-10 py-2 rounded-lg flex flex-row items-center justify-around shadow-md  shadow-gray-300 max-[640px]:bg-green-500 hover:bg-green-500 hover:shadow-green-500">
        <img
          src="https://www.nuevoceibo.com.ar/whatsapp.png"
          alt="whatsapp"
          className="h-8"
        />
        <p className="hover:text-white">CONSULTAR POR WHATSAPP</p>
      </div>
    </a>
  );
}
