import clsx from "clsx";

// used in sidemenu
export const SideMenuHeader = ({ icon1, text, icon2 }) => {
  return (
    <div className="flex flex-row justify-between items-center h-[60px] border-b w-full px-3">
      <div className="flex flex-row items-center gap-2">
        {icon1}
        <span>{text}</span>
      </div>
      {icon2}
    </div>
  );
};

export const SideMenuTabs = ({ icon1, text, icon2 }) => {
  return (
    <div className="flex flex-row justify-between items-center hover:bg-slate-700 h-[40px] w-full px-3 cursor-pointer">
      <div
        className={clsx("flex flex-row items-center gap-2", {
          "pl-6": !icon1,
        })}
      >
        {icon1}
        <span>{text}</span>
      </div>
      {icon2}
    </div>
  );
};
