import { useState } from "react";
import styled from "styled-components";
import "./ImageGallery.css";
import {FiChevronsLeft, FiChevronsRight, FiXCircle} from "react-icons/fi"

const ImageGallery = ({ galleryImages }) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  // Close Modal
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  // Previous Image
  const prevSlide = () => {
    slideNumber === 0
      ? setSlideNumber(galleryImages.length - 1)
      : setSlideNumber(slideNumber - 1);
  };

  // Next Image
  const nextSlide = () => {
    slideNumber + 1 === galleryImages.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1);
  };
  return (
    <>
      <Wrapper>
        <div>
          {openModal && (
            <div className="sliderWrap">
              <FiXCircle
                size={40}
                className="btnClose"
                onClick={handleCloseModal}
              />
              <FiChevronsLeft
                size={40}
                className="btnPrev"
                onClick={prevSlide}
              />
              <FiChevronsRight
                size={40}
                className="btnNext"
                onClick={nextSlide}
              />
              <div className="fullScreenImage">
                <img src={galleryImages[slideNumber].img} alt="" />
              </div>
            </div>
          )}

          <div className="galleryWrap">
            {galleryImages &&
              galleryImages.map((slide, index) => {
                return (
                  <div
                    className="single"
                    key={index}
                    onClick={() => handleOpenModal(index)}
                  >
                    <img src={slide.img} alt="" />
                  </div>
                );
              })}
          </div>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  animation: fadeInAnimation ease 2s;
  animation-iteration-count: 1;
  animation-fill-mode: backwards;

  @keyframes fadeInAnimation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
export default ImageGallery;
