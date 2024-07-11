import type { MDetail, Movie } from "./movie";
import type { VDetail, Tv } from "./tv";

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
}
