//**********************************************//
//**************** // FRENCH // ****************//
//**********************************************//

export const data = [
  //Project One
  {
    title: "Transformation de bâtiments et sous-oeuvre",
    description: "",
    image:
      "https://res.cloudinary.com/dhcrarc6f/image/upload/v1676738137/Ludmer%20Engineering/Project%201/IMG_5041_y3fvrc.jpg",
    navigateTo: "/Transformation_de_bâtiments_et_sous-oeuvre",
  },

  //Project Two

  {
    title: "Stabilité de pente",
    description: "",
    image:
      "https://res.cloudinary.com/dhcrarc6f/image/upload/v1676738134/Ludmer%20Engineering/Project%202/IMG_5123_sgu4v6.jpg",
    navigateTo: "/Géotechnique",
  },
  
  //Project three

  {
    title: "Soutènement des terres",
    description: "",
    image:
      "https://res.cloudinary.com/dhcrarc6f/image/upload/v1693257378/DJI_0221_rih3sc.jpg",
      navigateTo: "/Soutènement_des_terres",
    },
    //Project Four
    
    {
      title: "Mécanique des roches",
      description: "",
      image:
      "https://res.cloudinary.com/dhcrarc6f/image/upload/v1676738134/Ludmer%20Engineering/Project%204/IMG_5241_ufqieb.jpg",
      navigateTo: "/Mécanique_des_roches",
  },

];

export const sliderSettings = {
  arrows: false,
  slidesToShow: 3,
  focusOnselect: false,
  accessability: false,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 2,
      },
    },

    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
