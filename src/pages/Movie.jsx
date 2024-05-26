import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";
import Topnav from "../components/Topnav";
import Dropdown from "../components/Dropdown";
import Instance from "../utils/axios";
import Loader from "./Loader";
import Cards from "../components/Cards";
import InfiniteScroll from "react-infinite-scroll-component";

const Movie = () => {
  const [category, setCategory] = useState("top_rated");
  const [Movie, setMovie] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  const getMovie = async () => {
    try {
      const { data } = await Instance.get(`/movie/${category}?page=${page}`);
      setMovie((prevState) => [...prevState, ...data.results]);
      setPage((prevPage) => prevPage + 1);
      if (!data.results.length) {
        setHasMore(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setMovie([]);
    setPage(1);
    setHasMore(true);
    getMovie();
  }, [category]);

  return category && Movie.length ? (
    <div className="w-full px-10">
      <div className="w-full h-[10vh] flex justify-between items-center">
        <h1 className="text-2xl text-zinc-400 font-black flex items-center gap-10">
          <Link to="/">
            <IoArrowBackOutline className="text-3xl hover:text-[#6556cd] duration-300" />
          </Link>
          <span className="text-[#6556cd] ">Movie</span>
        </h1>
        <Topnav />
        <div className="flex gap-5">
          <Dropdown
            title={"category"}
            options={["upcoming", "popular", "now_playing", "top_rated"]}
            func={setCategory}
          />
        </div>
      </div>
      <InfiniteScroll
        hasMore={hasMore}
        next={getMovie}
        dataLength={Movie.length}
        loader={<h1>Loading...</h1>}
      >
        <div className="cards flex justify-center gap-10 flex-wrap py-10">
          {Movie && Movie.map((c, i) => <Cards data={c} key={i} />)}
        </div>
      </InfiniteScroll>
    </div>
  ) : (
    <Loader />
  );
};

export default Movie;
