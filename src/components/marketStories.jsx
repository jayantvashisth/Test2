import React from "react";
import { StoriesCard } from "./card";

export const MarketStories = ({ showSideBar }) => {
  return (
    <div className="px-8 w-[100%] max-lg:pt-8">
      
      {/* market stories title */}
      <h2 className="mt-4 mb-8 max-lg:hidden">
        <span className="text-red-900 bg-yellow-100 px-2 py-2">
          MARKET STORIES
        </span>
      </h2>

      {/* market stories card */}
      <div className="flex flex-col max-lg:items-center gap-10">
        {[1, 2, 3].map((ele, ind) => {
          return <StoriesCard key={ind} showSideBar={showSideBar} />;
        })}
      </div>
    </div>
  );
};
