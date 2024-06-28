import express from 'express';
import dotenv from "dotenv";
import resturant_router from './routes/resturants.router.js';
import famousplaces_router from './routes/famousplaces.router.js';
import hotels_router from './routes/hotels.router.js';
import cors from "cors";
const app = express();
dotenv.config();

app.use(cors({
    origin: 'http://localhost:3000',
    methods: 'GET',
    credentials: true, 
    optionsSuccessStatus: 204
  }));

app.use('/api/v1/resturants',resturant_router);
app.use('/api/v1/famousplaces',famousplaces_router);
app.use('/api/v1/hotels',hotels_router);
export default app;