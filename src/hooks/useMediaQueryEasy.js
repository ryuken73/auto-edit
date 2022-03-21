import useMediaQuery from '@mui/material/useMediaQuery';

function useMediaQueryEasy() {
//   const isLandscape  = useMediaQuery(`(min-width:600px)`);
  const isLandscape = useMediaQuery(`(orientation: landscape)`);
  const isPortrait = useMediaQuery(`(orientation: portrait)`);
  return {
    isLandscape,
    isPortrait
    // isLandscapeTablet
  }
}

export default useMediaQueryEasy;