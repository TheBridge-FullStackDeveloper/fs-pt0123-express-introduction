/**
 * Requerimos express e, inmediatamente después, ejecutamos Router.
 * Este crea una "miniapp". Las funcionalidades son las mismas que el "app" del index, pero
 * lo usamos para crear enrutadores que concentrarán todas las rutas de un mismo tipo
 * y tener todo mejor organizado
 */
const router = require('express').Router()

/**
 * Método: GET
 * Ruta: /cities
 * Ejemplo: GET localhost:4000/cities
 */
router.get('/', (req, res, next) => {
    res.status(200).json({
        success: true,
        data: {
            message: 'response from GET "/cities" endpoint',
        }
    })
})

/**
 * Método: POST
 * Ruta: /cities
 * Ejemplo: POST localhost:4000/cities
 */
router.post('/', (req, res, next) => {
    res.status(200).json({
        success: true,
        data: {
            message: 'response from POST "/cities" endpoint',
            bodyReceived: req.body,
        }
    })
})

/**
 * Método: GET
 * Ruta: /cities/:id
 * Ejemplo: GET localhost:4000/cities/madrid
 */
router.get('/:id', (req, res, next) => {
    res.status(200).json({
        success: true,
        data: {
            message: 'response from GET "/cities/:id" endpoint',
            cityId: req.params.id,
        }
    })
})

/**
 * Método: PUT
 * Ruta: /cities/:id
 * Ejemplo: PUT localhost:4000/cities/madrid
 */
router.put('/:id', (req, res, next) => {
    res.status(200).json({
        success: true,
        data: {
            message: 'response from PUT "/cities/:id" endpoint',
            cityId: req.params.id,
        }
    })
})

/**
 * Método: DELETE
 * Ruta: /cities/:id
 * Ejemplo: DELETE localhost:4000/cities/madrid
 */
router.delete('/:id', (req, res, next) => {
    res.status(200).json({
        success: true,
        data: {
            message: 'response from DELETE "/cities/:id" endpoint',
            cityId: req.params.id,
        }
    })
})

// Aquí devolvemos este módulo con todas las rutas parciales creadas
module.exports = router