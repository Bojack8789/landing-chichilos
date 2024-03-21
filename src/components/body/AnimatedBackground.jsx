import React from 'react';
import styled, { keyframes } from 'styled-components';
import '../../index.css'

// Keyframes para la animación
const animate = keyframes`
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
    border-radius: 0;
  }
  100% {
    transform: translateY(-1000px) rotate(720deg);
    opacity: 0;
    border-radius: 50%;
  }
`;

// Componentes estilizados con styled-components
const BackgroundContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: -20;
`;

const Context = styled.div`
  text-align: center;
  color: red;
  font-size: 50px;
`;

const Area = styled.div`
  background: white;
  background: -webkit-linear-gradient(to left, red, gray);
  width: 100%;
  height: 100%;
  position: relative;
`;

const Circles = styled.ul`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 0;
  margin: 0;
`;

const Circle = styled.li`
  position: absolute;
  display: block;
  list-style: none;
  bottom: -150px;
  background: red;
  animation: ${animate} 25s linear infinite;

  &:nth-child(1) {
    left: 25%;
    width: 80px;
    height: 80px;
    animation-delay: 0s;
  }

  &:nth-child(2) {
    left: 10%;
    width: 20px;
    height: 20px;
    animation-delay: 2s;
    animation-duration: 12s;
    background: var(--azuulgris);

  }

  &:nth-child(3) {
    left: 70%;
    width: 20px;
    height: 20px;
    animation-delay: 4s;
  }

  &:nth-child(4) {
    left: 40%;
    width: 60px;
    height: 60px;
    animation-delay: 0s;
    animation-duration: 18s;
  }

  &:nth-child(5) {
    left: 65%;
    width: 20px;
    height: 20px;
    animation-delay: 0s;
    background: var(--azuulgris);

  }

  &:nth-child(6) {
    left: 75%;
    width: 110px;
    height: 110px;
    animation-delay: 3s;
    background: var(--rojo);
  }

  &:nth-child(7) {
    left: 35%;
    width: 150px;
    height: 150px;
    animation-delay: 7s;
    background: var(--rojo);

  }

  &:nth-child(8) {
    left: 50%;
    width: 25px;
    height: 25px;
    animation-delay: 15s;
    animation-duration: 45s;
  }

  &:nth-child(9) {
    left: 20%;
    width: 15px;
    height: 15px;
    animation-delay: 2s;
    animation-duration: 35s;
    background: var(--azuulgris);

  }

  &:nth-child(10) {
    left: 85%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 11s;
    background: var(--azuulgris);
  }
`;

// Componente funcional
const AnimatedBackground = () => {
  return (
    <BackgroundContainer>
      <Area>
        <Circles>
          {[...Array(10)].map((_, index) => (
            <Circle key={index}></Circle>
          ))}
        </Circles>
      </Area>
    </BackgroundContainer>
  );
};

export default AnimatedBackground;
