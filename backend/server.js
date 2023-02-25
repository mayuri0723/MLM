import express from 'express'
import connectDB from "./db/db.js";
import route from "./routes/route.js";
import cors from 'cors'

const app = express()
app.use(cors())

// app.use(express.urlencoded({ limit: '100000000',extended: true, parameterLimit:50000 }));

// Database Connection
connectDB();

// JSON
app.use(express.json())

// Load Routes
app.get('/', (req, res) => {
    res.send('API is running')
})

app.use("/api", route)

const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
    console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
    )
})