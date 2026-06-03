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

  const movies = await data.json();

  console.log(movies.results);

  return (
    <ul>
      {movies.results.map((movie) => (
        <li key={movie.id}>{movie.title}</li>
      ))}
    </ul>
  );
}
