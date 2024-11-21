import React from "react";
import PixabayContext from "./PixabayContext";
import { useEffect } from "react";

const PixabayState = (props) => {
  const api_key = "47209479-bbcd63326caef2d31c2a351d9";
  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch(
        `https://pixabay.com/api/?key=${api_key}&q=london&image_type=photo&pretty=true`
      );
      const data = await api.json();
      console.log(data)
    };
    fetchData();
  }, []);

  return (
    <PixabayContext.Provider value={{}}>
      {props.children}
    </PixabayContext.Provider>
  );
};

export default PixabayState;
