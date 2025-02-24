import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import configRoutes from "./routes/config.routes";
import movieRoutes from "./routes/movies.routing";
import roomRoutes from "./routes/room.routing";
import bookingRoutes from "./routes/booking.routes";

dotenv.config();
const app = express();

const apiVersion = "/api/v1";

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use(`${apiVersion}/configuration`, configRoutes);
app.use(`${apiVersion}/movie`, movieRoutes);
app.use(`${apiVersion}/room`, roomRoutes);
app.use(`${apiVersion}/booking`, bookingRoutes);

export default app;
