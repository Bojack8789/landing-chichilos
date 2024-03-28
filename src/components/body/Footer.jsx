import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const FooterContainer = styled.div`
    background-color: #333;
    color: #fff;
    padding: 20px 0;
    text-align: center;

    @media (max-width: 768px) {
      text-align: left;
    }
  `;

  const RedesSociales = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  `;

  const RedesSocialesTitulo = styled.p`
    margin-right: 10px;
  `;

  const RedesSocialesLista = styled.ul`
    list-style: none;
    padding: 0;
  `;

  const RedesSocialesItem = styled.li`
    display: inline-block;
    margin: 0 5px;
  `;

  const RedesSocialesLink = styled.a`
    color: #fff;
    font-size: 18px;

    &:hover {
      color: #ddd;
    }
  `;

  return (
    <FooterContainer>
      <RedesSociales>
        <RedesSocialesTitulo>Seguinos en Redes Sociales</RedesSocialesTitulo>
        <RedesSocialesLista>
          <RedesSocialesItem>
            <RedesSocialesLink href="https://www.facebook.com/" target="_blank" style={{ fontSize: "24px" }}  rel="noreferrer"><FontAwesomeIcon icon={faFacebook} /></RedesSocialesLink>
          </RedesSocialesItem>
          <RedesSocialesItem>
            <RedesSocialesLink href="https://www.instagram.com/" target="_blank"  style={{ fontSize: "24px" }}  rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></RedesSocialesLink>
          </RedesSocialesItem>
        </RedesSocialesLista>
      </RedesSociales>
    </FooterContainer>
  );
};

export default Footer;
