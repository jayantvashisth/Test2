// used in duscussion cards

export const DiscussionCardIcons = ({ icon, tag }) => {
  return (
    <div className="flex flex-row gap-1 items-center">
      {icon}
      <span className="text-[10px] sm:text-[12px]  min-[1200]:text-[14px] font-semibold">
        {tag}
      </span>
    </div>
  );
};
