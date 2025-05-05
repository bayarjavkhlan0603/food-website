import { DropdownMenuShortcut } from "@/components/ui/dropdown-menu";
import { DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu";
import { Container, Facebook, Instagram, Minus } from "lucide-react";

export const Footer = () => {
  return (
    <div className="w-screen h-[755px] bg-black">
      <div className="pt-[60px]">
        <div className="w-full py-7 px-[98px] bg-[#EF4444]">
          <div className="flex text-[30px] text-white gap-[34px]">
            <p>Fresh fast delivered</p>
            <p>Fresh fast delivered</p>
            <p>Fresh fast delivered</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-26 px-22 pt-[76px] pb-[111px]">
        <div className="flex gap-55">
          <div>
            <img src="logo.svg" alt="" />
            <div>
              <div className="flex">
                <p className="text-white">Nom</p>
                <p className="text-[#EF4444]">Nom</p>
              </div>
              <div className="text-white">Swift delivery</div>
            </div>
          </div>
          <div className="flex gap-14">
            <div className="flex gap-28">
              <div className="flex flex-col gap-4">
                <p className="text-[#71717A]">NOMNOM</p>
                <a className="text-white" href="">
                  Home
                </a>
                <a className="text-white" href="">
                  Contact us
                </a>
                <a className="text-white" href="">
                  Delivery zone
                </a>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-[#71717A]">MENU</p>
                <a className="text-white" href="">
                  Appetizers
                </a>
                <a className="text-white" href="">
                  Salads
                </a>
                <a className="text-white" href="">
                  Pizzas
                </a>
                <a className="text-white" href="">
                  Lunch favorites
                </a>
                <a className="text-white" href="">
                  Main dishes
                </a>
              </div>
            </div>
            <div className="flex gap-28">
              <div className="flex flex-col gap-4">
                <p>MENU</p>
                <a className="text-white" href="">
                  Side dish
                </a>
                <a className="text-white" href="">
                  Brunch
                </a>
                <a className="text-white" href="">
                  Desserts
                </a>
                <a className="text-white" href="">
                  Beverages
                </a>
                <a className="text-white" href="">
                  Fish & Sea foods
                </a>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-[#71717A]">FOLLOW US</p>
                <div className="flex gap-4">
                  <a className="text-white" href="">
                    <Facebook />
                  </a>
                  <a className="text-white" href="">
                    <Instagram />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div></div>
          <div className="text-[#71717A] flex gap-12 py-8">
            <p>Copy right 2024 © Nomnom LLC</p>
            <p>Privacy policy</p>
            <p>Terms and conditoin</p>
            <p>Cookie policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};
