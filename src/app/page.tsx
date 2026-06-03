import MovieCard from "@/components/MovieCard/MovieCard";
import { PaginatedMovieApiResponse } from "@/types/types";

export default async function Home() {
  const token = process.env.API_KEY;

  const options = {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`,
    options,
  );

  const movies: PaginatedMovieApiResponse = await data.json();

  return (
    <ul className="mx-auto flex flex-col gap-4">
      {movies.results.map((movie) => (
        <li key={movie.id}>
          <MovieCard title={movie.title} poster_path={movie.poster_path} />
        </li>
      ))}
    </ul>
  );
}
