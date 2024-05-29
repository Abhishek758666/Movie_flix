import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import Instance from "../utils/axios";
import noImg from "/noImg.jpg";

const Topnav = () => {
  const [query, setQuery] = useState("");
  const [searches, setSearches] = useState(null);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const toogleHandler = () => {
    setQuery("");
  };

  const getSearches = async () => {
    try {
      const { data } = await Instance.get(`/search/multi?query=${query}`);
      setSearches(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSearches();
  }, [query]);

  return (
    <div className="w-full h-[7vh] relative flex justify-center gap-2 items-center">
      <CiSearch className="text-3xl" />
      <input
        value={query}
        onChange={handleChange}
        type="text"
        placeholder="search..."
        className="w-[50%] px-5 py-1 bg-transparent rounded-2xl outline-none"
      />
      {query.length > 0 && (
        <RxCross2 className="text-3xl" onClick={toogleHandler} />
      )}

      <div className="absolute w-[50%] max-h-[70vh] overflow-auto  z-50 top-[100%] left-1/2 -translate-x-1/2  rounded-lg">
        {searches &&
          searches.map((s, i) => (
            <Link
              to={`/${s.media_type == "tv" ? "tv shows" : "movies"}/details/${
                s.id
              }`}
              key={i}
              className="w-full p-3 scroll-px-72 flex gap-5 justify-start items-center border-b-[1px] bg-[#1b1b1b] hover:bg-zinc-800 duration-200"
            >
              <img
                className="h-[10vh] w-[10vh] object-cover"
                src={
                  s.backdrop_path ||
                  s.profile_path ||
                  s.poster_path ||
                  s.profile_path
                    ? `https://image.tmdb.org/t/p/original/${
                        s.backdrop_path ||
                        s.profile_path ||
                        s.poster_path ||
                        s.profile_path
                      }`
                    : noImg
                }
                alt=""
              />
              <span>
                {s.original_name || s.original_title || s.name || s.title}
              </span>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Topnav;
