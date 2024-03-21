import React from "react";
import styled from "styled-components";
import bannerImage from "../../assets/baner.png"; // Importar la imagen banner.png

const BannerHero = () => {
  return (
    <div>
      <HeroSection className="light hero" banner={bannerImage}>
        <div className="heroInner">
          <span>
            <h1>hero section with button</h1>
            <a href="#" className="btn btn-light">
              Explore Now
            </a>
          </span>
        </div>
      </HeroSection>
    </div>
  );
};

export default BannerHero;

const HeroSection = styled.section`
  background: linear-gradient(to bottom, #0a0c2c80 3rem, transparent 10rem),
    url(${props => props.banner}); // Usar la imagen importada como fondo
  background-position: 40% 50%;
  background-size: cover, cover;
  height: 60vh;
  color: #fafafc;
  display: flex;
  align-items: center;  
  justify-content: flex-end;
  
  .heroInner {
    display: flex;
    max-width: 1300px;
    margin: 0 10%;
    justify-content: flex-end;

  }
  span {
    max-width: 50%;
  }
  h1 {
    font-weight: 900;
    font-size: clamp(2rem, 5.5vw, 3.25rem);
    line-height: 1.2;
    margin-bottom: 1.5rem;
  }
  @media (max-width: 576px) {
    background: linear-gradient(to bottom, #0a0c2c80 3rem, transparent),
      url(${props => props.banner}); // Usar la imagen importada como fondo
    background-position:  70% ;
    background-size: cover, cover;
    align-items: flex-start;
    padding-top: 7.5rem;
    height: 75vh;
    max-height: 720px;
  }
`;
