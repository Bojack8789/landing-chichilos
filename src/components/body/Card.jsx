import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  margin: 0;
  padding: 0;
  background-color: var(--azuulgris);
  opacity: 0.7;
  border: solid 1px black;
  
  @media (max-width: 768px) {
    height: 100%;
    margin: 0;
  }
`;

const Title = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 5px;
  text-align: center;
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  margin: 0;
  text-align: center;
`;

const Card = ({ title, description }) => {
  return (
    <CardContainer>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </CardContainer>
  );
};

export default Card;
