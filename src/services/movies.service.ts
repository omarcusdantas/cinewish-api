import moviesRepository from "@/respositories/movies.repository";
import { Movie, CreateMovie } from "@/protocols/movies.protocol";

function getMovies(genre: string): Promise<Movie[]> {
  return moviesRepository.readMovies(genre);
}

function create(newMovie: CreateMovie) {
  return moviesRepository.create(newMovie);
}

function getById(id: number): Promise<Movie> {
  return moviesRepository.readById(id);
}

function deleteById(id: number)  {
  return moviesRepository.deleteById(id);
}

const moviesService = { getMovies, create, getById, deleteById };
export default moviesService;
