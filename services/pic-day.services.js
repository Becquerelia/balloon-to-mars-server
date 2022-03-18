//!IMPORTS:
const axios = require("axios");

//!FUNCTIONS:
const service = axios.create({
    baseURL: process.env.API_APOD_URL
})

const getAstronomiPicOfTheDay = () => {
    return service.get("/", {
        params:{
            api_key: process.env.API_KEY
        }
    })
}

//!EXPORT FUNCTIONS:

module.exports = {getAstronomiPicOfTheDay}
