import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";
import { RiExternalLinkFill } from "react-icons/ri";
import { LiaImdb } from "react-icons/lia";
import Loader from "../pages/Loader";
import { SiWikidata } from "react-icons/si";
import { FaPlay } from "react-icons/fa";
import Horizontalcards from "../components/Horizontalcards";
import { removeDetail } from "../store/reducers/tvSlice";
import { asyncLoadTv } from "../store/actions/tvActions";

const TvDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { info } = useSelector((state) => state.tv);
  console.log(info);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncLoadTv(id));
    return () => {
      dispatch(removeDetail());
    };
  }, [id]);

  return info ? (
    <div
      className="w-full min-h-screen p-6 relative overflow-x-hidden"
      style={{
        background: info.detail.backdrop_path
          ? `linear-gradient(rgba(0,0,0,0.2),rgba(123,104,238,0.3),rgba(123,104,238,0.4)),url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`
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

      <div className="w-full flex gap-10 text-2xl p-5">
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
        <div>
          <h1 className="text-5xl flex gap-5 font-black">
            {info.detail.title ||
              info.detail.name ||
              info.detail.original_name ||
              info.detail.original_title}
            {info.detail.vote_average && (
              <span className="font-black text-lg top-[0] right-0 h-[8vh] w-[8vh] rounded-full bg-yellow-600 flex justify-center items-center">
                {info.detail.vote_average.toFixed()}/10
              </span>
            )}
          </h1>
          <div className="my-5 flex items-center gap-5">
            <span className="text-sm">{info.detail.release_date}</span>
            <h1 className="text-sm">
              -{info.detail.genres.map((v, i) => v.name).join(",")}
            </h1>
          </div>
          <h3 className="italic text-lg">{info.detail.tagline}</h3>

          <h1 className="font-black">Overview</h1>
          <p className="text-lg my-5 w-[60vw]">{info.detail.overview}</p>
          <Link
            to={`./trailer`}
            className="text-lg w-[10rem] px-5 py-2 flex justify-start gap-2 items-center bg-[#6556cd] rounded-xl"
          >
            <FaPlay />
            Play trailer
          </Link>
        </div>
        <br />
      </div>

      {info.recommendations && info.similar && (
        <div className="p-10">
          <hr />
          <h1 className="text-3xl capitalize font-black py-5">
            recommendations & similar
          </h1>
          <Horizontalcards
            data={
              info.recommendations.length > 0
                ? info.recommendations
                : info.similar
            }
          />
        </div>
      )}

      <Outlet />
    </div>
  ) : (
    <Loader />
  );
};

export default TvDetails;
