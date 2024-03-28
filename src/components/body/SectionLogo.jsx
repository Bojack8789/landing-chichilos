import React from 'react';
import '../../index.css';
import styled from 'styled-components';
import ChichilosLogo from '../../assets/ChichilosLogo.png'



const Parent = styled.div`

padding: 10%;
height: 100%;


  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0;
  grid-row-gap: 12px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
    grid-row-gap: 100px;
  }
`;

const Div1 = styled.div`
grid-area: 1 / 1 / 6 / 3;
height: auto;


display: flex;
align-items: center;
justify-content: center;

  @media (max-width: 768px) {
    grid-area: 1 / 1 / 3 / 2;
  }
`;

const Div2 = styled.div`
grid-area: 1 / 3 / 6 / 6;
height: auto;
display: flex;
align-items: center;
justify-content: center;

  @media (max-width: 768px) {
    grid-area: 3 / 1 / 5 / 2;
    margin: 70px 0px 30px 0px;
  }
`;

const Div3 = styled.div`
margin: 13px;
padding: 13px;
background-color:var(--azuulgris);
opacity: 0.7;

@media (max-width: 768px) {
  
  margin: 0;
}

`;

const Image = styled.img`
  width: auto;
  height: 130%;
  max-height: 500px;
  min-height: 200px;
  object-fit: contain;
`;

const Text = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  margin: 0;
  text-align: center; /* Centra el texto horizontalmente */

`;

const SectionLogo = () => {
  return (
    <Parent>
      <Div1>
        <Image src={ChichilosLogo} alt="Logo" />
      </Div1>
      <Div2>
        <Div3>
          <Text>
          Chichilos es un emprendimiento mendocino comprometido con la moda sostenible y el cuidado del medio ambiente. Nos especializamos en la creación de prendas de vestir, accesorios y juguetes ecológicos, diseñados con amor y elaborados con materiales reciclados de alta calidad. Nuestro objetivo es ofrecer productos únicos y con estilo, mientras contribuimos a reducir el impacto ambiental de la industria textil. En Chichilos, combinamos la creatividad con la conciencia ecológica para ofrecerte una experiencia de compra única y consciente.
          </Text>
        </Div3>
      </Div2>

    </Parent>
  );
};

export default SectionLogo;
