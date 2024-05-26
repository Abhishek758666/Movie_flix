import React from "react";

import { FaFire } from "react-icons/fa";
import { VscSparkleFilled } from "react-icons/vsc";
import { BiSolidCameraMovie } from "react-icons/bi";
import { PiTelevisionFill } from "react-icons/pi";
import { PiTelevisionSimpleFill } from "react-icons/pi";
import { IoMdInformationCircle } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { IoPeople } from "react-icons/io5";

import { Link } from "react-router-dom";
import Feed from "./subcomponents/Feed";

const Sidebar = () => {
  const feeds = [
    {
      icon: FaFire,
      title: "trending",
    },
    {
      icon: VscSparkleFilled,
      title: "popular",
    },
    {
      icon: BiSolidCameraMovie,
      title: "movies",
    },
    {
      icon: PiTelevisionFill,
      title: "tv shows",
    },
    {
      icon: IoPeople,
      title: "people",
    },
  ];

  const infos = [
    {
      icon: IoMdInformationCircle,
      title: "about",
    },
    {
      icon: FaPhone,
      title: "contact",
    },
  ];

  return (
    <div className="sidebar w-[20%] h-full border-r-2 border-zinc-200 p-10">
      <h1 className="flex gap-3 items-center text-2xl">
        <PiTelevisionFill className="text-[#6556cd]" />
        Movie Flix
      </h1>
      <nav className="mt-10 mb-5 flex flex-col text-zinc-400">
        <h1 className="font-semibold text-xl text-white my-3">New Feeds</h1>

        {feeds.map((f, i) => {
          return <Feed key={i} title={f.title} icon={f.icon} />;
        })}
      </nav>
      <hr />
      <nav>
        <h1 className="font-semibold text-xl text-white my-5">
          Website Information
        </h1>

        {infos.map((f, i) => {
          return <Feed key={i} title={f.title} icon={f.icon} />;
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
