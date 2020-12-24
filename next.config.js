require('dotenv').config()

module.exports = {
    env: {
        MELI_SEARCH_URL: process.env.MELI_SEARCH_URL,
        API_BASE_URL: process.env.API_BASE_URL
    }
}