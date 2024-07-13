import { FaHeart, FaRegHeart } from "react-icons/fa";
import { actions } from "astro:actions";
import React, { useEffect, useState } from "react";
const { signIn } = await import("auth-astro/client");

const LikeAction = ({
  dataAdd,
  id,
  isAuth,
}: {
  dataAdd: {
    title: string;
    poster: string;
    list_id: number;
    release_list: string | Date;
    type: "movie" | "tv" | "tv season" | "tv episode";
    user_id: string;
  };
  id: number;
  isAuth: boolean;
}) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [favorite, setFavorite] = useState<Array<SavedList>>([]);

  useEffect(() => {
    async function getFavorite() {
      const res = await fetch("/api/favorite");
      const result = await res.json();
      setFavorite(result.data);
    }

    if (isAuth) {
      getFavorite();
    }
  }, []);

  return (
    <button
      className="p-3 rounded-full lg:text-xl text-lg border-2 border-white disabled:cursor-wait"
      disabled={isLoading}
      aria-label="Button Like"
      onClick={async () => {
        const findId = favorite.find((list) => list.list_id === id);
        try {
          setIsLoading(true);
          if (findId) {
            await actions.deleteFavorite.safe({
              id: findId.id as string,
            });
            setFavorite((prev) => prev.filter((list) => list.id !== findId.id));
          } else {
            const { data } = await actions.addFavorite.safe(dataAdd);
            if (data?.success) {
              setFavorite((prev) => [...prev, data?.data[0]]);
            } else {
              signIn();
            }
          }
        } catch (error) {
          console.error(error);
        } finally {
          setIsLoading(false);
        }
      }}
    >
      {favorite.find((list) => list.list_id === id) ? (
        <FaHeart className="text-red-600" />
      ) : (
        <FaRegHeart />
      )}
    </button>
  );
};

export default LikeAction;
