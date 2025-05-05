"use client";

import { useEffect, useState } from "react";
import { GenreCarousel } from "./GenreCarousel";
import { MenuContainer } from "./MenuContainer";
import axios from "axios";

type food = {
  name: string;
  _id: string;
  foods: string;
};

export const HomePage = () => {
  const [foods, setFoods] = useState<food[]>();
  const getCarouselMovies = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/foodbyCategory`
      );
      setFoods(data.food);
    } catch (err: any) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    getCarouselMovies();
  }, []);

  console.log(foods);
  return (
    <div className="bg-[#404040]">
      <div>
        <img src="https://s3-alpha-sig.figma.com/img/8984/6312/a2a7c22f5fe9122b2bd6276cdd549c3e?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ZT8ix8PnvS5PNCzC9Xqfe8g8T2DgO7M5SL~Xr0wI2LjCQqEDVh0ErkR4plCjukQZu4NWzuG3uAlO3IiW~xj2TXJzkTt1hAsTXfb9fM~kZzBq1ovNXX-oiElqqZiRHq2iIuq3o1xOTwmqXwtHN-rGlsh0xYvc6POiPqbmE2FFeRw0zMovo8AeroEmkEa-HRDjTUURjnZtd-cbGpkL-fnOqf1pNGbT2Hk2iepnd9Qfu~uFj7-0PiEL-bgc7yLhrRHOgNH0UFIwABTkhSqyQrPmB9nrvjtByLDhc725MYKkRofHdYQAIhYPwIwuB4oCQwHbbZ8VAw2hyJl5AXZbdjAJiA__" />
      </div>
      <div className="flex flex-col gap-9 py-8 px-12 ">
        <div className="text-[30px] text-white font-semibold pl-10">
          Categories
        </div>
        <GenreCarousel />
      </div>
      {foods?.map((el) => {
        return (
          <MenuContainer
            key={el._id}
            foodCategories={el.name}
            foods={el.foods}
          />
        );
      })}
    </div>
  );
};
