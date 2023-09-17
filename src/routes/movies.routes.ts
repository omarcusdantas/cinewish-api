import { Router } from "express";
import moviesController from "@/controllers/movies.controller";
import validateSchema from "@/middlewares/validateSchema";
import { movieSchema } from "@/schemas/movies.schemas";


const moviesRouter = Router();
moviesRouter.get("/movies", moviesController.get);
moviesRouter.post("/movies", validateSchema(movieSchema), moviesController.post);
moviesRouter.delete("/movies/:id", moviesController.deleteOne);

export default moviesRouter;
