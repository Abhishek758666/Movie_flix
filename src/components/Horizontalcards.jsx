import React from "react";
import { Link } from "react-router-dom";

const Horizontalcards = ({ data }) => {
  return (
    <div className="w-full h-[42vh] p-2">
      <div className="w-full flex overflow-x-auto overflow-y-hidden">
        {data.map((t, i) => {
          return (
            <div
              key={i}
              className="block w-[20%] min-h-[15rem] flex-none bg-zinc-700 mr-5 p-4"
            >
              <img
                src={`https://image.tmdb.org/t/p/original/${
                  t.poster_path || t.backdrop.path
                }`}
                alt=""
                className="h-[10rem] w-full object-cover object-top"
              />
              <h1 className="text-xl font-semibold">
                {t.original_name || t.original_title || t.name || t.title}
              </h1>
              <p className="leading-none tracking-normal">
                {t.overview.slice(0, 100)}......
                <Link className="text-blue-300 font-bold">more</Link>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Horizontalcards;
