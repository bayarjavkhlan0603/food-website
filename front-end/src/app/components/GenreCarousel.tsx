"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import axios from "axios";

export const GenreCarousel = () => {
  const [carousel, setCarousel] = useState([]);
  const getCarouselMovies = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/category`
      );
      setCarousel(data.categories);
    } catch (err: any) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    getCarouselMovies();
  }, []);
  return (
    <div className="w-auto mx-12">
      <Carousel>
        <CarouselContent>
          <CarouselItem className="flex gap-2">
            {carousel?.map((value: any, index: number) => {
              return (
                <button
                  key={index}
                  className="py-1 px-5 text-[18px] rounded-full bg-white hover:bg-gray-500"
                >
                  {value.name}
                </button>
              );
            })}
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
};
