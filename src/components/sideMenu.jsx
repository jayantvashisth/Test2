import clsx from "clsx";
import React from "react";
import { AiFillCaretUp } from "react-icons/ai";
import {
  FaRegCommentDots,
  FaCaretDown,
  FaCircleUser,
  FaBell,
  FaCommentDollar,
} from "react-icons/fa6";
import { SideMenuHeader, SideMenuTabs } from "./sideMenuTabs";

export const SideMenu = ({ showSideBar, toggleSideBar }) => {
  return (
    <div
      className={clsx(
        "flex flex-row w-1/5 min-w-[260px] bg-purple-950 top-0 left-0 pt-2 text-white fixed h-screen z-30 transition-transform duration-300 ease-in-out",
        {
          "transform translate-x-1000": showSideBar,
          "transform -translate-x-full": !showSideBar,
        }
      )}
    >
      {/* side menu buttons */}
      <div className="flex flex-col gap-2 w-full items-start justify-start px-2">
        <SideMenuHeader
          icon1={<FaCircleUser className="h-[30px] w-[30px]" />}
          text={"Hello, User"}
          icon2={<FaBell className="h-[20px] w-[20px]" />}
        />
        <SideMenuTabs
          icon1={<FaRegCommentDots />}
          text={"Discussion Forum"}
          icon2={<FaCaretDown />}
        />
        <SideMenuTabs icon1={<FaCommentDollar />} text={"Market Stories"} />
        <SideMenuTabs text={"Sentiment"} />
        <SideMenuTabs text={"Market"} />
        <SideMenuTabs text={"Sector"} />
        <SideMenuTabs text={"Watchlist"} />
        <SideMenuTabs text={"Events"} />
        <SideMenuTabs text={"News/Interview"} />
      </div>

      {/* used for opening/closing drawer */}
      <button
        onClick={toggleSideBar}
        className="w-[66px] rotate-90 fixed flex items-center justify-center top-1/2 right-[-40px] bg-purple-950"
      >
        <AiFillCaretUp />
      </button>
    </div>
  );
};
