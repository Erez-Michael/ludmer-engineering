import React from "react";
import ImageGallery from "./ImageGallery";

// Retrofiting

const ProjectOne = () => {
  const galleryImages = [
    {
      img: "https://res.cloudinary.com/dhcrarc6f/image/upload/v1676738137/Ludmer%20Engineering/Project%201/IMG_5041_y3fvrc.jpg",
    },
    {
      img: "https://res.cloudinary.com/dhcrarc6f/image/upload/v1676738137/Ludmer%20Engineering/Project%201/IMG_4962_wouicr.jpg",
    },
    {
      img: "https://res.cloudinary.com/dhcrarc6f/image/upload/v1676738133/Ludmer%20Engineering/Project%201/IMG_5040_vyluwb.jpg",
    },
    {
      img: "https://res.cloudinary.com/dhcrarc6f/image/upload/v1676738132/Ludmer%20Engineering/Project%201/IMG_4970_cdpxfx.jpg",
    },
  ];

  return <ImageGallery galleryImages={galleryImages} />;
};

export default ProjectOne;
