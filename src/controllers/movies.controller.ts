import { Request, Response } from "express";
import httpStatus from "http-status";
import moviesService from "@/services/movies.service";

async function get(req: Request, res: Response): Promise<Response> {
    const movies = await moviesService.getMovies();
    return res.status(httpStatus.OK).send(movies);
}

const moviesController = {
    get,
};

export default moviesController;