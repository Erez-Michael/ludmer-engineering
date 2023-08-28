//**********************************************//
//**************** // FRENCH // ****************//
//**********************************************//

// Mécanique des roches  //

import React from "react";
import ImageGallery from "./ImageGallery";
import NavbarFr from "../../../components/Navbar/NavbarFr";



const ProjectFourFr = () => {
  const galleryImages = [
    {
      img: "https://res.cloudinary.com/dhcrarc6f/image/upload/v1676738135/Ludmer%20Engineering/Project%204/IMG_5248_doymhu.jpg",
    },
    {
      img: "https://res.cloudinary.com/dhcrarc6f/image/upload/v1676738134/Ludmer%20Engineering/Project%204/IMG_5241_ufqieb.jpg",
    },
  ];

  return (
    <>
    <NavbarFr />
    <ImageGallery galleryImages={galleryImages} />;
  </>
    )
};

export default ProjectFourFr;
