import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Topnav from "../components/Topnav";
import Instance from "../utils/axios";
import Headers from "../components/Headers";
import Horizontalcards from "../components/Horizontalcards";
import Dropdown from "../components/Dropdown";
import Loader from "./Loader";

const Home = () => {
  const [mainVideo, setMainVideo] = useState(null);
  const [trending, setTrending] = useState(null);

  const [category, setCategory] = useState("all");

  const getMainVideo = async () => {
    try {
      const { data } = await Instance.get("trending/all/day");
      let num = Math.ceil(Math.random() * data.results.length) - 1;
      const randomData = data.results[num];
      setMainVideo(randomData);
    } catch (error) {
      console.log(error);
    }
  };

  const getTrending = async () => {
    try {
      const { data } = await Instance.get(`trending/${category}/day`);
      setTrending(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    !mainVideo && getMainVideo();
    getTrending();
  }, [category]);

  return mainVideo && trending ? (
    <div className="flex w-full h-screen">
      <Sidebar />
      <div className="w-[80%] h-full overflow-y-auto">
        <Topnav />
        <Headers data={mainVideo} />
        <div className="p-5 flex justify-between ">
          <h1 className="text-2xl text-zinc-400 font-semibold">Trending</h1>
          <Dropdown
            title="filter"
            options={["tv", "movie", "all"]}
            func={setCategory}
          />
        </div>
        <Horizontalcards data={trending} />
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default Home;
