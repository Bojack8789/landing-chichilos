import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Navbar from './components/header/Navbar.jsx'
import Card from './components/body/Card.jsx'
import BannerHero from './components/body/BannerHero.jsx'
import SectionPagination from './components/body/SectionPagination.jsx'
import WhatsAppFloatingButton from './components/body/WhatsAppFloatingButton.jsx'
import AnimatedBackground from './components/body/AnimatedBackground.jsx'
import About from './components/body/About.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <BannerHero />

    <About/>
    <br />


    
    <SectionPagination/>

    <Card
        imageSrc="https://img.freepik.com/foto-gratis/arbol-navidad-decorado-estrella_318354-1719.jpg"
        title="Título de la tarjeta"
        description="Descripción de la tarjeta."
      />
      <Card
        imageSrc="https://img.freepik.com/foto-gratis/arbol-navidad-decorado-estrella_318354-1719.jpg"
        title="Título de la tarjeta"
        description="Descripción de la tarjeta."
      />
      <Card
        imageSrc="https://img.freepik.com/foto-gratis/arbol-navidad-decorado-estrella_318354-1719.jpg"
        title="Título de la tarjeta"
        description="Descripción de la tarjeta."
      />
      <Card
        imageSrc="https://img.freepik.com/foto-gratis/arbol-navidad-decorado-estrella_318354-1719.jpg"
        title="Título de la tarjeta"
        description="Descripción de la tarjeta."
      />
      <Card
        imageSrc="https://img.freepik.com/foto-gratis/arbol-navidad-decorado-estrella_318354-1719.jpg"
        title="Título de la tarjeta"
        description="Descripción de la tarjeta."
      />
      <Card
        imageSrc="https://img.freepik.com/foto-gratis/arbol-navidad-decorado-estrella_318354-1719.jpg"
        title="Título de la tarjeta"
        description="Descripción de la tarjeta."
      />
      <Card
        imageSrc="https://img.freepik.com/foto-gratis/arbol-navidad-decorado-estrella_318354-1719.jpg"
        title="Título de la tarjeta"
        description="Descripción de la tarjeta."
      />
      <WhatsAppFloatingButton/>
  </React.StrictMode>,
)
