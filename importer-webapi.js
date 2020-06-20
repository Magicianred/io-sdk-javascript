const axios = require("axios");

async function importerWebApi(endpoint) {
    try {
        const response = await axios.get(endpoint)
        return await response.data;
    } catch (error) {
        return await error.response.data;
    }
}

module.exports = importerWebApi