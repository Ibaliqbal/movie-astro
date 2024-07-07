import type { MDetail, Movie } from "./movie";
import type { VDetail, Tv } from "./tv";

declare global {
  type Movies = Array<Movie>;
  type DetailMovie = MDetail;
  type Genre = { id: number; name: string };
  type TvLists = Array<Tv>;
  type DetailTv = VDetail;
}
