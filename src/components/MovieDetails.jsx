import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncLoadMovie } from "../store/actions/movieActions";
import { Link, useNavigate, useParams } from "react-router-dom";
import { removeDetail } from "../store/reducers/movieSlice";
import { IoArrowBackOutline } from "react-icons/io5";
import { RiExternalLinkFill } from "react-icons/ri";
import { LiaImdb } from "react-icons/lia";
import Loader from "../pages/Loader";
import { SiWikidata } from "react-icons/si";

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { info } = useSelector((state) => state.movie);
  console.log(info);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncLoadMovie(id));
    return () => {
      dispatch(removeDetail());
    };
  }, []);

  return info ? (
    <div
      className="w-screen min-h-screen p-6 overflow-x-hidden"
      style={{
        background: info.detail.backdrop_path
          ? `linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.5),rgba(0,0,0,0.7)),url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`
          : "linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.5),rgba(0,0,0,0.7))",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <nav className="w-full flex gap-10 text-2xl items-center">
        <Link onClick={() => navigate(-1)}>
          <IoArrowBackOutline className="hover:text-[#6556cd] duration-300" />
        </Link>
        <a href={`${info.detail.homepage}`} target="_blank">
          <RiExternalLinkFill />
        </a>
        <a
          href={`https://www.wikidata.org/wiki/${info.externalId.wikidata_id}`}
          target="_blank"
        >
          <SiWikidata />
        </a>
        <a
          href={`https://www.imdb.com/title/${info.externalId.imdb_id}/`}
          target="_blank"
        >
          <LiaImdb className="text-3xl" />
        </a>
      </nav>

      <div className="w-full flex gap-10 text-2xl items-center p-5">
        <div>
          <img
            src={`https://image.tmdb.org/t/p/original/${
              info.detail.poster_path ||
              info.detail.backdrop_path ||
              info.detail.profile_path
            }`}
            className="h-[20rem]"
          />
        </div>
      </div>

      <div>
        <div className="flex gap-2 overflow-hidden">
          {info.watchProviders.flatrate &&
            info.watchProviders.flatrate.map((value, i) => {
              return (
                <img
                  className="h-[5vh] w-[5vh] object-cover rounded-md"
                  src={`https://image.tmdb.org/t/p/original/${value.logo_path}`}
                  key={i}
                />
              );
            })}

          {info.watchProviders.rent &&
            info.watchProviders.rent.map((value, i) => {
              return (
                <img
                  className="h-[5vh] w-[5vh] object-cover rounded-md"
                  src={`https://image.tmdb.org/t/p/original/${value.logo_path}`}
                  key={i}
                />
              );
            })}
        </div>
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default MovieDetails;
