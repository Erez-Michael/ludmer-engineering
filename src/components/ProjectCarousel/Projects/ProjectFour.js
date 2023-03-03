import React from "react";
import ImageGallery from "./ImageGallery";

// Geological consolidation

const ProjectFour = () => {
  const galleryImages = [
    {
      img: "https://res.cloudinary.com/dhcrarc6f/image/upload/v1676738135/Ludmer%20Engineering/Project%204/IMG_5248_doymhu.jpg",
    },
    {
      img: "https://res.cloudinary.com/dhcrarc6f/image/upload/v1676738134/Ludmer%20Engineering/Project%204/IMG_5241_ufqieb.jpg",
    }
  ];

  return (
    <>
      <ImageGallery galleryImages={galleryImages} />;
    </>
  );
};

export default ProjectFour;
