import MovieSelectors from "./movie-selectors";
import MovieData from "./movie-data";
import AddMovieDialog from "@/components/dashboard/add-movie-dialog";

export default function MoviesDashboardPage() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Movies</h2>
          <p className="text-muted-foreground">Manage your movie catalog</p>
        </div>

        <AddMovieDialog />
      </div>

      {/* Movie Selectors */}
      <MovieSelectors />

      {/* Movie Data Table */}
      <MovieData />
    </div>
  );
}
