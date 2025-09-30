"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Plus } from "lucide-react";

interface FoodItem {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
}

interface FoodCardProps {
  item: FoodItem;
  onAddClick: (item: FoodItem) => void;
}

export function FoodCard({ item, onAddClick }: FoodCardProps) {
  return (
    <Card className="bg-white rounded-lg overflow-hidden">
      <div className="relative">
        <img
          src={item.image || "/placeholder.svg"}
          alt={item.name}
          className="w-full h-32 object-cover"
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 bg-white/80 hover:bg-white"
        >
          <Heart className="h-4 w-4" />
        </Button>
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h4 className="text-red-500 font-medium text-sm">{item.name}</h4>
          <span className="text-gray-900 font-semibold text-sm">
            {item.price}
          </span>
        </div>
        <p className="text-gray-600 text-xs leading-relaxed mb-3">
          {item.description}
        </p>
        <Button
          onClick={() => onAddClick(item)}
          className="w-full bg-red-500 hover:bg-red-600 text-white"
          size="sm"
        >
          <Plus className="h-4 w-4 mr-1" />
          Add
        </Button>
      </CardContent>
    </Card>
  );
}
