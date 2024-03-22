import clsx from "clsx";
import React from "react";

export const SideMenu = ({ showSideBar, toggleSideBar }) => {
  return (
    <div
      className={clsx(
        "flex flex-row w-1/5 bg-blue-600  p-10 pl-20 text-white fixed h-full transition-transform duration-300 ease-in-out",
        {
          "transform translate-x-1000": showSideBar,
          "transform -translate-x-full": !showSideBar,
        }
      )}
    >
      <div className="header">
        <span>Hello, User</span>
      </div>
      <button
        onClick={toggleSideBar}
        className="w-[66px] rotate-90 fixed top-1/2 right-[-40px] bg-blue-600"
      >
        Click Me
      </button>
    </div>
  );
};
