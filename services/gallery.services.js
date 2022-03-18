//!IMPORTS:
const axios = require("axios");

//!FUNCTIONS:
const service = axios.create({
    baseURL: process.env.API_ROVER_URL
})

const getCuriosityGalleryService = () => {
    return service.get("/photos", {
        params:{
            api_key: process.env.API_KEY,
            sol: 1000
        }
    })
}

//!EXPORT FUNCTIONS:

module.exports = {getCuriosityGalleryService}

