import { Checkbox } from "@/components/ui/checkbox";
import { ChevronLeft } from "lucide-react";
import React from "react";

export const SignUpPassword = () => {
  return (
    <div className="w-104 flex flex-col gap-6">
      <div className="border border-[#E4E4E7] py-2 px-2 rounded-md flex justify-center items-center w-[36px] h-[36px]">
        <ChevronLeft className="w-4 h-4 text-[#18181B]" />
      </div>

      <div>
        <p className="text-2xl text-black font-semibold">
          Create a strong password
        </p>
        <p className="text-[16px] text-[#71717A]">
          Create a strong password with letters, numbers.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <input
          type="password"
          placeholder="Password"
          className="border border-[#E4E4E7] w-full text-[#71717A] text-[14px] py-2 px-3 rounded-md"
        />
        <input
          type="password"
          placeholder="Confirm"
          className="border border-[#E4E4E7] w-full text-[#71717A] text-[14px] py-2 px-3 rounded-md"
        />
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Show password
          </label>
        </div>
      </div>
      <button className="bg-black h-[36px] px-8 text-[14px] rounded-md text-white">
        Let's Go
      </button>
      <button className="flex justify-center gap-3">
        <p className="text-[#71717A]">Don't have an account?</p>
        <p className="text-[#2563EB]">Sign up </p>
      </button>
    </div>
  );
};
