import React from "react";
import { DiscussionCards } from "./card";
import clsx from "clsx";

export const DiscussionForum = ({ showSideBar }) => {
  return (
    <div
      className={clsx("flex flex-col transition-all duration-300", {
        "w-[70%]": showSideBar,
        "w-4/5": !showSideBar,
      })}
    >
      <h2 className="mt-4 mb-8">
        <span className="text-red-900 bg-yellow-600 px-2 py-2">
          DISCUSSION FORUM
        </span>
      </h2>
      <div className="flex flex-col gap-8 w-full">
        {[1, 2, 3, 4, 5, 6].map((ele, ind) => {
          return <DiscussionCards key={ind} />;
        })}
      </div>
    </div>
  );
};
