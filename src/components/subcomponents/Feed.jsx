import React from "react";
import { Link } from "react-router-dom";

const Feed = ({ title, icon: Icon }) => {
  return (
    <>
      <Link
        to={`/${title}`}
        className="mt-2 p-4 hover:bg-[#6556cd] flex items-center gap-2 hover:text-white rounded-lg duration-300 capitalize"
      >
        <Icon />
        {title}
      </Link>
    </>
  );
};

export default Feed;
