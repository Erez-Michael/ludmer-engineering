//**********************************************//
//**************** // FRENCH // ****************//
//**********************************************//

// Soutènement des terres //

import React from "react";
import ImageGallery from "./ImageGallery";
import NavbarFr from "../../Navbar/NavbarFr";



const ProjectThreeFr = () => {

  const galleryImages = [
    {
      img: "https://res.cloudinary.com/dhcrarc6f/image/upload/v1693257378/DJI_0221_rih3sc.jpg",
    },
    {
      img: "https://res.cloudinary.com/dhcrarc6f/image/upload/v1680631495/Ludmer%20Engineering/Project%205/0_putrf3.jpg",
    },
    {
      img: "https://res.cloudinary.com/dhcrarc6f/image/upload/v1676738131/Ludmer%20Engineering/Project%205/dupre_et_brillon_4803_w3av3b.jpg",
    },
    {
      img: "https://res.cloudinary.com/dhcrarc6f/image/upload/v1680631487/Ludmer%20Engineering/Project%205/0_noiyyz.jpg",
    },
    {
      img: "https://res.cloudinary.com/dhcrarc6f/image/upload/v1680631481/Ludmer%20Engineering/Project%205/0_wf1f63.jpg",
    },
  ];

  return (
    <>
      <NavbarFr />
      <ImageGallery galleryImages={galleryImages} />;
    </>
  );
};

export default ProjectThreeFr;
