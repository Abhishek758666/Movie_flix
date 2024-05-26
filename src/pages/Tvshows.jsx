import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";
import Topnav from "../components/Topnav";
import Dropdown from "../components/Dropdown";
import Instance from "../utils/axios";
import Loader from "./Loader";
import Cards from "../components/Cards";
import InfiniteScroll from "react-infinite-scroll-component";

const TvShow = () => {
  const [category, setCategory] = useState("airing_today");
  const [TvShow, setTvShow] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  const getTvShow = async () => {
    try {
      const { data } = await Instance.get(`/tv/${category}?page=${page}`);
      setTvShow((prevState) => [...prevState, ...data.results]);
      setPage((prevPage) => prevPage + 1);
      if (!data.results.length) {
        setHasMore(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setTvShow([]);
    setPage(1);
    setHasMore(true);
    getTvShow();
  }, [category]);

  return category && TvShow.length ? (
    <div className="w-full px-10">
      <div className="w-full h-[10vh] flex justify-between items-center">
        <h1 className="text-2xl text-zinc-400 font-black flex items-center gap-10">
          <Link to="/">
            <IoArrowBackOutline className="text-3xl hover:text-[#6556cd] duration-300" />
          </Link>
          <span className="text-[#6556cd] ">TvShow</span>
        </h1>
        <Topnav />
        <div className="flex gap-5">
          <Dropdown
            title={"category"}
            options={["on_the_air", "popular", "top_rated", "airing_today"]}
            func={setCategory}
          />
        </div>
      </div>
      <InfiniteScroll
        hasMore={hasMore}
        next={getTvShow}
        dataLength={TvShow.length}
        loader={<h1>Loading...</h1>}
      >
        <div className="cards flex justify-center gap-10 flex-wrap py-10">
          {TvShow && TvShow.map((c, i) => <Cards data={c} key={i} />)}
        </div>
      </InfiniteScroll>
    </div>
  ) : (
    <Loader />
  );
};

export default TvShow;
