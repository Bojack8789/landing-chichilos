import React from 'react';
import styled from 'styled-components';

const Card = ({ imageSrc, title, description }) => {
  return (
    <DivCardContainer>
      <div className="card">
        <img src={imageSrc} alt="Card" className="card-image" />
        <div className="card-content">
          <h2 className="card-title">{title}</h2>
          <p className="card-description">{description}</p>
        </div>
      </div>
    </DivCardContainer>
  );
};

const DivCardContainer = styled.nav`

z-index: -10; 

  .card {
    display: flex;
    border-radius: 5px;
    box-shadow: 0px 30px 40px -20px hsl(229, 6%, 66%);
    padding: 50px;
    margin: 40px;
    flex-direction: row;
    max-width: 100%;
    height: 300px;
    z-index: -10;
    animation: reveal linear Both;
    animation-timeline: view();
    animation-range: entry 10% cover 30%;
  }

 @keyframes reveal{
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
 } 

  .card img {
    height: auto;
    width: 200px;
    max-width: 100%;
    z-index: -1;
  }

  @media only screen and (max-width: 600px) {
    /* Adjustments for smaller screens */
    .card {
      flex-direction: column;
      padding: 20px;
      z-index: -1;

    }

    .card img {
      width: 100%;
      z-index: -1;

    }
  }
`;

export default Card;