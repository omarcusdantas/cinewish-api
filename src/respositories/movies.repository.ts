import db from "@/database/database.connection";
import { Movie } from "@/protocols/movies.protocol";
import { QueryResult } from "pg";

async function readMovies(): Promise<Movie[]> {
  return (await db.query<Movie>("SELECT * FROM movies")).rows;
}

async function readById(id: number): Promise<Movie> {
  return (await db.query<Movie>("SELECT * FROM movies WHERE id = $1", [id])).rows[0];
}

function deleteById(id: number): Promise<QueryResult<Movie>> {
  return db.query<Movie>("DELETE * FROM movies WHERE id = $1", [id]);
}

const moviesRepository = { readMovies, readById, deleteById };
export default moviesRepository;
