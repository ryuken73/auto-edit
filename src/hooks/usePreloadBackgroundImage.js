import React from 'react';

const usePreloadBackgroundImage = imgUrl => {
    const [isImageReady, setImageReady] = React.useState(false);
    React.useEffect(() => {
        const image = new Image();
        image.onload = () => {
            setImageReady(true)
        };
        image.src = imgUrl
    },[])
    return {isImageReady}
}

export default usePreloadBackgroundImage;