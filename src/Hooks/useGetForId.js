import { useState, useEffect } from "react";
import useGetFilterData from "./useGetFilterData";

const useGetForId = (id) => {
  const [data, setData] = useState({
    id: "",
    title: "",
    image: "",
    details: [],
  });

  const { filteredData } = useGetFilterData();

  useEffect(() => {
    filteredData.map((item) => {
      if (item.id == id) {
        setData(item);
      }
    });
  }, [id]);

  return { data };
};

export default useGetForId;
