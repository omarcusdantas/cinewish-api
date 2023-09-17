import moviesRepository from "@/respositories/movies.repository";
import { Movie } from "@/protocols/movies.protocol";

function getMovies(): Promise<Movie[]> {
  return moviesRepository.readMovies();
}

const moviesService = {
  getMovies,
};
export default moviesService;
