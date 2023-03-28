// Requerimos el paquete que hemos instalado y nos dejará crear un servidor web
const express = require('express')

// Requerimos los dos enrutadores que contendrán todos nuestros endpoints
const { users, cities } = require('./routes')

// Declaramos en una constante el puerto que usará este servidor cuando lo corramos en local
const PORT = 4000

// Creamos la aplicación express
const app = express()

// A través de un middleware de aplicación, permitimos que nuestro servidor lea el body de la petición (req.body)
app.use(express.json())

/** 
 * A través de middlewares de aplicación, definimos los dos comienzos de rutas diferentes
 * que tendrá nuestra aplicación y le pasamos, como función, los dos enrutadores que tienen todas las 
 * rutas (y que requerimos en la línea 5)
 **/
app.use('/users', users)
app.use('/cities', cities)

/**
 * Este middleware de aplicación se lanzará SOLO si ninguna de las rutas anteriores coincide
 * con la ruta recibida desde la petición entrante.
 * 
 * Este  middleware solo se encarga de pasar contenido, a través de la función "next", para que salte
 * el middleware de error
 */
app.use((req, res, next) => {
    next({ statusCode: 404, error: new Error('path not found') })
})

/**
 * Middleware de error. Solo tendremos uno, que será reutilizado desde diferentes puntos de la aplicación.
 * 
 * Este middleware recibe: "statusCode" y "error". El primero es el código http y el segundo es el 
 * mensaje de error.
 * 
 * De esta manera podemos usar el mismo middleware de error, independientemente del error que lo lance, ya que
 * su contenido variará según quién lo esté lanzando.
 */
app.use(({ statusCode, error }, req, res, next) => {
    res.status(statusCode).json({
        success: false,
        message: error.message,
    })
})

/**
 * Con esta función ponemos al servidor a escuchar todas las peticiones entrantes, siempre que sean
 * por el puerto especificado en la línea 8
 */
app.listen(PORT, () => console.info(`> listening at ${PORT}`))

