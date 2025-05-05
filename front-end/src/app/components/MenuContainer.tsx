"use client";

import { useEffect, useState } from "react";
import { Card } from "./Card";
import axios from "axios";
import { json } from "stream/consumers";

type food = {
  image: string;
  name: string;
  price: string;
  ingredients: string;
};

export const MenuContainer = ({
  foodCategories,
  foods,
}: {
  foodCategories: string;
  foods: any;
}) => {
  const handleClick = (value: any) => {
    const card = JSON.parse(localStorage.getItem("foods") || "[]");
    const findEl = card.findIndex((val) => val._id === value._id);
    let updated;
    if (findEl !== -1) {
      card[findEl].quantity += 1;
      updated = [...card];
    } else {
      updated = [...card, value];
    }
    localStorage.setItem("foods", JSON.stringify(updated));
  };
  return (
    <div className="px-22 pb-12 flex flex-col gap-[54px]">
      <div className="text-white text-[30px] font-semibold">
        {foodCategories}
      </div>
      <div className="flex flex-wrap gap-9">
        {foods?.map((el: any, index: number) => {
          return (
            <Card
              onclick={() => {
                handleClick(el);
              }}
              key={index}
              foodImage={el.image}
              foodName={el.name}
              foodPrice={el.price}
              foodIngredients={el.ingredients}
            />
          );
        })}
      </div>
    </div>
  );
};
