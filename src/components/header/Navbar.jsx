import React, { useState } from 'react';
import styled from 'styled-components';
import BurguerButton from './BurguerButton.jsx';

function Navbar() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <NavContainer>
      <h2>CHICHILOS</h2>
      <div className={`links ${clicked ? 'active' : ''}`}>
        <a onClick={handleClick} href="#h">Home</a>
        <a onClick={handleClick} href="#h">Shop</a>
        <a onClick={handleClick} href="#h">About</a>
        <a onClick={handleClick} href="#h">Contact</a>
        <a onClick={handleClick} href="#h">Blog</a>
      </div>
      <BurguerButtonContainer>
        <BurguerButton clicked={clicked} handleClick={handleClick} />
      </BurguerButtonContainer>
    </NavContainer>
  );
}

const NavContainer = styled.nav`

  height:10vh;
  position: sticky;
  top: 0;
  z-index: 100;
  padding: 2% 6% 2% 2%;
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    color: white;
    font-weight: 400;
    span {
      font-weight: bold;
    }
  }

  
  

  .links {
    background-color: transparent;
    position: absolute;
    top: -550%;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
    z-index: 10;


    a {
      color: white;
      margin-right: 1rem;
      font-size: 2rem;
      display: block;
      position: relative; /* Añadido */


    } 
    a::before {
      content: '';
      position: absolute;
      bottom: 0%;
      left: 0px;
      width: 100%;
      height: 1px;
      background: white;
      display: block;
      -webkit-transform-origin: right top;
      -ms-transform-origin: right top;
      transform-origin: right top;
      -webkit-transform: scale(0, 1);
      -ms-transform: scale(0, 1);
      transform: scale(0, 1);
      -webkit-transition: transform 0.4s cubic-bezier(1, 0, 0, 1);
      transition: transform 0.4s cubic-bezier(1, 0, 0, 1);
    }
    
     a:hover::before {
      -webkit-transform-origin: left top;
      -ms-transform-origin: left top;
      transform-origin: left top;
      -webkit-transform: scale(1, 1);
      -ms-transform: scale(1, 1);
      transform: scale(1, 1);
    }
  



    @media(min-width: 768px){
      position: initial;
      margin: 0;

      a {
        font-size: 1rem;
        color: white;
        display: inline;
      }

      display: block;
    }
  }

  .links.active {
    width: 100%;
    height: 100vh;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: -2%;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 10;
    background-color: gray;

    a {
      font-size: 2rem;
      margin-top: 1rem;
      color: white;
    }
  }

  .burguer {
    @media(min-width: 768px){
      display: none;
      position: absolute;
      z-index: 100;
    }
  }
`;

const BurguerButtonContainer = styled.div`
  position: relative;
  z-index: 1000;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export default Navbar;
