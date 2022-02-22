'use strict'

/* Este módulo contiene las funciones escenciales de Modpack Store.
   Revise bien sus modificaciones antes de proporcionar un PR. 
*/

require('dotenv').config();

const endpoint = process.env.MODPACK_STORE_API_URL || "https://modpackstore.yanquisalexander.me"

function API_ENDPOINT() {
    return endpoint
}

function getModpackByID(modpackID) {
    console.log(modpackID)
}

console.log("[Modpack Store] Módulo front-end cargado correctamente")

module.exports = {
    API_ENDPOINT,
    getModpackByID
}