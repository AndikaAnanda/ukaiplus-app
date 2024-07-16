import express from 'express'
import 'dotenv/config'
import router from './routes/routes.js'
import authRoutes from './routes/authRoutes.js'
import sequelize from './config/database.js'

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json())
app.use('/api', authRoutes)
app.use('/api', router)

await sequelize.sync()

app.listen(port, () => console.log(`Running on localhost:${port}`))