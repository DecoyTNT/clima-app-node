const axios = require('axios')

const getLugarLatLng = async(dir) => {
    const encodeURL = encodeURI(dir)

    //console.log(encodeURL);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeURL}`,
        headers: { 'X-RapidAPI-Key': 'b71d4af6f7msh9ad283fbeea1b31p10c2bejsn0a9f0ce45623' }
    });

    const resp = await instance.get()

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${dir}`)
    }

    const data = resp.data.Results[0]
    const direccion = data.name
    const lat = data.lat
    const lng = data.lon


    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}