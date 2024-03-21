

import styled from 'styled-components';
import AnimatedBackground from './AnimatedBackground';
import SectionLogo from './SectionLogo';


const About = () => {
    return (
      <Parent>
        <Div1>
            <AnimatedBackground/>
        </Div1>
        <Div2>
            <SectionLogo/>
        </Div2>    
        </Parent>

    );
  };
  const Parent = styled.div`

  height: 130vh;
  margin:0;

  display: flex;
  align-items: center;
  justify-content: center;

  display: grid;
grid-template-columns: repeat(5, 1fr);
grid-template-rows: repeat(5, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px



  `;


  const Div1 = styled.div`
    
  grid-area: 1 / 1 / 6 / 6; 
  z-index: -1;
  height: 100%;
 
}


  `;
  const Div2 = styled.div`
  height: 120%;

  grid-area: 1 / 1 / 6 / 6; 
  position: absolute;
  background-color:transparent;
  z-index: 1;
  border: 3px solid blues;

 
    
}

  



  `;
  
  export default About;
  