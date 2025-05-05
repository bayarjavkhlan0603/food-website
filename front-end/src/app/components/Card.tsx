"use client";

import { Plus } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { FoodDetail } from "./FoodDetail";
import { useEffect, useState } from "react";
import axios from "axios";

type food = { image: string; name: string; price: string; ingredients: string };

export const Card = ({
  foodImage,
  foodName,
  foodPrice,
  foodIngredients,
  onclick,
}: {
  foodImage: string;
  foodName: string;
  foodPrice: string;
  foodIngredients: string;
  onclick: () => void;
}) => {
  return (
    <div className="relative">
      <button
        onClick={onclick}
        className="py-4 px-4 bg-white rounded-[9999px] absolute z-20 right-9 bottom-[145px] hover:bg-gray-800"
      >
        <Plus className="w-4 h-4 text-[#EF4444]" />
      </button>
      <Dialog>
        <DialogTrigger>
          <div className="py-4 px-4 bg-white max-w-[450px] max-h-[580px] flex flex-col gap-5 rounded-[20px]">
            <div>
              <img
                className="relative h-[210px] w-full object-cover rounded-[12px]"
                src={foodImage}
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between text-2xl font-semibold">
                <p className="text-[#EF4444]">{foodName}</p>
                <p>${foodPrice}</p>
              </div>
              <div className="text-[14px]">{foodIngredients}</div>
            </div>
          </div>
        </DialogTrigger>

        <DialogContent className="flex justify-center items-center max-w-[824px]! max-h-[412px]!">
          <FoodDetail
            foodImage={foodImage}
            foodName={foodName}
            foodPrice={foodPrice}
            foodIngredients={foodIngredients}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};
