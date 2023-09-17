export type Movie = {
  id: number;
  name: string;
  genre: "Action" | "Comedy" | "Drama" | "Horror" | "Romance" | "Mystery";
};

export type CreateMovie = Omit<Movie, "id">;
