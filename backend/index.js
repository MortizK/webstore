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
    res.send('Hello World');
});

// Show what an error looks like
app.get('/error', async (req, res) => {
    throw new Error("Mein Künstlicher Error")
})

// Wildcard Routes
app.get('/*splat', async (req, res) => {
    res.send('Hello World - from Wildcard');
})

// Error Handling 
// from: https://expressjs.com/en/guide/error-handling.html
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Error Middleware')
})

// Server starten
app.listen(PORT, () => {
    console.log(`Server läuft auf http://localhost:${PORT}`)
})