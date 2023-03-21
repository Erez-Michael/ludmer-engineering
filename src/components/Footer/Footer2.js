import React from "react";
import styled from "styled-components";

const Footer2 = () => {
  return (
    <Container>
      <div>
        <p> © Ludmer Engineering | 2023 | All rights reserved.</p>
      </div>
    </Container>
  );
};

const Container = styled.div`

  border-top: solid #435f7b 0.1rem;
  width: 100%;
  padding: 40px 0;
  background-color: #071c2f;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    font-weight: 600;
    border-top: #435f7b solid 1px;
    margin: 20px 20%;
  }
  p {
    color: whitesmoke;
    background-color: #071c2f;
    margin-top: -10px;
    z-index: 10;
    padding: 0 15px;
  }
  @media screen and (max-width: 1024px) {
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
  }
  @media screen and (max-width: 768px) {
}
`;
export default Footer2;
