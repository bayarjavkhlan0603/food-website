import { DialogClose } from "@radix-ui/react-dialog";
import { Minus, Plus, X } from "lucide-react";
import { useState } from "react";

export const OrderCart = () => {
  return (
    <div className="w-full h-30 flex gap-[10px]">
      <div>
        <img className="h-full w-40 object-cover rounded-xl" src="" />
      </div>
      <div className="flex flex-col justify-between">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-[16px] font-bold text-[#EF4444]">{}</p>
            <p className="text-[12px]">{}</p>
          </div>

          <button className="p-2 border border-[#EF4444] rounded-[9999px] ">
            <X className="text-[#EF4444] w-4 h-4" />
          </button>
        </div>
        <div className="flex justify-between items-center text-black">
          <div className="flex items-center">
            <button className="py-2 px-2">
              <Minus className="w-4 h-4" />
            </button>
            <p className="text-[18px] font-semibold">1</p>
            <button className="py-2 px-2">
              <Plus className="w-4 h-4" />
            </button>
          </div>
          <p className="text-[16px] font-bold ">${}</p>
        </div>
      </div>
    </div>
  );
};
