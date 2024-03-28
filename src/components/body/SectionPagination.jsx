import React from 'react';
import styled from "styled-components";
import Card from './Card'; // Asegúrate de importar el componente de tarjeta desde la ubicación correcta

import imagen1 from "../../assets/imagen1.jpg";
import imagen2 from "../../assets/imagen2.jpg";
import imagen3 from "../../assets/imagen3.png";
import imagen4 from "../../assets/imagen4.png";

const SectionPagination = () => {
  return (
    <SectionPaginationContainer>
      {/* Primera sección */}
      <Section>
        <img src={imagen1} alt="Imagen 1" />
        <Card
          title="Título 1"
          description="Descripción 1"
        />
      </Section>

      {/* Segunda sección */}
      <Section>
        <Card
          title="Título 2"
          description="Descripción 2"
        />
        <img src={imagen2} alt="Imagen 2" />
      </Section>

      {/* Tercera sección */}
      <Section>
        <img src={imagen3} alt="Imagen 3" />
        <Card
          title="Título 3"
          description="Descripción 3"
        />
      </Section>

      {/* Cuarta sección */}
      <Section>
        <Card
          title="Título 4"
          description="Descripción 4"
        />
        <img src={imagen4} alt="Imagen 4" />
      </Section>
    </SectionPaginationContainer>
  );
};

const SectionPaginationContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 3px;
  grid-row-gap: 3px;
  margin-top: 13px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

const Section = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 5%;
  grid-row-gap: 5%;
  border-bottom: 10px double #ff6550;
  margin-bottom: 10px;
  padding: 5%;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;

    > Card {
      width: 500px;
    }
  
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export default SectionPagination;
