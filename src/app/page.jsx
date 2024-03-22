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
    <main className="flex flex-row w-full">
      <div>
        <SideMenu showSideBar={showSideBar} toggleSideBar={toggleSideBar} />
      </div>
      <div className="flex flex-row justify-center w-3/5">
        <DiscussionForum />
      </div>
      <div className="w-1/5">
        <MarketStories />
      </div>
    </main>
  );
}
