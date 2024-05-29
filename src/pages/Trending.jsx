import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";
import Topnav from "../components/Topnav";
import Dropdown from "../components/Dropdown";
import Instance from "../utils/axios";
import Loader from "./Loader";
import Cards from "../components/Cards";
import InfiniteScroll from "react-infinite-scroll-component";

const Trending = () => {
  const [category, setCategory] = useState("all");
  const [duration, setDuration] = useState("day");
  const [trending, setTrending] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  const getTrending = async () => {
    try {
      const { data } = await Instance.get(
        `trending/${category}/${duration}?page=${page}`
      );
      setTrending((prevState) => [...prevState, ...data.results]);
      setPage((prevPage) => prevPage + 1);
      if (!data.results.length) {
        setHasMore(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setTrending([]);
    setPage(1);
    setHasMore(true);
    getTrending();
  }, [category, duration]);

  return category && duration && trending.length ? (
    <div className="w-full px-10">
      <div className="w-full h-[10vh] flex justify-between items-center">
        <h1 className="text-2xl text-zinc-400 font-black flex items-center gap-10">
          <Link to="/">
            <IoArrowBackOutline className="text-3xl hover:text-[#6556cd] duration-300" />
          </Link>
          <span className="text-[#6556cd] ">Trending</span>
        </h1>
        <Topnav />
        <div className="flex gap-5">
          <Dropdown
            title={"category"}
            options={["all", "movie", "tv"]}
            func={setCategory}
          />
          <Dropdown
            title={"duration"}
            options={["day", "week"]}
            func={setDuration}
          />
        </div>
      </div>
      <InfiniteScroll
        hasMore={hasMore}
        next={getTrending}
        dataLength={trending.length}
        loader={<h1>Loading...</h1>}
      >
        <div className="cards flex justify-center gap-10 flex-wrap py-10">
          {trending &&
            trending.map((c, i) => (
              <Cards
                data={c}
                title={category == "tv" ? "tv shows" : "movies"}
                key={i}
              />
            ))}
        </div>
      </InfiniteScroll>
    </div>
  ) : (
    <Loader />
  );
};

export default Trending;
