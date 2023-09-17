import db from "@/database/database.connection";
import { Movie } from "@/protocols/movies.protocol";

async function readMovies(): Promise<Movie[]> {
  return (await db.query<Movie>("SELECT * FROM movies")).rows;
}

const moviesRepository = { readMovies };
export default moviesRepository;
