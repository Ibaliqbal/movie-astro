import React, { useState } from "react";

const FormSearch = ({ type }: { type: "movie" | "tv" }) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const query = form.query.value;
        if (!query || query.trim() == "") return;
        const url = new URL(`/${type}/search`, window.location.origin);
        url.searchParams.set("page", "1");
        url.searchParams.set("q", encodeURIComponent(query));
        window.location.assign(url.toString());
      }}
      className="my-4 text-black"
    >
      <input
        type="text"
        name="query"
        className="w-full px-2 py-3 rounded-md"
        placeholder="Search something...."
      />
    </form>
  );
};

export default FormSearch;
