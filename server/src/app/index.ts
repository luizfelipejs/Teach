import express from 'express'
import '../external/database/connection'
import routes from './routes'

const app = express()
const port = process.env.PORT || 8080

app.use(express.json())
app.use(routes)

app.listen(port, () => console.log(`> Server is running on http://localhost:${port}`))