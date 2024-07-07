export type Tv = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  first_air_date: Date;
  name: string;
  vote_average: number;
  vote_count: number;
};
//       "backdrop_path": "/jLCuqeDkoSOmnyOoAm4PbiqoUV6.jpg",
//       "genre_ids": [
//         80,
//         18
//       ],
//       "id": 549,
//       "origin_country": [
//         "US"
//       ],
//       "original_language": "en",
//       "original_name": "Law & Order",
//       "overview": "In cases ripped from the headlines, police investigate serious and often deadly crimes, weighing the evidence and questioning the suspects until someone is taken into custody. The district attorney's office then builds a case to convict the perpetrator by proving the person guilty beyond a reasonable doubt. Working together, these expert teams navigate all sides of the complex criminal justice system to make New York a safer place.",
//       "popularity": 1969.446,
//       "poster_path": "/m9zTQr4TYS98UFSiA1k0mMfECPe.jpg",
//       "first_air_date": "1990-09-13",
//       "name": "Law & Order",
//       "vote_average": 7.351,
//       "vote_count": 556

export type VDetail = {
  adult: boolean;
  backdrop_path: string;
  created_by: CreatedBy[];
  episode_run_time: number[];
  first_air_date: Date;
  genres: Genre[];
  homepage: string;
  id: number;
  in_production: boolean;
  languages: string[];
  last_air_date: Date;
  last_episode_to_air: LastEpisodeToAir;
  name: string;
  next_episode_to_air: null;
  networks: Network[];
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: Network[];
  production_countries: ProductionCountry[];
  seasons: Season[];
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  type: string;
  vote_average: number;
  vote_count: number;
};

export interface CreatedBy {
  id: number;
  credit_id: string;
  name: string;
  original_name: string;
  gender: number;
  profile_path: string;
}

export interface Genre {
  id: number;
  name: string;
}

export interface LastEpisodeToAir {
  id: number;
  name: string;
  overview: string;
  vote_average: number;
  vote_count: number;
  air_date: Date;
  episode_number: number;
  episode_type: string;
  production_code: string;
  runtime: number;
  season_number: number;
  show_id: number;
  still_path: string;
}

export interface Network {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface Season {
  air_date: Date | null;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: null | string;
  season_number: number;
  vote_average: number;
}

export interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}
