const apiKey = import.meta.env.PUBLIC_TMDB_KEY;
const token = import.meta.env.PUBLIC_TMDB_TOKEN;
const url = import.meta.env.PUBLIC_API_URL;
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Autorization: `Bearer ${token}`,
  },
};
export async function getDiscover(type: string, genre: number, page: number) {
  const res = await fetch(
    `${url}/discover/${type}?api_key=${apiKey}&page=${page}&with_genres=${genre}`,
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

export async function getDetail(type: "movie" | "tv", id: string) {
  const res = await fetch(`${url}/${type}/${id}?api_key=${apiKey}`, {
    method: "GET",
    headers: {
      accept: "application/json",
      Autorization: `Bearer ${token}`,
    },
  });

  const result = await res.json();

  return result;
}

export async function getGenres(type: "movie" | "tv") {
  const res = await fetch(`${url}/genre/${type}/list?api_key=${apiKey}`, {
    method: "GET",
    headers: {
      accept: "application/json",
      Autorization: `Bearer ${token}`,
    },
  });

  const result = await res.json();

  return result.genres;
}

export async function getPopularDatas(type: "movie" | "tv") {
  const res = await fetch(`${url}/${type}/popular?api_key=${apiKey}`, options);

  const result = await res.json();

  return result;
}
