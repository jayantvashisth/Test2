"use client";
import { DiscussionForum } from "@/components/discussionForum";
import { MarketStories } from "@/components/marketStories";
import { SideMenu } from "@/components/sideMenu";
import clsx from "clsx";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [showSideBar, setShowSideBar] = useState(false);

  const toggleSideBar = () => {
    setShowSideBar(!showSideBar);
  };

  return (
    <main className="flex flex-row w-full justify-end">
      <div>
        <SideMenu showSideBar={showSideBar} toggleSideBar={toggleSideBar} />
        <div
          className={clsx("flex flex-row transition-all duration-300", {
            "justify-end": showSideBar,
            "justify-center": !showSideBar,
          })}
        >
          <DiscussionForum showSideBar={showSideBar} />
        </div>
      </div>
      <div className="flex">
        <MarketStories />
      </div>
    </main>
  );
}
