import React, { useEffect, useState } from "react";
import {
  getOthersFiltersApi,
  getProductsApi,
  getVehicleTypeApi,
} from "../../api/product";

import ListaVehiculos from "./ListaVehiculos";
import Loading from "../vehiculos/Loading";

export default function ListaVehiculosContainer({
  filter,
  otherFiltersString,
}) {
  const [vehicles, setVehicles] = useState(null);
  //primer filtro
  useEffect(() => {
    (async () => {
      const result = await getVehicleTypeApi(filter);
      const response = await getProductsApi();
      filter == "todos" ? setVehicles(response) : setVehicles(result);
      const otherFiltersResult = await getOthersFiltersApi(otherFiltersString);
      otherFiltersString !== [] && setVehicles(otherFiltersResult);
    })();
  }, [filter, otherFiltersString]);

  return vehicles === null ? (
    <Loading />
  ) : (
    <ListaVehiculos vehicles={vehicles} />
  );
}
