import './App.css';
import React from 'react';
import MainPage from 'MainPage';
import Box from '@mui/material/Box'
import styled from 'styled-components';
import useMediaQueryEasy from 'hooks/useMediaQueryEasy';
import usePreloadBackgroundImage from 'hooks/usePreloadBackgroundImage';
import constants from 'config/constants';


const IMAGE_URL = constants.BACKGROUND_IMAGE;

const Container = styled.div`
  background: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* ios safari viewport buf fix */
  height: 100vh;
  height: ${props => props.vh ? `${props.vh}px` : "100vh" };
`
function App() {
  const [vh, setvh] = React.useState('0.01');
  const {isLandscape, isPortrait} = useMediaQueryEasy();
  const {isImageReady} = usePreloadBackgroundImage(IMAGE_URL);
  React.useLayoutEffect(() => {
    setvh(window.innerHeight)
  },[isLandscape, isPortrait])
  return (
    <Container vh={vh}>
      {isImageReady ? (
        <MainPage
          imgUrl={IMAGE_URL} 
        ></MainPage>
      ) : (
        <Box fontSize="2em" opacity="0.5" color="white">
          Loading...
        </Box>
      )
      
      }
    </Container>
  );
}

export default App;
