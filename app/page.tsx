import { Movie } from "@/app/_types/Movie";

import ErrorResponseAlert from "@/app/_components/ErrorResponseAlert";

export default async function Home() {
  const response = await fetch("https://api.trakt.tv/movies/trending", {
    method: "GET",
    headers: {
      "User-Agent": "*",
      "trakt-api-version": "2",
      "trakt-api-key": process.env.TRAKT_CLIENT_ID || "",
    },
  });

  if (!response.ok) {
    return (
      <div className="p-4">
        <ErrorResponseAlert
          url={response.url}
          status={response.status}
          statusText={response.statusText}
        />
      </div>
    );
  }

  const movies: Movie[] = await response.json();

  return (
    <div className="p-4">
      <h1>Movies</h1>
      <div>
        {movies.map((movie, index) => (
          <div key={`movie-${index}`}>{movie.movie.title}</div>
        ))}
      </div>
    </div>
  );
}
