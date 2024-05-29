import React from "react";

const Dropdown = ({ title, options, func }) => {
  return (
    <div>
      <div className="select text-[0.8rem]">
        <select
          onChange={(e) => func(e.target.value)}
          defaultValue={0}
          title="Filter"
          name="format"
          id="format"
          className="appearance-none outline-0 bg-zinc-700 flex-1 px-10 py-2 uppercase rounded-lg"
        >
          <option value={0} disabled>
            {title} 🢓
          </option>
          {options.map((o, i) => {
            return (
              <option value={o} key={i}>
                {o}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default Dropdown;
