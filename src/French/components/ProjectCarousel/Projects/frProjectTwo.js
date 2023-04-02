//**********************************************//
//**************** // FRENCH // ****************//
//**********************************************//

import React from "react";
import ImageGallery from "./ImageGallery";


const frProjectTwo = () => {
  const galleryImages = [
    {
      img: "https://res.cloudinary.com/dhcrarc6f/image/upload/v1676738134/Ludmer%20Engineering/Project%202/IMG_5123_sgu4v6.jpg",
    },
    {
      img: "https://res.cloudinary.com/dhcrarc6f/image/upload/v1676738134/Ludmer%20Engineering/Project%202/IMG_5141_cfmvg8.jpg",
    },
    {
      img: "https://res.cloudinary.com/dhcrarc6f/image/upload/v1676738133/Ludmer%20Engineering/Project%202/IMG_5042_vxs71f.jpg",
    },
    {
      img: "https://res.cloudinary.com/dhcrarc6f/image/upload/v1676738135/Ludmer%20Engineering/Project%202/IMG_49601_k2hyyw.jpg",
    },
  ];

  return (
    <>
      <ImageGallery galleryImages={galleryImages} />;
    </>
  );
};

export default frProjectTwo;
