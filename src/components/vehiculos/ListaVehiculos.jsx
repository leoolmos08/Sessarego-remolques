import {
  CalendarDaysIcon,
  Cog6ToothIcon,
  TruckIcon,
} from "@heroicons/react/20/solid";

import { API_URL } from "../../utils/constants";
import { Link } from "react-router-dom";

export default function ListaVehiculos({ vehiclesPerPage }) {
  const vehicles = vehiclesPerPage();
  const vehiclesSort = vehicles.sort((a, b) => b.priority - a.priority);
  console.log("ordenados", vehiclesSort);
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
          {vehiclesSort.map((vehicle) => (
            <div key={vehicle.id} className="group">
              <Link to={`/vehiculos/${vehicle.id}`}>
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:h-48 xl:w-48">
                  {vehicle.images.length > 0 ? (
                    <img
                      src={`${API_URL}${vehicle.images[0].url}`}
                      alt={vehicle.title}
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                  ) : (
                    <img
                      src={vehicle.imagesUrl[0]}
                      alt={vehicle.title}
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                  )}
                </div>
                <h3 className="mt-4 text-xl font-semibold">{vehicle.title}</h3>
                <p className="mt-1 text-lg font-medium text-green-900">
                  {vehicle.price}
                </p>
                <div className="flex flex-row">
                  <CalendarDaysIcon className="w-5" />
                  <p className="text-sm pl-3 font-light">{vehicle.year}</p>
                </div>
                <div className="flex flex-row">
                  <TruckIcon className="w-5" />
                  <p className="text-sm pl-3 font-light">
                    {vehicle.kilometros} KM
                  </p>
                </div>
                <div className="flex flex-row">
                  <Cog6ToothIcon className="w-5" />
                  <p className="text-sm pl-3 font-light">
                    {vehicle.combustible}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
