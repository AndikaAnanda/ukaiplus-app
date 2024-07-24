import express from 'express';
import 'dotenv/config';
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import tryoutRoutes from './routes/tryoutRoutes.js';
import questionRoutes from './routes/questionRoutes.js';
import answerRoutes from './routes/answerRoutes.js';
import resultRoutes from './routes/resultRoutes.js';
import sequelize from './config/database.js';
import cookieParser from 'cookie-parser';
import cors from 'cors'

const app = express();
const port = process.env.PORT || 8080;

app.use(cors({
    origin: 'http://localhost:3000',
    methods: 'GET,POST,PUT,DELETE'
}))
app.use(express.json());
app.use(cookieParser());
app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.use('/api', tryoutRoutes);
app.use('/api', questionRoutes);
app.use('/api', answerRoutes);
app.use('/api', resultRoutes);

await sequelize.sync();
// await sequelize.sync({force: true})

app.listen(port, () => console.log(`Running on localhost:${port}`));
