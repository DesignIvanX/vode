import { useMemo } from "react";
import api from "../api/products.json";

const useGetFilterData = () => {
  const filteredData = useMemo(
    () =>
      api.data.filter((item) => {
        return item;
      }),
    []
  );
  return { filteredData };
};

export default useGetFilterData;
