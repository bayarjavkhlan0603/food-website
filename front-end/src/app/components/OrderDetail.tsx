"use client";

import { Minus, Plus, ShoppingCart, X } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useState } from "react";
import axios from "axios";
import { OrderCart } from "./OrderCart";

type food = { image: string; name: string; price: string; ingredients: string };

export const OrderDetail = () => {
  const [food, setFood] = useState([]);
  useEffect(() => {
    const storedFood = JSON.parse(localStorage.getItem("foods") || "[]");
    setFood(storedFood);
    window.addEventListener("storage", storedFood);
    return () => window.removeEventListener("storage", storedFood);
  }, []);
  console.log(food, "fooood");

  return (
    <div className="p-8 bg-[#404040] w-[535px] h-screen rounded-l-[20px] flex flex-col gap-6">
      <div className="text-[#FAFAFA] flex gap-3">
        <ShoppingCart className="w-6 h-6 font-semibold" />

        <div className="text-[20px] font-semibold">Order detail</div>
      </div>
      <div>
        <Tabs className="flex flex-col gap-6" defaultValue="order">
          <TabsList className="grid w-full grid-cols-2 bg-[#EF4444] rounded-[9999px]">
            <TabsTrigger className="rounded-[9999px]" value="Cart">
              Cart
            </TabsTrigger>
            <TabsTrigger className="rounded-[9999px]" value="Order">
              Order
            </TabsTrigger>
          </TabsList>

          <TabsContent className="" value="Cart">
            <Card className="p-4">
              <div className="flex flex-col gap-5">
                <CardTitle>My cart</CardTitle>
                <CardDescription className="flex flex-col gap-5">
                  {food &&
                    food?.map((el: any) => {
                      return (
                        <OrderCart
                          foodImage={el.image}
                          foodName={el.name}
                          foodIngredients={el.ingredients}
                          foodPrice={el.price}
                        />
                      );
                    })}

                  <div></div>
                  <div>
                    <button className="w-full py-2 px-8 border border-[#EF4444] rounded-[9999px] text-[14px] text-[#EF4444]">
                      Add food
                    </button>
                  </div>
                </CardDescription>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="Cart">
            <Card className="p-4">
              <div>
                <CardTitle>Payment info</CardTitle>
                <CardDescription>
                  Make changes to your account here. Click save when you're
                  done.
                </CardDescription>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="Order">
            <Card className="p-4">
              <div>
                <CardTitle>Order history</CardTitle>
                <CardDescription>
                  Change your password here. After saving, you'll be logged out.
                </CardDescription>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
