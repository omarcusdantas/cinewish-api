import moviesRepository from "@/respositories/movies.repository";
import { Movie } from "@/protocols/movies.protocol";

function getMovies(): Promise<Movie[]> {
  return moviesRepository.readMovies();
}

function getById(id: number): Promise<Movie> {
  return moviesRepository.readById(id);
}

function deleteById(id: number)  {
  return moviesRepository.deleteById(id);
}

const moviesService = { getMovies, getById, deleteById };
export default moviesService;
