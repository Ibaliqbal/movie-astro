const apiKey = import.meta.env.PUBLIC_TMDB_KEY;
const token = import.meta.env.PUBLIC_TMDB_TOKEN;
export async function getDiscoverMovie() {
  const res = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Autorization: `Bearer ${token}`,
      },
    }
  );

  const result = await res.json();

  return result;
}

export async function getDetailMovie(id: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Autorization: `Bearer ${token}`,
      },
    }
  );

  const result = await res.json();

  return result;
}
