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

export const StoriesCard = () => {
  return (
    <div className="flex flex-col w-[330px]">
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
        <p className="content">
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
    <div className="flex flex-row border border-gray-100 gap-4 pl-5 pr-2 py-3 w-full">
      <div>
        <FaCircleUser className="w-[30px] h-[30px]" />
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row w-full justify-between">
          <div className="flex flex-row items-center gap-5">
            <span className="font-bold">Lorem Ipsum</span>
            <SectorChips text={"Sector 2"} bg={"bg-blue-400"} />
          </div>
        </div>
        <div className="card-content">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod atque
          explicabo necessitatibus praesentium accusamus ullam, animi nulla.
          Harum, esse cumque? Doloremque incidunt amet pariatur necessitatibus
          ab repellendus ut commodi dignissimos?
        </div>
        <div className="flex flex-row justify-between">
          <DiscussionCardIcons icon={<FaRegHeart />} tag="2K" />
          <DiscussionCardIcons icon={<FaRegEye />} tag="2K" />
          <DiscussionCardIcons icon={<FaRegComment />} tag="2K Comments" />
          <DiscussionCardIcons icon={<AiOutlineShareAlt />} tag="Share" />
        </div>
      </div>
      <span className="flex text-nowrap text-[12px] text-blue-800 font-medium">
        2 Mins Ago
      </span>
    </div>
  );
};
