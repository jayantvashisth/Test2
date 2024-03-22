import React from "react";
import { DiscussionCards } from "./card";

export const DiscussionForum = () => {
  return (
    <div className="flex flex-col w-4/5">
      <h2 className="mt-4 mb-8">
        <span className="text-red-900 bg-yellow-600 px-2 py-2">
          DISCUSSION FORUM
        </span>
      </h2>
      <div className="flex flex-col gap-8 w-full">
        {[1, 2, 3, 4].map((ele, ind) => {
          return <DiscussionCards key={ind} />;
        })}
      </div>
    </div>
  );
};
