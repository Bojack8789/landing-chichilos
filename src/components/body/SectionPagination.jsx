import React from 'react';
import styled from "styled-components";

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
          <Content>
            <h2>Título 1</h2>
            <p>Descripción 1</p>
          </Content>
        </Section>
  
        {/* Segunda sección */}
        <SectionReverse>
          <Content>
            <h2>Título 2</h2>
            <p>Descripción 2</p>
          </Content>
          <img src={imagen2} alt="Imagen 2" />
        </SectionReverse>
  
        {/* Tercera sección */}
        <Section>
          <img src={imagen3} alt="Imagen 3" />
          <Content>
            <h2>Título 3</h2>
            <p>Descripción 3</p>
          </Content>
        </Section>
  
        {/* Cuarta sección */}
        <SectionReverse>
          <Content>
            <h2>Título 4</h2>
            <p>Descripción 4</p>
          </Content>
          <img src={imagen4} alt="Imagen 4" />
        </SectionReverse>
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
  `;
  
  const Section = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 3px;
  grid-row-gap: 3px;
  border-bottom: 10px double #ff6550;
  
  margin-bottom: 10px;
  padding-bottom: 10px;
   img {
       width: 100%;
       height: auto;
}
  `;
  
  const SectionReverse = styled(Section)`
    flex-direction: row-reverse;
   
       &:last-child {
          border-bottom: none;
  }
  `;
  
  

  const Content = styled.div`
    text-align: center;
  `;



  
  export default SectionPagination;