import React from "react";
import PixabayContext from "../context/PixabayContext";
import { useContext } from "react";

const Images = () => {
  const { imageData } = useContext(PixabayContext);

  return (
    <div className="container my-5">
      <div className="flex">
        {imageData.map((image) => (
          <div key={image.id}>
            <div className="item">
              <img src={image.largeImageURL} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Images;
