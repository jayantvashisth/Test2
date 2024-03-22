"use client"
import { DiscussionForum } from "@/components/discussionForum";
import { MarketStories } from "@/components/marketStories";
import { SideMenu } from "@/components/sideMenu";
import clsx from "clsx";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [showSideBar, setShowSideBar] = useState(true);

  const toggleSideBar = () => {
    if(showSideBar){
      setShowSideBar(false)
    }
    else{
      setShowSideBar(true)
    }
    // setShowSideBar(!showSideBar); // Toggle the showSideBar state
    console.log("hello");
  };

  // useEffect(() => {
  //   console.log("showSideBar updated:", showSideBar);
  // }, [showSideBar]);

  return (
    <main className="flex flex-row w-full">
      <div
        onClick={() => {
          setShowSideBar(false);
        }}
      >
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
