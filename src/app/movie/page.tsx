import { MovieDetails } from "@/types/types";

export default async function Page() {
  const token = process.env.API_KEY;

  const options = {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const data = await fetch(
    `https://api.themoviedb.org/3/movie/687163`,
    options,
  );

  const movie: MovieDetails = await data.json();

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <span>{movie.vote_average}</span>
    </div>
  );
}
