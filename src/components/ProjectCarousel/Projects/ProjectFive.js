import React from "react";
import ImageGallery from "./ImageGallery";

// Construction

const ProjectFive = () => {
  const galleryImages = [
  
    {
      img: "https://res.cloudinary.com/dhcrarc6f/image/upload/v1676738131/Ludmer%20Engineering/Project%205/dupre_et_brillon_4803_w3av3b.jpg",
    }
  ];

  return (
    <>
      <ImageGallery galleryImages={galleryImages} />;
    </>
  );
};

export default ProjectFive;
