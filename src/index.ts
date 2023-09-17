import express from "express";
import "express-async-errors";
import errorHandler from "./middlewares/errorHandler";
import cors from "cors";
import router from "./routes/index.routes";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
app.use(errorHandler);

const PORT: number = Number(process.env.PORT) || 5000;
app.listen(PORT, () => console.log(`Running server on port ${PORT}`));
