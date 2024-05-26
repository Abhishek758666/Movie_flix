import React from "react";
import { Link } from "react-router-dom";
import { MdDateRange } from "react-icons/md";
import { BiSolidPhotoAlbum } from "react-icons/bi";

const Headers = ({ data }) => {
  return (
    data && (
      <div
        style={{
          background: data.poster_path
            ? `linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.5),rgba(0,0,0,0.7)),url(https://image.tmdb.org/t/p/original/${data.poster_path})`
            : "linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.5),rgba(0,0,0,0.7))",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="w-full h-[50vh] flex flex-col justify-end items-start p-[5%]"
      >
        <h1 className="text-5xl font-bold">
          {data.original_name || data.original_title || data.name || data.title}
        </h1>
        <p className="w-1/2 leading-none tracking-normal">
          {data.overview.slice(0, 200)}......
          <Link className="text-blue-300 font-bold">more</Link>
        </p>
        <p className="flex items-center mt-5">
          <MdDateRange className="text-yellow-400" />
          {data.release_date || data.first_air_date}
          <BiSolidPhotoAlbum className="text-yellow-400 ml-3" />
          {data.media_type.toUpperCase()}
        </p>
        <Link className="mt-5 p-4 bg-[#655dc3] rounded-lg">Watch Trailer</Link>
      </div>
    )
  );
};

export default Headers;
