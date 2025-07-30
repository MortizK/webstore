import express from "express"

const app = express()
const PORT = process.env.PORT || 3000   // Replace, if env.PORT is undefined

app.get('/', async (req, res) => {
    res.send('Hello World');
});


// Wildcard Routes
app.get('/*splat', async (req, res) => {
    res.send('Hello World - from Wildcard');
})

// Server starten
app.listen(PORT, () => {
    console.log(`Server läuft auf http://localhost:${PORT}`)
})