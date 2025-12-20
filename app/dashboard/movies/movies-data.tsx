import { getMovies } from "@/actions/movies";

export default async function MoviesData() {
  try {
    const movies = await getMovies();
    if (movies) {
      console.log(movies);
    }

    return <div>Movies Data</div>;
  } catch (error) {
    console.log(error);
  }
}
