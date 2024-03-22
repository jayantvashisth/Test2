import clsx from "clsx";
import React from "react";

export const TopButtons = ({ active, setActive }) => {
  return (
    <div className="flex items-center w-full lg:hidden h-[40px] cursor-pointer">
      {/* discussion forum button */}
      <div
        className={clsx(
          "w-1/2 flex flex-row items-center justify-center text-white border-r border-red-50 h-full",
          {
            "bg-purple-950": active == "discussion",
            " bg-purple-900": active != "discussion",
          }
        )}
        onClick={() => {
          setActive("discussion");
        }}
      >
        <span>Discussion Forum</span>
      </div>

      {/* market stories button */}
      <div
        className={clsx(
          "w-1/2 flex flex-row items-center justify-center text-white h-full",
          {
            "bg-purple-950": active == "market",
            " bg-purple-900": active != "market",
          }
        )}
        onClick={() => {
          setActive("market");
        }}
      >
        <span>Market Stories</span>
      </div>
    </div>
  );
};
