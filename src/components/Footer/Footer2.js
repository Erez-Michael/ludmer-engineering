import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Conatiner>
      <div>
        <p> © Ludmer Engineering | All rights reserved.</p>
      </div>
    </Conatiner>
  );
};

const Conatiner = styled.div`
  width: 100%;
  padding: 50px 0;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    270deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(245, 222, 179, 1) 50%,
    rgba(255, 255, 255, 1) 100%
  );

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    font-weight: 600;
  }
  @media screen and (max-width: 767px) {
    font-size: x-small;
  }
`;
export default Footer;
