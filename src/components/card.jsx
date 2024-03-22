import Image from "next/image";
import React from "react";
import { SectorChips } from "./chips";
import {
  FaCircleUser,
  FaRegHeart,
  FaRegEye,
  FaRegComment,
} from "react-icons/fa6";
import { AiOutlineShareAlt } from "react-icons/ai";
import { DiscussionCardIcons } from "./icons";
import clsx from "clsx";

export const StoriesCard = ({ showSideBar }) => {
  return (
    <div
      className={clsx("flex flex-col w-4/5 transition-all duration-300", {
        "lg:w-[280px] max-[1200]:w-[300px] xl:w-[330px]": showSideBar,
        "lg:w-[330px] xl:w-[370px]": !showSideBar,
      })}
    >
      <Image
        src="https://techographics.com/wp-content/uploads/2023/12/11-phone-wallpaper-vaporwave.jpg"
        alt="card-image"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "100%" }}
      />
      <div className="flex flex-col p-3 border bottom-1">
        <span className="font-bold">The Coldest Sunset</span>
        <p className="sm:text-[12px] min-[1200]:text-[14px] xl:text-[14px]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint neque
          vitae ullam doloribus nemo nihil recusandae animi non voluptatibus
          ipsa.
        </p>
      </div>
    </div>
  );
};

export const DiscussionCards = () => {
  return (
    <div className="relative flex flex-row border border-gray-100 gap-2 md:gap-4 pl-2 md:pl-5 pr-2 py-3 w-full">
      <div>
        <FaCircleUser className="w-[20px] md:w-[30px] h-[20px] md:h-[30px]" />
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row w-full justify-between">
          <div className="flex flex-row items-center gap-2 md:gap-5">
            <span className="font-bold">Lorem Ipsum</span>
            <SectorChips text={"Sector 2"} bg={"bg-purple-950"} />
          </div>
        </div>
        <div className="text-[10px] sm:text-[12px]  min-[1200]:text-[14px] xl:text-[14px]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod atque
          explicabo necessitatibus praesentium accusamus ullam, animi nulla.
          Harum, esse cumque?
        </div>
        <div className="flex flex-row justify-between mt-2">
          <DiscussionCardIcons icon={<FaRegHeart />} tag="2K" />
          <DiscussionCardIcons icon={<FaRegEye />} tag="2K" />
          <DiscussionCardIcons icon={<FaRegComment />} tag="2K Comments" />
          <DiscussionCardIcons icon={<AiOutlineShareAlt />} tag="Share" />
        </div>
      </div>
      <span className="max-[500px]:absolute max-[500px]:right-2 md:flex text-nowrap text-[12px] text-blue-800 font-medium">
        2 Mins Ago
      </span>
    </div>
  );
};
