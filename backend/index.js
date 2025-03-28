import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import ImageRoutes from './Routes/ImageRoutes.js';
import errorHandler from './Middlewares/ErrorHandler.js';
import './Models/db.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8090;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies

app.use('/api/images', ImageRoutes);
app.use(errorHandler); // Error-handling middleware

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
});
