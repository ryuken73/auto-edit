import './App.css';
import React from 'react';
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import AppleIcon from '@mui/icons-material/Apple';
import AndroidIcon from '@mui/icons-material/Android';
import styled from 'styled-components';
import useMediaQueryEasy from 'hooks/useMediaQueryEasy';
import constants from 'config/constants';

const {
  DOWNLOAD_PATH_PREFIX, 
  DOWNLOAD_JSON_PATH, 
  DOWNLOAD_LINK_PREFIX,
  AUTO_EDIT_APP_NAME
} = constants;

const pathResolver = path => {
  return `${DOWNLOAD_PATH_PREFIX}${path}`;
}

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
  width: 100%;
  /* ios safari viewport buf fix */
  height: 100vh;
  height: ${props => props.vh ? `${props.vh}px` : "100vh" };
  /* min-height: -webkit-fill-available; */
`
const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: white;
  opacity: 0.7;
  font-size: 2em;
  flex:1;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
`
const Body = styled.div`
  min-width: 80%;
  flex: 4;
  display: grid;
  grid-template-columns: ${props => props.isLandscape ? "1fr 1fr" : "none"};
  grid-template-rows: ${props => props.isLandscape ? "none" : "1fr 1fr"};
  place-items: center center;
`
const CustomStack = styled(Stack)`
  width: 70%;
  height: 70%;

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
        svg {
          font-size: 80px;
        }
    }
  }
  width: 100%;
  height: 100%;
`
const Footer = styled.div`
  margin-top: auto;
  margin-bottom: 30px;
  font-size: 1em;
  opacity: 0.5;
  color: white;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
`
function MainPage() {
  const {isLandscape} = useMediaQueryEasy();
  const downloadApp = React.useCallback(async event => {
    console.log(event)
    const {id} = event.currentTarget;
    const prefix = DOWNLOAD_LINK_PREFIX[id];
    const response = await fetch(pathResolver(DOWNLOAD_JSON_PATH)+`?v=${Date.now()}`);
    const obj = await response.json();
    console.log(obj, id)
    const {path, filename} = obj[id][AUTO_EDIT_APP_NAME];
    const downloadLink = `${prefix}${pathResolver(path)}/${filename}`;
    console.log(downloadLink)
    window.location.href = downloadLink;
    // window.location.assign(`${prefix}${path}/${filename}`);
  }, []);
  return (
    <Container>
      <Title>
        <Box>
          Auto-Edit
        </Box>
        <Box sx={{fontSize:'18px', ml:"5px"}}>
          (편집비서)
        </Box>
      </Title>
      <Body isLandscape={isLandscape}>
        <CustomStack spacing={2}>
          <FullHeightButton 
            id="android"
            variant="contained"
            startIcon={<AndroidIcon sx={{fontSize:"100px"}} />}
            onClick={downloadApp}
          >ANDROID</FullHeightButton>
        </CustomStack>
        <CustomStack direction="row" spacing={2}>
          <FullHeightButton 
            id="ios"
            variant="contained"
            background="#313599"
            hoverBackground="#313599"
            startIcon={<AppleIcon />}
            onClick={downloadApp}
          >IOS</FullHeightButton>
        </CustomStack>
      </Body>
      <Footer>
        Copyright@ 2022 SBS. All Rights Reserved
      </Footer>
    </Container>
  );
}

export default React.memo(MainPage);
