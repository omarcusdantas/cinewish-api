import { Router } from "express";
import moviesRouter from "./movies.routes";

const router = Router();
router.use(moviesRouter)

export default router;
