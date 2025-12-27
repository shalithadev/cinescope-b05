import { getMovies } from "@/actions/movies";
import { MovieTable } from "./movie-table";
import { Movie } from "./type";

export default async function MovieData() {
  try {
    // Fetch movies data from the server
    const movies: Array<Movie> = await getMovies();

    if (!movies.length) {
      throw new Error("No movies found in the database.");
    }

    return <MovieTable movies={movies} />;
  } catch {
    return <div>No Movies Available!</div>;
  }
}
