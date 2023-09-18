import db from "@/database/database.connection";
import { Movie, CreateMovie } from "@/protocols/movies.protocol";
import { QueryResult } from "pg";

async function readMovies(genre: string): Promise<Movie[]> {
  let query = "SELECT * FROM movies";
  const queryParams = [];

  if (genre) {
    query += " WHERE genre = $1";
    queryParams.push(genre);
  }

  const { rows } = await db.query<Movie>(query, queryParams);
  return rows;
}

function create(newMovie: CreateMovie): Promise<QueryResult<CreateMovie>> {
  return db.query<CreateMovie>("INSERT INTO movies (name, genre) VALUES ($1, $2)", [newMovie.name, newMovie.genre]);
}

async function readById(id: number): Promise<Movie> {
  return (await db.query<Movie>("SELECT * FROM movies WHERE id = $1", [id])).rows[0];
}

function deleteById(id: number): Promise<QueryResult<Movie>> {
  return db.query<Movie>("DELETE FROM movies WHERE id = $1", [id]);
}

const moviesRepository = { readMovies, readById, deleteById, create };
export default moviesRepository;
