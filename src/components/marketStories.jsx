import React from "react";
import { StoriesCard } from "./card";

export const MarketStories = () => {
  return (
    <div className="px-8 w-[100%]">
      <h2 className="mt-4 mb-8">
        <span className="text-red-900 bg-yellow-600 px-2 py-2">
          MARKET STORIES
        </span>
      </h2>
      <div className="flex flex-col gap-10">
        {[1, 2, 3].map((ele, ind) => {
          return <StoriesCard key={ind} />;
        })}
      </div>
    </div>
  );
};
