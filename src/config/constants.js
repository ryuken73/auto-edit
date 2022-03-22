const dev = {
    BACKGROUND_IMAGE: '/images/auto-edit-background1.jpg',
    DOWNLOAD_PATH_PREFIX: '/dev',
    DOWNLOAD_JSON_PATH: '/downloadInfo.json',
    DOWNLOAD_LINK_PREFIX: {
        ios: 'itms-services://?action=download-manifest&url=',
        android: ''
    },
    AUTO_EDIT_APP_NAME: 'auto-edit'
        
}

const prd = {
    ...dev,
    DOWNLOAD_PATH_PREFIX: '',
}

export default process.env.NODE_ENV === 'development' ? dev:prd;