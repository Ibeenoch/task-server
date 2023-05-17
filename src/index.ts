import dotenv from 'dotenv'
import express, { Request, Response, NextFunction, Application } from 'express'
import cors from 'cors'
import route from './route/user.route';
import { errorHandler } from './middleware/error.middleware';

dotenv.config();

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/', route);
app.use(errorHandler);

const PORT = process.env.PORT || 3030;
console.log(PORT)

app.listen(PORT, ()=> { console.log(`Server launched 🚀🚀🚀 on port: ${PORT}`)})