import React from "react";
import { FaRegHeart } from "react-icons/fa";

const LikeAction = () => {
  return (
    <form
      // action=""
      onSubmit={(e) => {
        e.preventDefault();
        alert("like button clicked");
      }}
    >
      <button className="p-3 rounded-full text-xl border-2 border-white">
        <FaRegHeart />
      </button>
    </form>
  );
};

export default LikeAction;
