import { Request, Response } from "express";
import httpStatus from "http-status";
import moviesService from "@/services/movies.service";

async function get(req: Request, res: Response): Promise<Response> {
    const movies = await moviesService.getMovies();
    return res.status(httpStatus.OK).send(movies);
}

async function deleteOne(req: Request, res: Response): Promise<Response> {
    const id = Number(req.params.id);
    const movie = await moviesService.getById(id);

    if (!movie) {
        return res.status(httpStatus.NOT_FOUND).send("Movie not found");
    }

    await moviesService.deleteById(id);
    res.sendStatus(httpStatus.NO_CONTENT);
}

const moviesController = {
    get, deleteOne
};

export default moviesController;