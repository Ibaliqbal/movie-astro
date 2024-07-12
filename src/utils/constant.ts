export const movieListsTopic = [
  { name: "Popular", href: "/popular/movie" },
  { name: "Upcoming", href: "/upcoming/movie" },
  { name: "Now Playing", href: "/now_playing/movie" },
  { name: "Top Rated", href: "/top_rated/movie" },
];

export const tvListsTopic = [
  { name: "Popular", href: "/popular/tv" },
  { name: "On The Air", href: "/on_the_air/tv" },
  { name: "Airing Today", href: "/airing_today/tv" },
  { name: "Top Rated", href: "/top_rated/tv" },
];

export const allTrendingListTypes = [
  {
    name: "All",
    href: (time: string) => `/trending?page=1&type=all&time=${time}`,
  },
  {
    name: "Movie",
    href: (time: string) => `/trending?page=1&type=movie&time=${time}`,
  },
  {
    name: "Tv",
    href: (time: string) => `/trending?page=1&type=tv&time=${time}`,
  },
];
