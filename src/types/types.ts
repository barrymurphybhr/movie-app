export type Movie = {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  poster_path: string | null;
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
