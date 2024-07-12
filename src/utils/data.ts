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

export type TArg = "movie" | "tv";

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

export async function getDetail(type: TArg, id: string) {
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

export async function getGenres(type: TArg) {
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

export async function getDatas(type: TArg, slug: string, page: number) {
  const res = await fetch(
    `${url}/${type}/${slug}?api_key=${apiKey}&page=${page}`,
    options
  );

  const result = await res.json();

  return result;
}

export async function getVideoCompilation(type: TArg, id: string) {
  const res = await fetch(
    `${url}/${type}/${id}/videos?api_key=${apiKey}`,
    options
  );

  const result = await res.json();

  return result.results;
}

export async function getSimiliarDatas(type: TArg, id: string, page: number) {
  const res = await fetch(
    `${url}/${type}/${id}/similar?api_key=${apiKey}&page=${page}`,
    options
  );

  const result = await res.json();

  return result;
}

export async function getSearchDatas(type: TArg, query: string, page: number) {
  const res = await fetch(
    `${url}/search/${type}?api_key=${apiKey}&query=${query}&page=${page}`,
    options
  );

  const result = await res.json();

  return result;
}

export async function getCredits(id: string, type: TArg) {
  const res = await fetch(
    `${url}/${type}/${id}/credits?api_key=${apiKey}`,
    options
  );

  const result = await res.json();

  return result.cast as Array<Credit>;
}

export async function getTrendingDatas(
  type: "movie" | "tv" | "all",
  time: "day" | "week",
  page: number
) {
  const res = await fetch(
    `${url}/trending/${type}/${time}?api_key=${apiKey}&page=${page}`,
    options
  );

  const result = await res.json();

  return result;
}
