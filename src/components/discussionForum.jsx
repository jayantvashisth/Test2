import React from "react";
import { DiscussionCards } from "./card";
import clsx from "clsx";

export const DiscussionForum = ({ showSideBar }) => {
  return (
    <div
      className={clsx("flex flex-col transition-all duration-300 max-lg:pt-5", {
        "w-4/5 xl:w-[70%] lg:w-[62%] ": showSideBar,
        "w-4/5": !showSideBar,
      })}
    >
      {/* discussion forum title */}
      <h2 className="mt-4 mb-8 max-lg:hidden">
        <span className="text-red-900 bg-yellow-100 px-2 py-2">
          DISCUSSION FORUM
        </span>
      </h2>

      {/* discussion forum cards */}
      <div className="flex flex-col gap-8 w-full">
        {[1, 2, 3, 4, 5, 6].map((ele, ind) => {
          return <DiscussionCards key={ind} />;
        })}
      </div>
    </div>
  );
};
