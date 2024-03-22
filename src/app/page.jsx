"use client";
import { DiscussionForum } from "@/components/discussionForum";
import { MarketStories } from "@/components/marketStories";
import { SideMenu } from "@/components/sideMenu";
import { TopButtons } from "@/components/topButtons";
import clsx from "clsx";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [showSideBar, setShowSideBar] = useState(false);
  const [active, setActive] = useState("discussion");

  const toggleSideBar = () => {
    setShowSideBar(!showSideBar);
  };

  return (
    <main className="flex flex-col">
      <TopButtons active={active} setActive={setActive} />

      <div
        className={clsx("flex flex-row w-full justify-center lg:justify-end")}
      >
        <div>
          {/* side menu column */}
          <SideMenu showSideBar={showSideBar} toggleSideBar={toggleSideBar} />

          {/* discussion forum column */}
          <div
            className={clsx(
              "flex flex-row justify-center transition-all duration-300",
              {
                "lg:justify-end ": showSideBar,
                "hidden lg:flex": active != "discussion",
              }
            )}
          >
            <DiscussionForum showSideBar={showSideBar} />
          </div>
        </div>

        {/* market stories column */}
        <div
          className={clsx("flex flex-row", {
            "justify-center": active == "market",
            "hidden lg:flex": active != "market",
          })}
        >
          <MarketStories showSideBar={showSideBar} />
        </div>
      </div>
    </main>
  );
}
