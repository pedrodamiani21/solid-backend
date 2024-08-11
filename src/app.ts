import express from 'express';
import { router } from './routes'
import cors from 'cors';
import path from 'path';
import "./database"

const app = express()

app.use(express.json())
app.use(express.static(path.join(__dirname, '../public')));
app.use(cors());
app.use(router)

export { app }

