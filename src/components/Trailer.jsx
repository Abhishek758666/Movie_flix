import React from "react";
import { GrClose } from "react-icons/gr";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";

const Trailer = () => {
  const { pathname } = useLocation();
  const { id } = useParams();
  const category = pathname.includes("movies") ? "movie" : "tv";
  const key = useSelector((state) => state[category].info.videos?.key);

  return (
    <div className="top-0 left-0 z-50 backdrop-blur-sm font-black fixed w-full h-screen flex flex-col items-center justify-center">
      <Link
        to={`/${category == "movie" ? "movies" : "tv shows"}/details/${id}`}
        className="text-3xl hover:text-[#6556cd] dura absolute top-6 right-6"
      >
        <GrClose />
      </Link>

      {key ? (
        <ReactPlayer
          controls="true"
          height={"80vh"}
          width={"80vw"}
          url={`https://www.youtube.com/watch?v=${key}`}
        />
      ) : (
        <h1 className="text-5xl"> 404: Not Found</h1>
      )}
    </div>
  );
};

export default Trailer;
