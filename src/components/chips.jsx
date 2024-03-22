import React from "react";

export const SectorChips = ({ text, bg }) => {
  return <div className={`${bg} flex items-center rounded-full px-3 text-sm`}>{text}</div>;
};
