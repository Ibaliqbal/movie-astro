import { FaHeart, FaRegHeart } from "react-icons/fa";
import { actions } from "astro:actions";
import React, { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import {} from "react-hot-toast/headless";

const LikeAction = ({
  dataAdd,
  id,
}: {
  dataAdd: {
    title: string;
    poster: string;
    list_id: number;
    release_list: string | Date;
    type: "movie" | "tv";
    user_id: string;
  };
  id: number;
}) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [favorite, setFavorite] = useState<Array<SavedList>>([]);

  useEffect(() => {
    async function getFavorite() {
      const res = await fetch("/api/favorite");
      const result = await res.json();
      setFavorite(result.data);
    }

    getFavorite();
  }, []);

  return (
    <button
      className="p-3 rounded-full text-xl border-2 border-white disabled:cursor-wait"
      disabled={isLoading}
      onClick={async () => {
        const findId = favorite.find((list) => list.list_id === id);
        try {
          setIsLoading(true);
          if (findId) {
            const { data, error } = await actions.deleteFavorite.safe({
              id: findId.id as string,
            });
            setFavorite((prev) => prev.filter((list) => list.id !== findId.id));
            if (data?.success) {
              toast.success("Removed from favorite");
            } else {
              toast.error("Failed to remove favorite");
            }
          } else {
            const { data } = await actions.addFavorite.safe(dataAdd);
            setFavorite((prev) => [...prev, data?.data[0]]);
            if (data?.success) {
              toast.success("Added to favorite");
            } else {
              toast.error("Failed to add favorite");
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
