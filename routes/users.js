/**
 * Requerimos express e, inmediatamente después, ejecutamos Router.
 * Este crea una "miniapp". Las funcionalidades son las mismas que el "app" del index, pero
 * lo usamos para crear enrutadores que concentrarán todas las rutas de un mismo tipo
 * y tener todo mejor organizado
 */
const router = require('express').Router()

/**
 * Método: GET
 * Ruta: /users
 * Ejemplo: GET localhost:4000/users
 */
router.get('/', (req, res, next) => {
    res.status(200).json({
        success: true,
        data: {
            message: 'response from GET "/users" endpoint',
        }
    })
})

/**
 * Método: POST
 * Ruta: /users
 * Ejemplo: POST localhost:4000/users
 */
router.post('/', (req, res, next) => {
    res.status(200).json({
        success: true,
        data: {
            message: 'response from POST "/users" endpoint',
            bodyReceived: req.body,
        }
    })
})

/**
 * Método: GET
 * Ruta: /users/:id
 * Ejemplo: GET localhost:4000/users/thomas
 */
router.get('/:id', (req, res, next) => {
    res.status(200).json({
        success: true,
        data: {
            message: 'response from GET "/users/:id" endpoint',
            userId: req.params.id,
        }
    })
})

// Aquí devolvemos este módulo con todas las rutas parciales creadas
module.exports = router