import './App.css';
import React from 'react';
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import styled from 'styled-components';

const Container = styled.div`
  background: darkslategrey;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* width: 100%; */
  background-image: url('/images/auto-edit-background1.jpg');
  background-size: cover;
  background-position: center; 
  background-repeat: no-repeat;
  background-blend-mode: multiply;
  /* ios safari viewport buf fix */
  height: 100vh;
  height: ${props => props.vh ? `${props.vh}px` : "100vh" };
  /* min-height: -webkit-fill-available; */
`
const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  opacity: 0.5;
  font-size: 2em;
  flex:1;
`
const Body = styled.div`
  flex:4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const ButtonContainer=styled.div`
  flex:1;
`
const FullHeightButton = styled(Button)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Footer = styled.div`
  margin-top: auto;
  margin-bottom: 30px;
  font-size: 1em;
  opacity: 0.5;
  color: white;
`
const setScreenOrientation = e => {
  console.log(e)
}

function App() {
  const [vh, setvh] = React.useState('0.01');
  React.useLayoutEffect(() => {
    setvh(window.innerHeight)
  },[])
  return (
    <Container vh={vh}>
      <Title>Auto-Edit (편집비서)</Title>
      <Body>
        <ButtonContainer>
          <FullHeightButton variant="contained">ANDROID</FullHeightButton>
        </ButtonContainer>
        <ButtonContainer>
          <FullHeightButton variant="contained">IOS</FullHeightButton>
        </ButtonContainer>
      </Body>
      <Footer>
        Copyright@ 2022 SBS. All Rights Reserved
      </Footer>
    </Container>
  );
}

export default App;
