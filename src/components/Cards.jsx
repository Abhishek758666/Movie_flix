import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ data, title }) => {
  console.log(title);
  return (
    <Link
      to={`/${data.media_type || title}/details/${data.id}`}
      className="relative w-[20%] min-h-[24rem] hover:bg-zinc-700 bg-zinc-800 duration-300 rounded-lg p-1"
    >
      <img
        src={`https://image.tmdb.org/t/p/original/${
          data.poster_path || data.backdrop_path || data.profile_path
        }`}
        alt=""
        className="h-[20rem] w-full object-cover object-top rounded-lg"
      />
      <h1 className="font-bold p-2">
        {data.original_name || data.original_title || data.name || data.title}
      </h1>
      {data.vote_average && (
        <span className="absolute -translate-y-1/2 font-black top-[0] right-0 h-[7vh] w-[7vh] rounded-full bg-yellow-600 flex justify-center items-center">
          {data.vote_average.toFixed()}/10
        </span>
      )}
    </Link>
  );
};

export default Cards;
