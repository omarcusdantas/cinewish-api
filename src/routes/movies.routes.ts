import { Router } from "express";
import moviesController from "@/controllers/movies.controller";

const moviesRouter = Router();
moviesRouter.get("/movies", moviesController.get);
moviesRouter.delete("/movies/:id", moviesController.deleteOne);

export default moviesRouter;
