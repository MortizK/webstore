import express from "express"

const app = express()
const PORT = process.env.PORT || 3000   // Replace, if env.PORT is undefined

// Middelware Info 
// from: https://expressjs.com/en/guide/using-middleware.html#middleware.error-handling
// Logging
function logTime (req, res, next) {
    console.log('Time:', Date.now())
    next()
}

function logOriginalUrl (req, res, next) {
    console.log('Request URL:', req.originalUrl)
    next()
}

function logMethod (req, res, next) {
    console.log('Request Type:', req.method)
    next()
}

const logging = [logTime, logOriginalUrl, logMethod]
app.use(logging)

app.get('/', async (req, res) => {
    res.status(500).json({
        "status": "success/ fail",
        "data": {
            "message": "Hello World"
        }})
});

// Wildcard Routes
app.use('/*splat', async (req, res) => {
    throw new Error(`Route ${req.method}:${req.originalUrl} was not found`)
})

// Error Handling 
// from: https://expressjs.com/en/guide/error-handling.html
// .json responses 
// from: https://stackoverflow.com/questions/12806386/is-there-any-standard-for-json-api-response-format
// and: https://github.com/omniti-labs/jsend
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).json({
        "status": "error",
        "error": {
            "message": err.message,
            "code": err.code
        }})
})

// Server starten
app.listen(PORT, () => {
    console.log(`Server läuft auf http://localhost:${PORT}`)
})