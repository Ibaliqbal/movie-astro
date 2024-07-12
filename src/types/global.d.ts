import type { MDetail, Movie } from "./movie";
import type { OriginalLanguage } from "./trending";
import type { VDetail, Tv, EpisodeType, Crew, GuestStar } from "./tv";

enum ISO639_1 {
  Us = "US",
}

enum ISO3166_1 {
  En = "en",
}

enum Site {
  Youtube = "YouTube",
}

declare global {
  type Movies = Array<Movie>;
  type DetailMovie = MDetail;
  type Genre = { id: number; name: string };
  type TvLists = Array<Tv>;
  type DetailTv = VDetail;
  type Video = {
    iso_639_1: ISO639_1;
    iso_3166_1: ISO3166_1;
    name: string;
    key: string;
    site: Site;
    size: number;
    type: string;
    official: boolean;
    published_at: Date;
    id: string;
  };
  type User = {
    id: string;
    name: string;
    email: string;
    image: string;
    created_at: Date | string;
    country: string;
  };
  type SavedList = {
    id: string;
    user_id: string;
    created_at: Date | string;
    poster: string;
    list_id: number;
    release_list: string;
    title: string;
    type: string;
  };
  type Credit = {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string;
    cast_id: number;
    character: string;
    credit_id: string;
    order: number;
  };
  type AllTrending = {
    backdrop_path: string;
    id: number;
    title?: string;
    original_title?: string;
    overview: string;
    poster_path: string;
    media_type: "movie" | "tv";
    adult: boolean;
    original_language: OriginalLanguage;
    genre_ids: number[];
    popularity: number;
    release_date?: Date;
    video?: boolean;
    vote_average: number;
    vote_count: number;
    name?: string;
    original_name?: string;
    first_air_date?: Date;
    origin_country?: string[];
  };
  type EpsiodeFromSeason = {
    air_date: Date;
    episode_number: number;
    episode_type: "standard";
    id: number;
    name: string;
    overview: string;
    production_code: string;
    runtime: number | null;
    season_number: number;
    show_id: number;
    still_path: null | string;
    vote_average: number;
    vote_count: number;
    crew: Crew[];
    guest_stars: Crew[];
  };
  type EpisodeById = {
    air_date: Date;
    crew: any[];
    episode_number: number;
    guest_stars: GuestStar[];
    name: string;
    overview: string;
    id: number;
    production_code: string;
    runtime: number;
    season_number: number;
    still_path: string;
    vote_average: number;
    vote_count: number;
  };
}
