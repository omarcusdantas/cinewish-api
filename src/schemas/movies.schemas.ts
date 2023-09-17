import joi from "joi";
import { CreateMovie } from "@/protocols/movies.protocol";

export const movieSchema = joi.object<CreateMovie>({
    name: joi.string().required(),
    genre: joi.string().valid("Action", "Comedy", "Drama", "Horror", "Romance", "Mystery").required(),
});
