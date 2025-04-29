import express from 'express'

// App Config
const app = express()
const PORT = process.env.PORT || 3000

// API endpoints
app.get('/', (req, res) => {
    res.send('API Working')
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})