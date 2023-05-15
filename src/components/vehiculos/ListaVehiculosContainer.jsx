import React, { useEffect, useState } from "react";
import { getFilteredVehiclessApi, getProductsApi } from "../../api/product";

import ListaVehiculos from "./ListaVehiculos";
import Loading from "../vehiculos/Loading";
import Pagination from "./Pagination";

const itemsPerPage = 3;
export default function ListaVehiculosContainer({ otherFiltersString }) {
  const [filteredVehicles, setFilteredVehicles] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const totalPages = Math.ceil(filteredVehicles?.length / itemsPerPage);

  //filtros
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
