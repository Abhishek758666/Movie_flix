import React from "react";
import { Link } from "react-router-dom";

const Horizontalcards = ({ data }) => {
  return (
    <div className="w-full h-[42vh p-2">
      <div className="w-full flex overflow-x-auto overflow-y-hidden">
        {data.map((t, i) => {
          return (
            <Link
              to={`/${
                t.media_type === "movie" ? "movies" : "tv shows"
              }/details/${t.id}`}
              key={i}
              className="block w-[20%] min-h-[15rem] flex-none bg-zinc-700 mr-5 p-4"
            >
              <img
                src={`https://image.tmdb.org/t/p/original/${
                  t.poster_path || t.backdrop_path
                }`}
                alt=""
                className="h-[10rem] w-full object-cover object-top"
              />
              <h1 className="text-xl font-semibold">
                {t.original_name || t.original_title || t.name || t.title}
              </h1>
              <p className="leading-none tracking-normal">
                {t.overview.slice(0, 100)}......
                <span className="text-blue-300 font-bold">more</span>
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Horizontalcards;
