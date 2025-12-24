import express from "express";
import cityRoutes from "./routes/cityRoutes.js";

const app = express();

app.use(express.json());

app.use("/api/cities", cityRoutes);

export default app
