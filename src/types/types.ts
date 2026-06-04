export type Movie = {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  poster_path: string;
  vote_average: number;
  popularity: number;
  runtime: number;
  tagline: string;
};

export type PaginatedMovieApiResponse = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

export type Genre = {
  id: number;
  name: string;
};

export type MovieDetails = {
  backdrop_path: string;
  genres: Genre[];
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  runtime: number;
  tagline: string;
  vote_average: number;
  vote_count: number;
};
