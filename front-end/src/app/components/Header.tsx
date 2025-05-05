import { ShoppingCart, User } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";

import { OrderDetail } from "./OrderDetail";

export const Header = () => {
  return (
    <div className="w-screen bg-black py-3 px-22 fixed z-40 ">
      <div className="flex justify-between">
        <div className="flex items-center gap-3">
          <div>
            <img
              src="blob:https://www.figma.com/969d3966-7e8f-4b3c-8fdb-0cdb05c503b2"
              alt=""
            />
          </div>
          <div>
            <div className="flex">
              <p className="text-white text-xl">Nom</p>
              <p className="text-[#EF4444] text-xl">Nom</p>
            </div>
            <div className="text-white text-[12px]">Swift delivery</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Dialog>
            <DialogTrigger>
              <input
                type="location"
                placeholder="Add Location"
                className="bg-[#FFF] rounded-[9999px] border border-[#FFF] py-2 px-3 text-[12px] hover:bg-gray-300"
              />
            </DialogTrigger>
            <DialogContent>
              <DialogHeader className="flex flex-col gap-6">
                <DialogTitle className="text-[18px]">
                  Delivery address
                </DialogTitle>
                <DialogDescription className="flex flex-col gap-12">
                  <Textarea
                    className="py-2 px-3 h-28 text-[14px]"
                    placeholder="Please provide specific address details such as building number, entrance, and apartment number"
                  />
                  <div className="flex justify-end gap-4">
                    <button className="py-2 px-4 bg-black rounded-md text-[14px]">
                      Cancel
                    </button>
                    <button className="py-2 px-4 bg-black rounded-md text-[14px]">
                      Deliver Here
                    </button>
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
          <Sheet>
            <SheetTrigger>
              <div className="bg-[#FFF] px-2 py-2 rounded-[9999px] hover:bg-gray-800">
                <ShoppingCart className="w-4 h-4" />
              </div>
            </SheetTrigger>
            <SheetContent className="bg-[#404040] min-w-[536px] h-screen rounded-l-[20px] flex flex-col items-start gap-6">
              <SheetHeader className="p-0 flex gap-0">
                <SheetTitle className="p-0"></SheetTitle>
                <SheetDescription className="">
                  <OrderDetail />
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>

          <button className="bg-[#EF4444] px-2 py-2 rounded-[9999px] hover:bg-gray-800">
            <User className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
