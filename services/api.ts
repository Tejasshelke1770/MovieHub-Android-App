export const TMDB_CONFIG = {
  BASE_URL: "https://api.themoviedb.org/3",
  API_KEY: process.env.EXPO_PUBLIC_TMDB_API_KEY,
  headers: {
    accept: "application/json",
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNTlmYzdkMmNlN2Y0ZGI1YjBkZTMzMjRlYWE4YjM3MSIsIm5iZiI6MTcyNTE3MzQxNS44ODgsInN1YiI6IjY2ZDQwZWE3MGU5YTRiYzk4MjBlNDZlMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qHyuCCuIj0IJKEUBFHet1d0uPfWSDqTK1aW0-MkJ-4k`,
  },
};

export const fetchMovies = async ({ query }: { query: string }) => {
  const endPoint = query
    ? `${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
    : `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;

  const res = await fetch(endPoint, {
    method: "GET",
    headers: TMDB_CONFIG.headers,
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch movies: ${res.statusText}`);
  }
  const data = await res.json();
  return data.results;
};

//if query then endpoint is firstone with query else
// no query then endpoint is second one with sort by popularity
//on homepage there is no query so it will fetch popular movies
// on search page there is query so it will fetch movies based on query
//and both time we are using the same fetchMovies function

export const fetchMovieDetails = async (
  movieId: string
): Promise<MovieDetails> => {
  try {
    const response = await fetch(
      `${TMDB_CONFIG.BASE_URL}/movie/${movieId}?api_key=${TMDB_CONFIG.API_KEY}`,
      {
        method: "GET",
        headers: TMDB_CONFIG.headers,
      }
    );
    if (!response.ok) throw new Error("Failed to fetch movie Details");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error fetching movie details:", error);
    throw error;
  }
};
