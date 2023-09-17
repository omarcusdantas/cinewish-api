import { Router } from "express";
import moviesController from "@/controllers/movies.controller";

const moviesRouter = Router();
moviesRouter.get("/movies", moviesController.get);

export default moviesRouter;
