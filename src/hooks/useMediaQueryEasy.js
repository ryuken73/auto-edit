import useMediaQuery from '@mui/material/useMediaQuery';

function useMediaQueryEasy() {
  const isLandscape  = useMediaQuery(`(min-width:600px)`);
  return {
    isLandscape
  }
}

export default useMediaQueryEasy;