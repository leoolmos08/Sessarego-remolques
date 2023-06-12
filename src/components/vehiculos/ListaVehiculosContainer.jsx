import React, { useEffect, useState } from "react";
import { getFilteredVehiclessApi, getProductsApi } from "../../api/product";

import ListaVehiculos from "./ListaVehiculos";
import Loading from "../vehiculos/Loading";
import Pagination from "./Pagination";

export default function ListaVehiculosContainer({
  otherFiltersString,
  itemsPerPage,
}) {
  const [filteredVehicles, setFilteredVehicles] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const totalPages = Math.ceil(filteredVehicles?.length / itemsPerPage);
  useEffect(() => {
    (async () => {
      const response = await getProductsApi();
      const FilteredVehicles = await getFilteredVehiclessApi(
        otherFiltersString
      );
      otherFiltersString !== []
        ? setFilteredVehicles(FilteredVehicles)
        : setFilteredVehicles(response);
    })();
    setCurrentPage(1);
  }, [otherFiltersString]);

  //paginacion
  const vehiclesPerPage = () => {
    return filteredVehicles.slice(startIndex, endIndex);
  };

  return filteredVehicles === null ? (
    <Loading />
  ) : (
    <>
      <ListaVehiculos vehiclesPerPage={vehiclesPerPage} />
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </>
  );
}
