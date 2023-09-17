import { Request, Response } from "express";
import httpStatus from "http-status";
import moviesService from "@/services/movies.service";
import { CreateMovie } from "@/protocols/movies.protocol";

async function get(req: Request, res: Response): Promise<Response> {
  const { genre } = req.params;
  const movies = await moviesService.getMovies(genre);
  return res.status(httpStatus.OK).send(movies);
}

async function post(req: Request, res: Response) {
  const newMovie = req.body as CreateMovie;
  await moviesService.create(newMovie);
  return res.sendStatus(httpStatus.CREATED);
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

const moviesController = { get, deleteOne, post };

export default moviesController;
