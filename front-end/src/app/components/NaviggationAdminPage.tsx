import { LayoutDashboard, Settings, Truck } from "lucide-react";

export const Navigation = () => {
  return (
    <div className="py-[36px] px-5 flex flex-col gap-10">
      <div className="flex items-center gap-2">
        <img src="logo.svg" />
        <div>
          <p className="text-[18px] font-semibold">NomNom</p>
          <p className="text-[12px] text-[#71717A]">Swift delivery</p>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <button className="flex gap-[10px] bg-black py-2 px-6 rounded-[9999px] text-white text-[14px]">
          <p>
            <LayoutDashboard className="w-[22px] h-[22px]" />
          </p>
          <p>Food menu</p>
        </button>
        <button className="flex gap-[10px] bg-black py-2 px-6 rounded-[9999px] text-white text-[14px]">
          <p>
            <Truck className="w-[22px] h-[22px]" />
          </p>
          <p>Orders</p>
        </button>
        <button className="flex gap-[10px] bg-black py-2 px-6 rounded-[9999px] text-white text-[14px]">
          <p>
            <Settings className="w-[22px] h-[22px]" />
          </p>
          <p>Settings</p>
        </button>
      </div>
    </div>
  );
};
