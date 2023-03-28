// Exportamos todos los enrutadores
const users = require('./users')
const cities = require('./cities')

/**
 * Los exportamos como un módulo para cargar más cómodamente, desde la raíz de nuestra aplicación,
 * todos los enrutadores
 */
module.exports = {
    users,
    cities,
}