import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

// Estilo para el botón flotante
const FloatingButton = styled.div`
  position: fixed;
  bottom: 20px; /* Cambia esta propiedad para ajustar la posición vertical */
  right: 20px; /* Cambia esta propiedad para ajustar la posición horizontal */
  width: 60px;
  height: 60px;
  background-color: #25d366; /* Color de fondo de WhatsApp */
  color: #fff; /* Color del ícono */
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  z-index: 1000; /* Asegura que esté por encima de otros elementos */

  &:hover {
    background-color: #128c7e; /* Cambia el color de fondo al pasar el mouse */
  }
  
  .icon {
    font-size: 2rem; /* Tamaño del icono */
    }

  `;

const WhatsAppFloatingButton = () => {
  const handleClick = () => {
    // Acción a realizar cuando se hace clic en el botón
    console.log('Botón flotante de WhatsApp clickeado');
  };

  return (
    <FloatingButton onClick={handleClick}>
      <FontAwesomeIcon icon={faWhatsapp}   className="icon" />
    </FloatingButton>
  );
};

export default WhatsAppFloatingButton;
