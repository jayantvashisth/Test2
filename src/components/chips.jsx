// used in discussion card
export const SectorChips = ({ text, bg }) => {
  return (
    <div
      className={`${bg} flex items-center rounded-full px-3 text-[10px] text-white md:text-sm`}
    >
      {text}
    </div>
  );
};
