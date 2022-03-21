import './App.css';
import React from 'react';
import Button from '@mui/material/Button'
import styled from 'styled-components';
import useMediaQueryEasy from 'hooks/useMediaQueryEasy';

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
  min-width: 80%;
  flex: 4;
  display: grid;
  grid-template-columns: ${props => props.isLandscape ? "1fr 1fr" : "none"};
  grid-template-rows: ${props => props.isLandscape ? "none" : "1fr 1fr"};
  place-items: center center;
`
const FullHeightButton = styled(Button)`
  && {
    background: maroon;
    color: white;
    font-size: ${props => props.fontSize || '15px'};
    background: ${props => props.background || 'marron'};
    opacity: 0.8;
    border-radius: 10px;
    border: ${props => props.border || 'none'}; 
    padding: 1px 5px 1px 5px;
    &:hover {
        background:${props => props.hoverBackground || 'maroon'};
        border: ${props => props.hoverBorder || 'none'};

    }
    span {
        margin-right: 3px;
    }
  }
  width: 80%;
  height: 70%;
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
  const {isLandscape} = useMediaQueryEasy();
  React.useLayoutEffect(() => {
    setvh(window.innerHeight)
  },[isLandscape])
  return (
    <Container vh={vh}>
      <Title>Auto-Edit (편집비서)</Title>
      <Body isLandscape={isLandscape}>
        <FullHeightButton 
          variant="contained"
        >ANDROID</FullHeightButton>
        <FullHeightButton 
          variant="contained"
          background="#313599"
          hoverBackground="#313599"
        >IOS</FullHeightButton>
      </Body>
      <Footer>
        Copyright@ 2022 SBS. All Rights Reserved
      </Footer>
    </Container>
  );
}

export default App;
