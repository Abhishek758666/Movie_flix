import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";
import Topnav from "../components/Topnav";
import Dropdown from "../components/Dropdown";
import Instance from "../utils/axios";
import Loader from "./Loader";
import Cards from "../components/Cards";
import InfiniteScroll from "react-infinite-scroll-component";

const People = () => {
  const [person, setPerson] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  const getPerson = async () => {
    try {
      const { data } = await Instance.get(`/person/popular?page=${page}`);
      setPerson((prevState) => [...prevState, ...data.results]);
      setPage((prevPage) => prevPage + 1);
      if (!data.results.length) {
        setHasMore(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setPerson([]);
    setPage(1);
    setHasMore(true);
    getPerson();
  }, []);

  return person ? (
    <div className="w-full px-10">
      <div className="w-full h-[10vh] flex justify-between items-center">
        <h1 className="text-2xl text-zinc-400 font-black flex items-center gap-10">
          <Link to="/">
            <IoArrowBackOutline className="text-3xl hover:text-[#6556cd] duration-300" />
          </Link>
          <span className="text-[#6556cd] ">Person</span>
        </h1>
        <Topnav />
      </div>
      <InfiniteScroll
        hasMore={hasMore}
        next={getPerson}
        dataLength={person.length}
        loader={<h1>Loading...</h1>}
      >
        <div className="cards flex justify-center gap-10 flex-wrap py-10">
          {person && person.map((c, i) => <Cards data={c} key={i} />)}
        </div>
      </InfiniteScroll>
    </div>
  ) : (
    <Loader />
  );
};

export default People;
