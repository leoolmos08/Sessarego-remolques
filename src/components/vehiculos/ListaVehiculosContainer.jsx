import React, { useEffect, useState } from "react";

import ListaVehiculos from "./ListaVehiculos";
import Loading from "../vehiculos/Loading";
import { getProductsApi } from "../../api/product";

export default function ListaVehiculosContainer() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await getProductsApi();
      setProducts(response);
    })();
  }, []);

  console.log(products);
  return products === null ? (
    <Loading />
  ) : (
    <ListaVehiculos products={products} />
  );
}
